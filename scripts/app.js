/* Sutras storefront — vanilla JavaScript, no services or build step required. */
(() => {
  'use strict';

  const config = window.SUTRAS;
  if (!config || !Array.isArray(config.products)) return;
  const products = config.products;
  const byId = new Map(products.map(product => [product.id, product]));
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const icon = name => `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const sizes = ['Not sure', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const storageKey = 'sutras-enquiry-bag-v1';
  const maxQuantity = 10;
  let activeProduct = null;
  let activeGallery = [];
  let selectedPhotoIndex = 0;
  let selectedSize = 'Not sure';
  let activeFilter = 'All';
  let toastTimer;
  let storageAvailable = true;
  let bag = [];
  let orderNote = '';

  // The file preview may be sandboxed without localStorage. Browsing and the
  // current in-memory enquiry bag still work; storage is never mandatory.
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || 'null');
    if (saved && Array.isArray(saved.items)) {
      bag = saved.items.slice(0, 50).filter(item => item && byId.has(item.id) && sizes.includes(item.size) && Number.isInteger(item.quantity) && item.quantity >= 1 && item.quantity <= maxQuantity);
      orderNote = typeof saved.note === 'string' ? saved.note.slice(0, 500) : '';
      if (!bag.length) orderNote = '';
    }
  } catch (_) {
    storageAvailable = false;
  }

  function saveBag() {
    try {
      if (bag.length) localStorage.setItem(storageKey, JSON.stringify({ version: 1, items: bag, note: orderNote }));
      else localStorage.removeItem(storageKey);
      storageAvailable = true;
    } catch (_) {
      storageAvailable = false;
    }
  }

  function priceText(product) {
    if (typeof product.price !== 'number' || !Number.isFinite(product.price) || product.isPreview) return 'Price on enquiry';
    return new Intl.NumberFormat('en-ZM', { style: 'currency', currency: config.currency || 'ZMW', maximumFractionDigits: 2 }).format(product.price);
  }

  function colorValue(product) {
    return /^#[0-9a-f]{6}$/i.test(product.colorHex) ? product.colorHex : '#c9c8bb';
  }

  function waLink(text, line = 0) {
    const number = (config.whatsapp[line] || config.whatsapp[0]).replace(/\D/g, '');
    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  }

  function showToast(text) {
    const toast = $('#toast');
    clearTimeout(toastTimer);
    toast.textContent = text;
    toast.classList.add('visible');
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 3200);
  }

  function syncScrollLock() {
    document.body.classList.toggle('modal-open', Boolean($('dialog[open]')));
  }

  function openDialog(id) {
    const dialog = document.getElementById(id);
    if (!dialog || dialog.open) return;
    $$('dialog[open]').forEach(open => open.close());
    dialog.showModal();
    dialog.scrollTop = 0;
    syncScrollLock();
    if (id === 'search-dialog') {
      renderSearch();
      $('#search-input').focus({ preventScroll: true });
    }
  }

  $$('dialog').forEach(dialog => {
    dialog.addEventListener('close', syncScrollLock);
    dialog.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        // Search inputs otherwise consume the first Escape to clear themselves.
        event.preventDefault();
        dialog.close();
      }
      if (event.key === 'Tab') {
        const focusable = $$('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), summary, [tabindex="0"]', dialog)
          .filter(element => element.getClientRects().length > 0 && !element.closest('[hidden]'));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    });
    // A click outside the dialog panel closes it. Interior whitespace does not.
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
    });
  });

  document.addEventListener('click', event => {
    const close = event.target.closest('[data-close-dialog]');
    if (close) close.closest('dialog').close();
    if (event.target.closest('[data-open-search]')) openDialog('search-dialog');
    if (event.target.closest('[data-open-bag]')) { renderBag(); openDialog('bag-dialog'); }
    if (event.target.closest('[data-open-contact]')) openDialog('contact-dialog');
    if (event.target.closest('[data-open-info]')) openDialog('info-dialog');
    if (event.target.closest('[data-open-menu]')) openDialog('menu-dialog');
    const productButton = event.target.closest('[data-product]');
    if (productButton) openProduct(productButton.dataset.product);
  });

  $$('#menu-dialog nav a').forEach(link => link.addEventListener('click', () => $('#menu-dialog').close()));

  function primaryImageKind(product) {
    return ['ai-model', 'store-photo', 'style-preview'].includes(product.imageKind)
      ? product.imageKind : (product.isPreview ? 'style-preview' : 'store-photo');
  }

  function imageTypeLabel(kind) {
    return kind === 'ai-model' ? 'AI modelled view' : kind === 'store-photo' ? 'Store photograph' : 'Illustrative style preview';
  }

  function badgeClass(kind) {
    return `preview-tag${kind === 'ai-model' ? ' ai-model-tag' : kind === 'store-photo' ? ' store-photo-tag' : ''}`;
  }

  function badgeText(kind, detail = false) {
    return kind === 'ai-model' ? 'AI MODEL VIEW' : kind === 'store-photo' ? (detail ? 'ACTUAL STORE PHOTO' : 'STORE PHOTO') : (detail ? 'ILLUSTRATIVE STYLE PREVIEW' : 'STYLE PREVIEW');
  }

  function imageBadge(kind, detail = false, id = '') {
    return `<span${id ? ` id="${id}"` : ''} class="${badgeClass(kind)}">${badgeText(kind, detail)}</span>`;
  }

  function productCard(product, index) {
    return `<article class="product-card" style="animation-delay:${index * 40}ms">
      <div class="product-image-wrap${primaryImageKind(product) === 'ai-model' ? ' model-image-wrap' : ''}">
        <button type="button" class="product-image-link" data-product="${escape(product.id)}" aria-label="View ${escape(product.name)}${product.isPreview ? ', illustrative style preview' : primaryImageKind(product) === 'ai-model' ? ', AI-modelled view' : ''}">
          <img src="${escape(product.image)}" alt="${escape(product.imageAlt)}" width="896" height="1200" loading="lazy" decoding="async">
          ${imageBadge(primaryImageKind(product))}
          <span class="image-view-label">Take a closer look ↗</span>
        </button>
        <button class="quick-add" type="button" data-product="${escape(product.id)}" aria-label="Choose your size preference for ${escape(product.name)}">${icon('plus')}</button>
      </div>
      <div class="product-meta">
        <p class="product-category"><span>${escape(product.category)}</span><span class="color-dot" style="background:${colorValue(product)}" role="img" aria-label="${escape(product.color)}"></span></p>
        <h3><button type="button" class="product-name" data-product="${escape(product.id)}">${escape(product.cardName || product.name)}</button></h3>
        <div class="product-bottom-line"><p class="product-price">${escape(priceText(product))}</p><button class="product-enquire" type="button" data-product="${escape(product.id)}">Explore style ↗</button></div>
      </div>
    </article>`;
  }

  function renderProducts() {
    const visible = products.filter(product => activeFilter === 'All' || product.category === activeFilter);
    $('#product-grid').innerHTML = visible.length ? visible.map(productCard).join('') : '<div class="search-empty"><h3>Something lovely is taking shape.</h3><p>Message us on WhatsApp to discover the current collection.</p></div>';
    $('#style-count').textContent = `${visible.length} ${visible.every(product => product.isPreview) ? 'style preview' : 'style'}${visible.length === 1 ? '' : 's'}`;
    $$('.filter-button').forEach(button => {
      const isActive = button.dataset.filter === activeFilter;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
      if (button.dataset.filter !== 'All') button.hidden = !products.some(product => product.category === button.dataset.filter);
      else $('span', button).textContent = String(products.length).padStart(2, '0');
    });
  }

  $$('.filter-button').forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    renderProducts();
  }));

  function normalize(value) {
    return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
  }

  function renderSearch() {
    const query = normalize($('#search-input').value);
    const tokens = query.split(' ').filter(Boolean);
    const found = products.filter(product => {
      const haystack = normalize(`${product.name} ${product.category} ${product.color} ${product.description} cotton Indian wear`);
      return tokens.every(token => haystack.includes(token));
    });
    $('#search-result-count').textContent = query ? `${found.length} matching style${found.length === 1 ? '' : 's'}` : `Explore all ${products.length} ${products.every(product => product.isPreview) ? 'style previews' : 'styles'}`;
    $('#search-results').innerHTML = found.length ? found.map(product => `<button class="search-result" type="button" data-product="${escape(product.id)}"><img src="${escape(product.image)}" alt="${escape(product.imageAlt)}" width="62" height="83"><span><strong>${escape(product.cardName || product.name)}</strong><small>${escape(product.category)} · ${escape(product.color)}</small><small>${escape(imageTypeLabel(primaryImageKind(product)))}${product.isPreview ? '' : ' · ' + escape(priceText(product))}</small></span></button>`).join('') : '<div class="search-empty"><h3>No match, just yet.</h3><p>Try a colour or a category, like “blue” or “kurta”. Our actual collection is a WhatsApp message away.</p></div>';
  }

  $('#search-input').addEventListener('input', renderSearch);
  $('#search-form').addEventListener('submit', event => { event.preventDefault(); renderSearch(); });
  $('#search-form').addEventListener('reset', () => {
    $('#search-input').value = '';
    renderSearch();
    $('#search-input').focus();
  });

  function directMessage(product, size = 'Not sure') {
    const intro = product.isPreview
      ? `Hi Sutras by S³! I saw the illustrative style preview “${product.name}” (${product.category}, ${product.color}) on your website. I understand this is inspiration, not confirmed stock. Could you share similar current pieces, prices and available sizes?`
      : `Hi Sutras by S³! I’m interested in ${product.name} (${product.category}, ${product.color}). Could you confirm the price and availability?`;
    const imageNote = primaryImageKind(product) === 'ai-model' ? ' I viewed the AI-modelled image and understand that fit and styling are approximate; please confirm the actual garment details.' : '';
    return `${intro}${imageNote}\nMy usual size: ${size === 'Not sure' ? 'I would appreciate sizing advice' : size}.`;
  }

  function galleryFor(product) {
    return [{
      src: product.image,
      alt: product.imageAlt,
      kind: primaryImageKind(product),
      label: primaryImageKind(product) === 'ai-model' ? 'AI model' : product.isPreview ? 'Style preview' : 'Full set',
      caption: product.isPreview ? 'AI-generated style inspiration, not a confirmed stock photograph.' : (product.photoNote || 'Actual store photograph. Please confirm current availability on WhatsApp.')
    }, ...(Array.isArray(product.gallery) ? product.gallery.filter(photo => photo && photo.src && photo.label).map(photo => ({ ...photo, kind: photo.kind || (product.isPreview ? 'style-preview' : 'store-photo') })) : [])];
  }

  function productMedia(product) {
    const photo = activeGallery[0];
    const stage = `<div class="product-detail-image${photo.kind === 'ai-model' ? ' modelled-product-image' : photo.kind === 'store-photo' ? ' real-product-image' : ''}">
      <img id="product-main-image" src="${escape(photo.src)}" alt="${escape(photo.alt)}" width="${product.isPreview ? '896' : '1200'}" height="${product.isPreview ? '1200' : '1600'}">
      ${imageBadge(photo.kind, true, 'product-photo-badge')}
      ${!product.isPreview ? `<button class="photo-zoom-button" type="button" data-zoom-photo aria-label="Enlarge the selected product image">${icon('search')}<span>View larger</span></button>` : ''}
    </div>`;
    if (activeGallery.length === 1) return stage;
    return `<div class="product-detail-media has-gallery">${stage}
      <div class="photo-gallery" style="--gallery-columns:${Math.min(activeGallery.length, 4)}" role="group" aria-label="Choose a view of this product">
        ${activeGallery.map((image, index) => `<button class="photo-thumbnail" type="button" data-photo-index="${index}" aria-pressed="${index === 0}" aria-label="Show ${escape(image.label.toLowerCase())}"><img src="${escape(image.src)}" alt="" width="45" height="60"><span>${escape(image.label)}</span></button>`).join('')}
      </div>
      <p class="photo-caption" id="photo-caption" aria-live="polite">${escape(photo.caption)}</p>
    </div>`;
  }

  function selectPhoto(index) {
    if (!Number.isInteger(index) || !activeGallery[index]) return;
    selectedPhotoIndex = index;
    const photo = activeGallery[index];
    const image = $('#product-main-image');
    image.src = photo.src;
    image.alt = photo.alt || activeProduct.imageAlt;
    image.removeAttribute('data-fallback');
    const stage = image.parentElement;
    stage.classList.toggle('modelled-product-image', photo.kind === 'ai-model');
    stage.classList.toggle('real-product-image', photo.kind === 'store-photo');
    const badge = $('#product-photo-badge');
    badge.className = badgeClass(photo.kind);
    badge.textContent = badgeText(photo.kind, true);
    $$('.photo-thumbnail').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.photoIndex) === index)));
    const caption = $('#photo-caption');
    if (caption) caption.textContent = photo.caption || '';
  }

  function showPhotoViewer() {
    const photo = activeGallery[selectedPhotoIndex];
    if (!photo || !activeProduct) return;
    $('#image-viewer-title').textContent = `${activeProduct.cardName || activeProduct.name} — ${photo.label}`;
    const image = $('#image-viewer-image');
    image.src = photo.src;
    image.alt = photo.alt || activeProduct.imageAlt;
    image.hidden = false;
    image.removeAttribute('data-fallback');
    $('#image-viewer-caption').textContent = photo.caption || '';
    // Keep the product dialog underneath so closing the photograph returns to
    // exactly the same style, size preference and selected thumbnail.
    $('#image-dialog').showModal();
    syncScrollLock();
  }

  function openProduct(id) {
    const product = byId.get(id);
    if (!product) return;
    activeProduct = product;
    activeGallery = galleryFor(product);
    selectedPhotoIndex = 0;
    selectedSize = 'Not sure';
    $('#product-detail').innerHTML = `<div class="product-detail-layout">
      ${productMedia(product)}
      <div class="product-detail-copy">
        <p class="detail-eyebrow">THE COTTON EDIT / ${escape(product.category.toUpperCase())}</p>
        <h2 id="product-title">${escape(product.name)}</h2>
        <p class="detail-color"><span class="color-dot" style="background:${colorValue(product)}"></span>${escape(product.color)}</p>
        <p class="detail-description">${escape(product.description)}</p>
        <p class="detail-features">${escape(product.detail)}</p>
        ${product.isPreview ? '<p class="preview-notice"><strong>A little inspiration, not a stock listing.</strong>This AI-generated image and style name are placeholders. Ask us about similar real pieces, prices and availability.</p>' : `<p class="preview-notice ${primaryImageKind(product) === 'ai-model' ? 'ai-model-notice' : 'real-photo-notice'}"><strong>${primaryImageKind(product) === 'ai-model' ? 'About the modelled view.' : 'Photographed by Sutras.'}</strong>${escape(product.photoNote || 'Actual product photograph. Please confirm the price, sizing and availability with us.')}</p>`}
        <p class="detail-size-label" id="size-label">Your usual size <span>— a preference, not confirmed availability</span></p>
        <div class="size-list" role="group" aria-labelledby="size-label">${sizes.map(size => `<button class="size-option" type="button" data-size="${escape(size)}" aria-pressed="${size === selectedSize}">${escape(size)}</button>`).join('')}</div>
        <p class="size-helper">Not sure? We can help with the actual garment’s fit.</p>
        <div class="detail-price"><span>${escape(priceText(product))}</span><span>Availability to confirm</span></div>
        <button class="button button-green full-width detail-add-button" type="button" id="add-to-bag">${icon('bag')} Add to enquiry bag ${icon('arrow')}</button>
        <a class="detail-direct-enquiry" id="direct-enquiry" href="${escape(waLink(directMessage(product)))}" target="_blank" rel="noopener noreferrer">Or ask about this style on WhatsApp ↗</a>
      </div>
    </div>`;
    openDialog('product-dialog');
  }

  $('#product-detail').addEventListener('click', event => {
    const photoButton = event.target.closest('[data-photo-index]');
    if (photoButton) selectPhoto(Number(photoButton.dataset.photoIndex));
    if (event.target.closest('[data-zoom-photo]')) showPhotoViewer();
    const sizeButton = event.target.closest('[data-size]');
    if (sizeButton) {
      selectedSize = sizeButton.dataset.size;
      $$('.size-option').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.size === selectedSize)));
      $('#direct-enquiry').href = waLink(directMessage(activeProduct, selectedSize));
    }
    if (event.target.closest('#add-to-bag') && activeProduct) addToBag(activeProduct.id, selectedSize);
  });

  function addToBag(id, size) {
    if (!byId.has(id) || !sizes.includes(size)) return;
    const existing = bag.find(item => item.id === id && item.size === size);
    if (existing && existing.quantity >= maxQuantity) {
      const button = $('#add-to-bag');
      button.textContent = 'Maximum 10 per style & size — message us for more';
      return;
    }
    if (existing) existing.quantity += 1;
    else bag.push({ id, size, quantity: 1 });
    saveBag();
    renderBag();
    openDialog('bag-dialog');
  }

  function enquiryMessage() {
    const hasPreviews = bag.some(item => byId.get(item.id).isPreview);
    const hasModelledViews = bag.some(item => primaryImageKind(byId.get(item.id)) === 'ai-model');
    const lines = [
      'Hi Sutras by S³! I’d love to enquire about pure cotton Indian wear.',
      hasPreviews ? 'My selection below may include real product photos and illustrative style previews. Only items labelled “style preview” are inspiration, not confirmed stock. Please confirm availability of the photographed pieces and share real alternatives for the previews, with prices and sizes.' : 'I saved these pieces on your website. Please confirm prices and availability.',
      ...(hasModelledViews ? ['AI-modelled views are styling illustrations. Please confirm the actual garment details and fit.'] : []),
      '',
      ...bag.map((item, index) => {
        const product = byId.get(item.id);
        const size = item.size === 'Not sure' ? 'sizing advice please' : item.size;
        return `${index + 1}. ${product.name}${product.isPreview ? ' (style preview)' : primaryImageKind(product) === 'ai-model' ? ' (AI-modelled view; real photo in gallery)' : ' (store photograph)'} — ${product.color}\n   Usual size: ${size} | Requested quantity: ${item.quantity}`;
      }),
      '',
      ...(orderNote.trim() ? [`My note: ${orderNote.trim()}`, ''] : []),
      'Please also confirm delivery or collection options in Lusaka/Zambia and payment details. This is an enquiry, not a confirmed order. Thank you!'
    ];
    return lines.join('\n');
  }

  function updateWhatsAppLinks() {
    const message = enquiryMessage();
    $('#bag-whatsapp').href = waLink(message, 0);
    $('#bag-whatsapp-alt').href = waLink(message, 1);
  }

  function renderBag() {
    const count = bag.reduce((sum, item) => sum + item.quantity, 0);
    $$('[data-bag-count]').forEach(element => element.textContent = count);
    $$('button.bag-button').forEach(button => button.setAttribute('aria-label', `Open your enquiry bag, ${count} item${count === 1 ? '' : 's'}`));
    $('#bag-footer').hidden = !bag.length;
    $('#order-note').value = orderNote;
    if (!bag.length) {
      $('#bag-items').innerHTML = `<div class="empty-bag">${icon('bag')}<h3>A little room for lovely things.</h3><p>Explore the collection and add the pieces or inspiration you love. We’ll confirm actual availability with you.</p><button class="button button-rust" type="button" data-browse-styles>Explore the collection ${icon('arrow')}</button></div>`;
      return;
    }
    $('#bag-items').innerHTML = bag.map((item, index) => {
      const product = byId.get(item.id);
      return `<article class="bag-item">
        <img src="${escape(product.image)}" alt="${escape(product.imageAlt)}" width="79" height="106">
        <div class="bag-item-content">
          <div class="bag-item-heading"><h3>${escape(product.cardName || product.name)}</h3><button class="bag-remove" type="button" data-remove="${index}" aria-label="Remove ${escape(product.name)}, size ${escape(item.size)}, from your bag">Remove</button></div>
          <p>${escape(product.color)} · ${item.size === 'Not sure' ? 'Size: advice please' : `Usual size: ${escape(item.size)}`}<br>${escape(imageTypeLabel(primaryImageKind(product)))}${product.isPreview ? '' : ' · ' + escape(product.category)}</p>
          <div class="bag-item-bottom"><div class="quantity-controls" role="group" aria-label="Requested quantity for ${escape(product.name)}, size ${escape(item.size)}"><button type="button" data-quantity="${index}" data-change="-1" aria-label="Decrease quantity for ${escape(product.name)}" ${item.quantity <= 1 ? 'disabled' : ''}>${icon('minus')}</button><span class="quantity-value">${item.quantity}</span><button type="button" data-quantity="${index}" data-change="1" aria-label="Increase quantity for ${escape(product.name)}" ${item.quantity >= maxQuantity ? 'disabled' : ''}>${icon('plus')}</button></div><span>${escape(priceText(product))}</span></div>
        </div>
      </article>`;
    }).join('') + '<button class="clear-bag" type="button" data-clear-bag>Clear entire bag</button>';
    $('#bag-summary').textContent = `${count} requested piece${count === 1 ? '' : 's'} · ${bag.length} selection${bag.length === 1 ? '' : 's'}`;
    $('.bag-disclaimer').textContent = `Opens WhatsApp with your selection. Nothing is ordered, reserved or charged on this website.${bag.some(item => byId.get(item.id).isPreview) ? ' Preview styles are not confirmed stock.' : ''}${bag.some(item => primaryImageKind(byId.get(item.id)) === 'ai-model') ? ' AI-modelled views illustrate styling; actual fit may differ.' : ''}${storageAvailable ? '' : ' This preview cannot save your bag between visits.'}`;
    updateWhatsAppLinks();
  }

  $('#bag-items').addEventListener('click', event => {
    const quantityButton = event.target.closest('[data-quantity]');
    const removeButton = event.target.closest('[data-remove]');
    const clearButton = event.target.closest('[data-clear-bag]');
    const browseButton = event.target.closest('[data-browse-styles]');
    if (browseButton) {
      $('#bag-dialog').close();
      $('#collection').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      $('.filter-button').focus({ preventScroll: true });
      return;
    }
    if (quantityButton) {
      const index = Number(quantityButton.dataset.quantity);
      const change = Number(quantityButton.dataset.change);
      if (!bag[index]) return;
      bag[index].quantity = Math.min(maxQuantity, Math.max(1, bag[index].quantity + change));
      saveBag();
      renderBag();
      // Keep keyboard focus after the quantity controls have re-rendered.
      const replacement = $(`[data-quantity="${index}"][data-change="${change}"]`);
      if (replacement && !replacement.disabled) replacement.focus({ preventScroll: true });
      else $(`[data-quantity="${index}"][data-change="${-change}"]`)?.focus({ preventScroll: true });
      return;
    }
    if (removeButton) {
      const index = Number(removeButton.dataset.remove);
      bag.splice(index, 1);
      if (!bag.length) orderNote = '';
      saveBag();
      renderBag();
      ($('[data-remove]') || $('[data-browse-styles]'))?.focus({ preventScroll: true });
    }
    if (clearButton) {
      bag = [];
      orderNote = '';
      saveBag();
      renderBag();
      $('[data-browse-styles]')?.focus({ preventScroll: true });
    }
  });

  $('#order-note').addEventListener('input', event => {
    orderNote = event.target.value.slice(0, 500);
    saveBag();
    updateWhatsAppLinks();
  });

  // Keep separate tabs in step without sending anything to a server.
  window.addEventListener('storage', event => {
    if (event.key !== storageKey) return;
    try {
      const saved = JSON.parse(event.newValue || 'null');
      bag = saved && Array.isArray(saved.items) ? saved.items.slice(0, 50).filter(item => item && byId.has(item.id) && sizes.includes(item.size) && Number.isInteger(item.quantity) && item.quantity >= 1 && item.quantity <= maxQuantity) : [];
      orderNote = bag.length && typeof saved.note === 'string' ? saved.note.slice(0, 500) : '';
      renderBag();
    } catch (_) { /* Leave the current selection intact if saved data is invalid. */ }
  });

  // Prevent a broken-image icon if a file is accidentally omitted on upload.
  // This local, original SVG fallback has no external dependencies.
  const imageFallback = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800"><rect width="600" height="800" fill="#eeece3"/><path d="M300 500V350m0 70c-65 0-100-40-100-70 60-5 90 25 100 70Zm0-55c65 0 100-40 100-70-60-5-90 25-100 70Z" fill="none" stroke="#9aa48b" stroke-width="3"/><text x="300" y="565" text-anchor="middle" fill="#45533f" font-family="Georgia,serif" font-size="38">A little beauty, coming soon.</text><text x="300" y="610" text-anchor="middle" fill="#6c7065" font-family="Arial,sans-serif" font-size="18">Please ask us for current photographs.</text></svg>');
  document.addEventListener('error', event => {
    const image = event.target;
    if (image instanceof HTMLImageElement && !image.dataset.fallback) {
      image.dataset.fallback = 'true';
      image.src = imageFallback;
    }
  }, true);

  const hasPreviewProducts = products.some(product => product.isPreview);
  const hasRealProducts = products.some(product => !product.isPreview);
  $$('[data-collection-preview-note]').forEach(note => note.hidden = !hasPreviewProducts);
  $$('[data-imagery-note]').forEach(note => note.hidden = !config.imageryIsIllustrative);
  if (hasPreviewProducts && hasRealProducts) {
    $('#stock-faq-answer').textContent = 'AI model views are generated styling illustrations of store products, with approximate fit and drape; the original store photographs are available in the product gallery. Cards labelled “Style preview” are concept examples, not confirmed stock. Confirm actual pieces, prices, measurements and availability on WhatsApp.';
    $('#imagery-info').textContent = 'AI model views are generated illustrations, not photographs of a model wearing the actual garment. Fit, length, drape and small details are approximate. Images labelled “Actual store photo” are the original product photographs or disclosed crops. The campaign, moodboard and other style-preview cards also use AI-generated imagery. Please confirm the real garment details before ordering.';
  }
  if (!hasPreviewProducts) {
    $('#stock-faq-answer').textContent = 'Please message us to confirm current availability, prices and sizing for the actual pieces before ordering. Product availability is confirmed personally on WhatsApp, not by this website.';
  }
  if (!config.imageryIsIllustrative && !hasPreviewProducts) {
    $('#imagery-info').textContent = 'The collection has been updated with store-provided imagery and details. Please confirm current stock, prices and garment measurements directly with Sutras before placing an order.';
  }
  $('#year').textContent = new Date().getFullYear();
  renderProducts();
  renderBag();
})();
