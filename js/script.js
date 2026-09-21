/**
 * Shadow Rooftop — Premium QR Menu
 * script.js — Vanilla JavaScript, no dependencies
 *
 * Features:
 *  - Splash screen with letter-by-letter reveal
 *  - Main app reveal after splash
 *  - Side navigation open/close
 *  - Category tab switching
 *  - Dynamic menu card rendering
 *  - Intersection Observer card entrance animations
 *  - Language toggle (EN active, AR prepared)
 *  - Keyboard accessibility
 *  - prefers-reduced-motion support
 */

'use strict';

/* ================================================================
   MENU DATA
   — Edit this object to update / add menu content.
   — Add a new category key here, add a tab in HTML, and
     the renderCategory() function handles the rest.
   ================================================================ */
const MENU_DATA = {

  breakfast: [
    {
      id: 'omelette',
      name: 'Omelette',
      description: 'Classic breakfast omelette served with butter, jam & toast.',
      price: 420,
      image: 'assets/images/omelette.jpg',
      tags: ['Vegetarian', 'Contains Dairy'],
      tagTypes: ['vegetarian', 'dairy'],
    },
    {
      id: 'club-sandwich',
      name: 'Club Sandwich',
      description: 'Layered sandwich with chicken, smoked turkey & fresh vegetables.',
      price: 510,
      image: 'assets/images/club-sandwich.jpg',
      tags: ['Contains Gluten', 'Contains Dairy'],
      tagTypes: ['gluten', 'dairy'],
    },
    {
      id: 'tortilla-eggs',
      name: 'Tortilla with Eggs',
      description: 'Warm tortilla bread filled with freshly prepared eggs.',
      price: 465,
      image: 'assets/images/tortilla-eggs.jpg',
      tags: ['Contains Gluten', 'Contains Dairy'],
      tagTypes: ['gluten', 'dairy'],
    },
    {
      id: 'fatar-breakfast',
      name: 'Fatar Breakfast',
      description: 'Hearty breakfast platter with omelette, frankfurter, mushroom & toast.',
      price: 525,
      image: 'assets/images/fatar-breakfast.jpg',
      tags: ['Contains Gluten', 'Contains Dairy'],
      tagTypes: ['gluten', 'dairy'],
    },
    {
      id: 'cheese-lovers',
      name: 'Cheese Lovers Breakfast',
      description: 'Selection of fine cheeses with omelette, walnuts, jam & toast.',
      price: 510,
      image: 'assets/images/cheese-lovers-breakfast.jpg',
      tags: ['Contains Gluten', 'Contains Dairy'],
      tagTypes: ['gluten', 'dairy'],
    },
    {
      id: 'oriental-egyptian',
      name: 'Oriental Egyptian Breakfast',
      description: 'Traditional Egyptian spread with beans, falafel, potatoes & cheese.',
      price: 495,
      image: 'assets/images/oriental-egyptian-breakfast.jpg',
      tags: ['Vegetarian', 'Contains Gluten', 'Contains Dairy'],
      tagTypes: ['vegetarian', 'gluten', 'dairy'],
    },
  ],

  starters:  [], // Placeholder — add items when ready
  main:      [], // Placeholder — add items when ready
  desserts:  [], // Placeholder — add items when ready
  drinks:    [], // Placeholder — add items when ready
};

/* ================================================================
   UTILITY
   ================================================================ */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function $(selector, root = document) {
  return root.querySelector(selector);
}

function $$(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

/* ================================================================
   ICON HELPERS (inline SVG, keeps no external deps)
   ================================================================ */
const ICONS = {
  vegetarian: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="10" height="10" aria-hidden="true">
    <path d="M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" stroke="currentColor" stroke-width="1.2"/>
    <path d="M5 8c1-1.5 2.5-2.5 4-2.5 0 1.5-.5 3-2 4C6 8.5 5 8 5 8z" stroke="currentColor" stroke-width="1" fill="none" stroke-linejoin="round"/>
  </svg>`,
  gluten: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="10" height="10" aria-hidden="true">
    <path d="M8 2l1.5 4.5h4.5L10.5 9l1.5 4.5L8 11l-4 2.5 1.5-4.5-3.5-2.5H6.5z" stroke="currentColor" stroke-width="1.1" fill="none" stroke-linejoin="round"/>
  </svg>`,
  dairy: `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="10" height="10" aria-hidden="true">
    <path d="M5 2h6l1 4v7a1 1 0 01-1 1H5a1 1 0 01-1-1V6l1-4z" stroke="currentColor" stroke-width="1.1" fill="none" stroke-linejoin="round"/>
    <path d="M4 6h8" stroke="currentColor" stroke-width="1"/>
  </svg>`,
};

/* ================================================================
   CARD RENDERER
   ================================================================ */
/**
 * Build the HTML string for a single food card.
 * @param {Object} item — menu item object
 * @returns {string} HTML string
 */
function buildCardHTML(item) {
  // Build tags HTML
  const tagsHTML = item.tags.map((tag, i) => {
    const type = item.tagTypes[i] || '';
    const icon = ICONS[type] || '';
    return `<span class="food-card__tag food-card__tag--${type}">${icon}${tag}</span>`;
  }).join('');

  // Image: real src + fallback placeholder
  const imgHTML = `
    <img
      src="${item.image}"
      alt="${item.name}"
      class="food-card__img"
      loading="lazy"
      decoding="async"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
    />
    <div class="food-card__img-placeholder" style="display:none;" aria-hidden="true">
      ${PLACEHOLDER_ICON}
    </div>
  `;

  return `
    <article class="food-card" aria-label="${item.name}, EGP ${item.price}">
      <div class="food-card__img-wrap">
        ${imgHTML}
      </div>
      <div class="food-card__body">
        <div class="food-card__header">
          <h2 class="food-card__name">${item.name}</h2>
          <div class="food-card__price">
            <span class="food-card__price-currency">EGP</span>
            <span class="food-card__price-amount">${item.price}</span>
          </div>
        </div>
        <p class="food-card__desc">${item.description}</p>
        ${tagsHTML ? `<div class="food-card__tags" aria-label="Dietary information">${tagsHTML}</div>` : ''}
      </div>
    </article>
  `;
}

// Placeholder SVG for when image fails to load
const PLACEHOLDER_ICON = `
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="42" height="42" aria-hidden="true">
    <rect x="6" y="14" width="36" height="26" rx="3" stroke="#C9A45C" stroke-width="1.5" fill="none"/>
    <circle cx="18" cy="25" r="5" stroke="#C9A45C" stroke-width="1.2" fill="none"/>
    <path d="M6 34l10-8 8 7 6-5 12 9" stroke="#C9A45C" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="M28 8h8M30 5v6" stroke="#C9A45C" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
`;

/**
 * Render all items for a given category into its container.
 * @param {string} categoryKey — key in MENU_DATA
 */
function renderCategory(categoryKey) {
  const items = MENU_DATA[categoryKey];
  if (!items || items.length === 0) return;

  const container = $(`#${categoryKey}-items`);
  if (!container) return;

  container.innerHTML = items.map(buildCardHTML).join('');
}

/* ================================================================
   INTERSECTION OBSERVER — Card entrance animations
   ================================================================ */
function initCardAnimations() {
  if (prefersReducedMotion) {
    // Show all cards immediately
    $$('.food-card').forEach(card => card.classList.add('card--visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const card = entry.target;
        card.classList.add('card--visible');
        // After entrance animation completes, reset delay for instant hover
        card.addEventListener('transitionend', () => {
          card.style.transitionDelay = '0ms';
        }, { once: true });
        observer.unobserve(card);
      }
    });
  }, {
    threshold: 0.06,
    rootMargin: '0px 0px -16px 0px',
  });

  $$('.food-card').forEach((card, i) => {
    // Stagger via CSS custom property (transition-delay)
    card.style.transitionDelay = `${i * 65}ms`;
    observer.observe(card);
  });
}

/* ================================================================
   CATEGORY TABS
   ================================================================ */
function initCategoryTabs() {
  const tabs = $$('[data-category]');
  const sections = $$('.menu-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.category;

      // Update tab states
      tabs.forEach(t => {
        const isActive = t.dataset.category === target;
        t.classList.toggle('cat-btn--active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      // Update sections
      sections.forEach(section => {
        const isActive = section.id === `section-${target}`;
        section.hidden = !isActive;
        section.classList.toggle('menu-section--active', isActive);
      });

      // Scroll active tab into view (horizontal scroll)
      tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

      // Re-init animations for newly revealed cards
      requestAnimationFrame(() => {
        initCardAnimations();
      });
    });

    // Keyboard: Enter / Space triggers click
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        tab.click();
      }
    });
  });
}

/* ================================================================
   SIDE NAVIGATION
   ================================================================ */
function initSideNav() {
  const hamburger = $('#hamburger');
  const sideNav   = $('#sideNav');
  const backdrop  = $('#navBackdrop');
  const closeBtn  = $('#navClose');
  const closeLinks = $$('[data-close-nav]');

  if (!hamburger || !sideNav) return;

  function openNav() {
    sideNav.classList.add('side-nav--open');
    sideNav.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Focus the close button
    setTimeout(() => closeBtn && closeBtn.focus(), 50);
  }

  function closeNav() {
    sideNav.classList.remove('side-nav--open');
    sideNav.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    hamburger.focus();
  }

  hamburger.addEventListener('click', () => {
    const isOpen = sideNav.classList.contains('side-nav--open');
    isOpen ? closeNav() : openNav();
  });

  closeBtn && closeBtn.addEventListener('click', closeNav);
  backdrop && backdrop.addEventListener('click', closeNav);

  closeLinks.forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Keyboard: Escape closes nav
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideNav.classList.contains('side-nav--open')) {
      closeNav();
    }
  });

  // Trap focus within panel when open (basic)
  sideNav.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const focusable = $$('a[href], button:not([disabled])', sideNav);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

/* ================================================================
   LANGUAGE TOGGLE
   ================================================================ */
function initLanguageToggle() {
  const btnEn = $('#langEn');
  const btnAr = $('#langAr');

  if (!btnEn || !btnAr) return;

  btnEn.addEventListener('click', () => {
    // Already active — no-op for now
    setLanguage('en');
  });

  btnAr.addEventListener('click', () => {
    // Arabic not yet implemented — show a polite notice
    showLanguageToast('Arabic version coming soon. عذراً، النسخة العربية قيد الإعداد.');
  });

  function setLanguage(lang) {
    const isEn = lang === 'en';
    btnEn.classList.toggle('lang-toggle__btn--active', isEn);
    btnAr.classList.toggle('lang-toggle__btn--active', !isEn);
    btnEn.setAttribute('aria-pressed', isEn ? 'true' : 'false');
    btnAr.setAttribute('aria-pressed', isEn ? 'false' : 'true');
    document.documentElement.lang = lang;
    document.documentElement.dir  = isEn ? 'ltr' : 'rtl';
  }

  function showLanguageToast(msg) {
    // Create simple toast
    const existing = $('#lang-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'lang-toast';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'polite');
    toast.style.cssText = `
      position: fixed;
      bottom: 28px;
      left: 50%;
      transform: translateX(-50%);
      background: #10141C;
      border: 1px solid rgba(201,164,92,0.3);
      color: #A9A7A1;
      font-family: var(--font-primary);
      font-size: 0.8125rem;
      padding: 12px 22px;
      border-radius: 100px;
      z-index: 9999;
      white-space: nowrap;
      max-width: calc(100vw - 40px);
      white-space: normal;
      text-align: center;
      box-shadow: 0 8px 32px rgba(0,0,0,0.5);
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    toast.textContent = msg;
    document.body.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        toast.style.opacity = '1';
      });
    });

    // Remove after 3s
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  }
}

/* ================================================================
   HERO — Explore Menu button smooth scroll
   ================================================================ */
function initHeroScroll() {
  const cta = $('.hero__cta');
  if (!cta) return;

  cta.addEventListener('click', (e) => {
    const target = document.querySelector(cta.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

/* ================================================================
   SPLASH SCREEN
   ================================================================ */
function initSplash() {
  const splash  = $('#splash');
  const app     = $('#app');
  const nameEl  = $('#splashName');

  if (!splash || !app) return;

  // Letter-by-letter reveal for "SHADOW"
  const brand = 'SHADOW';
  const letters = brand.split('').map((char, i) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.textContent = char;
    // Stagger delay: start after 0.25s, each letter 65ms apart
    const delay = prefersReducedMotion ? 0 : 250 + i * 65;
    span.style.animationDelay = `${delay}ms`;
    return span;
  });
  nameEl && letters.forEach(l => nameEl.appendChild(l));

  // Transition to main app
  // Total splash duration: ~1400ms (last letter at ~600ms + 800ms pause)
  const splashDuration = prefersReducedMotion ? 0 : 1500;

  setTimeout(() => {
    // Fade out splash
    splash.classList.add('splash--hidden');
    // Fade in app
    app.setAttribute('aria-hidden', 'false');
    app.classList.add('app--visible');

    // After splash fully gone, remove from DOM to free memory
    setTimeout(() => {
      splash.remove();
    }, 800);

  }, splashDuration);
}

/* ================================================================
   INIT
   ================================================================ */
function init() {
  // 1. Render menu data
  renderCategory('breakfast');
  // Future: renderCategory('starters'), etc.

  // 2. Init splash (first, so it runs timing logic immediately)
  initSplash();

  // 3. Init interactions
  initCategoryTabs();
  initSideNav();
  initLanguageToggle();
  initHeroScroll();

  // 4. Init card entrance animations (with slight delay for DOM settle)
  setTimeout(() => {
    initCardAnimations();
  }, prefersReducedMotion ? 0 : 1600);
}

// Run on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
