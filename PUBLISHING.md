# Publish your Sutras website

Your website files have been uploaded and GitHub Pages is serving the site. The instructions below are a reference if you need to configure or recreate the deployment. Future changes to the configured publishing branch are deployed by GitHub Pages.

## 1. Download and extract

Download **Sutras-Website.zip** and extract it. Open the **Sutras-by-S3** folder inside.

## 2. Upload the website files

Open your repository:

**https://github.com/Sutras-Wear/Sutras-by-S3**

Sign in with an account that can edit it.

- For an empty repository, click **“uploading an existing file”**.
- Otherwise click **Add file → Upload files**.
- Drag in the **contents** of the extracted folder, including the `assets` and `scripts` folders.
- Click **Commit changes**, using the **main** branch.

**Important:** Upload the extracted files, not the ZIP. `index.html` must be at the repository’s top level, not inside an extra folder.

The essential structure is:

```text
Sutras-by-S3 (your repository)
├── index.html
├── styles.css
├── favicon.svg
├── assets/
│   ├── images/
│   └── fonts/
└── scripts/
    ├── catalog.js
    └── app.js
```

The other supplied files are documentation, font licences and helpful supporting files; they can be uploaded too.

## 3. Turn on GitHub Pages

Open **Settings → Pages** in the repository.

Under **Build and deployment** choose:

| Setting | Choose |
|---|---|
| Source | **Deploy from a branch** |
| Branch | **main** |
| Folder | **/ (root)** |

Click **Save**. Wait for GitHub’s deployment to complete. The Pages settings will then show the live link. The intended address is:

**https://sutras-wear.github.io/Sutras-by-S3/**

If it initially shows a 404, check that the deployment has completed and that `index.html` is at the top level. GitHub Pages can take a few minutes to update.

## When your real photos are ready

Send the photos, product names, colours and confirmed prices. The images live in `assets/images/` and the collection details in `scripts/catalog.js`. The included **README.md** explains exactly how to replace them.

The orange set has a clearly labelled AI-modelled main image, with the real store photo retained in its gallery. The remaining concept styles are labelled as illustrative previews. Orders and enquiries go through your two WhatsApp numbers; the website does not collect payments or automatically confirm orders.

**Sutras-preview.html** is a separate, self-contained design preview. Use the structured ZIP files for your GitHub website. Some in-app viewers block external links; use the live preview or open the downloaded HTML in a regular browser to follow WhatsApp and Instagram links.
