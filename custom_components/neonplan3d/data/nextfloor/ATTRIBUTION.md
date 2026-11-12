# NextFloor furniture pack attribution

The 43 bundled furniture pack files in this directory are derived from
[therealMRBK/NextFloor](https://github.com/therealMRBK/NextFloor). The original 40 packs are from release v0.24.0,
commit 78ff73463aced51aa9e42d20e97e80872ed59699. The Halloween, Winter & Christmas, and VIGOUR sanitary packs
were added from release v0.31.0, commit 51c6a05e516542e636530e089d2fa00d57df3b3c. Together the files contain
803 furniture models and are distributed under the MIT License; the full license and copyright notice are in LICENSE.

Space View adapts these static models to its validated pack schema. Geometry and compatible
mount, light, vehicle, surface, and stair-opening metadata are retained. NextFloor-only controls
and metadata, including live climate, pet, household, cover, switch-button, and uploaded-mesh
behavior, are not implemented by this bundle. No external GLB model files are included.

The Realistic preview look also adapts the shader in NextFloor v0.31.4,
commit a149d9dfb637d1c7cf6cf2752465fd33ca8010fc. Its six photo textures
come from Poly Haven (laminate_floor_02, marble_01, painted_plaster_wall,
roof_tiles_14, forrest_ground_01, plaster_grey_04), reduced to 512 px.
They are CC0; attribution is included as a courtesy. The adapted shader
code is distributed under the MIT license above.
