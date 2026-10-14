# IoTServer website

Public landing page at https://iotserverx.com/, published with GitHub Pages
from the root of the main branch. Static HTML, CSS, and JavaScript; no build
or package installation is needed. Application source remains private.

Preview with `python -m http.server 5197 --bind 127.0.0.1` from this folder.

The searchable catalog in catalog.js lists 71 driver families. app.js marks
which eight adapters ship in 1.2.0 and labels the remaining catalog as planned.
Seven plugin areas are shown; six ship with defined scopes, while Connection
Sharing is planned. Plugin dialogs retain the release limitations, including
Profile Library's configuration-only scope. Update these statuses together
with download links when publishing a new application release.

Download links point to the 1.2.0 installer, portable ZIP, checksums, and release
notes in https://github.com/IoTServerX/releases/releases/tag/v1.2.0.

The responsive connectivity diagram measures the six cards and server to draw
its connectors. Its user-space SVG gradient supports horizontal paths.

Brand assets in assets/ include the IS monogram, wordmark, SVG/ICO favicons,
Apple touch icon, app icons, and social preview. The upper-left and lower-right
S corners use matching 10-unit radii. The social PNG is rendered from its SVG.
assets/configuration-1.2.0.jpg shows the released UI with local simulated data.

The original design review lives in ignored brand-review/. It is not published.
