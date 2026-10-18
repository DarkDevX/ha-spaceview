from __future__ import annotations

import hashlib
import subprocess
import tempfile
import unittest
import zipfile
from pathlib import Path

from scripts import build_spaceview


class SpaceViewArchiveTests(unittest.TestCase):
    def test_public_repository_source_tree_passes_privacy_scan(self) -> None:
        repository = Path(__file__).parents[1]
        listing = subprocess.run(
            ["git", "-C", str(repository), "ls-files", "--cached", "--others", "--exclude-standard", "-z"],
            check=True,
            capture_output=True,
        ).stdout
        files: dict[str, bytes] = {}
        for raw_path in listing.split(b"\0"):
            if not raw_path:
                continue
            relative = raw_path.decode("utf-8", errors="strict")
            if "__pycache__" in Path(relative).parts or relative.endswith(".pyc"):
                continue
            files[relative] = (repository / relative).read_bytes()

        build_spaceview._privacy_scan(files)

    def test_release_workflow_passes_the_validated_version_to_the_publish_job(self) -> None:
        workflow = (Path(__file__).parents[1] / ".github/workflows/validate.yml").read_text(encoding="utf-8")

        self.assertIn("release_version: ${{ steps.package.outputs.release_version }}", workflow)
        self.assertIn("RELEASE_VERSION: ${{ needs.prepare-release.outputs.release_version }}", workflow)

    def test_legacy_published_release_upload_does_not_overwrite_release_metadata_or_assets(self) -> None:
        workflow = (Path(__file__).parents[1] / ".github/workflows/validate.yml").read_text(encoding="utf-8")
        self.assertIn("gh release upload", workflow)
        self.assertIn("Attach the verified HACS asset without changing existing release metadata", workflow)

        legacy_attachment = workflow.split(
            "- name: Attach the verified HACS asset without changing existing release metadata", 1
        )[1].split("\n  validate-release-asset:", 1)[0]
        self.assertIn("if: github.event_name == 'release'", legacy_attachment)
        self.assertNotIn("softprops/action-gh-release", legacy_attachment)
        self.assertNotIn("name: Space View", legacy_attachment)
        self.assertNotIn("body:", legacy_attachment)
        self.assertNotIn("--clobber", legacy_attachment)

    def test_legacy_release_event_normalizes_tag_version_for_downstream_workflows(self) -> None:
        self.assertEqual(
            build_spaceview.normalize_release_version("release", "v1.19.5", "v1.19.5"),
            "1.19.5",
        )

    def test_legacy_release_event_rejects_a_version_that_disagrees_with_its_tag(self) -> None:
        with self.assertRaisesRegex(build_spaceview.ReleaseError, "does not match"):
            build_spaceview.normalize_release_version("release", "v1.19.5", "1.19.4")

    def test_archive_is_flat_dynamic_and_reproducible(self) -> None:
        files = {
            "LICENSE": b"MIT fixture license\n",
            "custom_components/neonplan3d/manifest.json": b'{"version":"1.19.5"}\n',
            "custom_components/neonplan3d/module.py": b"VALUE = 1\n",
            "custom_components/neonplan3d/frontend/app.js": b"const value = 1;\n",
        }
        with tempfile.TemporaryDirectory(dir=Path.cwd()) as temporary:
            first = Path(temporary) / "first.zip"
            second = Path(temporary) / "second.zip"

            first_count = build_spaceview.build_flat_archive(files, first)
            second_count = build_spaceview.build_flat_archive(files, second)

            self.assertEqual(first_count, 4)
            self.assertEqual(second_count, 4)
            self.assertEqual(hashlib.sha256(first.read_bytes()).digest(), hashlib.sha256(second.read_bytes()).digest())
            self.assertEqual(build_spaceview.verify_archive(files, first), 4)
            with zipfile.ZipFile(first) as archive:
                self.assertEqual(
                    sorted(archive.namelist()),
                    ["LICENSE", "frontend/app.js", "manifest.json", "module.py"],
                )

    def test_archive_verification_rejects_changed_bytes_and_private_addresses(self) -> None:
        files = {
            "LICENSE": b"MIT fixture license\n",
            "custom_components/neonplan3d/manifest.json": b'{"version":"1.19.5"}\n',
            "custom_components/neonplan3d/module.py": b"VALUE = 1\n",
        }
        with tempfile.TemporaryDirectory(dir=Path.cwd()) as temporary:
            archive_path = Path(temporary) / "spaceview.zip"
            build_spaceview.build_flat_archive(files, archive_path)
            tampered_files = dict(files)
            tampered_files["custom_components/neonplan3d/module.py"] = b"VALUE = 2\n"
            with self.assertRaisesRegex(build_spaceview.ReleaseError, "differs"):
                build_spaceview.verify_archive(tampered_files, archive_path)

        private_address_files = dict(files)
        private_address = ".".join(("192", "168", "10", "42")).encode("ascii")
        private_address_files["custom_components/neonplan3d/module.py"] = b"HOST = '" + private_address + b"'\n"
        with self.assertRaisesRegex(build_spaceview.ReleaseError, "Private IPv4"):
            build_spaceview._privacy_scan(private_address_files)

    def test_privacy_scan_still_rejects_windows_and_posix_home_paths(self) -> None:
        windows_path = b"C:" + bytes((92,)) + b"Users" + bytes((92,)) + b"fixture" + bytes((92,))
        home_path = b"/" + b"home" + b"/" + b"fixture" + b"/"
        macos_path = b"/" + b"Users" + b"/" + b"fixture" + b"/"

        for path in (windows_path, home_path, macos_path):
            with self.subTest(path=path), self.assertRaisesRegex(build_spaceview.ReleaseError, "Absolute local path"):
                build_spaceview._privacy_scan({"module.py": b"SOURCE = '" + path + b"'\n"})

    def test_new_release_must_be_monotonic_and_never_reuses_a_tag(self) -> None:
        tags = [("v1.19.4", "abc")]

        build_spaceview.require_new_release(
            "1.19.5",
            tags,
            "v1.19.4",
            event_name="workflow_dispatch",
            release_tag="v1.19.5",
        )
        with self.assertRaisesRegex(build_spaceview.ReleaseError, "newer"):
            build_spaceview.require_new_release(
                "1.19.3",
                tags,
                "v1.19.4",
                event_name="workflow_dispatch",
                release_tag="v1.19.3",
            )
        with self.assertRaisesRegex(build_spaceview.ReleaseError, "already has"):
            build_spaceview.require_new_release(
                "1.19.5",
                tags + [("v1.19.5", "def")],
                "v1.19.4",
                event_name="workflow_dispatch",
                release_tag="v1.19.5",
            )

    def test_tag_must_match_manifest_and_release_event_must_be_latest(self) -> None:
        with self.assertRaisesRegex(build_spaceview.ReleaseError, "exactly"):
            build_spaceview.require_new_release(
                "1.19.5",
                [("v1.19.5", "abc")],
                "v1.19.5",
                event_name="release",
                release_tag="v1.19.4",
            )
        with self.assertRaisesRegex(build_spaceview.ReleaseError, "newer"):
            build_spaceview.require_new_release(
                "1.19.5",
                [("v1.19.4", "abc"), ("v1.19.5", "def"), ("v1.19.6", "ghi")],
                "v1.19.5",
                event_name="release",
                release_tag="v1.19.5",
            )

    def test_manifest_version_must_match_the_requested_release(self) -> None:
        files = {"custom_components/neonplan3d/manifest.json": b'{"version":"1.19.5"}\n'}
        build_spaceview.require_manifest_version(files, "1.19.5")
        with self.assertRaisesRegex(build_spaceview.ReleaseError, "match the manifest"):
            build_spaceview.require_manifest_version(files, "1.19.6")

    def test_release_source_must_be_exact_public_main_not_an_arbitrary_ancestor(self) -> None:
        current_main = "a" * 40
        build_spaceview.require_public_main_source(
            "workflow_dispatch",
            "refs/heads/main",
            current_main,
            current_main,
            "v1.19.5",
        )
        with self.assertRaisesRegex(build_spaceview.ReleaseError, "current public main"):
            build_spaceview.require_public_main_source(
                "workflow_dispatch",
                "refs/heads/feature",
                current_main,
                current_main,
                "v1.19.5",
            )
        with self.assertRaisesRegex(build_spaceview.ReleaseError, "exact current public main"):
            build_spaceview.require_public_main_source(
                "release",
                "refs/tags/v1.19.5",
                "b" * 40,
                current_main,
                "v1.19.5",
            )

    def test_existing_release_asset_is_never_reused_or_overwritten(self) -> None:
        build_spaceview.require_release_asset_missing(["notes.txt"])
        with self.assertRaisesRegex(build_spaceview.ReleaseError, "refusing to overwrite"):
            build_spaceview.require_release_asset_missing(["spaceview.zip"])

    def test_archive_rejects_paths_outside_the_integration_and_root_license(self) -> None:
        files = {
            "LICENSE": b"MIT fixture license\n",
            "README.md": b"not an integration file\n",
        }

        with tempfile.TemporaryDirectory(dir=Path.cwd()) as temporary:
            with self.assertRaisesRegex(build_spaceview.ReleaseError, "Unexpected"):
                build_spaceview.build_flat_archive(files, Path(temporary) / "spaceview.zip")

        unsafe_files = {
            "LICENSE": b"MIT fixture license\n",
            "custom_components/neonplan3d/../README.md": b"path traversal fixture\n",
        }
        with tempfile.TemporaryDirectory(dir=Path.cwd()) as temporary:
            with self.assertRaisesRegex(build_spaceview.ReleaseError, "unsafe"):
                build_spaceview.build_flat_archive(unsafe_files, Path(temporary) / "spaceview.zip")

    def test_tracked_payload_ignores_unrelated_files_and_rejects_symlinks(self) -> None:
        with tempfile.TemporaryDirectory(dir=Path.cwd()) as temporary:
            repository = Path(temporary) / "fixture"
            repository.mkdir()
            git(repository, "init", "-b", "main")
            git(repository, "config", "user.name", "Fixture")
            git(repository, "config", "user.email", "fixture@example.invalid")
            (repository / "LICENSE").write_bytes(b"MIT fixture license\n")
            component = repository / "custom_components/neonplan3d"
            component.mkdir(parents=True)
            (component / "manifest.json").write_bytes(b'{"version":"1.19.5"}\n')
            (component / "module.py").write_bytes(b"VALUE = 1\n")
            (repository / "README.md").write_bytes(b"generic metadata outside the integration\n")
            git(repository, "add", "LICENSE", "custom_components/neonplan3d", "README.md")
            git(repository, "commit", "-m", "Synthetic fixture")
            commit = git(repository, "rev-parse", "HEAD")

            payload = build_spaceview._tracked_payload(commit, repository)
            self.assertEqual(
                set(payload),
                {
                    "LICENSE",
                    "custom_components/neonplan3d/manifest.json",
                    "custom_components/neonplan3d/module.py",
                },
            )

            symlink_blob = subprocess.run(
                ["git", "-C", str(repository), "hash-object", "-w", "--stdin"],
                input=b"module.py",
                check=True,
                capture_output=True,
            ).stdout.decode().strip()
            git(
                repository,
                "update-index",
                "--add",
                "--cacheinfo",
                f"120000,{symlink_blob},custom_components/neonplan3d/link.py",
            )
            git(repository, "commit", "-m", "Add synthetic symlink")
            symlink_commit = git(repository, "rev-parse", "HEAD")
            with self.assertRaisesRegex(build_spaceview.ReleaseError, "symlink"):
                build_spaceview._tracked_payload(symlink_commit, repository)


def git(repository: Path, *arguments: str) -> str:
    completed = subprocess.run(
        ["git", "-C", str(repository), *arguments],
        check=True,
        capture_output=True,
        text=True,
    )
    return completed.stdout.strip()


if __name__ == "__main__":
    unittest.main()
