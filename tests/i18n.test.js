const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const source = [
  fs.readFileSync(path.join(root, 'js', 'beverage-data.js'), 'utf8'),
  fs.readFileSync(path.join(root, 'js', 'translations.js'), 'utf8'),
  fs.readFileSync(path.join(root, 'js', 'script.js'), 'utf8'),
  'globalThis.menuTest = { MENU_DATA, ARABIC_MENU, ARABIC_UI, ARABIC_CATEGORIES, CATEGORY_LABELS, BEVERAGE_CATEGORIES, addBeverageCategories, buildCardHTML };',
].join('\n');
const context = vm.createContext({
  window: { matchMedia: () => ({ matches: true }) },
  document: { readyState: 'loading', addEventListener() {} },
});
vm.runInContext(source, context);

test('every menu item and category has Arabic copy', () => {
  const { MENU_DATA, ARABIC_MENU, ARABIC_CATEGORIES, CATEGORY_LABELS } = context.menuTest;
  const items = Object.values(MENU_DATA).flat();
  assert.equal(Object.keys(ARABIC_MENU).length, items.length);
  for (const item of items) {
    const copy = ARABIC_MENU[item.id];
    assert.ok(copy, `Missing Arabic copy for ${item.id}`);
    assert.match(copy[0], /[\u0600-\u06ff]/);
    if (copy[1]) assert.match(copy[1], /[\u0600-\u06ff]/);
  }
  for (const key of Object.keys(CATEGORY_LABELS)) {
    assert.match(ARABIC_CATEGORIES[key], /[\u0600-\u06ff]/);
  }
});

test('every marked page label has Arabic copy', () => {
  const { ARABIC_UI } = context.menuTest;
  const textKeys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(match => match[1]);
  const ariaKeys = [...html.matchAll(/data-i18n-aria="([^"]+)"/g)].map(match => match[1]);
  const altKeys = [...html.matchAll(/data-i18n-alt="([^"]+)"/g)].map(match => match[1]);
  for (const key of textKeys) assert.ok(ARABIC_UI[key], `Missing text: ${key}`);
  for (const key of [...ariaKeys, ...altKeys]) assert.ok(ARABIC_UI.aria[key], `Missing label: ${key}`);
});

test('menu view has a labeled home link and no redundant explore button', () => {
  assert.match(html, /class="menu-switcher__home"[\s\S]*?data-i18n="backToHome"/);
  assert.doesNotMatch(html, /class="hero__cta"/);
});

test('offers carousel pauses briefly after user interaction and moments stay separate', () => {
  assert.doesNotMatch(html, /id="offerToggle"/);
  assert.equal((html.match(/class="offer-slide(?: offer-slide--active)?"/g) || []).length, 3);
  assert.doesNotMatch(html, /class="offer-slide__cta"/);
  for (const image of [
    'pizza-night.webp', 'pizza-night-mobile.webp',
    'rooftop-grill.webp', 'rooftop-grill-mobile.webp',
    'signature-sips.webp', 'signature-sips-mobile.webp',
  ]) {
    assert.ok(fs.existsSync(path.join(root, 'assets', 'images', 'offers', image)), `Missing ${image}`);
  }
  assert.ok(html.indexOf('id="offers"') < html.indexOf('id="moments"'));
  assert.match(source, /resumeAt = Date\.now\(\) \+ 8000/);
});

test('switching card language preserves its price and image', () => {
  const item = context.menuTest.MENU_DATA.breakfast[0];
  const english = context.menuTest.buildCardHTML(item);
  vm.runInContext("currentLanguage = 'ar'", context);
  const arabic = context.menuTest.buildCardHTML(item);
  assert.match(english, /Omelette/);
  assert.match(arabic, /أومليت/);
  assert.match(english, /assets\/images\/menu\/omelette\.webp/);
  assert.match(arabic, /assets\/images\/menu\/omelette\.webp/);
  assert.match(english, />238<\/span>/);
  assert.match(arabic, />٢٣٨<\/span>/);
  assert.match(arabic, /٢٣٨ ج\.م/);
});

test('every food item has its own optimized image', () => {
  const items = Object.values(context.menuTest.MENU_DATA).flat()
    .filter(item => item.image !== null && !item.image.startsWith('assets/images/beverages/'));
  for (const item of items) {
    assert.ok(
      fs.existsSync(path.join(root, 'assets', 'images', 'menu', `${item.id}.webp`)),
      `Missing optimized image for ${item.id}`,
    );
  }
});

test('removed menu items stay out and Food Extras contains only the requested four', () => {
  const { MENU_DATA } = context.menuTest;
  const itemIds = JSON.parse(JSON.stringify(Object.values(MENU_DATA).flat().map(item => item.id)));
  const removedIds = [
    'turkey-cheese-toast', 'cheese-lovers-breakfast', 'boneless-grilled-chicken',
    'koshary', 'mabkabka', 'shrimp-pesto-pasta', 'shrimp-pizza', 'hawawshi', 'steak-burger',
    'hot-beverages-shadow-green-tea-pot', 'hot-beverages-fenugreek', 'hot-beverages-fenugreek-with-milk',
    'hot-beverages-hot-platter', 'hot-beverages-hot-peanuts', 'cocktails-shadow-cocktail',
    'granita-shadow-granita', 'shakes-shadow-milkshake', 'frappe-shadow-frappe',
  ];
  assert.equal(itemIds.some(id => removedIds.includes(id)), false);
  assert.deepEqual(
    JSON.parse(JSON.stringify(MENU_DATA['food-extras'].map(item => item.id))),
    ['extra-cheese', 'extra-cheese-fries', 'extra-french-fries', 'extra-mushroom'],
  );
  assert.equal(MENU_DATA['food-extras'][1].price, 83);
});

test('every workbook beverage item has its own generated photo', () => {
  const { MENU_DATA, BEVERAGE_CATEGORIES, buildCardHTML } = context.menuTest;
  vm.runInContext("currentLanguage = 'en'", context);
  assert.equal(BEVERAGE_CATEGORIES.length, 11);
  assert.equal(BEVERAGE_CATEGORIES.reduce((count, category) => count + category.items.length, 0), 117);
  const teaItem = MENU_DATA['hot-beverages'][0];
  assert.equal(teaItem.image, 'assets/images/beverages/hot-beverages-tea.webp');
  assert.ok(fs.existsSync(path.join(root, teaItem.image)));

  for (const category of BEVERAGE_CATEGORIES) {
    assert.equal(MENU_DATA[category.key].length, category.items.length);
    for (const item of MENU_DATA[category.key]) {
      assert.ok(item.image, `${item.id} should have an image path`);
      assert.ok(fs.existsSync(path.join(root, item.image)), `Missing image for ${item.id}`);
      assert.ok(item.price > 0, `${item.id} should not display a zero price`);
    }
  }

  const tea = buildCardHTML(teaItem);
  assert.match(tea, /Tea/);
  assert.match(tea, /assets\/images\/beverages\/hot-beverages-tea\.webp/);
  assert.match(tea, /food-card--beverage/);
  assert.match(tea, /<img\b/);
  const greenTea = buildCardHTML(MENU_DATA['hot-beverages'][1]);
  assert.match(greenTea, /assets\/images\/beverages\/hot-beverages-green-tea\.webp/);
  assert.match(greenTea, /<img\b/);
  vm.runInContext("currentLanguage = 'ar'", context);
  assert.match(buildCardHTML(teaItem), /شاي/);
  assert.match(buildCardHTML(teaItem), /assets\/images\/beverages\/hot-beverages-tea\.webp/);
});

test('beverage categories create matching accessible tabs and sections', () => {
  const createNode = tag => ({
    tag,
    children: [],
    attributes: {},
    dataset: {},
    setAttribute(name, value) { this.attributes[name] = value; },
    append(child) { this.children.push(child); },
  });
  const track = createNode('div');
  const sections = createNode('div');
  const page = {
    readyState: 'loading',
    addEventListener() {},
    querySelector(selector) {
      if (selector === '#categoriesTrack') return track;
      if (selector === '.menu__sections') return sections;
      return null;
    },
    createElement: createNode,
  };
  const liveContext = vm.createContext({
    window: { matchMedia: () => ({ matches: true }) },
    document: page,
  });
  vm.runInContext(`${source}\naddBeverageCategories();`, liveContext);

  assert.equal(track.children.length, 11);
  assert.equal(sections.children.length, 11);
  for (const [index, category] of context.menuTest.BEVERAGE_CATEGORIES.entries()) {
    const tab = track.children[index];
    const section = sections.children[index];
    assert.equal(tab.dataset.category, category.key);
    assert.equal(tab.attributes['aria-controls'], section.id);
    assert.equal(section.attributes['aria-labelledby'], tab.id);
    assert.equal(section.children[0].id, `${category.key}-items`);
  }
});

test('category changes scroll the new section to its beginning', () => {
  const createClassList = () => ({ toggle() {}, contains: () => false, add() {} });
  const track = {
    scrollBy(options) { this.scrollOptions = options; },
    getBoundingClientRect: () => ({ left: 0, width: 300 }),
  };
  const tab = {
    dataset: { category: 'soup' },
    classList: createClassList(),
    listeners: {},
    setAttribute() {},
    addEventListener(name, callback) { this.listeners[name] = callback; },
    closest: () => track,
    getBoundingClientRect: () => ({ left: 180, width: 90 }),
  };
  const section = {
    id: 'section-soup',
    classList: createClassList(),
    querySelectorAll: () => [],
    scrollIntoView(options) { this.scrollOptions = options; },
  };
  const previousSection = {
    id: 'section-breakfast',
    classList: createClassList(),
  };
  const heroTitle = { textContent: '' };
  const page = {
    querySelector(selector) {
      if (selector === '.hero__title') return heroTitle;
      if (selector === '.menu-section--active') return section;
      return null;
    },
    querySelectorAll(selector) {
      if (selector === '[data-category]') return [tab];
      if (selector === '.menu-section') return [previousSection, section];
      if (selector === '.food-card') return [];
      return [];
    },
  };
  const liveContext = vm.createContext({
    window: { matchMedia: () => ({ matches: true }) },
    document: page,
    requestAnimationFrame(callback) { callback(); },
  });
  vm.runInContext(`${source}\ninitCategoryTabs();`, liveContext);
  tab.listeners.click();

  assert.equal(previousSection.hidden, true);
  assert.equal(section.hidden, false);
  assert.equal(section.scrollOptions.block, 'start');
  assert.equal(track.scrollOptions.behavior, 'auto');
});

test('language buttons update the page and keep the selected category', () => {
  const makeElement = (extra = {}) => ({
    textContent: '',
    dataset: {},
    attributes: {},
    classList: { toggle() {}, contains: () => false },
    listeners: {},
    getAttribute(name) { return this.attributes[name] || null; },
    setAttribute(name, value) { this.attributes[name] = value; },
    addEventListener(name, callback) { this.listeners[name] = callback; },
    ...extra,
  });
  const enButton = makeElement();
  const arButton = makeElement();
  const heroTitle = makeElement();
  const navHome = makeElement({ textContent: 'Home', dataset: { i18n: 'navHome' } });
  const selectedTab = makeElement({ dataset: { category: 'pizza' } });
  const tabs = Object.keys(context.menuTest.MENU_DATA).map(category =>
    makeElement({ dataset: { category } }));
  const containers = Object.fromEntries(Object.keys(context.menuTest.MENU_DATA).map(category =>
    [category, makeElement({ id: `${category}-items` })]));
  const page = {
    title: 'Shadow Rooftop — Dining Above History',
    readyState: 'loading',
    documentElement: { lang: 'en', dir: 'ltr' },
    addEventListener() {},
    querySelector(selector) {
      if (selector === '#langEn') return enButton;
      if (selector === '#langAr') return arButton;
      if (selector === '#app') return makeElement();
      if (selector === '.hero__title') return heroTitle;
      if (selector === '[data-category][aria-selected="true"]') return selectedTab;
      if (selector.endsWith('-items')) return containers[selector.slice(1, -6)];
      return null;
    },
    querySelectorAll(selector) {
      if (selector === '[data-i18n]') return [navHome];
      if (selector === '[data-category]') return tabs;
      if (selector === '.menu-items') return Object.values(containers);
      return [];
    },
  };
  const liveContext = vm.createContext({
    window: { matchMedia: () => ({ matches: true }) },
    document: page,
    localStorage: { getItem: () => null, setItem() {} },
  });
  vm.runInContext(`${source}\ninitLanguageToggle();`, liveContext);

  arButton.listeners.click();
  assert.equal(page.documentElement.lang, 'ar');
  assert.equal(page.documentElement.dir, 'rtl');
  assert.equal(navHome.textContent, 'الرئيسية');
  assert.equal(heroTitle.textContent, 'البيتزا');
  assert.match(containers.pizza.innerHTML, /بيتزا مارجريتا/);
  assert.match(containers.pizza.innerHTML, />٣٠٥<\/span>/);

  enButton.listeners.click();
  assert.equal(page.documentElement.lang, 'en');
  assert.equal(page.documentElement.dir, 'ltr');
  assert.equal(navHome.textContent, 'Home');
  assert.equal(heroTitle.textContent, 'Pizza');
  assert.match(containers.pizza.innerHTML, /Margherita Pizza/);
  assert.match(containers.pizza.innerHTML, />305<\/span>/);
});
