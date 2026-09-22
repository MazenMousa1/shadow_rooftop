# Shadow Rooftop — QR Menu Website

A premium mobile-first QR restaurant menu for **Shadow Rooftop**, Giza, Cairo, Egypt.

---

## Project Structure

```
shadow rooftop/
├── index.html              — Main HTML (single page)
├── css/
│   └── style.css           — All styles (CSS variables, mobile-first)
├── js/
│   └── script.js           — All JavaScript (menu data + interactions)
├── assets/
│   └── images/
│       ├── hero-pyramids.jpg       ← Replace with real hero photo
│       ├── omelette.jpg            ← Replace with real food photo
│       ├── club-sandwich.jpg
│       ├── tortilla-eggs.jpg
│       ├── fatar-breakfast.jpg
│       ├── cheese-lovers.jpg
│       └── oriental-egyptian.jpg
└── README.md
```

---

## Adding / Editing Menu Items

All menu data lives in `js/script.js` inside the `MENU_DATA` object.

To edit an item:
```js
{
  id: 'omelette',
  name: 'Omelette',
  description: 'Your updated description here.',
  price: 420,                           // EGP price (number)
  image: 'assets/images/omelette.jpg',  // Path to food image
  tags: ['Vegetarian', 'Contains Dairy'],
  tagTypes: ['vegetarian', 'dairy'],    // vegetarian | gluten | dairy
},
```

## Adding a New Category

1. Add items array to `MENU_DATA` in `script.js`
2. Call `renderCategory('yourkey')` in the `init()` function
3. Add a `<div id="yourkey-items">` inside the corresponding section in `index.html`

---

## Changing The Website Font

To easily change the typography across the entire website without searching through the code:

1. Open `css/style.css`
2. Go to the `FONT SETTINGS` section at the very top.
3. Change `--font-primary` to update most website text (descriptions, buttons, body).
4. Change `--font-heading` to update headings and dish names.
5. Change `--font-brand` to update the main logo text.
6. Change `--font-price` to update menu price numbers.
7. Save and refresh the website.

---

## Replacing Temporary Food Images

The current images in the project are temporary visual assets representing the dishes. When you receive the real restaurant photography, you can replace them easily:

1. Place your real photos inside the `assets/images/` folder.
2. Use the **EXACT SAME FILENAMES** to overwrite the temporary ones:
   - `hero-rooftop-breakfast.jpg`
   - `omelette.jpg`
   - `club-sandwich.jpg`
   - `tortilla-eggs.jpg`
   - `fatar-breakfast.jpg`
   - `cheese-lovers-breakfast.jpg`
   - `oriental-egyptian-breakfast.jpg`
3. The website will automatically use the new images. You DO NOT need to modify the HTML or JavaScript code.

For best results, use square aspect ratios for the food dishes and high-quality 16:9 for the hero.

---

The site is structured for bilingual support:
- Language toggle `EN | AR` is already in the header
- HTML has `lang` and `dir` attributes ready
- When Arabic is ready, set `document.documentElement.dir = 'rtl'` and load translated `MENU_DATA`

---

## Color Reference

| Token | Value | Usage |
|---|---|---|
| `--bg-primary` | `#070A0F` | Page background |
| `--bg-secondary` | `#0D1118` | Footer, cards |
| `--gold` | `#C9A45C` | Active states, prices |
| `--gold-light` | `#E2C98A` | Hover gold |
| `--text-primary` | `#F5F2EA` | Headings, main text |
| `--text-secondary` | `#A9A7A1` | Descriptions |

---

## Technical Notes

- No frameworks, no build step — open `index.html` directly in any browser
- Fonts loaded from Google Fonts CDN (Cormorant Garamond + Spectral + Libre Baskerville)
- Food images lazy-loaded for performance
- Graceful fallback if images are missing (placeholder shown)
- `prefers-reduced-motion` respected throughout
