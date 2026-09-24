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
 *  - English and Arabic language switching
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
    { id: 'omelette', name: 'Omelette', description: 'Omelette - Mushroom - Onion - Pepper - Butter - Jam - Toast', price: 238, image: 'assets/images/omelette.jpg', tags: [], tagTypes: [] },
    { id: 'club-sandwich', name: 'Club Sandwich', description: 'Chicken - Smoked Turkey - Salami - Cheddar - Lettuce - Mayonnaise - Toast', price: 356, image: 'assets/images/club-sandwich.jpg', tags: [], tagTypes: [] },
    { id: 'turkey-cheese-toast', name: 'Turkey Cheese Toast', description: 'Smoked turkey - Lettuce - Cheddar - Mayonnaise - Mustard - Tomato - Toast', price: 356, image: 'assets/images/club-sandwich.jpg', tags: [], tagTypes: [] },
    { id: 'shadow-breakfast', name: 'Shadow Breakfast', description: 'Omelette - Frankfurter - Smoked Turkey - Mushroom - Cherry Tomato - Mashed Potatoes - Butter - Jam - Toast', price: 403, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'cheese-lovers-breakfast', name: 'Cheese Lovers Breakfast', description: 'Omelette - Cheddar - Roquefort - Romy cheese - Hot dog - Apple - Walnuts - Butter - Jam - Toast', price: 403, image: 'assets/images/cheese-lovers-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'oriental-breakfast', name: 'Oriental Breakfast', description: 'Beans - Falafel - Mexican Sausage - Omelette - Cheese WithTomato - Romy Cheese - French Fries - Assorted Luncheon Meat', price: 280, image: 'assets/images/oriental-egyptian-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'feteer-meshaltet', name: 'Feteer Meshaltet', description: 'Traditional Egyptian flaky pastry, freshly baked and served warm with two side dishes: morta, white honey, black honey, cream qeshta, or old cheese.', price: 538, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
  ],

  soup: [
    { id: 'onion-soup', name: 'Onion Soup', description: 'Caramelized Onions - Mozzarella - Toast', price: 151, image: 'assets/images/oriental-egyptian-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'creamy-chicken-soup', name: 'Creamy Chicken Soup', description: 'Creamy Soup - Chicken', price: 202, image: 'assets/images/oriental-egyptian-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'creamy-mushroom-soup', name: 'Creamy Mushroom Soup', description: 'Creamy Soup - Mushroom', price: 181, image: 'assets/images/oriental-egyptian-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'lentil-soup', name: 'Lentil Soup', description: 'Yellow Lentil Soup', price: 148, image: 'assets/images/oriental-egyptian-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'orzo-soup', name: 'Orzo Soup', description: 'Orzo Soup', price: 148, image: 'assets/images/oriental-egyptian-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'vegetable-soup', name: 'Vegetable Soup', description: 'Vegetable Soup', price: 148, image: 'assets/images/oriental-egyptian-breakfast.jpg', tags: [], tagTypes: [] },
  ],

  appetizers: [
    { id: 'chicken-strips', name: 'Chicken Strips', description: 'Fried Chicken - Honey Mustard Sauce', price: 280, image: 'assets/images/cheese-lovers-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'mozzarella-sticks', name: 'Mozzarella Sticks', description: 'Mozzarella Sticks', price: 252, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
    { id: 'shadow-potatoes', name: 'Shadow Potatoes', description: 'Fried Potatoes - Cheddar Sauce - Honey Mustard Sauce - Fried Chicken', price: 365, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'chicken-quesadilla', name: 'Chicken Quesadilla', description: 'Tortilla Bread - Mozzarella - Cheddar - Chicken - Onion - Pepper', price: 284, image: 'assets/images/cheese-lovers-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'vegetable-quesdilla', name: 'Vegetable Quesadilla', description: 'Tortilla Bread - Mozzarella - Cheddar - Onion - Pepper', price: 258, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
    { id: 'cheese-sambousek-4-pieces', name: 'Cheese Sambousek (4 Pieces)', description: 'Cheese Sambousek', price: 183, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'meat-sambousek-4-pieces', name: 'Meat Sambousek (4 Pieces)', description: 'Meat Sambousek', price: 241, image: 'assets/images/cheese-lovers-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'hot-chicken-balls', name: 'Hot Chicken Balls', description: 'Tender fried rolled chicken with cheese and Louisiana mayo dip', price: 390, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
  ],

  salad: [
    { id: 'greek-salad', name: 'Greek Salad', description: 'Lettuce - Pepper - Onion - Cherry Tomato - Feta Cheese - Olives', price: 288, image: 'assets/images/oriental-egyptian-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'chicken-caesar-salad', name: 'Chicken Caesar Salad', description: 'Chicken - Lettuce - Parmesan - Cherry Tomato - Toast', price: 362, image: 'assets/images/oriental-egyptian-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'chicken-avocado-salad', name: 'Chicken Avocado Salad', description: 'Chicken - Avocado - Carrots - Corn - Mushroom - Toast', price: 362, image: 'assets/images/oriental-egyptian-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'beef-apple-salad', name: 'Beef Apple Salad', description: 'Beef - Smoked Turkey - Cherry Tomato - Lettuce - Apple - Kiwi - Walnuts', price: 533, image: 'assets/images/oriental-egyptian-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'tahina-salad', name: 'Tahina Salad', description: 'Tahina', price: 124, image: 'assets/images/oriental-egyptian-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'baba-ghanoush-salad', name: 'Baba Ghanoush Salad', description: 'Baba Ghanoush', price: 124, image: 'assets/images/oriental-egyptian-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'oriental-salad', name: 'Oriental Salad', description: 'Tomato - Cucumber - Greens', price: 124, image: 'assets/images/oriental-egyptian-breakfast.jpg', tags: [], tagTypes: [] },
  ],

  'chicken-main': [
    { id: 'smoked-chicken-breast', name: 'Smoked Chicken Breast', description: 'Chicken Breast - Garlic - Ketchup - Salt - Pepper Sauce - Paprika - Olive Oil with two side dishes: smoked rice, fries, sauteed vegetables, or mashed potatoes.', price: 855, image: 'assets/images/club-sandwich.jpg', tags: [], tagTypes: [] },
    { id: 'chicken-shish', name: 'Chicken Shish', description: 'Chicken Shish Tawook', price: 765, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
    { id: 'boneless-grilled-chicken', name: 'Boneless Grilled Chicken', description: 'Boneless grilled chicken served with your choice of two side dishes.', price: 696, image: 'assets/images/club-sandwich.jpg', tags: [], tagTypes: [] },
    { id: 'grilled-chicken', name: 'Grilled Chicken', description: 'Grilled chicken with two side dishes: rice, fries, sauteed vegetables, or mashed potatoes.', price: 765, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
    { id: 'chicken-pesto', name: 'Chicken Pesto', description: 'Grilled Chicken - Beef Bacon - Pesto Sauce with two side dishes.', price: 821, image: 'assets/images/club-sandwich.jpg', tags: [], tagTypes: [] },
    { id: 'cordon-bleu', name: 'Cordon Bleu', description: 'Fried chicken stuffed with mozzarella, cheddar, and turkey with Richford sauce and two side dishes.', price: 807, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
    { id: 'chicken-parmesan', name: 'Chicken Parmesan', description: 'Fried Chicken - Salami - Pepperoni - Cheddar - Parmesan - Mozzarella with two side dishes.', price: 819, image: 'assets/images/club-sandwich.jpg', tags: [], tagTypes: [] },
    { id: 'chicken-curry-and-shrimp', name: 'Chicken Curry And Shrimp', description: 'Grilled Chicken - Grilled Shrimp - Creamy Sauce - Pineapple Juice - Sauteed Vegetables', price: 975, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
    { id: 'butter-chicken', name: 'Butter Chicken', description: 'Chicken - White Rice - Indian Bread Nan', price: 785, image: 'assets/images/club-sandwich.jpg', tags: [], tagTypes: [] },
    { id: 'chicken-sweet-and-sour', name: 'Chicken Sweet And Sour', description: 'Fried chicken with pineapple slices, colored pepper, onion, sweet and sour sauce, and two side dishes.', price: 811, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
  ],

  'beef-main': [
    { id: 'mix-grill', name: 'Mix Grill', description: 'Kebab - Kofta - Chicken Shish Tawook - Rice', price: 954, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'kofta', name: 'Kofta', description: 'Grilled kofta with two side dishes: rice, fries, sauteed vegetables, or mashed potatoes.', price: 845, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'grilled-beef-fillet', name: 'Grilled Beef Fillet', description: 'Grilled beef fillet with two side dishes: rice, fries, sauteed vegetables, or mashed potatoes.', price: 1213, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'beef-rib-eye', name: 'Beef Rib Eye', description: 'Beef rib eye with two side dishes: rice, fries, sauteed vegetables, or mashed potatoes.', price: 1352, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'beef-stroganoff', name: 'Beef Stroganoff', description: 'Beef stroganoff with mushroom sauce and two side dishes.', price: 891, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
  ],

  pasta: [
    { id: 'koshary', name: 'Koshary', description: 'Pasta - Rice - Lentils - Vermicelli - Onion - Chickpeas - Tomato sauce', price: 130, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
    { id: 'spaghetti-bolognese', name: 'Spaghetti Bolognese', description: 'Spaghetti Pasta - Minced Meat - Bolognese Sauce', price: 331, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
    { id: 'arrabbiata-pasta', name: 'Arrabbiata Pasta', description: 'Pasta - Mushroom - Olives - Olive Oil - Onion - Basil - Tomato Sauce - Parmesan - Cherry Tomato', price: 302, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
    { id: 'chicken-bbq-pasta', name: 'Chicken BBQ Pasta', description: 'Pasta - Grilled Chicken - Colored Pepper - Tomato Sauce - Parmesan', price: 350, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
    { id: 'mabkabka', name: 'Mabkabka', description: 'Pasta - Beef pieces - Tomato sauce - Pepper', price: 355, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
    { id: 'four-cheese-pasta', name: 'Four Cheese Pasta', description: 'Pasta - White Sauce - Cheddar - Mozzarella - Parmesan', price: 331, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
    { id: 'chicken-alfredo-pasta', name: 'Chicken Alfredo Pasta', description: 'Pasta - Grilled Chicken - Mushroom - White Sauce - Parmesan', price: 355, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
    { id: 'chicken-pesto-pasta', name: 'Chicken Pesto Pasta', description: 'Pasta - Grilled Chicken - Mushroom - Pesto Sauce - Parmesan', price: 344, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
    { id: 'shrimp-pesto-pasta', name: 'Shrimp Pesto Pasta', description: 'Pasta - Grilled shrimp - Mushroom - Pesto sauce - Parmesan', price: 292, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
    { id: 'seafood-pasta', name: 'Seafood Pasta', description: 'Pasta - Shrimp - Calamari - Sticks - Colored Pepper - White Sauce - Parmesan', price: 558, image: 'assets/images/tortilla-eggs.jpg', tags: [], tagTypes: [] },
  ],

  pizza: [
    { id: 'margherita-pizza', name: 'Margherita Pizza', description: 'Mozzarella - Parmesan', price: 305, image: 'assets/images/cheese-lovers-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'vegetarian-pizza', name: 'Vegetarian Pizza', description: 'Mozzarella - Colored Pepper - Onion - Mushroom - Broccoli - Parmesan', price: 305, image: 'assets/images/cheese-lovers-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'salami-pizza', name: 'Salami Pizza', description: 'Mozzarella - Salami - Black Olives - Parmesan', price: 339, image: 'assets/images/cheese-lovers-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'chicken-bbq-pizza', name: 'Chicken BBQ Pizza', description: 'Mozzarella - Grilled Chicken - Colored Pepper - Mushroom - BBQ Sauce', price: 339, image: 'assets/images/cheese-lovers-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'four-cheese-pizza', name: 'Four Cheese Pizza', description: 'Mozzarella - Cheddar - Parmesan - Roquefort', price: 339, image: 'assets/images/cheese-lovers-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'tuna-pizza', name: 'Tuna Pizza', description: 'Mozzarella - Tuna - Sweet Corn', price: 424, image: 'assets/images/cheese-lovers-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'shrimp-pizza', name: 'Shrimp Pizza', description: 'Mozzarella - Mushroom - Colored pepper - Shrimp - Parmesan', price: 279, image: 'assets/images/cheese-lovers-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'four-seasons-pizza', name: 'Four Seasons Pizza', description: 'Mozzarella - Grilled Chicken - Salami - Smoked Turkey - Colored Pepper - Mushroom - Parmesan', price: 547, image: 'assets/images/cheese-lovers-breakfast.jpg', tags: [], tagTypes: [] },
  ],

  sandwich: [
    { id: 'shish-tawook-sandwich', name: 'Shish Tawook Sandwich', description: 'Shish Tawook Sandwich - Fries', price: 250, image: 'assets/images/club-sandwich.jpg', tags: [], tagTypes: [] },
    { id: 'hawawshi', name: 'Hawawshi', description: 'Charcoal-grilled beef hawawshi', price: 150, image: 'assets/images/club-sandwich.jpg', tags: [], tagTypes: [] },
    { id: 'steak-burger', name: 'Steak Burger', description: 'Burger patty - Beef bacon - Mayonnaise - Mustard - Ketchup - Tomato - Cheddar - Lettuce - Onion - Fries - Bun', price: 261, image: 'assets/images/club-sandwich.jpg', tags: [], tagTypes: [] },
    { id: 'classic-burger', name: 'Classic Burger', description: 'Burger - Mayonnaise - Mustard - Ketchup - Tomato - Cheddar - Lettuce - Onion - Fries - Bread', price: 314, image: 'assets/images/club-sandwich.jpg', tags: [], tagTypes: [] },
    { id: 'cordon-bleu-sandwich', name: 'Cordon Bleu Sandwich', description: 'Cordon Bleu with mix cheese, mayonnaise, lettuce, sherry tomato, and fries.', price: 392, image: 'assets/images/club-sandwich.jpg', tags: [], tagTypes: [] },
    { id: 'chicken-fajita-sandwich', name: 'Chicken Fajita Sandwich', description: 'Grilled Chicken - Colored Pepper - Onion - Mozzarella - Mayonnaise - Jalapeno - BBQ - Fries', price: 377, image: 'assets/images/club-sandwich.jpg', tags: [], tagTypes: [] },
    { id: 'beef-mushroom-sandwich', name: 'Beef Mushroom Sandwich', description: 'Grilled Beef - Mushroom Sauce - Fries', price: 458, image: 'assets/images/club-sandwich.jpg', tags: [], tagTypes: [] },
  ],

  'food-extras': [
    { id: 'extra-cheese', name: 'Extra Cheese', description: 'Your choice of food extras', price: 83, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'extra-sauce', name: 'Extra Sauce', description: 'Your choice of extra sauce', price: 83, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'extra-french-fries', name: 'Extra French Fries', description: 'Your choice of food extras', price: 83, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'extra-mashed-potatoes', name: 'Extra Mashed Potatoes', description: 'Your choice of food extras', price: 100, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'extra-mushroom', name: 'Extra Mushroom', description: 'Your choice of food extras', price: 46, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'extra-rice', name: 'Extra Rice', description: 'Your choice of food extras', price: 46, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'extra-sauteed-vegetables', name: 'Extra Sauteed Vegetables', description: 'Your choice of food extras', price: 46, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'extra-calamari', name: 'Extra Calamari', description: 'Your choice of food extras', price: 86, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'extra-cold-cuts', name: 'Extra Cold Cuts', description: 'Your choice of food extras', price: 86, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'extra-pasta', name: 'Extra Pasta', description: 'Your choice of food extras', price: 86, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'extra-chicken', name: 'Extra Chicken', description: 'Your choice of food extras', price: 86, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'extra-shrimp', name: 'Extra Shrimp', description: 'Your choice of food extras', price: 135, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
    { id: 'extra-beef', name: 'Extra Beef', description: 'Your choice of food extras', price: 161, image: 'assets/images/fatar-breakfast.jpg', tags: [], tagTypes: [] },
  ],
};

const CATEGORY_LABELS = {
  breakfast: 'Breakfast',
  soup: 'Soup',
  appetizers: 'Appetizers',
  salad: 'Salad',
  'chicken-main': 'Chicken Main Course',
  'beef-main': 'Beef Main Course',
  pasta: 'Pasta',
  pizza: 'Pizza',
  sandwich: 'Sandwich',
  'food-extras': 'Food Extras',
};

for (const category of BEVERAGE_CATEGORIES) {
  CATEGORY_LABELS[category.key] = category.label;
  ARABIC_CATEGORIES[category.key] = category.arabicLabel;
  MENU_DATA[category.key] = category.items.map(item => {
    ARABIC_MENU[item.id] = [item.arabicName, item.arabicDescription];
    const { arabicName, arabicDescription, ...menuItem } = item;
    return { ...menuItem, tags: [], tagTypes: [] };
  });
}

let currentLanguage = 'en';
const arabicPriceFormatter = new Intl.NumberFormat('ar-EG-u-nu-arab', {
  useGrouping: false,
  maximumFractionDigits: 0,
});

function categoryLabel(categoryKey) {
  return currentLanguage === 'ar'
    ? ARABIC_CATEGORIES[categoryKey]
    : CATEGORY_LABELS[categoryKey];
}

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

function formatPrice(price) {
  const roundedPrice = Math.round(Number(price));
  return currentLanguage === 'ar'
    ? arabicPriceFormatter.format(roundedPrice)
    : roundedPrice.toString();
}

function updateHeroTitle(categoryKey) {
  const heroTitle = $('.hero__title');
  if (!heroTitle) return;
  heroTitle.textContent = categoryLabel(categoryKey) || (currentLanguage === 'ar' ? 'القائمة' : 'Menu');
}

function addBeverageCategories() {
  const track = $('#categoriesTrack');
  const sections = $('.menu__sections');
  if (!track || !sections) return;

  BEVERAGE_CATEGORIES.forEach(category => {
    const tab = document.createElement('button');
    tab.className = 'cat-btn';
    tab.id = `tab-${category.key}`;
    tab.type = 'button';
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', 'false');
    tab.setAttribute('aria-controls', `section-${category.key}`);
    tab.dataset.category = category.key;
    tab.textContent = category.label;
    track.append(tab);

    const section = document.createElement('section');
    section.id = `section-${category.key}`;
    section.className = 'menu-section';
    section.setAttribute('role', 'tabpanel');
    section.setAttribute('aria-labelledby', tab.id);
    section.hidden = true;

    const items = document.createElement('div');
    items.className = 'menu-items';
    items.id = `${category.key}-items`;
    items.setAttribute('aria-label', `${category.label} items`);
    section.append(items);
    sections.append(section);
  });
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
  const arabic = currentLanguage === 'ar' ? ARABIC_MENU[item.id] : null;
  const name = arabic ? arabic[0] : item.name;
  const description = arabic ? arabic[1] : item.description;
  const currency = currentLanguage === 'ar' ? ARABIC_UI.currency : 'EGP';
  const safeName = escapeHTML(name);
  const safeDescription = escapeHTML(description);
  // Build tags HTML
  const tagsHTML = item.tags.map((tag, i) => {
    const type = item.tagTypes[i] || '';
    const icon = ICONS[type] || '';
    return `<span class="food-card__tag food-card__tag--${type}">${icon}${tag}</span>`;
  }).join('');

  // Image: real src + fallback placeholder
  const imgHTML = item.image === null
    ? `<div class="food-card__img-placeholder" aria-hidden="true">${PLACEHOLDER_ICON}</div>`
    : `
    <img
      src="assets/images/menu/${item.id}.webp"
      alt="${safeName}"
      class="food-card__img"
      loading="lazy"
      decoding="async"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
    />
    <div class="food-card__img-placeholder" style="display:none;" aria-hidden="true">
      ${PLACEHOLDER_ICON}
    </div>`;
  const descriptionHTML = safeDescription
    ? `<p class="food-card__desc">${safeDescription}</p>`
    : '';

  return `
    <article class="food-card" aria-label="${safeName}, ${formatPrice(item.price)} ${currency}">
      <div class="food-card__img-wrap">
        ${imgHTML}
      </div>
      <div class="food-card__body">
        <div class="food-card__header">
          <h2 class="food-card__name">${safeName}</h2>
          <div class="food-card__price">
            <span class="food-card__price-currency">${currency}</span>
            <span class="food-card__price-amount">${formatPrice(item.price)}</span>
          </div>
        </div>
        ${descriptionHTML}
        ${tagsHTML ? `<div class="food-card__tags" aria-label="Dietary information">${tagsHTML}</div>` : ''}
      </div>
    </article>
  `;
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
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
  const container = $(`#${categoryKey}-items`);
  if (!container) return;

  const emptyState = $(`[data-empty-category="${categoryKey}"]`);

  if (!items || items.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.hidden = false;
    return;
  }

  container.innerHTML = items.map(buildCardHTML).join('');
  if (emptyState) emptyState.hidden = true;
}

/* ================================================================
   INTERSECTION OBSERVER — Card entrance animations
   ================================================================ */
function initCardAnimations() {
  const activeSection = $('.menu-section--active');
  if (!activeSection) return;

  if (prefersReducedMotion) {
    $$('.food-card', activeSection).forEach(card => card.classList.add('card--visible'));
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

  $$('.food-card', activeSection).forEach((card, i) => {
    // Stagger via CSS custom property (transition-delay)
    card.style.transitionDelay = `${i * 18}ms`;
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
      updateHeroTitle(target);

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

  const textElements = $$('[data-i18n]');
  const ariaElements = $$('[data-i18n-aria]');
  const altElements = $$('[data-i18n-alt]');
  const englishText = new Map(textElements.map(el => [el, el.textContent.trim()]));
  const englishAria = new Map(ariaElements.map(el => [el, el.getAttribute('aria-label')]));
  const englishAlt = new Map(altElements.map(el => [el, el.getAttribute('alt')]));
  const englishTitle = document.title;

  function setLanguage(lang, save = true) {
    if (save && lang === currentLanguage) return;
    const isEn = lang === 'en';
    currentLanguage = lang;
    btnEn.classList.toggle('lang-toggle__btn--active', isEn);
    btnAr.classList.toggle('lang-toggle__btn--active', !isEn);
    btnEn.setAttribute('aria-pressed', isEn ? 'true' : 'false');
    btnAr.setAttribute('aria-pressed', isEn ? 'false' : 'true');
    document.documentElement.lang = lang;
    document.documentElement.dir  = isEn ? 'ltr' : 'rtl';
    document.title = isEn ? englishTitle : ARABIC_UI.title;

    textElements.forEach(el => {
      el.textContent = isEn ? englishText.get(el) : ARABIC_UI[el.dataset.i18n];
    });
    ariaElements.forEach(el => {
      el.setAttribute('aria-label', isEn ? englishAria.get(el) : ARABIC_UI.aria[el.dataset.i18nAria]);
    });
    altElements.forEach(el => {
      el.setAttribute('alt', isEn ? englishAlt.get(el) : ARABIC_UI.aria[el.dataset.i18nAlt]);
    });

    $$('[data-category]').forEach(tab => {
      tab.textContent = categoryLabel(tab.dataset.category);
    });
    $$('.menu-items').forEach(container => {
      const label = categoryLabel(container.id.replace(/-items$/, ''));
      container.setAttribute('aria-label', isEn ? `${label} items` : `أصناف ${label}`);
    });
    $$('[data-empty-category]').forEach(emptyState => {
      $('.coming-soon__text', emptyState).textContent = isEn
        ? `${categoryLabel(emptyState.dataset.emptyCategory)} — Coming Soon`
        : `${categoryLabel(emptyState.dataset.emptyCategory)} — ${ARABIC_UI.comingSoon}`;
    });
    updateHeroTitle($('[data-category][aria-selected="true"]')?.dataset.category || 'breakfast');
    Object.keys(MENU_DATA).forEach(renderCategory);

    if ($('#app').classList.contains('app--visible')) {
      requestAnimationFrame(initCardAnimations);
    }
    if (save) {
      try {
        localStorage.setItem('shadow-menu-language', lang);
      } catch (_) {
        // The menu still works when storage is unavailable.
      }
    }
  }

  btnEn.addEventListener('click', () => setLanguage('en'));
  btnAr.addEventListener('click', () => setLanguage('ar'));

  let savedLanguage = 'en';
  try {
    savedLanguage = localStorage.getItem('shadow-menu-language') === 'ar' ? 'ar' : 'en';
  } catch (_) {
    // Private browsing may block storage.
  }
  setLanguage(savedLanguage, false);
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
  addBeverageCategories();

  // 1. Set the saved language and render menu data
  initLanguageToggle();

  // 2. Init splash
  initSplash();

  // 3. Init interactions
  initCategoryTabs();
  initSideNav();
  initHeroScroll();

  // Start observing cards immediately; the previous delay left cards invisible.
  requestAnimationFrame(initCardAnimations);
}

// Run on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
