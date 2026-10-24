# IoT Server website

October 24, 2026: active driver availability was checked against the current
read-only executable catalog. Torque Tool, Toshiba, Toyopuc, Triconex, Universal
Device, WAGO, Yaskawa MP Series and Yokogawa CX/Darwin/DX/DXP/GX/MW/MX now have
implemented cards with their specific network protocols. The public total remains
135 families; grouped runtime identities account for the 102 implemented cards.
CAN Raw and HID Device remain planned, as do the other existing planned families.
This describes current source implementations, not universal feature coverage
or a claim that every driver is in the latest downloadable release.

October 22, 2026: the ControlLogix catalog card is now named
Allen-Bradley ControlLogix Ethernet. Its stable driver identity, supported
runtime subset and availability are unchanged. The catalog cache version changed.

Public landing page at https://iotserverx.com/, published with GitHub Pages
from the root of the main branch. Static HTML, CSS, and JavaScript; no build
or package installation is needed. Application source remains private.

The homepage positions IoT Server as agentic industrial infrastructure for
people and agents. Platform, agentic engineering, drivers, workflow and direct
downloads replace the former plugin presentation. Agent authoring is described
as supported configuration preparation/preview/Save; operator Apply and Start
remain distinct. Metadata and social descriptions use the same positioning.

The searchable catalog in catalog.js contains 135 driver/source families:
102 implemented families and 33 planned families; no unavailable skeleton cards remain.
The 107 Rust acquisition identities were reconciled to the current source and
read-only executable catalog on October 24, 2026 (105 available runtimes,
2 unavailable local sources and 253 models). FANUC Robot now has a read-only
SNPX TCP implementation for scalar I/O, registers, variables and positions,
with UI/MCP configuration. SDK 7.1.0 analysis and software tests do not establish
physical robot qualification or inclusion in a downloadable release. Existing planned DIME families
are retained. Reviewed Litmus network and local sources are grouped by family; registration
aliases and distinct profiles share a card when appropriate.
Serial-only drivers and the TCP-to-local-RTU gateway are excluded. RTU framing
over a TCP endpoint remains a network profile. Generic Device lists network
modes only. Local CAN, workbook, HID and signal-generator sources are distinct
from serial-only acquisition.

Cards remain noninteractive. Skeleton/planned entries stay gray, with accessible
status and a visible legend. Search, all six category filters and counts derive
from the catalog. An implemented family indicates a runtime subset; it does not
claim every model, feature, release package or physical controller is qualified.
Keep catalog.js, the index fallback counts and the catalog cache version aligned
when changing the list. Private mapping evidence is retained outside this public
website repository.

Brother Speedio now includes the five documented SX1 models, execution/running
status, read-only CNC file signals and bounded scalar PLC access. Its source and
manual tests do not establish physical controller qualification. Serial models
and older Brother record layouts remain outside this implementation.

Thirty-two additional Litmus-derived acquisition profiles have bounded Rust core,
production host, native editor and typed-authoring verification. The compiled
catalog reports 107 acquisition identities, 105 available runtimes and 253 models.
The website consolidates the two S5 profiles, both PROFINET policies and the two
OSI lifecycles by family. Supported subsets and physical-device qualification
remain separate.

The added sources include raw MQTT ingress, DeviceHub HTTP2/protobuf ingress,
authenticated OSI/Ignition NATS subscriptions, PROFINET raw record reads and
RWS1 Digest/cookie JSON reads. Totalflow exposes numeric DB2 format0 reads using
a fresh TCP connection and complete native record checks. Heidenhain exposes
fixed-family read-only LSV2 program state/running, active program/block and
overrides; SDK PLC/file/tool/axes APIs remain unavailable. S5 has separate
word/KG and byte/IEEE profiles.

Yaskawa MP2300 supports the fixed official EDS Input Only connection and six
raw input bytes. Running semantics and the original128-byte image are unproved.
CAN Raw and HID Device are skipped at user request because the Windows adapter/
backend and HID device/report format are unspecified. Their earlier prototype
code and software test evidence remain historical; both catalog cards are
planned and neither is available for supported connection/signal authoring.

CSV/IND256x/Syslog retain incoming records; REST supports plain HTTP GET.
Excel reads cached cells or formula text. Scale and Generic Device expose
explicit bounded raw TCP Poll templates. SEW reads raw MOVILINK parameters;
Sinumerik 808D preserves its native IEC counter/timer layouts.
Thermo availability was reconciled with its existing SV100/SV180 runtime.

October 21, 2026: MQTT Client keeps read-only JSON subscriptions by default.
Optional tag publishing requires an explicit connection opt-in, device write
permission and Read/Write signal access. Each signal has an independent exact
publication topic, QoS 0/1/2 and retain setting. Written scalar values publish as
text; publishing does not replace the subscribed value or merge a JSON property.
QoS 0 success means the socket accepted the packet, QoS 1 means broker PUBACK,
and QoS 2 means the broker handshake completed. These results do not establish
downstream processing or machine execution. Retain asks the broker to keep the
payload for future subscribers; a retained empty String clears that retained
value. Local ingress cannot publish.

October 21, 2026: Custom Protocol (the User-Configurable Ethernet identity)
implements a TCP client driven by an explicit version 1 profile. Profiles define
fixed, delimiter or length-prefix framing, typed fields, read/write transactions
and unsolicited observations. Optional Lua encode/decode hooks run in a bounded
sandbox without operating-system or network access. The editor includes an
explicit scale example, signal-ID/type selection and offline packet tests that
show request bytes, decoded fields and response matching without network I/O.
Profiles are limited to 128 KiB and 32 nesting levels; frames are at most 64 KiB.
Lua defaults are 8 MiB, 100,000 instructions and 100 ms, and profiles may lower those
limits. Writes default to disabled and require explicit device and signal
permissions; a command acknowledgement does not prove physical execution.
This implementation covers TCP client profiles only; UDP, serial, listeners and
native-driver profile import are outside its scope. This source capability
description does not assert availability in a downloaded release or physical
device qualification.

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
- detailed-mapping-canvas.jpg: two inputs with 20 records each, utilization/load calculations, rolling statistics, field-level routing, and MQTT/SQL destinations;
- simulation-preview.jpg: offline motor calculations and prospective records;
- mcp-agent-mapping.png: user-supplied screenshot of an MCP agent conversation beside its MicroLogix-to-MQTT mapping.

The three displayed JPEGs are 1280 by 690 captures of the running application's
UI. The detailed mapping capture was updated on October 19, 2026, using an isolated
eight-node Motor health & production demonstration based on the motor Simulation
example, with all four connections in simulation mode and no runtime activation.
The other two JPEGs use the original motor Simulation example. Preview data is
explicitly marked offline/simulated. The 2555 by 1366 MCP PNG was supplied by the user on October 17, 2026
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
The application and website now share the supplied DIME mark, with Data In Motion
Enterprise above IoT Server in the header, footer and platform diagram. The original
transparent PNG is retained as assets/dime-logo-white.png; browser/install icons and
the social preview derive from that mark. Existing screenshots retain their original
application pixels until new captures are available.

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
