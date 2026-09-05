# Sutras by S³

**Pure Cotton Indian Wear**  
Woven in Comfort · Made with Intention  
Lusaka, Zambia

An editorial, mobile-friendly storefront for Sutras’ women’s cotton Indian wear. Designed in warm ivory, terracotta and olive with original illustrative imagery. This is a complete, no-build static website suitable for GitHub Pages.

## Publish it on GitHub Pages — easiest method

Your repository: **https://github.com/Sutras-Wear/Sutras-by-S3**

1. Download and extract **Sutras-Website.zip**. Open the extracted folder.
2. Sign in to GitHub with an account that can write to `Sutras-Wear/Sutras-by-S3`.
3. Open the repository. If it is still empty, choose **“uploading an existing file”**. Otherwise choose **Add file → Upload files**.
4. Upload the **contents** of the extracted website folder, including the `assets` and `scripts` folders. **Do not upload the ZIP itself, and do not put everything inside another folder.** `index.html` must be at the repository’s top level.
5. Commit the files to the **main** branch.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**. Select **main** and **/ (root)**, then **Save**.
8. Wait for GitHub’s Pages deployment to finish. The Pages settings will show the published address. The intended address is:

   **https://sutras-wear.github.io/Sutras-by-S3/**

The intended address above is **not a claim that the site is already published**. Repository upload and Pages activation require the owner’s authenticated GitHub access. This delivery does not change the remote repository or its settings.

No Node.js, npm, backend, API keys or paid host is required. All fonts, illustrations, styles and JavaScript are local files. All paths are relative so the GitHub project subdirectory works correctly.

### Alternative: publish with Git

If you prefer the command line, first clone your repository on **your own authenticated computer**. Copy the website files into it, then run:

```bash
git add .
git commit -m "Add Sutras cotton-wear storefront"
git branch -M main
git push -u origin main
```

Then enable Pages using steps 6–8 above. Do not paste passwords or personal access tokens into a chat or into website files. Use your own GitHub login or credential manager.

## What works

- Responsive desktop, tablet and mobile layouts
- Category filters for kurta sets, kurtas, dresses and co-ord sets
- Search by style, category, colour and description
- Product detail dialogs with clearly labelled **usual-size preferences**, not claimed stock sizes
- Enquiry bag: add styles, change requested quantities, remove items, clear the bag, add a note
- Browser-local bag persistence (with in-memory fallback when storage is blocked)
- WhatsApp enquiry links for **both** store numbers, including the selected styles, preferred sizes, requested quantities and note
- Instagram links, mobile navigation, FAQs, image fallback, keyboard-accessible dialogs and reduced-motion support
- Page metadata, share image, favicon and a sitemap

## What this is not

There is no online payment processing, inventory system, customer account, newsletter backend or automatic order confirmation. This store takes **enquiries on WhatsApp**, matching the supplied Instagram bio.

WhatsApp links prepare a message. The customer must still send it in WhatsApp. Sutras must confirm actual products, sizes, prices, payment, delivery/collection and return terms. An enquiry is not an order or reservation.

## Confirmed brand information

The brand and business information came from the owner-supplied Instagram bio, not from another similarly named business:

- **Brand:** Sutras by S³
- **Focus:** women’s pure cotton Indian wear
- **Tagline:** Woven in Comfort · Made with Intention
- **Location:** Lusaka, Zambia
- **Instagram:** https://www.instagram.com/sutras.official/
- **WhatsApp 1:** +260 978 865 604
- **WhatsApp 2:** +260 973 668 415

Instagram blocked automated access. No actual Instagram photographs, posts, stock, prices, hours or additional business claims were imported.

## Replace the placeholder photos later

The hero, cotton still life and all four model images are **AI-generated illustrations**, not Sutras’ actual garments, employees or customers. The names, colours, descriptions and categories of the four demo styles are concepts. The website explicitly discloses this in the collection, product dialogs, image captions, FAQ, WhatsApp messages and site notes.

### Quickest photo replacement

Replace these files with real, permission-cleared images using the **same filenames**:

| File | Used for | Recommended crop |
| --- | --- | --- |
| `assets/images/hero.webp` | Main campaign | Portrait, with a little space around the model |
| `assets/images/noor.webp` | First collection card | 3:4 portrait |
| `assets/images/bela.webp` | Second card and moodboard | 3:4 portrait |
| `assets/images/gulabi.webp` | Third card and moodboard | 3:4 portrait |
| `assets/images/olive.webp` | Fourth card | 3:4 portrait |
| `assets/images/cotton.webp` | Story and moodboard | 4:5 portrait |
| `assets/images/social-card.jpg` | Link-sharing thumbnail | 1200 × 630 landscape |

Use a real image conversion tool to save WebP files; **renaming a JPEG extension to `.webp` does not convert it**. Alternatively keep the original `.jpg`/`.png` file and update the corresponding image paths in `index.html` and `scripts/catalog.js`.

### Add the actual product details

Open **`scripts/catalog.js`**. Each product has an editable entry:

```js
{
  id: 'unique-product-id',
  name: 'Actual product name',
  category: 'Kurta sets',
  color: 'Actual colour',
  colorHex: '#adbec8',
  image: 'assets/images/your-real-photo.webp',
  imageAlt: 'Accurate description of the actual product photo.',
  description: 'Store-confirmed description.',
  detail: 'Store-confirmed details.',
  price: null,       // Leave null for “Price on enquiry”.
  isPreview: false  // Only after the photo AND product details are real.
}
```

- Keep each `id` unique. Change the ID when a concept is replaced by a different real product so old saved enquiries do not refer to a different item.
- Use one of these category labels: `Kurta sets`, `Kurtas`, `Dresses`, `Co-ord sets`. If adding another category, add its filter button in `index.html` too.
- Real numeric prices are formatted in **ZMW**. No sample prices are currently displayed. Prices are still to be confirmed on WhatsApp.
- The `isPreview` flag is per-product. Keep it `true` for every remaining concept; the relevant badges and enquiry disclaimers stay visible.
- Once **all** campaign, moodboard and product photos are real, set `imageryIsIllustrative: false`. Do not switch it off while any illustrative images remain.
- Update the hero, story and moodboard `alt` text and the Open Graph image description in `index.html` when the imagery changes.
- Review `#imagery-info`, the FAQ and the collection notes before publishing a mixed real/illustrative catalogue. The script automatically removes the all-preview notice when no preview products remain, but editorial wording should still be reviewed.
- Add real sizing measurements, delivery fees, payment options and returns information only when confirmed. The current “usual size” controls are enquiry preferences only.

## Edit the look & contacts

- `styles.css`: colours are CSS variables at the top; fonts, spacing and responsive layouts follow.
- `index.html`: brand story, hero, contact numbers, Instagram links, FAQs and page metadata.
- `scripts/catalog.js`: product information, dynamic WhatsApp numbers and currency.
- `scripts/app.js`: search, filters, dialogs, bag and WhatsApp message construction.

If changing the phone numbers, update **both** `scripts/catalog.js` and the static links/visible numbers in `index.html` (including structured data). The plain HTML contact links intentionally work without JavaScript too.

## Local preview

Open `index.html` in a modern browser, keeping the folders next to it. Or, if Python is installed:

```bash
python -m http.server 3000
```

Open `http://localhost:3000/` on that same computer. This is a local-development address, not the public website address.

The separately supplied **Sutras-preview.html** is a self-contained preview with embedded images, fonts, styles and scripts. It is convenient for review, but edit and upload the structured website package instead. A restrictive in-app file viewer may block external WhatsApp/Instagram tabs; use the live website or download and open the preview in a regular browser to follow those links.

## Privacy & hosting

There are no analytics, tracking pixels, external font requests or server-side customer records in this site. The enquiry bag and optional note are kept in browser localStorage, if available; clearing the bag removes those saved contents. Links to Instagram or WhatsApp take visitors to those platforms. GitHub Pages is the hosting provider and has its own privacy policy.

Do not put private customer information, payment secrets or credentials in this public repository. All website source files are publicly readable.

## Asset notes

- Campaign, model and cotton imagery: original AI-generated temporary illustrations created for this site.
- Icons: original inline SVG line drawings.
- Fonts: Cormorant Garamond and DM Sans, self-hosted under the SIL Open Font License. Their license texts are in `assets/fonts/`.
- No third-party scripts or CDNs are required.
