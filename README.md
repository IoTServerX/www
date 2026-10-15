# IoTServer website

Public landing page at https://iotserverx.com/, published with GitHub Pages
from the root of the main branch. Static HTML, CSS, and JavaScript; no build
or package installation is needed. Application source remains private.

Preview with `python -m http.server 5197 --bind 127.0.0.1` from this folder.

The searchable catalog in catalog.js lists 117 driver and source families:
71 original catalog entries and 46 planned additions identified in the Litmus
and DIME comparison. The additions cover network equipment, robotics, messaging,
and data sources; serial, CAN/HID, Excel, OPC DA and output-only connectors are
excluded. Existing catalog families are not duplicated for model variants.

Each non-interactive card shows its number, name, and protocol/interface.
The status field is implemented, skeleton, or planned. Skeletons and planned
entries are gray, with a catalog legend and accessible status text; no detail
modal or visible third description line is added. Six category filters include
CNCs & robots and Motion & drives. Search/filter counts derive from the catalog.

Original-driver status was checked against the Rust crate descriptors on
2026-10-14: 47 entries have implementations and 24 are skeletons. This is a
current-source inventory, not a claim that all implementations ship in the
downloaded release or provide full protocol coverage. Refresh these statuses
from crates/network-drivers/drivers.json and each crate's Implementation
descriptor, including Memory Based, when the implementation inventory changes.
Seven plugin areas are shown; six ship with defined scopes, while Connection
Sharing is planned. Plugin dialogs retain the release limitations, including
Profile Library's configuration-only scope. Update these statuses together
with download links when publishing a new application release.

Download links point to the 1.3.0 installer, portable ZIP, dependency notices, checksums, and release
notes in https://github.com/IoTServerX/releases/releases/tag/v1.3.0.

The responsive connectivity diagram measures the six cards and server to draw
its connectors. Its user-space SVG gradient supports horizontal paths.

Brand assets in assets/ include the IS monogram, wordmark, SVG/ICO favicons,
Apple touch icon, app icons, and social preview. The upper-left and lower-right
S corners use matching 10-unit radii. The social preview uses social-monogram-v2.png (1200 × 630), rendered from
its SVG, with the updated monogram above a separate IoT Server line. Open Graph
and Twitter metadata use this versioned URL to refresh cached previews.
assets/configuration-1.2.0.jpg shows the released UI with local simulated data.

The original design review lives in ignored brand-review/. It is not published.
