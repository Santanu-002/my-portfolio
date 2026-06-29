# 🚀 Premium Developer Portfolio

A responsive, high-performance, and visually stunning developer portfolio website built using vanilla technologies (HTML5, CSS3, ES6 JavaScript) and structured around a robust custom design system.

---

## ✨ Features

- **🎨 Modern Design Tokens**: Fully integrated CSS design system ([variables.css](file:///C:/Users/Admin/Desktop/my-portfolio/css/variables.css)) containing standard spacing, responsive font scales (Major Third scale), border-radius, z-indices, custom brand colors, shadow variants, and theme gradients.
- **📱 Mobile-First Responsive Layout**: Meticulously designed viewport break-points to ensure pixel-perfect renders across all device formats (mobile, tablet, desktop) without side overflows or margin leaking.
- **✨ Text Slider Animation**: A custom CSS-animated text slider inside the Hero section showcasing specialties ("Web" and "Mobile") with zero word-peeking layout optimizations.
- **⚡ Scroll Performance Tuned**: Leverages `requestAnimationFrame` to throttle scroll events on the sticky header and back-to-top buttons, preventing layout thrashing and maximizing scroll smoothness.
- **👁️ Intersection Observer Reveals**: Elegant reveal animations on section children triggered dynamically when scrolling into viewport view, with automatic timeout reset routines to prevent transition locks.
- **🎓 Shared Timeline Architecture**: Shared CSS class structure between the Experience and Education timelines, ensuring code reusability and high styling maintainability.
- **📁 Dynamic Project Modals**: Fully modal-backed projects section that dynamically overlays detailed descriptions and tech stacks on demand.

---

## 🛠️ Tech Stack

- **Core**: HTML5 (Semantic Structure)
- **Styling**: Vanilla CSS3 (Custom Variables, Flexbox, CSS Grid)
- **Interactions & Animations**: Vanilla ES6 JavaScript (Modular Imports)

---

## 📂 Project Structure

```
my-portfolio/
├── index.html            # Main site structure & entry point
├── js/
│   ├── main.js           # App bootstrapper & module initializer
│   ├── navbar.js         # Mobile drawer toggle, sticky bar, active item scroll tracker
│   ├── animations.js     # IntersectionObserver reveal effects
│   ├── skills.js         # Interactive skill progress bars (if applicable)
│   ├── projects.js       # Dynamic detail modal content mounting
│   └── backToTop.js      # Smooth scroll-to-top handler
├── css/
│   ├── main.css          # Aggregator stylesheet imports
│   ├── variables.css     # Design system tokens (spacing, typography, transitions)
│   ├── base.css          # Base resets, defaults, global classes
│   ├── navbar.css        # Desktop header & slide-in mobile navigation menu
│   ├── hero.css          # Hero banner, stats layout, and role text-slider
│   ├── about.css         # Personal bio & quick profile grids
│   ├── experience.css    # Unified work experience timeline design
│   ├── education.css     # Unified academic education timeline design
│   ├── skills.css        # Skills grids and tech badges
│   ├── projects.css      # Portfolio showcase cards
│   ├── contact.css       # Contact form, cards, and hover social links
│   ├── modal.css         # Project detail overlay designs
│   └── responsive.css    # Viewport breakpoints (Mobile & Tablet)
└── assets/               # Graphics, icons, and illustrations
```

---

## 🚀 Running Locally

Since the codebase uses standard ES6 JavaScript modules (`import/export`), files must be served over an HTTP server rather than loaded directly via the filesystem protocol (`file://`).

You can launch a server instantly using any of the following options:

### Option 1: Python HTTP Server (Built-in)
Run the following command in the project root:
```bash
# Python 3
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 2: Node.js (npx)
If you have Node.js installed, execute:
```bash
npx serve .
```
Then follow the URL printed in the console terminal.

### Option 3: VS Code Live Server Extension
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Click the **"Go Live"** button in the status bar at the bottom right.

---

## 🔧 Maintenance & Extension

1. **Adding Colors or Spacing**: Modify variables in [variables.css](file:///C:/Users/Admin/Desktop/my-portfolio/css/variables.css). All margins, paddings, fonts, and transitions are tied to these tokens.
2. **Adding Sections**: If you add new sections in [index.html](file:///C:/Users/Admin/Desktop/my-portfolio/index.html), include their selector identifiers in `scrollSections` inside [navbar.js](file:///C:/Users/Admin/Desktop/my-portfolio/js/navbar.js) to enable active link indicators automatically.
