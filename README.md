# IoT Server website

Public landing page at https://iotserverx.com/, published with GitHub Pages
from the root of the main branch. Static HTML, CSS, and JavaScript; no build
or package installation is needed. Application source remains private.

The homepage positions IoT Server as agentic industrial infrastructure for
people and agents. Platform, agentic engineering, drivers, workflow and direct
downloads replace the former plugin presentation. Agent authoring is described
as supported configuration preparation/preview/Save; operator Apply and Start
remain distinct. Metadata and social descriptions use the same positioning.

The searchable catalog in catalog.js is retained unchanged by this copy update:
117 driver/source families, including the 71 original entries and 46 planned
additions identified in the Litmus and DIME comparison. Cards remain noninteractive.
Skeleton/planned entries stay gray, with accessible status and a visible legend.
Search, all six category filters and counts continue to derive from that catalog.
Status is a catalog inventory, not a claim that every family ships in a download.
Refresh driver statuses against current source in a separately reviewed change.

## Latest downloads

The header Get IoT Server link scrolls to the bottom download section.
The headline has no duplicate download button.
There is no download popup. Installer and portable are ordinary links.
On page load, app.js fetches GitHub's latest non-prerelease release metadata,
locates the Windows x64 setup EXE and portable ZIP by asset naming convention,
and assigns the actual browser_download_url to both links together. Versioned
filenames are read from the release, never hardcoded in this website.
If metadata is unavailable, incomplete or invalid, both links retain GitHub's
permanent latest-release page as a fallback. No old pinned package is substituted.
Release notes always use https://github.com/IoTServerX/releases/releases/latest.

Publish both assets under the existing IoTServer-<version>-windows-x64-setup.exe
and IoTServer-<version>-windows-x64-portable.zip naming convention. Compatible
unversioned names are also accepted. Do not rename the package kinds/architecture
without updating their discovery patterns. No website edit is needed for an
ordinary release/version bump. No privileged API token is used or shipped.

## Screenshots and branding

Four actual application screenshots in assets/screenshots/ replace the placeholders:
- connected-workspace.jpg: connections, modeling, transformation, and simulation with routing and shared properties;
- mapping-bindings.jpg: selected transformation field assignment and its declaration;
- simulation-preview.jpg: offline motor calculations and prospective records;
- mcp-agent-mapping.png: user-supplied screenshot of an MCP agent conversation beside its MicroLogix-to-MQTT mapping.

The first three 1280 by 690 JPEGs were captured through the running application's
UI using the motor Simulation example. Preview data is explicitly marked offline/
simulated. The 2555 by 1366 MCP PNG was supplied by the user on October 17, 2026
and is included unchanged, showing the workspace and agent conversation together.
Screenshots illustrate the interface; they do not establish hardware qualification
or delivery evidence. Only the local-path status bar was excluded from the three
JPEG captures; application pixels were not retouched.
Images load lazily and preserve their aspect ratio. Images and Full size links
open a shared accessible lightbox; close it with its button, Escape, or the backdrop.
The native dialog traps focus, restores the opener, and prevents background scrolling.
Without JavaScript, the links navigate directly to the image in the same tab.
Replace captures with new real screenshots when the UI changes.
The old UI photographs remain in assets for provenance but are not displayed.
Brand assets and the updated IS monogram/social preview are unchanged.

The supplied second video plays as a decorative background behind the headline.
The header retains the only download CTA above the fold. A dark gradient preserves
text contrast; the background fills the hero and crops responsively on mobile.
assets/iot_server_2-loop.mp4 and .webm are silent 1280 by 720 derivatives. The source
repeats its opening movement at frame 358 (11.933 seconds). Selecting frames 24
through 381 places the loop boundary within matching camera movement and removes
the repeated trailing footage. The loop lasts 11.933 seconds at 30 fps.
assets/iot_server_2-poster.jpg comes from the loop's first frame.
Playback loops muted with inline playback and no native player chrome. The small
pause/play button controls background motion. Reduced-motion and data-saving
visitors see the poster until they explicitly play. Hidden tabs pause; returning
resumes only when playback was requested, preserving an explicit user pause.
The original design review in ignored brand-review/ is not published.

## Local verification

Use a temporary loopback static server only when browser QA is needed:
python -m http.server 5197 --bind 127.0.0.1
Stop the owned server after verification. The website needs no Cargo build.

## Platform overview diagram

The People, agents, operations diagram sits directly below the background hero.
People and AI agents converge at an operator review/activation checkpoint, above
the shared namespace and modeling, transformation, and simulation capabilities.
Labeled arrows distinguish incoming signals, outgoing publications and bidirectional
commands/feedback. Desktop uses three external-system columns; mobile stacks them.
It is semantic HTML with decorative inline SVG icons and CSS connectors; no image,
external icon dependency, animation or additional JavaScript is required.
