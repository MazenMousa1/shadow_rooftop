const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const source = [
  fs.readFileSync(path.join(root, 'js', 'translations.js'), 'utf8'),
  fs.readFileSync(path.join(root, 'js', 'script.js'), 'utf8'),
  'globalThis.menuTest = { MENU_DATA, ARABIC_MENU, ARABIC_UI, ARABIC_CATEGORIES, CATEGORY_LABELS, buildCardHTML };',
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
    assert.match(copy[1], /[\u0600-\u06ff]/);
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

test('every menu item has its own optimized image', () => {
  const items = Object.values(context.menuTest.MENU_DATA).flat();
  for (const item of items) {
    assert.ok(
      fs.existsSync(path.join(root, 'assets', 'images', 'menu', `${item.id}.webp`)),
      `Missing optimized image for ${item.id}`,
    );
  }
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
