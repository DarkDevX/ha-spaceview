"""Load bundled NextFloor furniture packs into the Space View pack format."""

from __future__ import annotations

from functools import lru_cache
import json
import logging
from pathlib import Path
from typing import Any

from .packs import MAX_PACK_SIZE, PackError, validate_payload

_LOGGER = logging.getLogger(__name__)
_PACK_DIR = Path(__file__).parent / "data" / "nextfloor"
_ITEM_FIELDS = {
    "id",
    "name",
    "size",
    "electric",
    "mount",
    "wall_y",
    "surface",
    "vehicle",
    "hole",
    "light",
    "parts",
    "symbol",
    "group",
    "room",
    "tags",
    "family",
    "variant",
}
_PART_FIELDS = {
    "shape",
    "x",
    "z",
    "w",
    "d",
    "y",
    "h",
    "color",
    "top",
    "edges",
    "glow",
    "screen",
    "tx",
    "tz",
    "tw",
    "td",
    "axis",
    "rot",
    "fix",
    "advent",
    "stations",
    "exp",
    "n",
}


def _spaceview_payload(source: Any) -> dict[str, Any]:
    """Keep the static furniture model and map it to Space View's validated schema."""
    if not isinstance(source, dict) or source.get("format") != "nfpack" or source.get("version") != 1:
        raise PackError("not_a_pack", "unsupported bundled NextFloor pack")
    if source.get("publisher") != "NextFloor":
        raise PackError("invalid_content", "unexpected bundled pack publisher")
    if not isinstance(source.get("items"), list):
        raise PackError("invalid_content", "bundled pack items must be a list")

    items: list[dict[str, Any]] = []
    for item in source["items"]:
        if not isinstance(item, dict):
            raise PackError("invalid_content", "bundled pack item must be an object")
        converted = {key: item[key] for key in _ITEM_FIELDS if key in item}
        if isinstance(item.get("parts"), list):
            converted["parts"] = [
                {key: part[key] for key in _PART_FIELDS if key in part}
                for part in item["parts"]
                if isinstance(part, dict)
            ]
            if len(converted["parts"]) != len(item["parts"]):
                raise PackError("invalid_content", f"{item.get('id', 'item')}: malformed part")
        items.append(converted)

    payload = {
        "format": "fp3dpack",
        "version": 1,
        "id": source.get("id"),
        "name": source.get("name"),
        "publisher": "NextFloor",
        "licensee": None,
        "release": source.get("release", 1),
        "description": source.get("description", ""),
        "features": [],
        "items": items,
    }
    return validate_payload(payload)


@lru_cache(maxsize=1)
def bundled_nextfloor_packs() -> list[dict[str, Any]]:
    """Return the validated, static models shipped with this integration release."""
    packs: list[dict[str, Any]] = []
    for path in sorted(_PACK_DIR.glob("nextfloor.*.json")):
        try:
            text = path.read_text(encoding="utf-8")
            if len(text) > MAX_PACK_SIZE:
                raise PackError("too_large")
            packs.append({**_spaceview_payload(json.loads(text)), "bundled": True})
        except (OSError, ValueError, RecursionError, PackError) as err:
            _LOGGER.error("Bundled NextFloor pack %s is unavailable: %s", path.name, err)
    return packs
