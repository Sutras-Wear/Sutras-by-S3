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
- The initial browser checks simulated the GitHub project path locally. The initial site was subsequently uploaded and verified through public GitHub access; GitHub Pages is now serving the site.
- Actual product photography, stock, sizes, prices, delivery fees, payment options and returns terms still need owner-confirmed content.

## Real-photo update — 5 September 2026

- Replaced the Noor concept listing with the owner-photographed Orange Three-Piece Kurta Set, using a new product ID to avoid re-labelling old saved enquiries.
- Verified one **Store photo** card and three **Style preview** cards, including filtered and search results.
- Verified the full-set image and two explicitly labelled same-photo crops, thumbnail selection and the enlarged-photo viewer.
- Closing the enlarged image returns to the underlying product dialog without losing the selected photo or size preference.
- Verified actual-only and mixed actual/illustrative WhatsApp messages, quantity/note persistence and the enquiry bag.
- No overflow at 320, 390, 768, 1024 and 1440 pixels.
- No failed local image requests or JavaScript exceptions in the checked states.
- axe-core reported no A/AA violations for the mixed collection, real-photo detail dialog and enlarged image viewer in the checked Chromium states.
- The original photo with incidental people/background was not added to the public website; only the cleaned exports were used. Image metadata was not carried into the exports.

## Approved AI-modelled main-image update — 5 September 2026

- Verified the approved modelled image is primary in the collection card, search, product details and enquiry bag.
- Kept the actual store photograph and its two detail crops in the four-image gallery.
- Verified per-image AI/actual-photo badges, captions, enlargement and size-preference preservation when switching views.
- Verified AI-modelled-image disclosures in both direct and bag WhatsApp enquiries without changing the real product identity or claiming availability.
- Verified responsive layouts at 320, 390, 768 and 1440 pixels, no JavaScript exceptions, and no automated axe-core A/AA violations in the tested collection and product-dialog states.
- Retained the visible AI-preview footer in the approved image; the primary card and detail view use contain rather than cropping the image.
