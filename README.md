# Space View

Space View is a community-maintained edition of the NeonPlan 3D Home Assistant integration, distributed through HACS under the name Space View. This edition includes Open Edition capabilities and optional measured wall-profile support. Signed asset packs are not included, and the existing signed-pack verification remains enabled.

The integration keeps its existing **neonplan3d** domain so existing Home Assistant installations continue to use the same integration identity.

## Install with HACS

1. In Home Assistant, open HACS and choose **Integrations**.
2. Open the menu and choose **Custom repositories**.
3. Add **DarkDevX/ha-spaceview** with the **Integration** category.
4. Find **Space View**, download it, and restart Home Assistant if prompted.

## Updates

Public releases are prepared from changes reviewed in the maintainer's private development fork, then published here as versioned GitHub releases. HACS installs the spaceview.zip asset from this repository. There is no automatic sync from the original project or private development fork.

User-supplied house model data is imported into Home Assistant and is not part of this repository or its release archives.

## Attribution and license

This is an unofficial community distribution of the NeonPlan 3D integration, originally created by Mastershort. The original project is available at [github.com/Mastershort/neonplan3d](https://github.com/Mastershort/neonplan3d). This distribution is independent and is not an official Home Assistant project.

The integration is distributed under the MIT License. The original Mastershort copyright notice is preserved in [LICENSE](LICENSE).

For support or issues with this distribution, use the [Space View issue tracker](https://github.com/DarkDevX/ha-spaceview/issues).
