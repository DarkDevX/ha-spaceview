# Maintainer release flow

This repository contains the public HACS distribution. Development work stays in the maintainer's private fork until it has been reviewed and selected for publication.

1. Review and test the intended changes in the private development fork.
2. Copy only the reviewed neonplan3d integration files into this repository. Keep the integration directory and domain as neonplan3d, and preserve the component's bundled font and translation licenses.
3. Keep private repository history and local Home Assistant configuration, state, house models, geometry, photos, credentials, exporter output, test output, and local paths out of this repository.
4. Update custom_components/neonplan3d/manifest.json with the next integration version. Open a pull request so the HACS validation and Home Assistant hassfest checks run.
5. After the reviewed change is merged, publish a GitHub release with tag v<version> matching the manifest version. The release workflow builds and attaches spaceview.zip with the integration files at the archive root and the MIT LICENSE beside them.

HACS installs the published release asset. The repository does not automatically merge or monitor the private development fork or the original project.
