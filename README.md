# IoTServer website

Public landing page for IoT Server, with product screenshots, adapter details,
Windows downloads, and vector branding. The application source stays private.

Download IoTServer from the [official releases repository](https://github.com/IoTServerX/releases/releases/latest).

Published with GitHub Pages from the root of the main branch:
https://iotserverx.com/

The site is static HTML, CSS, and JavaScript; no package installation or build
step is required. Preview locally with `python -m http.server 5193` and open
http://127.0.0.1:5193/. The screenshot shows a local demonstration.

Brand assets are under `assets/`: SVG wordmark and symbol, SVG/ICO favicons,
Apple touch icon, and 192/512 pixel application icons. Download links point
to version 1.1.0 in the releases repository.

The landing page lists all six plugin areas with their implemented scope:
Advanced Tags, Alarms & Events, Profile Library, DataLogger, IoT Gateway, and
Local Historian. Their documented subsets ship in the 1.1.0 downloads. Profile Library stores
configuration only; its scripts do not execute yet.

assets/configuration-1.1.0.jpg is a capture of the released 1.1.0 black-and-blue
application UI, using local simulated data. It shows the channel/device tree,
tag values and quality, and all six plugin branches.

Social previews use assets/social-monogram-v1.png (1200 x 630), rendered from
the matching SVG using the existing IS logo on a solid dark background. Open
Graph and Twitter card metadata use its absolute public URL. The application
screenshot remains in the landing page itself.
