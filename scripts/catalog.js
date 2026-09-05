/*
 * SUTRAS — editable store content
 * Replace the images in assets/images/ and edit these entries as your real
 * collection becomes available. See README.md before changing isPreview.
 * The orange and pink sets have modelled main images and actual source photos
 * in their galleries. isPreview describes concept products; imageKind describes
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
      id: 'gulabi',
      name: 'The Gulabi Dress',
      category: 'Dresses',
      color: 'Dusty rose',
      colorHex: '#ba8a80',
      image: 'assets/images/gulabi.webp',
      imageAlt: 'Illustrative style: a woman wearing a dusty rose Indian-inspired cotton dress.',
      description: 'A softer shade of everyday. A flowing, Indian-inspired dress with delicate print details and room to move, in a sun-washed shade of rose.',
      detail: 'Delicate print inspiration · Flowing silhouette · Three-quarter sleeves',
      price: null,
      isPreview: true
    },
    {
      id: 'olive',
      name: 'The Olive Co-ord',
      category: 'Co-ord sets',
      color: 'Soft olive',
      colorHex: '#8d9677',
      image: 'assets/images/olive.webp',
      imageAlt: 'Illustrative style: a woman wearing a soft olive tunic and matching wide-leg trousers.',
      description: 'Good together. Effortless apart. An earthy olive tunic-and-trouser look that brings a quietly modern feeling to an Indian-wear wardrobe.',
      detail: 'Solid-colour inspiration · Relaxed tunic · Matching wide-leg trousers',
      price: null,
      isPreview: true
    }
  ]
};
