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

## Clean on-image presentation — 5 September 2026

- Removed source badges from product images and galleries, and removed the campaign/still-life image-disclosure overlays.
- Exported the exact approved model artwork without the added text strip; garment/model content was not regenerated.
- Kept image-origin explanations in product details and gallery captions, with concept status below the relevant product images.

## Pink set update — 5 September 2026

- Verified two photographed products (orange and pink) and two remaining concept styles, with the retired Bela product ID removed rather than reassigned.
- Verified the pink card, fuchsia search, two-item Kurta sets filter and automatic hiding of the empty Kurtas category.
- Verified all four pink gallery views, photo decoding, enlargement, selected-size retention and the absence of on-image labels.
- Verified both WhatsApp destinations and the correct pink-set name, colour, size and AI-modelled-view explanation in enquiry text.
- Verified a combined orange/pink bag and note survive a reload; stale Bela selections are not converted to pink-set selections.
- Verified no horizontal overflow at 320, 390, 768, 1024 and 1440 pixels.
- No failed requests or JavaScript exceptions in the checked states. axe-core reported zero tested A/AA violations for the collection, pink product dialog and enlarged modelled view.

## Navy two-piece update — 5 September 2026

- Visually checked the generated modelled view: kurta and trousers only, both hands free, and no scarf/dupatta or draped accessory.
- Verified three actual photographed products plus the one remaining Olive concept, with Gulabi retired using a new navy product ID rather than reassigning saved selections.
- Verified navy search, the three-item Kurta sets filter, and automatic hiding of the empty Dresses category.
- Verified the four-view navy gallery, real-photo decoding, enlargement and selected-size retention, with no labels over the images.
- Verified that product copy and both direct/bag WhatsApp messages explicitly say the navy set has two pieces and no scarf/dupatta. Orange/pink enquiries retain their correct three-piece contents.
- Verified a three-product bag and note across reload, stale Gulabi selection handling, and responsive widths of 320, 390, 768, 1024 and 1440 pixels.
- No failed requests or JavaScript exceptions in the checked states. axe-core reported zero tested A/AA violations for the collection, navy product dialog and enlarged modelled view.

## Green set and completed four-outfit collection — 5 September 2026

- Visually checked the green modelled view: floral-yoke kurta and coordinating trousers only, no scarf/draped accessory, and no on-image text.
- Verified four source-photo-based products and zero remaining concept product cards; the old Olive ID is retired rather than reassigned.
- Verified the green search result, four-view gallery, real-photo decoding, enlargement and size-preference retention.
- Verified two-piece/no-scarf wording in the green page and both direct/bag enquiries. A four-product bag includes two three-piece sets and two two-piece sets, and survives reload with its note.
- Verified the collection’s model-image explanation remains visible outside the pictures even with no concept products. FAQ/site notes no longer imply that concept product cards remain. Redundant category controls are hidden when all products share one category.
- Verified no horizontal overflow at 320, 390, 768, 1024 and 1440 pixels, and correct handling of stale Olive selections.
- No failed requests or JavaScript exceptions in the checked states. axe-core reported zero tested A/AA violations for the collection, green product dialog and enlarged modelled view.

## Four additional designs — 5 September 2026

- Verified eight unique products: all existing four preserved, one white floral set (not duplicated), yellow kurti/top only, and two distinct purple three-piece sets.
- Visually checked the four modelled views: white set without scarf; yellow kurti styled with plain ivory trousers; dark-purple set with decorated hems and leafy-border dupatta; plum-purple set with narrow-trim trousers and small-flower dupatta. No on-image text or source badges were added.
- Verified the yellow top-only title/card, description, photo note and both WhatsApp enquiry messages exclude the model styling trousers/footwear.
- Verified category counts (6 kurta sets, 1 kurti, 1 co-ord set), search, all four new galleries and detail-image decoding, enlargement, retained size preferences, both WhatsApp destinations and bag/note persistence.
- Verified the 50-distinct-selection safeguard: a new combination is refused at the limit while quantity can still increase on an existing selection. This prevents newer selections from silently disappearing on reload.
- No horizontal overflow at 320, 390, 768, 1024 and 1440 pixels, no failed requests or JavaScript exceptions, and zero tested axe A/AA violations for the collection, top-only product and three-piece product states.
- Verified the four new galleries, enlarged images and enquiry bag in the self-contained sandboxed preview with no network or storage access.

## Yellow short-kurti correction — targeted checks

- Compared the corrected modelled view with the white-top length reference; the yellow hem is now hip/upper-thigh rather than calf length.
- A targeted colour-region check confirms the yellow fabric ends above image y=720 in the 1200-pixel-high model frame and over 180 pixels higher than before.
- Verified only the yellow product record changed, all eight products remain, its original gallery is unchanged and top-only/styling-trouser exclusions are preserved.
- Updated the modelled asset, old asset URL, individual download, image-pack ZIP and overview image. No application logic or styling was changed; a full-site retest was not repeated.

## Product-specific sharing — 6 September 2026

- Verified valid product links open the exact item on arrival/reload, and unknown IDs return to normal browsing without a JavaScript exception.
- Verified card opening updates the visible product URL; closing the product or moving to the bag removes the selection parameter while preserving other URL parameters.
- Verified the copied URL uses the public GitHub Pages address and contains only the product ID. Clipboard success was mocked; denial was separately tested with a selectable manual-copy fallback and no false success message.
- Verified WhatsApp sharing contains the correct product title/link and uses the recipient picker, while both existing store-enquiry destinations remain unchanged. No WhatsApp messages were sent by these tests.
- Verified gallery enlargement/closing, product size preference, enquiry bag, keyboard containment and mobile direct-link opening.
- No horizontal overflow at 320, 390, 768 and 1440 pixels. The tested product dialog with the manual-copy field had zero axe-core A/AA violations.
