"""Build and verify the deterministic flat HACS release archive."""

from __future__ import annotations

import argparse
import hashlib
import ipaddress
import json
import os
import re
import subprocess
import sys
import urllib.error
import urllib.parse
import urllib.request
import zipfile
from pathlib import PurePosixPath
from pathlib import Path

REPOSITORY = "DarkDevX/ha-spaceview"
REPOSITORY_URL = f"https://github.com/{REPOSITORY}"
GIT_URL = f"{REPOSITORY_URL}.git"
API_BASE = f"https://api.github.com/repos/{REPOSITORY}"
ROOT_COMMIT = "7a2720083ccc97e40aa801ce75197089af55995a"
COMPONENT_PATH = "custom_components/neonplan3d"
COMPONENT_PREFIX = f"{COMPONENT_PATH}/"
VERSION_PATTERN = re.compile(r"^(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$")
TOKEN_PATTERN = re.compile(rb"\b(?:gh[pousr]_[A-Za-z0-9_]{30,}|github_pat_[A-Za-z0-9_]{22,})\b")
AWS_PATTERN = re.compile(rb"\bAKIA[0-9A-Z]{16}\b")
PRIVATE_KEY_PATTERN = re.compile(rb"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----")
LOCAL_PATH_PATTERN = re.compile(
    rb"(?i)(?:"
    + rb"[A-Z]:"
    + bytes((92, 92))
    + rb"(?:Users|Codex)"
    + bytes((92, 92))
    + rb"|"
    + b"/" + b"home" + b"/" + rb"[^/\s]+/"
    + rb"|"
    + b"/" + b"Users" + b"/" + rb"[^/\s]+/"
    + rb")"
)


class ReleaseError(RuntimeError):
    """Raised when a release cannot be safely prepared."""


def run_git(*arguments: str, check: bool = True) -> subprocess.CompletedProcess[bytes]:
    completed = subprocess.run(["git", *arguments], check=False, capture_output=True)
    if check and completed.returncode != 0:
        detail = completed.stderr.decode("utf-8", errors="replace").strip()[:400]
        raise ReleaseError(f"git {arguments[0]} failed: {detail}")
    return completed


def parse_version(value: str) -> tuple[int, int, int]:
    match = VERSION_PATTERN.fullmatch(value)
    if not match:
        raise ReleaseError("Release version must be stable semantic MAJOR.MINOR.PATCH.")
    return tuple(int(part) for part in match.groups())  # type: ignore[return-value]


def parse_tag(tag: str) -> tuple[int, int, int] | None:
    if not tag.startswith("v"):
        return None
    try:
        return parse_version(tag[1:])
    except ReleaseError as error:
        raise ReleaseError(f"Public version tag {tag!r} is not stable semantic MAJOR.MINOR.PATCH.") from error


def parse_remote_tags(data: bytes) -> list[tuple[str, str]]:
    tags: list[tuple[str, str]] = []
    for line in data.decode("utf-8", errors="strict").splitlines():
        if not line:
            continue
        try:
            commit, ref = line.split("\t", 1)
        except ValueError as error:
            raise ReleaseError("Fresh public tag query returned an invalid result.") from error
        if not ref.startswith("refs/tags/"):
            raise ReleaseError("Fresh public tag query returned an unexpected ref.")
        tags.append((ref.removeprefix("refs/tags/"), commit))
    return tags


def fetch_latest_release_tag() -> str | None:
    request = urllib.request.Request(
        f"{API_BASE}/releases/latest",
        headers={
            "Accept": "application/vnd.github+json",
            "User-Agent": "spaceview-release-builder",
            "X-GitHub-Api-Version": "2022-11-28",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            payload = json.loads(response.read())
    except urllib.error.HTTPError as error:
        if error.code == 404:
            return None
        raise ReleaseError(f"Could not fetch latest public release metadata (HTTP {error.code}).") from error
    except (OSError, TimeoutError, json.JSONDecodeError) as error:
        raise ReleaseError("Could not fetch latest public release metadata.") from error
    tag = payload.get("tag_name") if isinstance(payload, dict) else None
    if not isinstance(tag, str):
        raise ReleaseError("Latest public release metadata does not contain a tag.")
    return tag


def fetch_release_asset_names(tag: str) -> list[str]:
    encoded_tag = urllib.parse.quote(tag, safe="")
    request = urllib.request.Request(
        f"{API_BASE}/releases/tags/{encoded_tag}",
        headers={
            "Accept": "application/vnd.github+json",
            "User-Agent": "spaceview-release-builder",
            "X-GitHub-Api-Version": "2022-11-28",
        },
    )
    try:
        with urllib.request.urlopen(request, timeout=20) as response:
            payload = json.loads(response.read())
    except (urllib.error.HTTPError, OSError, TimeoutError, json.JSONDecodeError) as error:
        raise ReleaseError("Could not verify the existing published release assets.") from error
    assets = payload.get("assets") if isinstance(payload, dict) else None
    if not isinstance(assets, list) or any(not isinstance(item, dict) for item in assets):
        raise ReleaseError("Published release metadata contains an invalid assets list.")
    names = [item.get("name") for item in assets]
    if any(not isinstance(name, str) for name in names):
        raise ReleaseError("Published release metadata contains an invalid asset name.")
    return names


def require_release_asset_missing(asset_names: list[str]) -> None:
    if "spaceview.zip" in asset_names:
        raise ReleaseError("The published release already contains spaceview.zip; refusing to overwrite it.")


def require_public_main_source(
    event_name: str,
    github_ref: str,
    commit: str,
    main_commit: str,
    release_tag: str,
) -> None:
    if event_name == "workflow_dispatch":
        if github_ref != "refs/heads/main" or commit != main_commit:
            raise ReleaseError("Manual release packaging must run from the exact current public main commit.")
    elif event_name == "release":
        if github_ref != f"refs/tags/{release_tag}" or commit != main_commit:
            raise ReleaseError("Published release must point to the exact current public main commit.")
    else:
        raise ReleaseError("Only main dispatch or the exact published main release is supported.")


def fetch_public_release_state() -> tuple[list[tuple[str, str]], str | None]:
    result = subprocess.run(["git", "ls-remote", "--tags", "--refs", GIT_URL], check=False, capture_output=True)
    if result.returncode != 0:
        detail = result.stderr.decode("utf-8", errors="replace").strip()[:300]
        raise ReleaseError(f"Could not fetch current public release tags: {detail}")
    tags = parse_remote_tags(result.stdout)
    latest = fetch_latest_release_tag()
    if latest and latest not in {name for name, _ in tags}:
        raise ReleaseError("Latest public release tag is missing from the freshly fetched tag list.")
    return tags, latest


def require_new_release(
    version: str,
    tags: list[tuple[str, str]],
    latest_release_tag: str | None,
    *,
    event_name: str,
    release_tag: str,
) -> None:
    candidate = parse_version(version)
    if release_tag != f"v{version}":
        raise ReleaseError("Release tag must be exactly v<manifest version>.")
    tag_versions = [(parsed, name) for name, _ in tags if (parsed := parse_tag(name)) is not None]
    all_existing = list(tag_versions)
    if latest_release_tag:
        latest = parse_tag(latest_release_tag)
        if latest is None:
            raise ReleaseError("Latest public release does not have a stable semantic tag.")
        all_existing.append((latest, latest_release_tag))
    matching_tags = [name for name, _ in tags if name == release_tag]
    if event_name == "workflow_dispatch":
        if matching_tags:
            raise ReleaseError("This release version already has a public Git tag; refusing to reuse it.")
        if all_existing and candidate <= max(all_existing)[0]:
            raise ReleaseError("Release version must be newer than every fetched public release and tag.")
    elif event_name == "release":
        if matching_tags != [release_tag]:
            raise ReleaseError("Published release tag is missing from the fresh tag list.")
        if latest_release_tag != release_tag:
            raise ReleaseError("Published release is not the current latest release; refusing to reuse it.")
        if any(tag_version > candidate for tag_version, _ in tag_versions):
            raise ReleaseError("A newer public release tag exists; refusing to package an older release.")
    else:
        raise ReleaseError("Only manual main-branch dispatch or the existing published-release event is supported.")


def verify_repo_identity() -> None:
    origin = run_git("remote", "get-url", "origin").stdout.decode("utf-8", errors="strict").strip()
    normalized = origin.removesuffix(".git").rstrip("/")
    if normalized != REPOSITORY_URL:
        raise ReleaseError("Repository identity mismatch; expected the independent DarkDevX/ha-spaceview repository.")
    roots = run_git("rev-list", "--max-parents=0", "HEAD").stdout.decode().splitlines()
    if roots != [ROOT_COMMIT]:
        raise ReleaseError("Public independent repository root history did not match the recorded distribution root.")


def _tracked_payload(commit: str, repository: Path | None = None) -> dict[str, bytes]:
    git_prefix = ["-C", str(repository)] if repository else []
    output = run_git(*git_prefix, "ls-tree", "-rz", "--full-tree", "-r", commit, "--", "LICENSE", COMPONENT_PATH).stdout
    files: dict[str, bytes] = {}
    for record in output.split(b"\0"):
        if not record:
            continue
        header, raw_path = record.split(b"\t", 1)
        mode, object_type, object_id = header.decode("ascii").split(" ", 2)
        try:
            path = raw_path.decode("utf-8", errors="strict")
        except UnicodeDecodeError as error:
            raise ReleaseError("Public source contains a path that is not valid UTF-8.") from error
        _validate_package_path(path)
        if mode == "120000":
            raise ReleaseError(f"HACS package source contains a symlink: {path}.")
        if mode not in {"100644", "100755"} or object_type != "blob":
            raise ReleaseError(f"HACS package source contains a non-regular file: {path}.")
        if path in files:
            raise ReleaseError(f"Duplicate path in public package source: {path}.")
        files[path] = run_git(*git_prefix, "cat-file", "blob", object_id).stdout
    if "LICENSE" not in files or f"{COMPONENT_PATH}/manifest.json" not in files:
        raise ReleaseError("Public package source must track the integration manifest and root LICENSE.")
    if not any(path.startswith(COMPONENT_PREFIX) for path in files):
        raise ReleaseError("Public integration source is empty.")
    return files


def _privacy_scan(files: dict[str, bytes]) -> None:
    for path, content in files.items():
        if TOKEN_PATTERN.search(content) or AWS_PATTERN.search(content) or PRIVATE_KEY_PATTERN.search(content):
            raise ReleaseError(f"Generic secret scan failed for public package path {path}.")
        if LOCAL_PATH_PATTERN.search(content):
            raise ReleaseError(f"Absolute local path found in public package path {path}.")
        for match in re.finditer(rb"\b(?:\d{1,3}\.){3}\d{1,3}\b", content):
            try:
                address = ipaddress.ip_address(match.group().decode("ascii"))
            except ValueError:
                continue
            if address.is_private and not address.is_loopback:
                raise ReleaseError(f"Private IPv4 address found in public package path {path}.")


def require_manifest_version(files: dict[str, bytes], requested_version: str) -> None:
    try:
        manifest = json.loads(files[f"{COMPONENT_PATH}/manifest.json"])
    except (KeyError, json.JSONDecodeError) as error:
        raise ReleaseError("Public manifest.json is missing or invalid.") from error
    manifest_version = manifest.get("version") if isinstance(manifest, dict) else None
    if not isinstance(manifest_version, str) or manifest_version != requested_version:
        raise ReleaseError("Explicit release version must exactly match the manifest version.")


def normalize_release_version(event_name: str, release_tag: str, requested_version: str) -> str:
    if event_name == "workflow_dispatch":
        return requested_version
    if event_name == "release":
        if not release_tag.startswith("v"):
            raise ReleaseError("Published release tag must start with v and contain a stable semantic version.")
        version = release_tag[1:]
        parse_version(version)
        if requested_version not in {"", release_tag, version}:
            raise ReleaseError("Published release version does not match its tag.")
        return version
    raise ReleaseError("Only manual dispatch or the existing published-release event is supported.")


def build_flat_archive(files: dict[str, bytes], destination: Path) -> int:
    if "LICENSE" not in files:
        raise ReleaseError("Root LICENSE is required in the HACS archive.")
    archive_files: dict[str, bytes] = {"LICENSE": files["LICENSE"]}
    for path, content in files.items():
        if path == "LICENSE":
            continue
        _validate_package_path(path)
        relative = PurePosixPath(path).relative_to(COMPONENT_PATH).as_posix()
        if not relative or relative.startswith("../") or relative == "LICENSE":
            raise ReleaseError(f"Unsafe or conflicting HACS archive entry name: {relative}.")
        archive_files[relative] = content
    if len(archive_files) != len(files):
        raise ReleaseError("HACS archive contains duplicate flat entry names.")
    destination.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(destination, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        for name in sorted(archive_files):
            info = zipfile.ZipInfo(name, date_time=(2020, 1, 1, 0, 0, 0))
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o100644 << 16
            archive.writestr(info, archive_files[name], compress_type=zipfile.ZIP_DEFLATED, compresslevel=9)
    return len(archive_files)


def verify_archive(files: dict[str, bytes], archive_path: Path) -> int:
    expected = build_expected_archive_files(files)
    with zipfile.ZipFile(archive_path) as archive:
        names = archive.namelist()
        if len(names) != len(set(names)) or set(names) != set(expected):
            raise ReleaseError("HACS ZIP entries do not match the dynamic component file list.")
        if archive.testzip() is not None:
            raise ReleaseError("HACS ZIP failed its CRC check.")
        for name, content in expected.items():
            info = archive.getinfo(name)
            if info.date_time != (2020, 1, 1, 0, 0, 0) or (info.external_attr >> 16) != 0o100644:
                raise ReleaseError(f"HACS ZIP entry metadata is not deterministic: {name}.")
            if archive.read(name) != content:
                raise ReleaseError(f"HACS ZIP entry differs from the reviewed public commit: {name}.")
    return len(expected)


def build_expected_archive_files(files: dict[str, bytes]) -> dict[str, bytes]:
    expected = {"LICENSE": files["LICENSE"]}
    for path, content in files.items():
        if path != "LICENSE":
            _validate_package_path(path)
            name = PurePosixPath(path).relative_to(COMPONENT_PATH).as_posix()
            if name in expected:
                raise ReleaseError(f"Duplicate flat HACS ZIP entry: {name}.")
            expected[name] = content
    return expected


def _validate_package_path(path: str) -> None:
    if path == "LICENSE":
        return
    pure = PurePosixPath(path)
    if (
        not path.startswith(COMPONENT_PREFIX)
        or pure.is_absolute()
        or "\\" in path
        or ":" in path
        or any(part in {"", ".", ".."} for part in pure.parts)
    ):
        raise ReleaseError(f"Unexpected or unsafe HACS package path: {path}.")


def prepare_release() -> tuple[int, str]:
    event_name = os.environ.get("GITHUB_EVENT_NAME", "")
    github_ref = os.environ.get("GITHUB_REF", "")
    github_sha = os.environ.get("GITHUB_SHA", "").lower()
    release_tag = os.environ.get("RELEASE_TAG", "")
    requested_version = os.environ.get("RELEASE_VERSION", "")
    requested_version = normalize_release_version(event_name, release_tag, requested_version)
    if event_name == "workflow_dispatch":
        if not release_tag and requested_version:
            release_tag = f"v{requested_version}"
    elif event_name != "release":
        raise ReleaseError("Release packaging is limited to manual dispatch or the existing release event.")
    if not re.fullmatch(r"[0-9a-f]{40}", github_sha) or run_git("rev-parse", "HEAD").stdout.decode().strip() != github_sha:
        raise ReleaseError("The checked-out source must match the exact GitHub event commit.")

    verify_repo_identity()
    commit = run_git("rev-parse", "HEAD").stdout.decode().strip()
    run_git("fetch", "--no-tags", "origin", "refs/heads/main:refs/remotes/origin/main")
    main_commit = run_git("rev-parse", "refs/remotes/origin/main").stdout.decode().strip()
    require_public_main_source(event_name, github_ref, commit, main_commit, release_tag)

    files = _tracked_payload(commit)
    _privacy_scan(files)
    require_manifest_version(files, requested_version)
    tags, latest = fetch_public_release_state()
    require_new_release(
        requested_version,
        tags,
        latest,
        event_name=event_name,
        release_tag=release_tag,
    )
    if event_name == "release":
        require_release_asset_missing(fetch_release_asset_names(release_tag))
    archive_path = Path("spaceview.zip")
    entry_count = build_flat_archive(files, archive_path)
    verify_archive(files, archive_path)
    archive_hash = hashlib.sha256(archive_path.read_bytes()).hexdigest()
    print(f"Prepared {entry_count} deterministic flat HACS archive entries.")
    print(f"Archive SHA-256: {archive_hash}")
    print(f"Public commit: {commit}")
    return entry_count, archive_hash


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("command", choices=["prepare"])
    parser.parse_args(argv)
    try:
        prepare_release()
        output_path = os.environ.get("GITHUB_OUTPUT")
        if output_path:
            event_name = os.environ.get("GITHUB_EVENT_NAME", "")
            release_tag = os.environ.get("RELEASE_TAG", "")
            version = normalize_release_version(event_name, release_tag, os.environ.get("RELEASE_VERSION", ""))
            with Path(output_path).open("a", encoding="utf-8", newline="\n") as output:
                output.write(f"release_tag={release_tag}\n")
                output.write(f"release_version={version}\n")
    except (ReleaseError, OSError, ValueError, json.JSONDecodeError) as error:
        print(f"Release preparation stopped safely: {error}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
