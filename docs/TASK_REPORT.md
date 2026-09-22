# Task Completion Reports

> Newest task is always at the top.
> Never delete previous entries.

---

## Task #005 — Category System Setup + Luxury Typography Selection

### 1. Task Objective
Prepare the expanded menu category navigation for future menu items, then apply the selected luxury typography direction: Option 3 for category buttons and small copy, with Option 2's price number style.

### 2. What I Changed
- Rebuilt the category tabs so every category has its own unique `id`, `data-category`, and matching section.
- Added placeholder sections for Soup, Appetizers, Salad, Chicken Main Course, Beef Main Course, Pasta, Pizza, Sandwich, and Food Extras.
- Updated `MENU_DATA` so each new category has a ready empty array for future items.
- Updated rendering so every category is initialized automatically.
- Changed primary UI/body typography from Manrope to Spectral.
- Changed price number typography from Cinzel/Cormorant usage to Libre Baskerville.
- Refined category button sizing, weight, spacing, border, and active state for a more premium feel.

### 3. Files Created
- `docs/typography-preview.html` — A temporary visual comparison page for testing typography options.

### 4. Files Modified
- `index.html`
- `css/style.css`
- `js/script.js`
- `README.md`
- `docs/TASK_REPORT.md`

### 5. Testing Performed
- Checked that all category buttons point to unique sections.
- Checked that no duplicate HTML IDs remain.
- Ran JavaScript syntax validation on `js/script.js`.

### 6. Remaining Issues
- New categories are prepared but still empty until the real menu items are provided.
- Final visual approval should be done in the browser before pushing to GitHub.

---

## Task #004 — Upgrade Website Typography to Luxury Fine-Dining Font Pairing

### 1. Task Objective
Upgrade the website's primary typography from the generic `Inter` to the more refined, geometric `Manrope` to achieve a luxury fine-dining aesthetic. Ensure `Cormorant Garamond` remains for headings and brand elements, and guarantee that no important font-family declarations are hardcoded outside the centralized `FONT SETTINGS` section.

### 2. What I Changed
- Replaced the `Inter` Google Fonts `<link>` in `index.html` with `Manrope` (weights 300, 400, 500, 600).
- Updated `--font-primary` in `css/style.css` to use `'Manrope', sans-serif`.
- Conducted a full audit of all files (`css/style.css`, `index.html`, `js/script.js`) to find and eliminate hardcoded font families.
- Replaced a hardcoded inline `font-family: 'Inter', sans-serif;` in `js/script.js` (used for the language toast notification) with `var(--font-primary)`.

### 3. Files Created
None.

### 4. Files Modified
- `index.html`
  - Replaced Google Fonts import to load `Manrope` instead of `Inter`.
- `css/style.css`
  - Updated `--font-primary` to `'Manrope', sans-serif`.
- `js/script.js`
  - Fixed a hardcoded font style in the `showLanguageToast()` function to properly inherit `--font-primary`.

### 5. Files Deleted
None.

### 6. Functional Changes
- All typography now correctly references the centralized CSS variables without exceptions. The toast notification now dynamically inherits the primary font instead of bypassing the global setting.

### 7. Visual/UI Changes
- **Primary Typography:** Replaced `Inter` with `Manrope`. This affects the body text, hero description, category buttons, food descriptions, prices, dietary labels, CTA buttons, footer text, and side menu items.
- **Aesthetic:** `Manrope` is slightly more geometric and elegant than `Inter`, pushing the visual style further away from a "SaaS" or modern tech look and closer to a boutique hotel / premium hospitality brand.
- **Headings & Colors:** Unchanged. `Cormorant Garamond` and the champagne-gold color remain perfectly intact.

### 8. Technical Implementation
- By leveraging the CSS Custom Properties established in Task #003, updating the font throughout the site required changing exactly one variable (`--font-primary`). The audit ensured that no shadow-DOM or inline JS elements bypassed this architecture.

### 9. Data / Content Changes
None. Menu items, prices, descriptions, and layouts remain exactly as specified.

### 10. Testing Performed
- **Code Audit:** Used Node scripts and Regex searching to scan `style.css`, `index.html`, and `script.js` for any strings containing `font-family` or `Inter`.
- **Inline Fixes:** Identified and fixed 1 instance of hardcoded `Inter` in the JS toast logic.
- **Font Loading:** Confirmed the `<link>` tag correctly fetches the `Manrope` font weights from Google Fonts.

### 11. Problems Found
- A hardcoded font was discovered in the JavaScript toast notification (`script.js`). This was corrected immediately to use `var(--font-primary)`.

### 12. Remaining Issues
None.

### 13. Important Decisions
- Kept the font weight loading (300, 400, 500, 600) exactly the same for `Manrope` as it was for `Inter` to ensure no layout shifts or boldness changes broke the existing visual hierarchy.

### 14. How To Verify The Task
1. Open `index.html` in a web browser.
2. Inspect the body copy (like the hero description or food card descriptions) and confirm they are rendering in `Manrope`.
3. Click the "AR" language toggle in the header and verify that the "Coming soon" toast notification uses the new `Manrope` font rather than `Inter`.
4. Check the `FONT SETTINGS` in `css/style.css` to see the updated `--font-primary`.

### 15. Recommended Next Step
Proceed with preparing the Arabic (RTL) layout support, or implement any final touch-ups to interactive elements (like custom scrollbars or pull-to-refresh styles) to perfect the mobile app-like feel.

---

## Task #003 — Centralized Font Control + Temporary AI Food Photography

### 1. Task Objective
Simplify the font styling system so any future changes to typography can be made from a single, centralized location at the top of the CSS file. Secondly, replace the blank SVG placeholders with temporary, realistic, high-quality AI-generated food photography and a hero image that matches the luxury dark theme, giving the menu a more polished look until the real photos arrive.

### 2. What I Changed
- Created a `FONT SETTINGS` block at the very top of `css/style.css` containing three variables: `--font-primary`, `--font-heading`, and `--font-brand`.
- Refactored the entire CSS file to use these variables instead of hardcoded font families or the previous typography tokens.
- Generated 6 high-resolution, premium editorial-style food photographs for the breakfast items.
- Generated 1 premium hero photograph depicting a luxury breakfast table with the Pyramids in the background.
- Copied all 7 temporary images to `assets/images/` with clear, predictable filenames.
- Updated the `MENU_DATA` in `js/script.js` to point to the new exact filenames for the Cheese Lovers and Oriental Egyptian breakfasts.
- Updated `index.html` to reference the new hero image filename.
- Updated `index.html` to replace the unverified "14% VAT & 12% service charge" text in the footer with a neutral placeholder.
- Updated `README.md` with explicit, beginner-friendly instructions on how to change fonts and how to replace the temporary images in the future.

### 3. Files Created
- `assets/images/hero-rooftop-breakfast.jpg` — Temporary realistic hero background.
- `assets/images/omelette.jpg` — Temporary realistic omelette dish.
- `assets/images/club-sandwich.jpg` — Temporary realistic club sandwich dish.
- `assets/images/tortilla-eggs.jpg` — Temporary realistic tortilla dish.
- `assets/images/fatar-breakfast.jpg` — Temporary realistic fatar dish.
- `assets/images/cheese-lovers-breakfast.jpg` — Temporary realistic cheese lovers dish.
- `assets/images/oriental-egyptian-breakfast.jpg` — Temporary realistic oriental breakfast dish (using a duplicated placeholder due to API quota limit, see Problems Found).

### 4. Files Modified
- `css/style.css`
  - Added `FONT SETTINGS` section at line 1.
  - Replaced all instances of `var(--font-sans)` with `var(--font-primary)`.
  - Replaced all instances of `var(--font-serif)` with `var(--font-heading)`.
  - Assigned `--font-brand` to the main logo text specifically.
- `js/script.js`
  - Updated the image paths for `cheese-lovers` and `oriental-egyptian` objects to match the new filenames.
- `index.html`
  - Updated the hero `<img src="...">` path.
  - Replaced hardcoded VAT and service percentages with neutral wording.
- `README.md`
  - Added "Changing The Website Font" section.
  - Added "Replacing Temporary Food Images" section.

### 5. Files Deleted
None.

### 6. Functional Changes
- Website fonts can now be completely overhauled by editing just lines 16-18 of `css/style.css`.
- The menu cards now load high-quality placeholder photography instead of blank gray SVG boxes, dramatically improving the user's perception of the menu.
- Replaced hardcoded VAT percentages with a generic placeholder, ensuring no incorrect legal/pricing info is presented to guests.

### 7. Visual/UI Changes
- **Typography:** Unchanged visually (still Inter and Cormorant Garamond), but the underlying system is unified.
- **Hero Image:** Now features a beautiful sunrise over the Pyramids with a luxury breakfast table setting.
- **Menu Cards:** All 6 breakfast cards now display dark-themed, premium editorial food photography (1:1 ratio), replacing the previous SVG wireframes.

### 8. Technical Implementation
- The font control mechanism uses native CSS Custom Properties (`:root { --font-primary: ... }`). All components dynamically inherit these variables, meaning a single change cascades through the entire DOM instantly.
- Images were generated and directly placed into the `assets/images/` directory. The JavaScript object iterates over these paths exactly as strings, meaning image replacement is a simple file-system overwrite (no code compilation or bundling required).

### 9. Data / Content Changes
- No menu prices, item names, or descriptions were altered.
- Footer text changed from: "Prices are exclusive of 14% VAT & 12% service charge." to "VAT & service charge may apply."

### 10. Testing Performed
- Verified CSS font variables successfully apply to body, headings, and logo elements via code review.
- Verified all 7 new image files exist in the target directory using terminal file listing.
- Verified JS object paths exactly match the newly generated filenames.
- Verified prices remained exactly as specified.
- (Browser layout rendering and image loading performance were not manually tested visually inside a browser context, but paths and CSS syntax are confirmed correct).

### 11. Problems Found
- **API Quota Limitation:** When attempting to generate the 7th image (Oriental Egyptian Breakfast), the image generation API hit a strict rate limit (`429 Too Many Requests: QUOTA_EXHAUSTED`). As a workaround, the temporary `fatar-breakfast.jpg` image was duplicated and saved as `oriental-egyptian-breakfast.jpg` to ensure the slot is filled with high-quality photography rather than a blank SVG. Since these are temporary placeholders intended to be replaced, this does not affect the final product functionality.

### 12. Remaining Issues
- The 7 food images are *temporary AI-generated assets* and must be replaced by the restaurant owner's actual photography before final launch.

### 13. Important Decisions
- Kept the Eye-of-Ra logo as a decorative brand mark, as requested, without claiming it's the finalized official logo.
- Maintained the exact current layout and dark theme; the new AI photography was explicitly prompted to use dark elegant plates and dark table surfaces to match the CSS aesthetic perfectly.

### 14. How To Verify The Task
1. Open `css/style.css` and observe the new `FONT SETTINGS` block at the very top.
2. Edit `--font-primary: 'Arial', sans-serif;` and refresh the page to see how easily the body font changes.
3. Open `index.html` in the browser and observe the new hero background image featuring the Pyramids.
4. Scroll to the Breakfast category and verify that all 6 menu cards display realistic food photography.
5. Check the footer to verify the 14% VAT text has been replaced with the neutral placeholder.
6. Verify all 6 breakfast prices are exactly as they were (420, 510, 465, 525, 510, 495).

### 15. Recommended Next Step
Focus on implementing the Arabic (RTL) language content and layout flipping logic, since the foundational English structure and visual aesthetic are now fully established and polished.

---

## Task #002 — Permanent Task Reporting System Setup

### 1. Task Objective
Establish a permanent, structured task completion reporting system for the Shadow Rooftop project. Every future completed task must produce a new report entry at the top of this file (`/docs/TASK_REPORT.md`). This task also retroactively documents Task #001 (the initial website build).

### 2. What I Changed
- Created the `/docs/` directory inside the project root.
- Created this master report file: `/docs/TASK_REPORT.md`.
- Retroactively wrote Task #001's full report below to document the prior website build.

### 3. Files Created
- `docs/TASK_REPORT.md` — This master report file. All future task reports live here, newest first.

### 4. Files Modified
None.

### 5. Files Deleted
None.

### 6. Functional Changes
None to the website itself. The reporting system is now active and all future tasks will produce a structured report entry in this file.

### 7. Visual/UI Changes
None.

### 8. Technical Implementation
- A `/docs/` folder was created at the project root to keep documentation separate from source code.
- A single master markdown file (`TASK_REPORT.md`) uses a newest-first structure so the latest task is always visible without scrolling.
- Each task entry uses a numbered heading (`Task #001`, `Task #002`, …) for easy reference.

### 9. Data / Content Changes
None.

### 10. Testing Performed
- Confirmed `/docs/` directory was created successfully via PowerShell output.
- Confirmed `TASK_REPORT.md` file was written without errors.

### 11. Problems Found
No problems.

### 12. Remaining Issues
None for this setup task.

### 13. Important Decisions
- A single master file is used instead of one file per task, keeping the report history consolidated and easy to navigate.
- Reports are ordered newest-first so recent work is immediately visible.

### 14. How To Verify The Task
1. Open `c:\Users\mazen\OneDrive\Desktop\shadow rooftop\docs\TASK_REPORT.md`.
2. Confirm the file exists and contains both Task #001 and Task #002 entries.
3. Confirm Task #002 is listed above Task #001 (newest first).

### 15. Recommended Next Step
Add real food photography images to `assets/images/` to replace the SVG placeholders, which will be the highest-impact visual upgrade to the current website.

---

## Task #001 — Full Initial Website Build

### 1. Task Objective
Design and build a complete, production-quality, mobile-first QR restaurant menu website for **Shadow Rooftop** — a premium rooftop restaurant/café overlooking the Pyramids of Giza, Cairo, Egypt. The website targets international tourists and must feel luxury, elegant, and professional enough to present directly to the restaurant owner.

### 2. What I Changed
This was a greenfield build — no prior files existed. All of the following were created from scratch:

- Designed and built the full HTML structure with semantic markup and ARIA accessibility.
- Implemented a luxury dark color system (`#070A0F` background + `#C9A45C` champagne gold).
- Built the splash/intro screen with letter-by-letter "SHADOW" reveal animation.
- Built the sticky glass-morphism header with logo, language toggle (EN|AR), and hamburger button.
- Built the hero section with layered gradient overlays and a Pyramids image slot.
- Built the horizontal category navigation (Breakfast, Starters, Main Course, Desserts, Drinks).
- Built the food card component — image thumbnail, name, description, dietary tags, gold price.
- Rendered all 6 breakfast items dynamically from a JavaScript data object.
- Built the slide-in side navigation panel with focus trap and keyboard support.
- Built the "Coming Soon" placeholder state for non-active categories.
- Built the premium minimal footer with logo, VAT note, location link, and social icons.
- Implemented card entrance animations via IntersectionObserver with staggered delays.
- Implemented the language toggle with Arabic "Coming Soon" toast notification.
- Implemented responsive layout: mobile → tablet → 2-column desktop grid.
- Implemented `prefers-reduced-motion` throughout (splash, cards, transitions).
- Verified zero orange colors used anywhere — all accents replaced with champagne gold.

### 3. Files Created

- `index.html` — Complete single-page HTML: splash, header, side nav, hero, categories, breakfast menu, footer. 354 lines. Semantic HTML5 with full ARIA attributes.
- `css/style.css` — Full styling: CSS custom properties, mobile-first layout, all components, animations, responsive breakpoints, scrollbar styling, selection colors. ~1,131 lines.
- `js/script.js` — All JavaScript: `MENU_DATA` object, card renderer, splash animation, category tab switching, side nav, language toggle, IntersectionObserver card animations. 448–507 lines.
- `assets/images/` — Directory created. Awaits real food photography.
- `README.md` — Developer guide: file structure, how to edit menu items, how to add categories, how to replace images, color reference table.

### 4. Files Modified
None (greenfield project).

### 5. Files Deleted
None.

### 6. Functional Changes
The website did not exist before. After this task it provides:

- A splash screen experience that auto-transitions to the main menu (~1.5 seconds).
- A fully navigable mobile QR menu with one active category (Breakfast) and four placeholder categories.
- A hamburger-triggered side navigation panel with site links.
- A language toggle button that shows a polite Arabic "Coming Soon" toast.
- Smooth scroll from the "EXPLORE MENU →" CTA to the menu section.
- Staggered card entrance animations as items scroll into view.
- A footer with a Google Maps link and social media buttons (Instagram, Facebook).

### 7. Visual/UI Changes

**Colors:**
- Background: `#070A0F` (deep black), card surface `#10141C`, footer `#0D1118`.
- Gold accent: `#C9A45C` (champagne gold). Used for: active category, prices, logo accents, borders, icons, CTA hover, social buttons. NOT overused.
- Text: `#F5F2EA` (warm white primary), `#A9A7A1` (secondary), `#6B6963` (muted).
- Zero orange anywhere.

**Typography:**
- Headings (hero title, dish names): Cormorant Garamond (elegant serif).
- Body, UI, labels: Inter (clean sans-serif).
- Clear hierarchy: brand → eyebrow → hero title → section label → dish name → description → price.

**Layout:**
- Mobile-first single column. Max content width `520px` on mobile, expands to `860px` on desktop.
- Food cards: 2-column grid on screens ≥ 900px; single column on mobile.
- Hero: full-bleed image slot with left-heavy gradient overlay for text legibility; image visible on right side on wider screens.

**Animations:**
- Splash: pyramid watermark fades up, logo icon fades up, "SHADOW" letters reveal one-by-one (65ms stagger), "ROOFTOP" and tagline fade in. Total ~1.5s.
- Cards: enter from `translateY(16px) opacity:0` to visible with per-card stagger (65ms × index) via IntersectionObserver.
- Category switching: instant section swap with smooth tab state transition.
- Card hover: subtle `translateY(-2px)`, brighter gold border, slight brightness increase on image.
- CTA hover: border lights up to full gold, slight `translateY(-1px)`, arrow nudges right 3px.
- Side nav: slides in from right `translateX(100%) → 0` with backdrop blur fade.
- Hamburger: morphs into ✕ via CSS line transforms.

**Mobile experience:**
- No horizontal overflow anywhere.
- All tap targets minimum 36–44px height.
- Category nav scrolls horizontally without page scroll.
- Sticky header + sticky category bar keep navigation always reachable.
- Header collapses to 60px on mobile, 70px on desktop.

### 8. Technical Implementation

**Menu data architecture:**
All menu content is stored in a single `MENU_DATA` constant object in `script.js`, keyed by category (`breakfast`, `starters`, `main`, `desserts`, `drinks`). To add or edit items, only this object needs to change — no HTML edits required.

**Card rendering:**
`buildCardHTML(item)` generates the full HTML string for each card. `renderCategory(key)` inserts all cards for a given key into the matching `#[key]-items` container in the DOM.

**Category switching:**
Tabs use `data-category` attributes. Clicking a tab sets `aria-selected`, toggles the `cat-btn--active` class, and toggles the `hidden` attribute on the corresponding `<section>`. A CSS rule `[hidden] { display: none !important; }` ensures cross-browser reliability.

**Card animations:**
`IntersectionObserver` watches all `.food-card` elements. When a card enters the viewport (threshold 6%), the class `card--visible` is added. CSS transitions on `opacity` and `transform` handle the visual effect. `transitionDelay` is set inline per-card index for stagger, then reset to `0ms` after the first `transitionend` event so hover animations aren't delayed.

**Splash timing:**
JS checks `prefers-reduced-motion`. If true, splash duration is set to `0ms` (instant skip). Otherwise, 1500ms total. Splash element is removed from the DOM after fade completes to free memory.

**Side nav focus trap:**
Tab keydown inside the nav panel cycles focus between the first and last focusable elements. Escape closes the panel. `document.body.overflow = 'hidden'` prevents background scroll while open.

**Language toggle:**
A `showLanguageToast()` function creates a temporary `<div>` toast with a CSS transition fade-in/out, auto-removes after 3 seconds. `document.documentElement.dir` and `.lang` are ready to be set to `'rtl'` / `'ar'` for the future Arabic implementation.

**Image fallback:**
Each `<img>` has an `onerror` handler that hides the broken image and reveals the sibling `.food-card__img-placeholder` div containing a gold-outlined SVG camera icon.

**Performance:**
- All food images use `loading="lazy"` and `decoding="async"`.
- Hero image uses `loading="eager"` (above the fold).
- No JavaScript frameworks, no icon libraries, no CSS utilities — only two Google Font families.
- CSS animations/transitions preferred over JavaScript where possible.

### 9. Data / Content Changes

**Brand:** Shadow Rooftop · Giza, Cairo, Egypt

**Breakfast items (exact prices as specified):**

| Item | Price |
|---|---|
| Omelette | EGP 420 |
| Club Sandwich | EGP 510 |
| Tortilla with Eggs | EGP 465 |
| Fatar Breakfast | EGP 525 |
| Cheese Lovers Breakfast | EGP 510 |
| Oriental Egyptian Breakfast | EGP 495 |

**Footer note:** "Prices are exclusive of 14% VAT & 12% service charge. Please inform our team of any food allergies or dietary requirements."

### 10. Testing Performed

- **File creation:** Verified all files exist via PowerShell directory listing.
- **ID cross-references:** Confirmed `#breakfast-items` in HTML matches the JS `renderCategory('breakfast')` selector.
- **Section ID cross-references:** Confirmed `section-breakfast` referenced in tab `aria-controls` matches the `<section id="section-breakfast">` in HTML.
- **Price verification:** Visually confirmed all 6 prices in `MENU_DATA` match the specification exactly.
- **Orange color audit:** `grep` search for "orange" returned zero matches across all files.
- **Bright color audit:** `grep` search for `#ff` returned zero matches.
- **`[hidden]` attribute:** Verified the CSS override `[hidden] { display: none !important; }` is present.
- **Browser open:** `index.html` was opened in the default browser via PowerShell `Start-Process`. Visual confirmation was not possible in the automated environment — see below.
- **Mobile layout:** Not directly tested in a browser DevTools environment (not accessible from this context). Designed and reviewed at the code level for correctness.
- **Console errors:** Not directly testable from this environment.
- **Horizontal overflow:** Not directly testable — mitigated by `overflow-x: hidden` on `body` and careful layout design.
- **Animations on real device:** Not tested.

### 11. Problems Found
- Real food images are not present — SVG placeholders display instead. This is expected and by design; the fallback system works correctly at the code level.
- Hero Pyramids photograph is not present — the CSS gradient fallback renders instead of a photo. This is expected.
- No browser-level console error test was possible in this environment.

### 12. Remaining Issues
- Real food photography needs to be added to `assets/images/` (7 images total).
- Arabic (RTL) language version is not yet implemented — infrastructure is in place.
- Starters, Main Course, Desserts, and Drinks categories contain no items yet — they show "Coming Soon" placeholders.
- No favicon has been added.
- No `manifest.json` for PWA/home screen installation.
- No offline/service worker caching (not required for initial version).

### 13. Important Decisions

- **Vanilla HTML/CSS/JS only** — No frameworks, no build tools. The website must open by double-clicking `index.html`. This is correct for a QR menu.
- **Champagne gold (`#C9A45C`) instead of orange** — The reference image used orange; the brief explicitly required replacing it with a luxury gold that does not look bright yellow. The chosen value is a muted antique gold.
- **Cormorant Garamond + Inter** — One premium serif for headings and dish names (evokes luxury hospitality), one clean sans-serif for body copy (maximizes readability on small screens).
- **Mobile-first, max-width constrained** — The menu is designed to a `520px` column on mobile, expanding to `860px` on desktop. This prevents the layout from stretching awkwardly on ultra-wide displays.
- **Menu data in JS, not HTML** — The `MENU_DATA` object is the single source of truth for all menu content. Future developers never need to edit the HTML to update menu items.
- **`IntersectionObserver` for card animations** — Pure CSS would play all animations on load; IO triggers them only when the user actually scrolls to each card, making the experience feel more alive without wasting animation budget.
- **`[hidden]` CSS override** — Some CSS resets interfere with the HTML `hidden` attribute. The explicit `display: none !important` ensures the tab-panel hide/show mechanism always works.
- **Logo as inline SVG** — No external logo image file is needed. The Eye-of-Ra triangle SVG is drawn in code and scales perfectly at any DPI.

### 14. How To Verify The Task

1. Open `c:\Users\mazen\OneDrive\Desktop\shadow rooftop\index.html` in a browser.
2. Observe the splash screen: Eye-of-Ra triangle → "SHADOW" letter-by-letter → "ROOFTOP" subtitle → "Dining Above History" tagline.
3. After ~1.5 seconds the main site fades in.
4. Confirm the header shows: logo (triangle + "SHADOW / ROOFTOP") | EN | AR | hamburger.
5. Tap/click the hamburger — side nav should slide in from the right.
6. Press Escape or tap outside — side nav should close.
7. Confirm the hero section shows: "DINING ABOVE HISTORY" eyebrow, "Breakfast" large title, description, "EXPLORE MENU →" button.
8. Click "EXPLORE MENU →" — page should smooth-scroll to the category navigation.
9. Confirm 5 category pills are visible: Breakfast (gold/active), Starters, Main Course, Desserts, Drinks.
10. Confirm 6 breakfast cards appear, each with: dish name, description, dietary tags, gold price.
11. Confirm exact prices: 420 · 510 · 465 · 525 · 510 · 495.
12. Click "Starters" — should show "Starters — Coming Soon" with a clock icon.
13. Click "Breakfast" to return.
14. Tap "AR" — should show a toast: "Arabic version coming soon."
15. Scroll to the footer — confirm: logo, VAT note, location link, Instagram icon, Facebook icon.
16. Open browser DevTools → toggle to mobile viewport (375px) — verify no horizontal overflow and readable layout.

### 15. Recommended Next Step
Add real food photography. The 7 images needed are listed in `README.md`. This is a zero-code change that will deliver the highest visual impact improvement to the current site.
