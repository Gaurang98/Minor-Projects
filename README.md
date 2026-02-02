# Myntra — E‑commerce Website Clone

A responsive, front-end clone of the Myntra e‑commerce website built with HTML, CSS and JavaScript. This project reproduces core UI flows and front-end behaviors (product listing, product details, cart interactions, responsive layout) to help learners understand how a modern e‑commerce frontend is structured and implemented.

Live demo: https://gaurang98.github.io/Myntra/

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation (Beginner-friendly)](#installation-beginner-friendly)
- [Usage](#usage)
- [Project Structure (example)](#project-structure-example)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Contact / Maintainer](#contact--maintainer)

---

## Overview
This repository is a frontend clone of the Myntra e‑commerce website. It focuses on user interface, layout, and client‑side interactions using plain HTML, CSS and vanilla JavaScript. It is ideal for beginners who want to:
- Learn responsive layout and CSS techniques
- Understand DOM manipulation and basic state management in JavaScript
- Practice structuring static projects for production-ready frontends

Repository description: "E-commerce Website clone"

Language composition:
- HTML — 43.7%
- JavaScript — 34.8%
- CSS — 21.5%

---

## Features
- Responsive homepage with product grid and hero/banner
- Product listing and product card components
- Product detail modal or page (image gallery, description, price)
- Add to cart and simple cart UI (client-side only)
- Category filters and simple sorting (client-side)
- Mobile-first responsive design and breakpoints
- Clean, semantic HTML and organized CSS (with comments)
- No backend required — all functionality implemented on the client



---

## Tech Stack
- HTML5 — semantic markup and accessibility-friendly structure
- CSS3 — responsive layout, Flexbox/Grid, transitions and media queries
- JavaScript (vanilla) — DOM manipulation, event handling, local state (localStorage optional)
- Optional tooling: Live Server, simple http server for local testing

This is a front-end only project (no server or database required).

---


## Installation (Beginner-friendly)
1. Clone the repository
   ```bash
   git clone https://github.com/Gaurang98/Myntra.git
   cd Myntra
   ```

2. Open locally
   - Option A — Open the site directly:
     - Double-click `index.html` in the project root to open in your browser.
     - Note: Some browser features (fetching JSON files, modules) may require serving over HTTP.

   - Option B — Serve with a simple local server (recommended)
     - Using Python 3:
       ```bash
       # from project root
       python -m http.server 5500
       # then open http://localhost:5500 in your browser
       ```
     - Using npm's live-server (if you have node):
       ```bash
       npm install -g live-server
       live-server --port=5500
       ```
     - Using VS Code: Install the Live Server extension and click "Go Live".

---

## Usage
- Browse product categories on the homepage.
- Click a product to view details.
- Use the "Add to Cart" button to add items — the cart is stored client-side (localStorage) in many clones.
- Open the cart to view items, change quantities, or remove items.
- On mobile, use the responsive navigation and product grid.

Example: Inspect a product card in the console
```javascript
// Example: read displayed product titles
const titles = [...document.querySelectorAll('.product-card .title')].map(el => el.textContent);
console.log(titles);
```

Running tests: This project is primarily static — if you add unit tests or linting, run them with your chosen tooling (e.g., Jest, ESLint).

---

## Project Structure (example)
Adjust to match your repository exactly.

```
Myntra/
├─ index.html
├─ product.html
├─ css/
│  ├─ styles.css
│  └─ responsive.css
├─ js/
│  ├─ main.js
│  └─ cart.js
├─ assets/
│  ├─ images/
│  └─ icons/
├─ data/
│  └─ products.json
└─ README.md
```

---

## Future Improvements
Ideas to make the project more complete and production-like:
- Convert to a component-based framework (React/Vue/Svelte) for better state management
- Add a lightweight backend or mock API (JSON Server, Firebase) for persistent data
- Implement user authentication and user-specific carts
- Improve accessibility (ARIA roles, keyboard navigation, contrast)
- Add unit and integration tests (Jest, Cypress)
- Add build tooling, bundler and deploy pipeline (Vite/Webpack + GitHub Pages / Netlify)
- Introduce payment flow mocks and better error handling

---

## Contributing
Contributions are welcome! Simple workflow:
1. Fork the repository
2. Create a branch: `git checkout -b feat/your-feature`
3. Make changes and commit: `git commit -m "feat: add X"`
4. Push to your fork and open a Pull Request

Please include:
- A clear description of what you changed
- Screenshots if the UI changed
- How to test your change locally

---

## Troubleshooting
- If images or JSON data do not load, ensure you are serving the project over HTTP (see Installation).
- If styles appear broken on mobile, check the media query breakpoints in CSS and viewport meta tag in `index.html`:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  ```
- For JavaScript errors, open DevTools (F12) and inspect the Console for stack traces.

---

## License
This project is provided for educational purposes.
- MIT License.

---

## Contact / Maintainer
- Maintainer: Gaurang98
- Repository: https://github.com/Gaurang98/Myntra
- For questions or help, open an issue in the repo.

---

Thank you for exploring this project!
