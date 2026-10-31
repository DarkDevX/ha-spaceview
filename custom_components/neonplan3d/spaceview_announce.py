"""Open Edition announcement fallback for Space View."""

from __future__ import annotations

import logging
from typing import Any
from urllib.parse import quote
import uuid

from homeassistant.core import HomeAssistant, ServiceCall, ServiceResponse, SupportsResponse
from homeassistant.exceptions import HomeAssistantError, ServiceValidationError
from homeassistant.helpers import area_registry as ar
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.util.json import JsonValueType
import voluptuous as vol

from .announce import SERVICE_ANNOUNCE, module_ready
from .const import DOMAIN, SIGNAL_SPACEVIEW_ANNOUNCE
from .locate.scanners import device_area_id

_LOGGER = logging.getLogger(__name__)
SERVICE_SPACEVIEW_ANNOUNCE = "spaceview_announce"
MEDIA_ANNOUNCE = 1048576

SPACEVIEW_ANNOUNCE_SCHEMA = vol.Schema(
    {
        vol.Required("message"): vol.All(cv.string, vol.Length(min=1, max=300)),
        vol.Optional("rooms", default=[]): vol.All(cv.ensure_list, [vol.All(cv.string, vol.Length(max=80))]),
        vol.Optional("floor"): vol.All(cv.string, vol.Length(max=80)),
        vol.Optional("on_screens", default=False): cv.boolean,
        vol.Optional("screens", default=[]): vol.All(cv.ensure_list, [vol.All(cv.string, vol.Length(max=60))]),
    }
)


def _same(text: str, *names: Any) -> bool:
    """Compare a target with a room, floor, alias, or Home Assistant area name."""
    key = text.strip().casefold()
    return any(isinstance(name, str) and name.strip().casefold() == key for name in names)


def zones_of(floor: dict[str, Any]) -> list[dict[str, Any]]:
    """Rooms and outdoor areas that have an area and a usable outline."""
    outdoor = [
        area
        for area in floor.get("outdoor") or []
        if area.get("area_id")
        and len(area.get("points") or []) >= 3
        and area.get("type") not in ("hedge", "fence", "pergola")
    ]
    rooms = [room for room in floor.get("rooms") or [] if len(room.get("points") or []) >= 3]
    return [*rooms, *outdoor]


def target_rooms(
    building: dict[str, Any], rooms: list[str], floor: str | None, area_names: dict[str, str]
) -> tuple[list[tuple[dict[str, Any], dict[str, Any]]], list[str]]:
    """Resolve named rooms (or every room on a named floor) and return unmatched targets separately."""
    floors = building.get("floors") or []
    if floor:
        floors = [item for item in floors if _same(floor, item.get("name"), item.get("id"))]
        if not floors:
            return [], [floor]

    all_rooms = [(level, room) for level in floors for room in zones_of(level)]
    if not rooms:
        return all_rooms, []

    matched: list[tuple[dict[str, Any], dict[str, Any]]] = []
    missing: list[str] = []
    for target in rooms:
        hits = [
            (level, room)
            for level, room in all_rooms
            if _same(
                target,
                room.get("name"),
                room.get("id"),
                room.get("area_id"),
                area_names.get(room.get("area_id") or ""),
                *(room.get("aliases") or []),
            )
        ]
        if not hits:
            missing.append(target)
        for hit in hits:
            if hit not in matched:
                matched.append(hit)
    return matched, missing


def _inside(x: float, z: float, points: list[Any]) -> bool:
    """Whether an item point falls inside a room outline."""
    inside = False
    j = len(points) - 1
    for i, (xi, zi) in enumerate(points):
        xj, zj = points[j]
        if (zi > z) != (zj > z) and x < (xj - xi) * (z - zi) / (zj - zi) + xi:
            inside = not inside
        j = i
    return inside


def placed_players(floor: dict[str, Any], room: dict[str, Any]) -> list[str]:
    """Media players whose plan positions are inside a room, with duplicates removed."""
    points = room.get("points") or []
    if len(points) < 3:
        return []

    found: list[str] = []
    for item in floor.get("placements") or []:
        entity_id = item.get("entity_id") or ""
        if entity_id.startswith("media_player.") and _inside(item.get("x", 0), item.get("z", 0), points):
            found.append(entity_id)
    for item in floor.get("furniture") or []:
        entity_id = item.get("entity") or ""
        if entity_id.startswith("media_player.") and _inside(item.get("x", 0), item.get("z", 0), points):
            found.append(entity_id)
    return list(dict.fromkeys(found))


def _area_players(hass: HomeAssistant, area_id: str | None) -> list[str]:
    """Media players assigned to a room's Home Assistant area, including device-level areas."""
    if not area_id:
        return []
    entities = er.async_get(hass)
    devices = dr.async_get(hass)
    found: list[str] = []
    for state in hass.states.async_all("media_player"):
        entry = entities.async_get(state.entity_id)
        if entry is None or entry.hidden_by:
            continue
        assigned_area = entry.area_id
        if assigned_area is None and entry.device_id:
            device = devices.async_get(entry.device_id)
            assigned_area = device_area_id(hass, device) if device else None
        if assigned_area == area_id:
            found.append(state.entity_id)
    return found


def _pick_player(hass: HomeAssistant, entity_ids: list[str]) -> str | None:
    """Prefer announce-capable Echos, then speakers, and never select a TV or unavailable player."""
    entities = er.async_get(hass)
    ranked: list[tuple[int, str]] = []
    for entity_id in dict.fromkeys(entity_ids):
        state = hass.states.get(entity_id)
        if state is None or state.state in ("unknown", "unavailable") or state.attributes.get("device_class") == "tv":
            continue
        entry = entities.async_get(entity_id)
        platform = entry.platform if entry else ""
        if platform in ("alexa_devices", "alexa_media"):
            rank = 0
        elif state.attributes.get("device_class") == "speaker":
            rank = 1
        else:
            rank = 2
        ranked.append((rank, entity_id))
    return min(ranked)[1] if ranked else None


def choose_speaker(hass: HomeAssistant, floor: dict[str, Any], room: dict[str, Any]) -> str | None:
    """Use an available player placed in the room, else one assigned to its Home Assistant area."""
    placed = _pick_player(hass, placed_players(floor, room))
    return placed or _pick_player(hass, _area_players(hass, room.get("area_id")))


def _player_platform(hass: HomeAssistant, entity_id: str) -> str | None:
    entry = er.async_get(hass).async_get(entity_id)
    return entry.platform if entry else None


def _echo_announce_entity(hass: HomeAssistant, player: str) -> str | None:
    """Find Home Assistant Alexa Devices' native announce entity on the same Echo."""
    entry = er.async_get(hass).async_get(player)
    if entry is None or entry.platform != "alexa_devices" or not entry.device_id:
        return None
    for other in er.async_entries_for_device(er.async_get(hass), entry.device_id):
        if (
            other.entity_id.startswith("notify.")
            and (other.translation_key == "announce" or other.entity_id.endswith("_announce"))
            and hass.states.get(other.entity_id) is not None
        ):
            return other.entity_id
    return None


def _satellite_for_player(hass: HomeAssistant, player: str) -> str | None:
    """Find an Assist satellite attached to a selected media player."""
    entry = er.async_get(hass).async_get(player)
    if entry is None or not entry.device_id:
        return None
    for other in er.async_entries_for_device(er.async_get(hass), entry.device_id):
        if other.entity_id.startswith("assist_satellite.") and hass.states.get(other.entity_id) is not None:
            return other.entity_id
    return None


def _tts_entity(hass: HomeAssistant) -> str | None:
    return next((state.entity_id for state in hass.states.async_all("tts")), None)


async def _say(hass: HomeAssistant, player: str, message: str) -> None:
    """Use a speaker's native announcement service when available, then fall back to Home Assistant TTS."""
    if _player_platform(hass, player) == "alexa_media" and hass.services.has_service("notify", "alexa_media"):
        await hass.services.async_call(
            "notify", "alexa_media", {"message": message, "target": [player], "data": {"type": "announce"}}
        )
        return

    if (notify := _echo_announce_entity(hass, player)) and hass.services.has_service("notify", "send_message"):
        await hass.services.async_call("notify", "send_message", {"entity_id": notify, "message": message})
        return

    if (satellite := _satellite_for_player(hass, player)) and hass.services.has_service("assist_satellite", "announce"):
        await hass.services.async_call("assist_satellite", "announce", {"entity_id": satellite, "message": message})
        return

    tts = _tts_entity(hass)
    if tts is None:
        raise HomeAssistantError(f"No text-to-speech entity is available for {player}")
    state = hass.states.get(player)
    features = int(state.attributes.get("supported_features") or 0) if state else 0
    if features & MEDIA_ANNOUNCE:
        await hass.services.async_call(
            "media_player",
            "play_media",
            {
                "entity_id": player,
                "media_content_id": f"media-source://tts/{tts}?message={quote(message)}&cache=true",
                "media_content_type": "music",
                "announce": True,
            },
        )
        return
    await hass.services.async_call(
        "tts", "speak", {"entity_id": tts, "media_player_entity_id": player, "message": message, "cache": True}
    )


async def async_spaceview_announce(hass: HomeAssistant, call: ServiceCall) -> ServiceResponse:
    """Use the approved Supporter Pass module when present; otherwise announce through Space View's native path."""
    data = hass.data[DOMAIN]
    if module_ready(data.packs):
        return await hass.services.async_call(
            DOMAIN, SERVICE_ANNOUNCE, dict(call.data), blocking=True, return_response=True
        )

    message = call.data["message"]
    screens = call.data["screens"]
    to_screens = call.data["on_screens"] or bool(screens)
    screen_only = to_screens and not call.data["rooms"] and not call.data.get("floor")
    if to_screens:
        async_dispatcher_send(
            hass,
            SIGNAL_SPACEVIEW_ANNOUNCE,
            {"id": uuid.uuid4().hex[:12], "message": message, "screens": screens},
        )
    if screen_only:
        return {"speakers": [], "no_speaker": [], "failed": [], "screens": True}

    area_names = {area.id: area.name for area in ar.async_get(hass).async_list_areas()}
    rooms, missing = target_rooms(data.building, call.data["rooms"], call.data.get("floor"), area_names)
    if missing:
        raise ServiceValidationError(f"No room or floor called {', '.join(missing)} in the plan")

    selected: dict[str, str] = {}
    no_speaker: list[JsonValueType] = []
    for floor, room in rooms:
        player = choose_speaker(hass, floor, room)
        if player is None:
            no_speaker.append(room.get("name", ""))
        else:
            selected.setdefault(player, room.get("name", ""))

    failed: dict[str, str] = {}
    for player in selected:
        try:
            await _say(hass, player, message)
        except HomeAssistantError as err:
            _LOGGER.warning("Space View announcement on %s failed: %s", player, err)
            failed[player] = str(err)

    if selected and len(failed) == len(selected) and not to_screens:
        raise HomeAssistantError(f"The announcement went out nowhere: {next(iter(failed.values()))}")
    if no_speaker:
        _LOGGER.warning("Space View announcement found no available speaker in: %s", ", ".join(map(str, no_speaker)))
    response: ServiceResponse = {
        "speakers": [player for player in selected if player not in failed],
        "no_speaker": no_speaker,
        "failed": list(failed),
        "screens": to_screens,
    }
    return response


def async_setup_spaceview_announce(hass: HomeAssistant) -> None:
    """Register the Open Edition action without replacing the licensed upstream action."""

    async def handle(call: ServiceCall) -> ServiceResponse:
        return await async_spaceview_announce(hass, call)

    hass.services.async_register(
        DOMAIN,
        SERVICE_SPACEVIEW_ANNOUNCE,
        handle,
        schema=SPACEVIEW_ANNOUNCE_SCHEMA,
        supports_response=SupportsResponse.OPTIONAL,
    )


def async_unload_spaceview_announce(hass: HomeAssistant) -> None:
    """Unregister the native action when the integration unloads."""
    hass.services.async_remove(DOMAIN, SERVICE_SPACEVIEW_ANNOUNCE)
