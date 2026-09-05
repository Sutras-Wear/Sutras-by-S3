/*
 * SUTRAS — editable store content
 * Replace the images in assets/images/ and edit these entries as your real
 * collection becomes available. See README.md before changing isPreview.
 * The catalogue now has eight source-photo-based products, including the
 * yellow kurti sold as a top only. Modelled views and original-photo galleries
 * are distinguished in the product text; there are no concept product entries. isPreview describes concept products; imageKind describes
 * imagery. No price or size availability has been supplied.
 */
window.SUTRAS = {
  name: 'Sutras by S³',
  instagram: 'https://www.instagram.com/sutras.official/',
  whatsapp: ['260978865604', '260973668415'],
  currency: 'ZMW',
  imageryIsIllustrative: true,
  products: [
    {
      id: 'orange-three-piece-set',
      name: 'Orange Three-Piece Kurta Set',
      cardName: 'Orange Kurta Set',
      category: 'Kurta sets',
      color: 'Orange & multicolour',
      colorHex: '#e86a29',
      image: 'assets/images/orange-set-model-clean.webp',
      imageKind: 'ai-model',
      imageAlt: 'AI-generated styling preview of an adult woman wearing the orange kurta with printed bottoms and a plain orange dupatta. Fit and small details are illustrative.',
      description: 'An orange kurta with a decorative neckline and leaf motifs, paired with multicoloured printed bottoms and a matching plain orange dupatta. Three pieces: the kurta (top), bottoms and dupatta (scarf).',
      detail: 'Three pieces shown · Embellished neckline · Leaf details & patterned fabric',
      setContents: 'Kurta, printed bottoms and plain orange dupatta (3 pieces)',
      photoNote: 'The main image is AI-generated styling. Fit, length, drape and small details are approximate. The original store photograph and its detail crops remain in the gallery for comparison.',
      gallery: [
        {
          src: 'assets/images/orange-three-piece-set.webp',
          kind: 'store-photo',
          label: 'Real photo',
          alt: 'Actual store photograph of the orange three-piece set laid out together, with the background removed.',
          caption: 'Original store photograph — background removed and straightened. Use this view to check the photographed garment details.'
        },
        {
          src: 'assets/images/orange-set-neckline.webp',
          kind: 'store-photo',
          label: 'Neckline detail',
          alt: 'Close-up crop of the orange kurta’s decorated neckline from the same store photograph.',
          caption: 'Neckline detail — a closer crop of the same photograph, not a separate camera angle.'
        },
        {
          src: 'assets/images/orange-set-print.webp',
          kind: 'store-photo',
          label: 'Fabric detail',
          alt: 'Close-up crop of the multicoloured printed fabric shown with the orange kurta set.',
          caption: 'Printed fabric detail — a closer crop of the same photograph, not a separate camera angle.'
        }
      ],
      price: null,
      isPreview: false
    },
    {
      id: 'pink-three-piece-set',
      name: 'Pink Three-Piece Kurta Set',
      cardName: 'Pink Kurta Set',
      category: 'Kurta sets',
      color: 'Fuchsia pink',
      colorHex: '#d63377',
      image: 'assets/images/pink-set-model.webp',
      imageKind: 'ai-model',
      imageAlt: 'AI-generated styling preview of an adult woman wearing a fuchsia pink kurta with small gold motifs, matching pink bottoms and a tasseled dupatta. Fit and small details are illustrative.',
      description: 'A vivid pink kurta with fine front pleats, scattered gold motifs and a gold-trimmed neckline and cuffs. Paired with matching pink bottoms and a tasseled dupatta — the scarf that completes this three-piece set.',
      detail: 'Three pieces shown · Fine front pleats · Gold accents · Tasseled dupatta',
      setContents: 'Kurta, matching pink bottoms and tasseled dupatta (3 pieces)',
      photoNote: 'The main image is AI-generated styling. Fit, length, drape and small details are approximate. The original store photograph and its detail crops remain in the gallery for comparison.',
      gallery: [
        {
          src: 'assets/images/pink-three-piece-set.webp',
          kind: 'store-photo',
          label: 'Real photo',
          alt: 'Actual store photograph of the pink kurta, matching bottoms and tasseled dupatta arranged together, with the background removed.',
          caption: 'Original store photograph — background removed and the view straightened. Parts hidden by folds or outside the original frame have not been invented.'
        },
        {
          src: 'assets/images/pink-set-neckline.webp',
          kind: 'store-photo',
          label: 'Neckline detail',
          alt: 'Close-up crop of the actual pink kurta’s gold-trimmed V neckline, fine pleats and small gold motifs.',
          caption: 'Neckline and pleat detail — a closer crop of the same photograph, not a separate camera angle.'
        },
        {
          src: 'assets/images/pink-set-dupatta.webp',
          kind: 'store-photo',
          label: 'Dupatta detail',
          alt: 'Close-up crop of the actual pink dupatta showing its fabric folds and pink tassels.',
          caption: 'Dupatta fabric and tassels — a closer crop of the same photograph, not a separate camera angle.'
        }
      ],
      price: null,
      isPreview: false
    },
    {
      id: 'navy-two-piece-set',
      name: 'Navy Two-Piece Kurta Set',
      cardName: 'Navy Kurta Set',
      category: 'Kurta sets',
      color: 'Navy & ivory',
      colorHex: '#354b61',
      image: 'assets/images/navy-set-model.webp',
      imageKind: 'ai-model',
      imageAlt: 'AI-generated styling preview of an adult woman wearing a navy and ivory printed kurta with matching trousers, without a scarf. Fit and small details are illustrative.',
      description: 'Small ivory motifs and larger paisley details on a navy ground, finished with fine contrast piping and pleat details. Matching printed bottoms complete this two-piece set. No scarf or dupatta is included.',
      detail: 'Two pieces: kurta + bottoms · Floral & paisley print · No scarf / dupatta',
      setContents: 'Kurta and matching printed bottoms only (2 pieces; no scarf/dupatta)',
      photoNote: 'The main image is AI-generated styling. Fit, length, drape and small details are approximate. The original store photograph and its detail crops remain in the gallery for comparison.',
      gallery: [
        {
          src: 'assets/images/navy-two-piece-set.webp',
          kind: 'store-photo',
          label: 'Real photo',
          alt: 'Actual store photograph of the navy printed kurta and matching elastic-waist bottoms, with the bedding background removed. There is no scarf.',
          caption: 'Original store photograph — kurta and matching bottoms only, no scarf. Background removed and the view straightened; unseen or cropped-off parts were not generated.'
        },
        {
          src: 'assets/images/navy-set-neckline.webp',
          kind: 'store-photo',
          label: 'Neckline detail',
          alt: 'Close-up crop of the actual navy kurta’s neckline, ivory contrast piping and small printed motifs.',
          caption: 'Neckline and piping detail — a closer crop of the same photograph, not a separate camera angle.'
        },
        {
          src: 'assets/images/navy-set-print.webp',
          kind: 'store-photo',
          label: 'Print detail',
          alt: 'Close-up crop of the actual navy and ivory print, larger paisley motifs and fine pleat details.',
          caption: 'Print and pleat detail — a closer crop of the same photograph, not a separate camera angle.'
        }
      ],
      price: null,
      isPreview: false
    },
    {
      id: 'green-two-piece-set',
      name: 'Green Two-Piece Kurta Set',
      cardName: 'Green Kurta Set',
      category: 'Kurta sets',
      color: 'Olive green',
      colorHex: '#a5af70',
      image: 'assets/images/green-set-model.webp',
      imageKind: 'ai-model',
      imageAlt: 'AI-generated styling preview of an adult woman wearing an olive-green kurta with a red floral neckline panel and coordinating plain green trousers, without a scarf. Fit and small details are illustrative.',
      description: 'An olive-green kurta with delicate red floral detail on its framed neckline panel and subtle dark cuff trim. Coordinating plain green bottoms complete the two-piece outfit. No scarf or dupatta is included.',
      detail: 'Two pieces: kurta + bottoms · Floral yoke detail · No scarf / dupatta',
      setContents: 'Kurta and coordinating plain green bottoms only (2 pieces; no scarf/dupatta)',
      photoNote: 'The main image is AI-generated styling. Fit, length, drape and small details are approximate. The original store photograph and its detail crops remain in the gallery for comparison.',
      gallery: [
        {
          src: 'assets/images/green-two-piece-set.webp',
          kind: 'store-photo',
          label: 'Real photo',
          alt: 'Actual store photograph of the olive-green kurta and coordinating elastic-waist bottoms, with the room and bedding background removed. There is no scarf.',
          caption: 'Original store photograph — kurta and coordinating bottoms only, no scarf. Background removed and the view straightened; unseen or cropped-off parts were not generated.'
        },
        {
          src: 'assets/images/green-set-yoke.webp',
          kind: 'store-photo',
          label: 'Yoke detail',
          alt: 'Close-up crop of the actual green kurta’s rounded neckline, dark-edged chest panel and small red floral detail.',
          caption: 'Floral neckline-panel detail — a closer crop of the same photograph, not a separate camera angle.'
        },
        {
          src: 'assets/images/green-set-cuff.webp',
          kind: 'store-photo',
          label: 'Cuff detail',
          alt: 'Close-up crop of the actual green kurta’s folded sleeve, narrow dark cuff edge and fabric texture.',
          caption: 'Sleeve and cuff detail — a closer crop of the same photograph, not a separate camera angle.'
        }
      ],
      price: null,
      isPreview: false
    },
    {
      "id": "white-floral-two-piece-set",
      "name": "White Floral Two-Piece Set",
      "cardName": "White Floral Set",
      "category": "Co-ord sets",
      "color": "White, grey & teal",
      "colorHex": "#e4e3de",
      "description": "A white collared button-front shirt with an asymmetric floral panel and printed cuffs, paired with coordinating floral-hem trousers. Two pieces only: shirt and bottoms, with no scarf or dupatta.",
      "detail": "Two pieces: shirt + trousers · Floral panels · No scarf / dupatta",
      "setContents": "Button-front shirt and coordinating floral-hem trousers (2 pieces; no scarf/dupatta)",
      "imageAlt": "AI-generated styling preview of an adult woman in a white floral-panel collared shirt and matching floral-hem trousers, without a scarf. Fit and details are illustrative.",
      "photoNote": "The main image is AI-generated styling. Fit, length, drape and small details are approximate. The original store photograph and detail crops remain in the gallery for comparison.",
      "image": "assets/images/white-floral-set-model.webp",
      "imageKind": "ai-model",
      "price": null,
      "isPreview": false,
      "gallery": [
        {
          "src": "assets/images/white-floral-set-photo.webp",
          "kind": "store-photo",
          "label": "Real photo",
          "alt": "Actual store photograph of the white floral two-piece set laid out together, with the room and bedding background removed.",
          "caption": "Original store photograph — background removed and the view straightened. Unseen or cropped-off garment parts were not generated."
        },
        {
          "src": "assets/images/white-floral-set-collar.webp",
          "kind": "store-photo",
          "label": "Collar detail",
          "alt": "Actual photograph crop: collar detail of the white floral two-piece set.",
          "caption": "Collar, buttons and floral panel — a closer crop of the same original photograph, not another camera angle."
        },
        {
          "src": "assets/images/white-floral-set-print.webp",
          "kind": "store-photo",
          "label": "Print detail",
          "alt": "Actual photograph crop: print detail of the white floral two-piece set.",
          "caption": "Floral trouser-hem print — a closer crop of the same original photograph, not another camera angle."
        }
      ]
    },
    {
      "id": "yellow-floral-kurti",
      "name": "Yellow Short Kurti — Top Only",
      "cardName": "Yellow Kurti (Top Only)",
      "category": "Kurtas",
      "color": "Mustard yellow & white",
      "colorHex": "#b9a620",
      "description": "A short, hip/upper-thigh-length mustard-yellow kurti with white floral and paisley neckline detail, scattered motifs and decorated cuffs. This listing is for the kurti only. The model’s ivory trousers are styling only and are not included.",
      "detail": "Short kurti only · White floral detail · No bottoms or scarf included",
      "setContents": "Short yellow kurti only (1 piece); model styling trousers, footwear and scarf are not included",
      "imageAlt": "AI-generated styling preview of an adult woman wearing a short yellow floral kurti ending at the hips/upper thighs. The ivory trousers are styling only and are not included.",
      "photoNote": "Only the short yellow kurti is included. The model’s ivory trousers and footwear are styling props, not products in this listing. The modelled image is AI-generated; exact fit and measurements should be confirmed with the store. See the original garment photo in the gallery.",
      "image": "assets/images/yellow-kurti-short-model.webp",
      "imageKind": "ai-model",
      "price": null,
      "isPreview": false,
      "gallery": [
        {
          "src": "assets/images/yellow-kurti-photo.webp",
          "kind": "store-photo",
          "label": "Real photo",
          "alt": "Actual store photograph of the yellow kurti only, with the bedding background removed. No bottoms or scarf are shown.",
          "caption": "Original store photograph — background removed and the view straightened. Unseen or cropped-off garment parts were not generated."
        },
        {
          "src": "assets/images/yellow-kurti-neckline.webp",
          "kind": "store-photo",
          "label": "Neckline detail",
          "alt": "Actual photograph crop: neckline detail of the yellow floral kurti — top only.",
          "caption": "White neckline detail — a closer crop of the actual kurti photograph, not a separate camera angle."
        },
        {
          "src": "assets/images/yellow-kurti-cuff.webp",
          "kind": "store-photo",
          "label": "Cuff detail",
          "alt": "Actual photograph crop: cuff detail of the yellow floral kurti — top only.",
          "caption": "White cuff detail — a closer crop of the same original kurti photograph."
        }
      ]
    },
    {
      "id": "dark-purple-three-piece-set",
      "name": "Dark Purple Three-Piece Kurta Set",
      "cardName": "Dark Purple Kurta Set",
      "category": "Kurta sets",
      "color": "Deep purple & white",
      "colorHex": "#3c254e",
      "description": "A deep-purple kurta with intricate white neckline and cuff details, coordinated with decorated-hem trousers and a dupatta with a white leafy-vine border. Three pieces: kurta, bottoms and scarf.",
      "detail": "Three pieces · White neckline and cuff detail · Leaf-border dupatta",
      "setContents": "Dark-purple kurta, decorated-hem bottoms and leaf-border dupatta (3 pieces)",
      "imageAlt": "AI-generated styling preview of an adult woman wearing a dark-purple kurta, white-detailed trouser hems and a matching leafy-border dupatta. Fit and details are illustrative.",
      "photoNote": "The main image is AI-generated styling. Fit, length, drape and small details are approximate. The original store photograph and detail crops remain in the gallery for comparison.",
      "image": "assets/images/dark-purple-set-model.webp",
      "imageKind": "ai-model",
      "price": null,
      "isPreview": false,
      "gallery": [
        {
          "src": "assets/images/dark-purple-set-photo.webp",
          "kind": "store-photo",
          "label": "Real photo",
          "alt": "Actual store photograph of the dark purple three-piece kurta set laid out together, with the room and bedding background removed.",
          "caption": "Original store photograph — background removed and the view straightened. Unseen or cropped-off garment parts were not generated."
        },
        {
          "src": "assets/images/dark-purple-set-neckline.webp",
          "kind": "store-photo",
          "label": "Neckline detail",
          "alt": "Actual photograph crop: neckline detail of the dark purple three-piece kurta set.",
          "caption": "White neckline detail — a closer crop of the actual dark-purple set photograph."
        },
        {
          "src": "assets/images/dark-purple-set-trim.webp",
          "kind": "store-photo",
          "label": "Trim detail",
          "alt": "Actual photograph crop: trim detail of the dark purple three-piece kurta set.",
          "caption": "Decorated trouser-hem detail — a closer crop of the same original photograph, not another camera angle."
        }
      ]
    },
    {
      "id": "plum-purple-three-piece-set",
      "name": "Plum Purple Three-Piece Kurta Set",
      "cardName": "Plum Purple Kurta Set",
      "category": "Kurta sets",
      "color": "Plum purple & white",
      "colorHex": "#77277e",
      "description": "A plum-purple kurta with a white paisley-floral neckline and scattered small flower details. Coordinating bottoms with a narrow white trim and a small-flower dupatta complete the three-piece set.",
      "detail": "Three pieces · White paisley-floral neckline · Small-flower dupatta",
      "setContents": "Plum-purple kurta, narrow-trim bottoms and small-flower dupatta (3 pieces)",
      "imageAlt": "AI-generated styling preview of an adult woman wearing a plum-purple kurta with white paisley-floral detail, coordinating trousers and a small-flower dupatta. Fit and details are illustrative.",
      "photoNote": "The main image is AI-generated styling. Fit, length, drape and small details are approximate. The original store photograph and detail crops remain in the gallery for comparison.",
      "image": "assets/images/plum-purple-set-model.webp",
      "imageKind": "ai-model",
      "price": null,
      "isPreview": false,
      "gallery": [
        {
          "src": "assets/images/plum-purple-set-photo.webp",
          "kind": "store-photo",
          "label": "Real photo",
          "alt": "Actual store photograph of the plum purple three-piece kurta set laid out together, with the room and bedding background removed.",
          "caption": "Original store photograph — background removed and the view straightened. Unseen or cropped-off garment parts were not generated."
        },
        {
          "src": "assets/images/plum-purple-set-neckline.webp",
          "kind": "store-photo",
          "label": "Neckline detail",
          "alt": "Actual photograph crop: neckline detail of the plum purple three-piece kurta set.",
          "caption": "Paisley-floral neckline — a closer crop of the actual plum-purple set photograph."
        },
        {
          "src": "assets/images/plum-purple-set-trim.webp",
          "kind": "store-photo",
          "label": "Trim detail",
          "alt": "Actual photograph crop: trim detail of the plum purple three-piece kurta set.",
          "caption": "Narrow trouser-trim detail — a closer crop of the same original photograph, not another camera angle."
        }
      ]
    }
  ]
};
