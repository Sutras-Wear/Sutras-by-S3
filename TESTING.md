# Website verification

Checked on **5 September 2026** using Playwright 1.55 / Chromium and axe-core 4.10.3.

## Functional checks

- PASS — Initial collection has four labelled style previews
- PASS — Category filters and reset work
- PASS — Search is case-insensitive; empty result and clear states work
- PASS — Search handles markup input safely
- PASS — Escape closes dialog and restores keyboard focus
- PASS — Product detail and size preference update the direct WhatsApp enquiry
- PASS — Both WhatsApp links encode the full selection, quantity, size, note and preview disclosure
- PASS — Bag, quantity and note persist after reload
- PASS — Requested quantities respect the per-style limit
- PASS — Different size preferences remain separate selections
- PASS — Remove and clear empty the bag and delete saved personal note
- PASS — Empty bag returns to collection
- PASS — Contact dialog exposes both correct business numbers
- PASS — FAQ accordion expands correctly
- PASS — Imagery and privacy disclosures are available
- PASS — Internal navigation targets and external-link security attributes are valid
- PASS — No horizontal overflow at 320, 360, 390, 600, 768, 1024, 1440 and 1920 pixels
- PASS — Mobile menu opens, navigates and closes
- PASS — Mobile product detail, size selection and enquiry drawer work
- PASS — Mobile search works
- PASS — All imagery and fonts load; no failed requests or JavaScript exceptions

## Additional checks

- PASS — Keyboard Tab navigation remains in the active dialog.
- PASS — Mobile product close button stays visible while scrolling.
- PASS — The enquiry bag works in memory when browser storage is disabled.
- PASS — Visitors without JavaScript have a direct WhatsApp fallback.
- PASS — Relative assets work when the site is served under `/Sutras-by-S3/`.
- PASS — The self-contained preview works in an `allow-scripts` iframe with no network access or local storage.
- PASS — The live-preview server accepts a proxy host and does not set iframe-blocking headers.

## Automated accessibility checks

No WCAG A/AA violations were reported by axe-core for the desktop page, mobile page, search dialog, product dialog, populated enquiry bag, contact dialog or mobile menu in the tested states.

This is a limited automated audit, not an accessibility certification. Full manual screen-reader testing and testing on physical iOS/Android devices are still recommended before a broad public launch.

## Scope and limitations

- Responsive layout checked at widths of 320, 360, 390, 600, 768, 1024, 1440 and 1920 pixels.
- Browser engine tested: Chromium. Safari and Firefox were not separately tested.
- WhatsApp destinations and encoded messages were verified. **No WhatsApp messages were sent**, and no external orders, payments or reservations were made.
- The GitHub project-path behavior was simulated locally. **No remote GitHub upload or Pages deployment was performed**; this needs the owner’s authenticated account.
- Actual product photography, stock, sizes, prices, delivery fees, payment options and returns terms still need owner-confirmed content.
