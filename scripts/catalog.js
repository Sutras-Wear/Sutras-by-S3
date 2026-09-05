/*
 * SUTRAS — editable store content
 * Replace the images in assets/images/ and edit these entries as your real
 * collection becomes available. See README.md before changing isPreview.
 * All four sets use modelled main images and actual source photographs
 * in their galleries. There are no remaining concept product entries. isPreview describes concept products; imageKind describes
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
    }
  ]
};
