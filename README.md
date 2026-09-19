# Excavate

A responsive marketing website for Excavate, a fictional mining and mineral
resources company, built as part of the WEDE5020 Portfolio of Evidence.

## File structure

├── index.html
├── services.html
├── careers.html
├── projects.html
├── contact.html
├── styles.css             
├── assets/
│   ├── truck.jpg      
│   ├── mine.jpg       
│   ├── crane.jpg      
│   └── scenery.jpg          
├── README.md
└── LICENSE

## How to view it

Clone the repository and open `index.html` directly in a browser, or serve the
folder with any static server e.g. the VS Code "Live Server" extension.

## Responsive design

- Layout is built with CSS Grid and Flexbox rather than fixed pixel widths.
- Two breakpoints: **≤900px** (tablet — 3-column grids drop to 2, hero/page
  header switch to a single column) and **≤600px** (mobile — all grids drop to
  1 column, and the primary navigation collapses into a checkbox-driven
  dropdown menu).
- Font sizes for headings use `clamp()` so type scales fluidly between
  breakpoints instead of jumping at fixed sizes.
- Four site photos live in `assets/`. Each is exported at two or three real
  widths and served with `srcset`/`sizes` (e.g. `truck-400.jpg 400w,
  truck-684.jpg 684w`), so a phone downloads the small file instead of the
  full-size one scaled down in the browser.

## Changelog

### v1.1.0 — Part 2 CSS styling & responsive design
- **Added** `styles.css`, a single external stylesheet linked from every page,
  built around a small set of CSS custom properties (colour, type, spacing).

- **Added** full typography system (Montserrat for headings, Roboto for body,
  fluid `clamp()` scale, consistent line-height).

- **Added** a Grid/Flexbox layout system (`.wrap`, `.grid-3`, `.grid-2`,
  header nav, footer) replacing ad-hoc/no layout rules.

- **Added** decorative and colour styling: card top-accent, `.strata-rule`
  divider, dark CTA bands, button variants.

- **Added** pseudo-class interaction states on nav links, buttons, cards, and form fields.

- **Added** responsive breakpoints at 900px and 600px, including a
  checkbox-driven mobile navigation menu 

- **Added** `assets/` with four site photos (truck, crane, mine, scenery),
  each exported at multiple real widths and wired up with `srcset`/`sizes`
  on the home hero, home "Since 1984" section, careers header, and the
  services page's rehabilitation section — genuine resolution switching,
  not just one image scaled by CSS.

- **Fixed from Part 1 feedback — "no comments in your code:** added
  explanatory HTML comments above every major sections across all five
  pages, and section-header comments throughout styles.css.

- **Fixed:** index.html's "Since 1984" section was missing its wrapping
  `<section>`/`.wrap` tags and rendered outside the page's normal flow —
  rebuilt as a proper two-column section.

- **Fixed:** `services.html`'s "How we work" section was missing its closing
  tags and its second column was never written — rebuilt as a proper
  two-column section, now paired with the rehabilitation photo.

- **Fixed:** broken navigation links. index.html linked to ../services.html
  and ../projects.html ; services.html and
  `projects.html` linked to Projects.html. All five pages now use the same flat link set.

- **Fixed:** renamed `Services.html` → `services.html` and `Careers.html` →
  `Careers.html` → `careers.html`, and `Contact.html` → `contact.html`, so
  every filename and every link to it agree in case.

- **Fixed:** `careers.html` was missing its `<link rel="stylesheet">` and
  Google Fonts `<link>` tags entirely.

### v1.0.0 — Part 1 
- Added an index page for the home page.
- Services, Projects, and Careers pages created.

## References

- Mozilla Developer Network (MDN), 2026. *CSS Grid Layout*. [online] Available
  at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
  [Accessed 14 September 2026].

- Mozilla Developer Network (MDN), 2026. *Basic concepts of flexbox*. [online]
  Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
  [Accessed 14 September 2026].

- Mozilla Developer Network (MDN), 2026. *Using media queries*. [online]
  Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
  [Accessed 14 September 2026].

- Mozilla Developer Network (MDN), 2026. *:focus-visible*. [online] Available
  at: https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible
  [Accessed 14 September 2026].

- Google Fonts, 2026. *Montserrat* and *Roboto* typefaces. [online] Available
  at: https://fonts.google.com [Accessed 1 August 2026].
