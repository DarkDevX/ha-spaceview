# Space View

Space View is a community-maintained edition of the NeonPlan 3D Home Assistant integration, distributed through HACS under the name Space View. This edition includes Open Edition capabilities and optional measured wall-profile support. Signed asset packs are not included, and the existing signed-pack verification remains enabled.

The integration keeps its existing **neonplan3d** domain so existing Home Assistant installations continue to use the same integration identity.

## Install with HACS

1. In Home Assistant, open HACS and choose **Integrations**.
2. Open the menu and choose **Custom repositories**.
3. Add **DarkDevX/ha-spaceview** with the **Integration** category.
4. Find **Space View**, download it, and restart Home Assistant if prompted.

## Open Edition: Kona and local furniture

The implemented Open Edition capabilities in Space View are available locally and do not require a separate capability pack. They still depend on the Home Assistant entities and data configured in your installation.

Since [v1.20.2](https://github.com/DarkDevX/ha-spaceview/releases/tag/v1.20.2), the parking-spot vehicle selector includes a bundled Hyundai Kona Electric (2021). Add or edit a parking spot in the plan editor and choose the Kona there. It is included with the integration; you do not need to import the signed “Fahrzeuge” pack.

### Import or remove a local model pack

An administrator can open **Extensions** and choose **Eigenes Möbel-Pack importieren …** (the local furniture-pack import action). Select either a raw furniture JSON payload or a `.fp3dpack` JSON envelope. For an envelope, Space View reads the `payload` field and does not require, verify, or store a publisher signature.

Local imports still pass the strict furniture-pack schema checks: the payload must include at least one item, and a non-empty `features` list is not allowed. This import adds furniture models (including vehicles); it cannot unlock capabilities. Imported packs are marked **Open Edition · local** and can be removed from **Extensions**. Furniture already placed in the plan remains as simple boxes after its local pack is removed.

The bundled Kona is available without importing or storing a user pack. Imported model data is stored by Home Assistant and is not included in this repository or its public release archives.

## Updates

There is no automatic source sync from the original Mastershort project. Eligible changes from the private maintainer fork pass CI and release-preparation checks, then are staged as a public pull request for review. Merging a reviewed version change to public `main` triggers release validation and publication: the workflow verifies the public source, creates a versioned GitHub release with the `spaceview.zip` HACS asset, and validates that asset. HACS installs `spaceview.zip` from this repository. A maintainer can manually dispatch the release workflow from public `main` as a recovery path if the automatic dispatch did not start.

User-supplied plans and local model data stay in Home Assistant; they are not copied into this public repository or its release archives.

## Attribution and license

This is an unofficial community distribution of the NeonPlan 3D integration, originally created by Mastershort. The original project is available at [github.com/Mastershort/neonplan3d](https://github.com/Mastershort/neonplan3d). This distribution is independent and is not an official Home Assistant project.

The integration is distributed under the MIT License. The original Mastershort copyright notice is preserved in [LICENSE](LICENSE).

For support or issues with this distribution, use the [Space View issue tracker](https://github.com/DarkDevX/ha-spaceview/issues).
