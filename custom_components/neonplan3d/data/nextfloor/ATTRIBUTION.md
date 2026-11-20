# NextFloor furniture pack attribution

The 43 original bundled furniture pack files in this directory are derived from
[therealMRBK/NextFloor](https://github.com/therealMRBK/NextFloor). The original 40 packs are from release v0.24.0,
commit 78ff73463aced51aa9e42d20e97e80872ed59699. Halloween and Winter & Christmas were added from release v0.31.0,
commit 51c6a05e516542e636530e089d2fa00d57df3b3c. The VIGOUR sanitary pack was added in
commit `80b9a945070aa130c98dbeb9b0b81d5ab26560a4`; its credited publisher `huepfer13` is retained. The 43 original
files contain 803 furniture models and are distributed under the MIT License.

Two community packs were added from
[therealMRBK/NextFloor-Plugins](https://github.com/therealMRBK/NextFloor-Plugins), commit
`3f5fad638366c13c5c51fe771f1a7658ab008db7`: Carport (`ca01`, one model) and Pergola (`perg01`, two models),
authored by Uwe. The repository states that shared community packs are MIT licensed. Their publisher attribution is
retained, and their IDs are namespaced as `nextfloor.ca01` and `nextfloor.perg01` to avoid collisions with user packs.
Together the 45 bundled files contain 806 furniture models; the full MIT license and copyright notices are in LICENSE.

Space View adapts these static models to its validated pack schema. Geometry and compatible
mount, light, vehicle, surface, and stair-opening metadata are retained. NextFloor-only controls
and metadata, including live climate, pet, household, cover, switch-button, and uploaded-mesh
behavior, are not implemented by this bundle. The community pack's unsupported flags are omitted during conversion.
No plugin code or external GLB model files are included.

The Realistic preview look also adapts the shader in NextFloor v0.31.4,
commit a149d9dfb637d1c7cf6cf2752465fd33ca8010fc. Its six photo textures
come from Poly Haven (laminate_floor_02, marble_01, painted_plaster_wall,
roof_tiles_14, forrest_ground_01, plaster_grey_04), reduced to 512 px.
They are CC0; attribution is included as a courtesy. The adapted shader
code is distributed under the MIT license above.
