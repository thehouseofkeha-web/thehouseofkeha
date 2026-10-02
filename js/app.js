/**
 * KEHA Portfolio App Logic
 * Mobile-First, High Performance Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // Instagram Profile URL from official document
  const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/the_keha_collective?igsh=MXF4dGp4ZXJmM3pmZQ==';

  // Catalog Data with 22 Handcrafted Creations from Order.docx
  const products = [
    {
      id: 'k001',
      code: 'K-001',
      name: 'Cloth Journal',
      price: '₹250 - ₹450',
      category: 'Stationery',
      productImg: 'assets/k001-product.jpg.jpg',
      makerImg: 'assets/k001-maker.jpg.jpg',
      makerName: 'Habeeba',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'A dedicated housewife who began her entrepreneurial journey during the COVID-19 pandemic. With support from iLab, she transforms everyday craft into nourishing lifestyle creations. Her collection features hand-woven fabric diaries, natural soaps, and bath bars.',
      description: 'Handcrafted cloth-bound journal made with rich fabric covers. Available in Small (₹250), Medium (₹350), and Big (₹450) sizes for keepsakes and daily notes.',
      altNames: ['Loom & Quill Fabric Diary', 'Handcrafted Heritage Keepsake Book']
    },
    {
      id: 'k002',
      code: 'K-002',
      name: 'Post Card (Pack of 4)',
      price: '₹150',
      category: 'Stationery',
      productImg: 'assets/k002-product.jpg.jpg',
      makerImg: 'assets/k002-maker.jpg.jpg',
      makerName: 'Punnya M K',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'An inventive entrepreneur who chose the path less travelled over a conventional routine, she turned a therapeutic fascination into a purpose-driven venture. Stepping into Kerala\'s craft market with family support, she crafts eco-conscious goods that bring mindful warmth into everyday spaces.',
      description: 'A charming set of 4 printed art postcards capturing nostalgic themes, travel art, and traditional aesthetics.',
      altNames: ['Nostalgia Mail Art', 'Mini Travel Prints & Collector Cards']
    },
    {
      id: 'k003',
      code: 'K-003',
      name: 'Paper Book Marks (Pack of 4)',
      price: '₹120',
      category: 'Stationery',
      productImg: 'assets/k003-product.jpg.jpeg',
      makerImg: 'assets/k003-maker.jpg.jpg',
      makerName: 'Punnya M K',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'An inventive entrepreneur who chose the path less travelled over a conventional routine, she turned a therapeutic fascination into a purpose-driven venture. Stepping into Kerala\'s craft market with family support, she crafts eco-conscious goods that bring mindful warmth into everyday spaces.',
      description: 'Set of 4 illustrated paper bookmarks designed for book lovers, printed on eco-friendly durable cardstock.',
      altNames: ['Page Hugger Bookmark', 'Artisan Illustrated Book Tag']
    },
    {
      id: 'k004',
      code: 'K-004',
      name: 'Magnetic Book Mark (Pack of 3)',
      price: '₹150',
      category: 'Stationery',
      productImg: 'assets/k004-product.jpg.jpg',
      makerImg: 'assets/k004-maker.jpg.jpg',
      makerName: 'Punnya M K',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'An inventive entrepreneur who chose the path less travelled over a conventional routine, she turned a therapeutic fascination into a purpose-driven venture. Stepping into Kerala\'s craft market with family support, she crafts eco-conscious goods that bring mindful warmth into everyday spaces.',
      description: 'Pack of 3 magnetic bookmarks that gently clip over your pages, ensuring you never lose your reading spot.',
      altNames: ['Snap-Lock Page Grip', 'Never-Lose Magnetic Marker']
    },
    {
      id: 'k005',
      code: 'K-005',
      name: 'Mini Book',
      price: '₹60',
      category: 'Stationery',
      productImg: 'assets/k005-product.jpg.jpg',
      makerImg: 'assets/k005-maker.jpg.jpg',
      makerName: 'Punnya M K',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'An inventive entrepreneur who chose the path less travelled over a conventional routine, she turned a therapeutic fascination into a purpose-driven venture. Stepping into Kerala\'s craft market with family support, she crafts eco-conscious goods that bring mindful warmth into everyday spaces.',
      description: 'Delightful pocket-sized miniature notebook crafted with unruled paper for quick thoughts, quotes, or mini gifts.',
      altNames: ['Pocket Wonder Micro-Journal', 'Fairy Tale Mini Book Charm']
    },
    {
      id: 'k006',
      code: 'K-006',
      name: 'Bamboo Toothbrush',
      price: '₹50 - ₹120',
      category: 'Eco-friendly',
      productImg: 'assets/k006-product.jpg.jpeg',
      makerImg: 'assets/k006-maker.jpg.jpg',
      makerName: 'Punnya M K',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'An inventive entrepreneur who chose the path less travelled over a conventional routine, she turned a therapeutic fascination into a purpose-driven venture. Stepping into Kerala\'s craft market with family support, she crafts eco-conscious goods that bring mindful warmth into everyday spaces.',
      description: '100% biodegradable bamboo toothbrush with soft charcoal bristles. Available individually (₹50) or as a Pack of 3 (₹120).',
      altNames: ['Earth-First Charcoal Soft Bristle Brush', 'Pure Smile Eco-Brush']
    },
    {
      id: 'k007',
      code: 'K-007',
      name: 'Paper Seed Pen',
      price: '₹30',
      category: 'Eco-friendly',
      productImg: 'assets/k007-product.jpg.jpg',
      makerImg: 'assets/k007-maker.jpg.jpg',
      makerName: 'Arshida',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'An inspiring young artisan from Calicut who specializes in eco-friendly plantable stationery, turning recycled paper and organic seeds into zero-waste everyday items.',
      description: 'Zero-waste eco pen made from recycled paper and embedded with plantable seeds that sprout into herbs or flowers when planted after use.',
      altNames: ['The Plantable Magic Pen', 'Grow-Your-Own Herb Seed Pen']
    },
    {
      id: 'k008',
      code: 'K-008',
      name: 'Crochet Keychain',
      price: '₹180',
      category: 'Crochet',
      productImg: 'assets/k008-product.jpg.jpg',
      makerImg: 'assets/k008-maker.jpg.jpg',
      makerName: 'Naja',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'An eighth-grade student and our youngest entrepreneur yet, she honed her craft with support from iLab and is marking her first-time selling journey with KeHa Collective. Her delightful handmade crochet collection features stylish bags, keychains, hairbands, scrunchies, and bows.',
      description: 'Adorable handcrafted crochet keychain made with durable yarn, adding a cozy pop of color to bags and key rings.',
      altNames: ['Handspun Yarn Bag Charm', 'Pocket Hug Crochet Cutie']
    },
    {
      id: 'k009',
      code: 'K-009',
      name: 'Crochet Scrunchies',
      price: '₹200',
      category: 'Crochet',
      productImg: 'assets/k009-product.jpg.jpg',
      makerImg: 'assets/k009-maker.jpg.jpg',
      makerName: 'Khadeeja',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'A skilled local artisan from Calicut crafting soft, hair-friendly scrunchies and yarn creations with attention to color, comfort, and zero snagging.',
      description: 'Soft hand-crocheted hair scrunchie designed for high elasticity and snag-free hair styling.',
      altNames: ['Cloud-Knit Fluff Scrunchie', 'Zero-Snag Crochet Hair Donut']
    },
    {
      id: 'k010',
      code: 'K-010',
      name: 'Natural Soaps (Pack of 3)',
      price: '₹100',
      category: 'Soap',
      productImg: 'assets/k010-product.jpg.jpg',
      makerImg: 'assets/k010-maker.jpg.jpg',
      makerName: 'Habeeba',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'A dedicated housewife who began her entrepreneurial journey during the COVID-19 pandemic. With support from iLab, she transforms everyday cleansing into a nourishing ritual.',
      description: 'Artisanal cold-pressed soap sample set featuring 3 miniature bars enriched with natural plant extracts and essential oils.',
      altNames: ['Artisan Cold-Pressed Bath Bar Quartet', 'Botanical Spa Gift Set']
    },
    {
      id: 'k011',
      code: 'K-011',
      name: 'Aloevera Soap',
      price: '₹100',
      category: 'Soap',
      productImg: 'assets/k011-product.jpg.jpg',
      makerImg: 'assets/k011-maker.jpg.jpg',
      makerName: 'Habeeba',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'A dedicated housewife who began her entrepreneurial journey during the COVID-19 pandemic. With support from iLab, she transforms everyday cleansing into a nourishing ritual.',
      description: 'Pure homemade soap infused with organic fresh aloe vera extract to soothe, cool, and hydrate tired skin naturally.',
      altNames: ['Hydra-Calm Fresh Aloe Vera Bath Bar', 'Skin-Soothing Aloe Bar']
    },
    {
      id: 'k012',
      code: 'K-012',
      name: 'Goat Milk Soap',
      price: '₹150',
      category: 'Soap',
      productImg: 'assets/k012-product.jpg.jpeg',
      makerImg: 'assets/k012-maker.jpg.jpg',
      makerName: 'Habeeba',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'A dedicated housewife who began her entrepreneurial journey during the COVID-19 pandemic. With support from iLab, she transforms everyday cleansing into a nourishing ritual.',
      description: 'Rich and creamy goat milk soap bar formulated with natural emollients to nourish and restore delicate skin.',
      altNames: ['Whipped Cream Goat Milk Moisture Bar', 'Silky Skin Velvet Cleanser']
    },
    {
      id: 'k013',
      code: 'K-013',
      name: 'Charcoal Soap',
      price: '₹160',
      category: 'Soap',
      productImg: 'assets/k013-product.jpg.jpg',
      makerImg: 'assets/k013-maker.jpg.jpg',
      makerName: 'Habeeba',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'A dedicated housewife who began her entrepreneurial journey during the COVID-19 pandemic. With support from iLab, she transforms everyday cleansing into a nourishing ritual.',
      description: 'Handcrafted with activated charcoal and rich plant butters, this aromatherapy bath bar draws out impurities while deeply nourishing your skin.',
      altNames: ['Activated Charcoal Detox Bar', 'Healing Botanical Cleansing Bar']
    },
    {
      id: 'k014',
      code: 'K-014',
      name: 'Grape Soap',
      price: '₹300',
      category: 'Soap',
      productImg: 'assets/k014-product.jpg.jpeg',
      makerImg: 'assets/k014-maker.jpg.jpg',
      makerName: 'Habeeba',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'A dedicated housewife who began her entrepreneurial journey during the COVID-19 pandemic. With support from iLab, she transforms everyday cleansing into a nourishing ritual.',
      description: 'Luxurious handmade bath bar blended with wild berry and crushed grape extracts for anti-oxidant skin renewal.',
      altNames: ['Wild Berry & Crushed Grape Glow Bar', 'Juicy Vine Anti-Oxidant Bar']
    },
    {
      id: 'k015',
      code: 'K-015',
      name: 'Sanitary Pad Pouch',
      price: '₹220',
      category: 'Stitches / Handmade Goodies',
      productImg: 'assets/k015-product.jpg.jpg',
      makerImg: 'assets/k015-maker.jpg.jpg',
      makerName: 'Safeena',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'A creative fabric craftsman from Calicut specializing in hand-painted and custom-printed canvas totes, clutches, and utility pouches.',
      description: 'Discreet and elegant fabric pouch with secure button closure for carrying personal care items during travel or daily commutes.',
      altNames: ['Discreet Carry Period Clutch', 'Blush & Travel Care Case']
    },
    {
      id: 'k016',
      code: 'K-016',
      name: 'Scrunchies',
      price: '₹50',
      category: 'Stitches / Handmade Goodies',
      productImg: 'assets/k016-product.jpg.jpeg',
      makerImg: 'assets/k016-maker.jpg.jpg',
      makerName: 'Khadeeja',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'A skilled local artisan from Calicut crafting soft, hair-friendly scrunchies and yarn creations with attention to color, comfort, and zero snagging.',
      description: 'Everyday fabric hair scrunchie stitched from lightweight cloth to prevent hair breakage and creasing.',
      altNames: ['Silk-Feel Anti-Breakage Scrunchie', 'Everyday Cloud Hair Cloud']
    },
    {
      id: 'k017',
      code: 'K-017',
      name: 'Hand Painted Tote Bag',
      price: '₹350',
      category: 'Stitches / Handmade Goodies',
      productImg: 'assets/k017-product.jpg.jpg',
      makerImg: 'assets/k017-maker.jpg.jpg',
      makerName: 'Beena',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'A former drawing teacher who left her formal profession to pursue her lifelong creative calling, the artist behind this \'Mullappoo\', serves as a core inspiration for KeHa Collective. She masterfully brings traditional Kerala aesthetics to life through exquisite ornament painting and intricate mural art.',
      description: 'Eco-conscious canvas tote bag adorned with original hand-painted motif artwork by Kerala women artists.',
      altNames: ['Custom Canvas Gallery Tote', 'Wearable Canvas Art Shoulder Bag']
    },
    {
      id: 'k018',
      code: 'K-018',
      name: 'Printed Tote Bag',
      price: '₹350',
      category: 'Stitches / Handmade Goodies',
      productImg: 'assets/k018-product.jpg.jpg',
      makerImg: 'assets/k018-maker.jpg.jpg',
      makerName: 'Safeena',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'A creative fabric craftsman from Calicut specializing in hand-painted and custom-printed canvas totes, clutches, and utility pouches.',
      description: 'Spacious canvas shoulder tote featuring chic block prints and sturdy shoulder straps for everyday errands.',
      altNames: ['Aesthetic Daily Carry-All', 'Boho Print Everyday Canvas Tote']
    },
    {
      id: 'k019',
      code: 'K-019',
      name: 'Hand Painted Pouch',
      price: '₹250',
      category: 'Stitches / Handmade Goodies',
      productImg: 'assets/k019-product.jpg.jpg',
      makerImg: 'assets/k019-maker.jpg.jpg',
      makerName: 'Safeena',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'A creative fabric craftsman from Calicut specializing in hand-painted and custom-printed canvas totes, clutches, and utility pouches.',
      description: 'One-of-a-kind zippered organizer pouch featuring hand-painted botanical brushwork on durable cotton canvas.',
      altNames: ['Brushstroke Artisan Clutch', 'One-of-a-Kind Painted Carryall']
    },
    {
      id: 'k020',
      code: 'K-020',
      name: 'Printed Pouch',
      price: '₹250',
      category: 'Stitches / Handmade Goodies',
      productImg: 'assets/k020-product.jpg.jpg',
      makerImg: 'assets/k020-maker.jpg.jpg',
      makerName: 'Safeena',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'A creative fabric craftsman from Calicut specializing in hand-painted and custom-printed canvas totes, clutches, and utility pouches.',
      description: 'Compact printed cosmetic & stationery clutch with smooth zipper closure and fabric lining.',
      altNames: ['Chic Organizer Mini Clutch', 'Pop-Print Cosmetic & Travel Case']
    },
    {
      id: 'k021',
      code: 'K-021',
      name: 'Coin Pouch',
      price: '₹150',
      category: 'Stitches / Handmade Goodies',
      productImg: 'assets/k021-product.jpg.jpg',
      makerImg: 'assets/k021-maker.jpg.jpg',
      makerName: 'Safeena',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'A creative fabric craftsman from Calicut specializing in hand-painted and custom-printed canvas totes, clutches, and utility pouches.',
      description: 'Mini zippered coin purse to keep change, ear buds, and tiny trinkets organized in style.',
      altNames: ['Pocket Fortune Squeeze Pouch', 'Little Essentials Zipper Coin Case']
    },
    {
      id: 'k022',
      code: 'K-022',
      name: 'Mulla Puvvu Crochet',
      price: '₹180',
      category: 'Crochet',
      productImg: 'assets/k022-product.jpg.jpg',
      makerImg: 'assets/k022-maker.jpg.jpg',
      makerName: 'Beena',
      makerLocation: 'Calicut, Kerala',
      makerStory: 'A former drawing teacher who left her formal profession to pursue her lifelong creative calling, the artist behind this \'Mullappoo\', serves as a core inspiration for KeHa Collective. She masterfully brings traditional Kerala aesthetics to life through exquisite ornament painting and intricate mural art.',
      description: 'Everlasting handmade crochet jasmine flower string (gajra) designed for traditional Kerala hair decoration.',
      altNames: ['Everlasting Jasmine (Mulla Puvvu) Hair Gajra', 'Handmade Fragrant-Vibe Floral Crochet Charm']
    }
  ];

  // DOM Elements
  const catalogGrid = document.getElementById('catalogGrid');
  const catalogSubtitle = document.getElementById('catalogSubtitle');
  const searchInput = document.getElementById('searchInput');
  const clearSearch = document.getElementById('clearSearch');
  const categoryPills = document.getElementById('categoryPills');
  const noResults = document.getElementById('noResults');
  const btnResetFilters = document.getElementById('btnResetFilters');
  const countAll = document.getElementById('countAll');

  // Modal Elements
  const storyModal = document.getElementById('storyModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalMakerImg = document.getElementById('modalMakerImg');
  const modalMakerName = document.getElementById('modalMakerName');
  const modalMakerLocation = document.getElementById('modalMakerLocation');
  const modalMakerStory = document.getElementById('modalMakerStory');
  const modalProductImg = document.getElementById('modalProductImg');
  const modalCategoryTag = document.getElementById('modalCategoryTag');
  const modalProductCode = document.getElementById('modalProductCode');
  const modalProductPrice = document.getElementById('modalProductPrice');
  const modalProductTitle = document.getElementById('modalProductTitle');
  const modalProductDesc = document.getElementById('modalProductDesc');
  const modalAltNames = document.getElementById('modalAltNames');
  const btnOrderInstagram = document.getElementById('btnOrderInstagram');
  const btnCopyOrderInfo = document.getElementById('btnCopyOrderInfo');
  const toast = document.getElementById('toast');

  // State Management
  let currentCategory = 'all';
  let searchQuery = '';
  let activeProduct = null;

  // Set total count
  if (countAll) countAll.textContent = products.length;

  // Render Product Cards into 2-Column Grid
  function renderProducts() {
    const filtered = products.filter(p => {
      const matchCat = (currentCategory === 'all') || (p.category === currentCategory);
      const q = searchQuery.toLowerCase().trim();
      const matchQuery = !q ||
        p.code.toLowerCase().includes(q) ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.makerName.toLowerCase().includes(q) ||
        p.makerLocation.toLowerCase().includes(q) ||
        (p.altNames && p.altNames.some(alt => alt.toLowerCase().includes(q)));
      return matchCat && matchQuery;
    });

    catalogGrid.innerHTML = '';

    if (filtered.length === 0) {
      catalogGrid.hidden = true;
      noResults.hidden = false;
      catalogSubtitle.textContent = '0 items found';
      return;
    }

    catalogGrid.hidden = false;
    noResults.hidden = true;
    catalogSubtitle.textContent = `Showing ${filtered.length} of ${products.length} handcrafted items`;

    filtered.forEach(p => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View ${p.name}, Product Code ${p.code}, Price ${p.price}`);

      card.innerHTML = `
        <div class="card-img-wrapper">
          <img src="${p.productImg}" alt="${p.name}" class="card-img" loading="lazy" onerror="this.src='${p.makerImg}'">
          <span class="card-category-tag">${escapeHtml(p.category.split('/')[0])}</span>
          <span class="story-indicator-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <span>Story</span>
          </span>
        </div>
        <div class="card-content">
          <div class="code-price-bar">
            <span class="product-code">${p.code}</span>
            <span class="product-price">${p.price}</span>
          </div>
          <h3 class="product-name">${escapeHtml(p.name)}</h3>
          <div class="maker-name-sub">
            <span>By ${escapeHtml(p.makerName)}</span>
          </div>
        </div>
      `;

      // Tap / Click Interaction to open Story Modal
      card.addEventListener('click', () => openModal(p));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(p);
        }
      });

      catalogGrid.appendChild(card);
    });
  }

  // Helper: Escape HTML
  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (m) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[m];
    });
  }

  // Modal Control Functions
  function openModal(product) {
    activeProduct = product;

    // Populate Modal Content
    modalMakerImg.src = product.makerImg;
    modalMakerImg.alt = `Portrait of artisan ${product.makerName}`;
    modalMakerName.textContent = product.makerName;
    modalMakerLocation.textContent = `📍 ${product.makerLocation}`;
    modalMakerStory.textContent = `"${product.makerStory}"`;

    modalProductImg.src = product.productImg;
    modalProductImg.alt = product.name;
    modalCategoryTag.textContent = product.category;
    modalProductCode.textContent = product.code;
    modalProductPrice.textContent = product.price;
    modalProductTitle.textContent = product.name;
    modalProductDesc.textContent = product.description;

    // Populate Product Highlights in single column bordered card
    if (modalAltNames) {
      if (Array.isArray(product.altNames) && product.altNames.length > 0) {
        modalAltNames.innerHTML = product.altNames.map(name => `
          <div class="alt-name-item">
            <span class="alt-name-bullet">✦</span>
            <span class="alt-name-text">${escapeHtml(name)}</span>
          </div>
        `).join('');
      } else {
        modalAltNames.innerHTML = `
          <div class="alt-name-item">
            <span class="alt-name-bullet">✦</span>
            <span class="alt-name-text">${escapeHtml(product.name)}</span>
          </div>
        `;
      }
    }

    // Set Instagram Routing URL
    btnOrderInstagram.href = INSTAGRAM_PROFILE_URL;

    // Show modal & disable background scrolling
    storyModal.classList.add('active');
    storyModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Scroll modal top
    const scrollContainer = storyModal.querySelector('.modal-scroll-content');
    if (scrollContainer) scrollContainer.scrollTop = 0;

    // Focus close button for accessibility
    setTimeout(() => {
      modalCloseBtn.focus();
    }, 100);
  }

  function closeModal() {
    storyModal.classList.remove('active');
    storyModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    activeProduct = null;
  }

  // Event Listeners for Modal
  modalCloseBtn.addEventListener('click', closeModal);

  storyModal.addEventListener('click', (e) => {
    // Close if background backdrop clicked
    if (e.target === storyModal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && storyModal.classList.contains('active')) {
      closeModal();
    }
  });

  // Touch Swipe down to close modal on mobile
  let touchStartY = 0;
  let touchCurrentY = 0;
  const modalPanel = storyModal.querySelector('.modal-panel');

  modalPanel.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  modalPanel.addEventListener('touchmove', (e) => {
    touchCurrentY = e.touches[0].clientY;
    const diff = touchCurrentY - touchStartY;
    // If dragging downwards near top of modal
    if (diff > 0 && modalPanel.scrollTop <= 0) {
      modalPanel.style.transform = `translateY(${diff}px)`;
    }
  }, { passive: true });

  modalPanel.addEventListener('touchend', () => {
    const diff = touchCurrentY - touchStartY;
    if (diff > 80 && modalPanel.scrollTop <= 0) {
      closeModal();
    }
    modalPanel.style.transform = '';
    touchStartY = 0;
    touchCurrentY = 0;
  });

  // Copy Order Info Helper Button
  btnCopyOrderInfo.addEventListener('click', () => {
    if (!activeProduct) return;
    const textToCopy = `Hi Keha! I'd like to order product code ${activeProduct.code} (${activeProduct.name} - ${activeProduct.price}). Please share details for payment & shipping.`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('Order details copied to clipboard!');
      }).catch(() => {
        fallbackCopyText(textToCopy);
      });
    } else {
      fallbackCopyText(textToCopy);
    }
  });

  function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast('Order details copied to clipboard!');
    } catch (err) {
      showToast('Copied: Code ' + activeProduct.code);
    }
    document.body.removeChild(textarea);
  }

  // Instagram CTA Click Handler
  btnOrderInstagram.addEventListener('click', () => {
    if (activeProduct) {
      const textToCopy = `Hi Keha! I'd like to order product code ${activeProduct.code} (${activeProduct.name} - ${activeProduct.price}).`;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textToCopy);
        }
      } catch (e) { }
      showToast(`Opening Instagram DM for ${activeProduct.code}...`);
    }
  });

  // Toast Function
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // Search Input Handler
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearSearch.hidden = !searchQuery;
    renderProducts();
  });

  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearch.hidden = true;
    searchInput.focus();
    renderProducts();
  });

  // Category Filter Pill Handler
  categoryPills.addEventListener('click', (e) => {
    const targetPill = e.target.closest('.pill');
    if (!targetPill) return;

    const selectedCategory = targetPill.getAttribute('data-category');
    if (selectedCategory === currentCategory) return;

    currentCategory = selectedCategory;

    // Update active class & aria-selected
    categoryPills.querySelectorAll('.pill').forEach(pill => {
      const isActive = (pill === targetPill);
      pill.classList.toggle('active', isActive);
      pill.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    renderProducts();
  });

  // Reset Filters Handler
  btnResetFilters.addEventListener('click', () => {
    searchQuery = '';
    currentCategory = 'all';
    searchInput.value = '';
    clearSearch.hidden = true;

    categoryPills.querySelectorAll('.pill').forEach(pill => {
      const isAll = (pill.getAttribute('data-category') === 'all');
      pill.classList.toggle('active', isAll);
      pill.setAttribute('aria-selected', isAll ? 'true' : 'false');
    });

    renderProducts();
  });

  // Initial Render
  renderProducts();
});

