# FoodieExpress

A polished, responsive food-delivery demo website built with HTML5, CSS3, and vanilla JavaScript.

## Included files

- `index.html` — complete page markup and dialogs
- `styles.css` — responsive visual system and light/dark themes
- `script.js` — rendering, filters, cart, favorites, demo checkout, authentication UI, and LocalStorage behavior
- `server.js` — dependency-free local Node.js server
- `public/manus-routes.json` — route manifest for the single-page home route
- `screenshots/` — verified desktop and mobile screenshots

## Test in another browser

### Option 1: Open the HTML file directly

Double-click `index.html` or open it from your browser. The page uses relative CSS and JavaScript files, browser LocalStorage, and remote image/font URLs.

### Option 2: Run the local Node server

From this folder, run:

```bash
node server.js
```

Then open `http://localhost:3000` in your browser.

### Option 3: Use Python if Node.js is unavailable

```bash
python3 -m http.server 3000
```

Then open `http://localhost:3000`.

## Notes

This is a frontend demonstration. Authentication, payments, restaurant data, ratings, reviews, delivery estimates, order tracking, and checkout are simulated demo experiences. Cart, favorites, theme, recently viewed dishes, location, and demo orders persist in browser LocalStorage.

The food photography and hero artwork load from remote URLs, so internet access is recommended for the complete visual experience. The interface includes emoji/CSS fallbacks when an image cannot load.

## GitHub upload

Extract this ZIP first. Upload the files inside the extracted folder directly to the root of a GitHub repository. Do not upload the ZIP file itself. For GitHub Pages, enable Pages from the repository's main branch and root folder; `index.html` is already the entry point.
