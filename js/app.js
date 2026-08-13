/**
 * KEHA Portfolio App Logic
 * Mobile-First, High Performance Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // Catalog Data with 15 Handcrafted Creations
  const products = [
    {
      id: 'k001',
      code: 'K-001',
      name: 'Kerala Kasavu Embroidered Clutch',
      price: '₹1,450',
      category: 'Handloom & Weaves',
      productImg: 'assets/k001-product.jpg.jpg',
      makerImg: 'assets/k001-maker.jpg.jpg',
      makerName: 'Nayana V.',
      makerLocation: 'Chendamangalam, Ernakulam',
      makerStory: 'Nayana mastered the art of hand-weaving traditional Kasavu cotton after reviving her family loom in Chendamangalam. Every clutch is hand-stitched with organic gold zari, providing sustainable livelihoods for her village women weaving collective.',
      description: 'Woven with pure organic unbleached cotton and authentic Kasavu tissue borders, this handcrafted clutch blends timeless Kerala heritage with sleek contemporary fashion. Features an eco-friendly interior lining.',
      materials: '100% Handloom Cotton, Zari, Eco Canvas',
      specs: '10" x 6" x 2" | 180g'
    },
    {
      id: 'k002',
      code: 'K-002',
      name: 'Hand-carved Teakwood Salad Bowl',
      price: '₹1,850',
      category: 'Woodcraft',
      productImg: 'assets/k002-product.jpg.jpg',
      makerImg: 'assets/k002-maker.jpg.jpg',
      makerName: 'Rema Devi',
      makerLocation: 'Nilambur, Malappuram',
      makerStory: 'Rema crafts every wooden piece using reclaimed teakwood from sustainable plantations in Nilambur. Starting with just two hand chisels, her workshop now empowers five female woodturners in her community.',
      description: 'Sculpted from aged Nilambur teakwood, renowned for its rich golden grain and durability. Hand-polished with food-grade cold-pressed coconut oil to preserve its natural luster without synthetic chemicals.',
      materials: 'Reclaimed Nilambur Teak, Virgin Coconut Oil Finish',
      specs: '8" Diameter x 3.5" Depth | 420g'
    },
    {
      id: 'k003',
      code: 'K-003',
      name: 'Terracotta Earth Water Jug & Cup Set',
      price: '₹920',
      category: 'Terracotta & Pottery',
      productImg: 'assets/k003-product.jpg.jpg',
      makerImg: 'assets/k003-maker.jpg.jpg',
      makerName: 'Kavitha P.',
      makerLocation: 'Aruvacode, Nilambur',
      makerStory: 'Hailing from the historic potter village of Aruvacode, Kavitha infuses traditional clay wheel sculpting with modern ergonomic designs that keep drinking water naturally cool and mineral-rich.',
      description: 'Hand-thrown on a traditional potter wheel using natural Kerala riverbed clay. The porous clay structure naturally aerates and chills water while adding subtle alkaline minerals.',
      materials: '100% Natural Riverbed Clay (Unglazed)',
      specs: '1.5L Jug + 2 Cups (250ml each)'
    },
    {
      id: 'k004',
      code: 'K-004',
      name: 'Handspun Kora Grass Floor Mat',
      price: '₹1,200',
      category: 'Handloom & Weaves',
      productImg: 'assets/k004-product.jpg.jpg',
      makerImg: 'assets/k004-maker.jpg.jpg',
      makerName: 'Saraswathi Amma',
      makerLocation: 'Chittur, Palakkad',
      makerStory: 'Saraswathi has been weaving natural grass mats for over 28 years. Her intricate geometric weaves are lightweight, cooling, and completely bio-degradable, carrying forward Palakkad weaving traditions.',
      description: 'Hand-woven from wild-harvested Kora river grass (Cyperus corymbosus). Naturally breathable, moisture-wicking, and foldable, making it ideal for yoga, meditation, or cozy home accents.',
      materials: 'Wild Kora Grass, Natural Plant-Dye Edging',
      specs: '4ft x 2.5ft | Rollable'
    },
    {
      id: 'k005',
      code: 'K-005',
      name: 'Wild Vetiver & Lemongrass Body Bar',
      price: '₹380',
      category: 'Botanicals',
      productImg: 'assets/k005-product.jpg.jpeg',
      makerImg: 'assets/k005-maker.jpg.jpg',
      makerName: 'Dr. Lakshmi Nair',
      makerLocation: 'Wayanad High Ranges',
      makerStory: 'Lakshmi collaborates with indigenous tribal women collectives in Wayanad to sustainably harvest wild vetiver roots and fresh lemongrass, crafting small-batch cold-process herbal soaps.',
      description: 'An invigorating artisanal botanical soap enriched with steam-distilled lemongrass essential oil and fragrant Ramacham (vetiver) roots for gentle exfoliation and aromatic aromatherapy.',
      materials: 'Cold-pressed Coconut Oil, Vetiver Root, Lemongrass',
      specs: '125g Bar | 100% Biodegradable'
    },
    {
      id: 'k006',
      code: 'K-006',
      name: 'Hand-hammered Brass Kindi Oil Lamp',
      price: '₹2,100',
      category: 'Metal Craft',
      productImg: 'assets/k006-product.jpg.jpeg',
      makerImg: 'assets/k006-maker.jpg.jpg',
      makerName: 'Mini S.',
      makerLocation: 'Mannar, Alappuzha',
      makerStory: 'Breaking long-standing barriers in traditional bell-metal casting, Mini directs a renowned brass-smith workshop in Mannar, crafting heirloom oil lamps that radiate warmth and tradition.',
      description: 'Cast in heavy pure brass and hand-engraved by artisans in Mannar. Features an iconic Kerala silhouette designed to hold oil and light single or multiple cotton wicks for evening rituals.',
      materials: 'Solid Bell-Metal Brass, Polished Finish',
      specs: '5.5" Height x 6" Base | 650g'
    },
    {
      id: 'k007',
      code: 'K-007',
      name: 'Coir & Jute Braided Everyday Tote Bag',
      price: '₹890',
      category: 'Eco Accessories',
      productImg: 'assets/k007-product.jpg.jpg',
      makerImg: 'assets/k007-maker.jpg.jpg',
      makerName: 'Sujatha K.',
      makerLocation: 'Alappuzha Backwaters',
      makerStory: 'Utilizing golden coconut fibers harvested along Alappuzha backwaters, Sujatha creates ultra-durable eco totes. Her self-help unit provides fair wages to 12 women co-op workers.',
      description: 'Hand-spun coconut coir blended with soft natural jute yarn. Designed with reinforced handles and a roomy interior to comfortably hold groceries, laptops, or daily essentials.',
      materials: 'Kerala Golden Coir, Natural Jute, Cotton Lining',
      specs: '15" Height x 13" Width x 4" Depth'
    },
    {
      id: 'k008',
      code: 'K-008',
      name: 'Organic Cardamom & Pepper Spice Box',
      price: '₹1,600',
      category: 'Botanicals',
      productImg: 'assets/k008-product.jpg.jpg',
      makerImg: 'assets/k008-maker.jpg.jpg',
      makerName: 'Marykutty Joseph',
      makerLocation: 'Idukki Western Ghats',
      makerStory: 'Marykutty manages an organic spice forest in Idukki. She selects shade-grown green cardamom pods and Tellicherry black pepper, hand-sorting every batch for unmatched aroma.',
      description: 'A sensory treasure box featuring single-origin jumbo cardamom pods and sun-dried black peppercorns, housed in a handcrafted rosewood canister with airtight brass latch.',
      materials: 'Organically Grown Spices, Hand-turned Rosewood',
      specs: '250g Assortment (125g Cardamom + 125g Pepper)'
    },
    {
      id: 'k009',
      code: 'K-009',
      name: 'Screw-Pine Leaf Woven Table Runner',
      price: '₹1,050',
      category: 'Handloom & Weaves',
      productImg: 'assets/k009-product.jpg.jpg',
      makerImg: 'assets/k009-maker.jpg.jpg',
      makerName: 'Bhavani M.',
      makerLocation: 'Thazhava, Kollam',
      makerStory: 'Bhavani preserves the centuries-old Thazhava craft of harvesting and splitting soft screw-pine leaves into delicate ribbons, weaving luxury dining accessories for modern tables.',
      description: 'Hand-woven Kaitha (Screw-pine) leaf runner with natural silk thread borders. Resistant to heat and moisture, bringing organic warmth and tactile texture to dining settings.',
      materials: 'Natural Kaitha (Screw-Pine) Leaves, Silk Thread',
      specs: '60" Length x 14" Width'
    },
    {
      id: 'k010',
      code: 'K-010',
      name: 'Aranmula Mirror Metal Brass Pendant',
      price: '₹2,450',
      category: 'Eco-Jewelry',
      productImg: 'assets/k010-product.jpg.jpeg',
      makerImg: 'assets/k010-maker.jpg.jpg',
      makerName: 'Aparna Viswanathan',
      makerLocation: 'Aranmula, Pathanamthitta',
      makerStory: 'Aparna incorporates metal mirror metallurgy secrets passed down through generations into delicate contemporary jewelry, fashioning statement bronze-brass pieces with radiant luster.',
      description: 'Hand-polished metal pendant crafted with high-tin bronze alloy using traditional lost-wax casting. Comes with an adjustable hand-braided black silk cord.',
      materials: 'Aranmula High-Tin Metal Alloy, Silk Cord',
      specs: '1.8" Pendant Diameter | Adjustable Cord'
    },
    {
      id: 'k011',
      code: 'K-011',
      name: 'Hand-painted Kerala Mural Art Plaque',
      price: '₹3,200',
      category: 'Woodcraft',
      productImg: 'assets/k011-product.jpg.jpeg',
      makerImg: 'assets/k011-maker.jpg.jpg',
      makerName: 'Radhika Mohan',
      makerLocation: 'Guruvayur, Thrissur',
      makerStory: 'Formally trained in classical Kerala mural painting, Radhika uses natural mineral and botanical dyes to paint vibrant heritage artwork on wooden panels.',
      description: 'A museum-quality mural wall panel painted in the traditional 5-color palette (Panchavarna) depicting nature and traditional motifs on solid Jackfruit wood.',
      materials: 'Jackfruit Wood, Natural Stone Pigments',
      specs: '10" x 10" x 1" | Ready to Mount'
    },
    {
      id: 'k012',
      code: 'K-012',
      name: 'Natural Banana Fiber Crossbody Pouch',
      price: '₹750',
      category: 'Eco Accessories',
      productImg: 'assets/k012-product.jpg.jpg',
      makerImg: 'assets/k012-maker.jpg.jpg',
      makerName: 'Geetha Kumari',
      makerLocation: 'Kottayam',
      makerStory: 'Geetha extracts strong fibers from discarded banana plant trunks after harvest, turning agricultural waste into soft, resilient bags that uplift rural farm families.',
      description: 'Lightweight crossbody bag hand-woven from banana pseudo-stem plant fibers. Features a secure antique brass zip closure and adjustable shoulder strap.',
      materials: '100% Upcycled Banana Plant Fiber, Brass Zip',
      specs: '8.5" x 7.0" | Strap length: 48"'
    },
    {
      id: 'k013',
      code: 'K-013',
      name: 'Pure Virgin Coconut Oil & Herb Elixir',
      price: '₹550',
      category: 'Botanicals',
      productImg: 'assets/k013-product.jpg.jpeg',
      makerImg: 'assets/k013-maker.jpg.jpg',
      makerName: 'Saraswati V.',
      makerLocation: 'Kasaragod',
      makerStory: 'Extracted using traditional cold-press wooden ghani mills, Saraswati’s virgin coconut oil is slow-infused with fresh indigo, hibiscus, and bhringraj from her organic medicinal garden.',
      description: 'Nourishing hair and body oil micro-batched without heat to retain natural antioxidants, Vitamin E, and fresh herbal aroma.',
      materials: 'Cold-pressed Virgin Coconut Oil, Hibiscus, Indigo',
      specs: '200ml Amber Glass Bottle'
    },
    {
      id: 'k014',
      code: 'K-014',
      name: 'Hand-knitted Khadi Linen Scarf',
      price: '₹1,350',
      category: 'Handloom & Weaves',
      productImg: 'assets/k014-product.jpg.jpg',
      makerImg: 'assets/k014-maker.jpg.jpg',
      makerName: 'Bindu Sree',
      makerLocation: 'Kannur Handloom Hub',
      makerStory: 'Hailing from Kannur, the famous land of looms, Bindu spins and weaves soft Khadi linen scarves, dyeing them naturally with marigold flowers and indigo.',
      description: 'Ultra-breathable handloom Khadi cotton-linen scarf with delicate hand-knotted fringe ends. Softens with every wash and offers lightweight year-round comfort.',
      materials: 'Hand-spun Khadi Cotton & Linen, Plant Dyes',
      specs: '70" Length x 22" Width'
    },
    {
      id: 'k015',
      code: 'K-015',
      name: 'Handcrafted Bell-Metal Tea Light Holder',
      price: '₹980',
      category: 'Metal Craft',
      productImg: 'assets/k015-product.jpg.jpg',
      makerImg: 'assets/k015-maker.jpg.jpg',
      makerName: 'Latha Sivaraman',
      makerLocation: 'Irinjalakuda, Thrissur',
      makerStory: 'Latha creates intricate perforated cutout patterns in solid bell-metal tea light holders. When lit, they cast mesmerizing geometric light shadows across cozy rooms.',
      description: 'Traditional bell-metal candle votive with lattice fretwork. Cast using traditional sand-molding techniques for a rich golden ambient light display.',
      materials: 'Hand-cast Bell-Metal Bronze Alloy',
      specs: '4.5" Height x 3.8" Diameter | 380g'
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
  const modalProductMaterials = document.getElementById('modalProductMaterials');
  const modalProductSpecs = document.getElementById('modalProductSpecs');
  const btnOrderInstagram = document.getElementById('btnOrderInstagram');
  const btnCopyOrderInfo = document.getElementById('btnCopyOrderInfo');
  const toast = document.getElementById('toast');

  // State Management
  let currentCategory = 'all';
  let searchQuery = '';
  let activeProduct = null;

  // Instagram Profile URL
  const INSTAGRAM_PROFILE_URL = 'https://www.instagram.com/keha.official';

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
        p.makerLocation.toLowerCase().includes(q);
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
          <span class="card-category-tag">${escapeHtml(p.category.split('&')[0])}</span>
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
    return str.replace(/[&<>"']/g, function(m) {
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
    modalProductMaterials.textContent = product.materials;
    modalProductSpecs.textContent = product.specs;

    // Set Instagram DM Routing URL
    // Instagram Direct DM Link with fallback to Profile URL
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
      } catch(e) {}
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
