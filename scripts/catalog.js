/*
 * SUTRAS — editable store content
 * Replace the images in assets/images/ and edit these entries as your real
 * collection becomes available. See README.md before changing isPreview.
 * The orange three-piece set uses a store photograph. Other styles remain
 * illustrative previews. No price or size availability has been supplied.
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
      image: 'assets/images/orange-three-piece-set.webp',
      imageAlt: 'Actual Sutras photograph of an orange three-piece outfit: a decorated kurta, folded bottoms and a scarf, arranged together on a cleaned neutral background.',
      description: 'Warm orange, a decorative neckline, leaf motifs and coordinating printed fabric. This three-piece set brings together a kurta (the top), bottoms and a dupatta (the scarf).',
      detail: 'Three pieces shown · Embellished neckline · Leaf details & patterned fabric',
      photoNote: 'Original store photo, straightened with the background removed. Detail views are crops from this same photograph.',
      gallery: [
        {
          src: 'assets/images/orange-set-neckline.webp',
          label: 'Neckline detail',
          alt: 'Close-up crop of the orange kurta’s decorated neckline from the same store photograph.',
          caption: 'Neckline detail — a closer crop of the same photograph, not a separate camera angle.'
        },
        {
          src: 'assets/images/orange-set-print.webp',
          label: 'Fabric detail',
          alt: 'Close-up crop of the multicoloured printed fabric shown with the orange kurta set.',
          caption: 'Printed fabric detail — a closer crop of the same photograph, not a separate camera angle.'
        }
      ],
      price: null,
      isPreview: false
    },
    {
      id: 'bela',
      name: 'The Bela Kurta',
      category: 'Kurtas',
      color: 'Ivory & sage',
      colorHex: '#c7c9b8',
      image: 'assets/images/bela.webp',
      imageAlt: 'Illustrative style: a woman wearing an ivory kurta with sage botanical motifs.',
      description: 'Like a quiet morning in the garden. An ivory-and-sage botanical look with an easy straight silhouette, paired here with simple cream trousers.',
      detail: 'Botanical-inspired pattern · Straight silhouette · Soft neutral tones',
      price: null,
      isPreview: true
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
