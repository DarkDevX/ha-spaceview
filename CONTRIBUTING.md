# Maintainer release flow

This repository contains the public HACS distribution. Development work stays in the maintainer's private fork until it has been reviewed and selected for publication.

1. Review and test the intended integration changes before they reach this repository.
2. Keep the integration directory and domain as neonplan3d, and preserve the component's bundled font and translation licenses.
3. Keep development history, Home Assistant configuration and state, house models, geometry, photos, credentials, exporter output, test output, and local paths out of this repository.
4. Open a pull request for every integration update. HACS validation and Home Assistant hassfest run before merge.
5. After the change is reviewed and merged to public main, open **Actions → Validate and package Space View → Run workflow**, enter the version from `custom_components/neonplan3d/manifest.json`, and run it from `main`. The workflow verifies the current release tags and manifest, builds the flat `spaceview.zip`, creates the GitHub release, and runs HACS validation against the attached asset.

Manual release runs refuse an existing tag or a version that is not newer than the fetched public releases. A legacy published-release event is accepted only for the exact current `main` commit and only while `spaceview.zip` is missing; it attaches the ZIP without changing the existing release title or notes. The workflow never overwrites an existing release asset. HACS installs the published release asset. The repository does not automatically merge or monitor another repository or the original project.
