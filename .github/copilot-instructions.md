# Copilot Instructions — LuiWebsite (Luiza Skrok Career Coaching)

## Project Overview
A Polish-language personal brand / career coaching website for Luiza Skrok. Pure vanilla stack — no frameworks, no build tools, no preprocessors.

## Tech Stack
- HTML5, CSS3, vanilla JavaScript (ES modules)
- EmailJS (`@emailjs/browser@3` via CDN) for the contact form — no backend
- `js/config.js` exports EmailJS credentials; `js/script.js` imports them
- No TypeScript, no bundler (Webpack/Vite/etc.), no CSS preprocessor

## File Structure
```
index.html          # Homepage
style.css           # Single global stylesheet
js/config.js        # EmailJS key exports
js/script.js        # All JS interactions
pages/              # Inner pages (about, services, hr, collaboration, contact)
assets/images/      # Static images
```

## HTML Conventions
- Subpages in `pages/` must reference stylesheet as `../style.css` (not `style.css`)
- Scripts use `<script type="module">` with relative imports
- Language is Polish — keep all user-facing text in Polish

## CSS Conventions
- No CSS custom properties — colors are hardcoded hex values; do not introduce `var(--...)` unless refactoring the whole palette
- Section blocks separated by `/* ===== SECTION NAME ===== */` banner comments
- Naming: descriptive flat BEM-like (`.feature-card`, `.card-inner`, `.card-front`, `.card-back`, `.about-container`, `.btn`, `.btn-primary`)
- Modifier/state classes: `.section-alt` (alternate bg), `.flipped` (JS-toggled)

## Current Visual Direction (Gold + Black)
- Main brand direction is warm gold with black accents, inspired by the logo lettering.
- Keep the navigation bar in a premium gold look: gold gradient background, dark-gold bottom border, and black navigation text.
- Offer cards should look "golden" rather than flat: use gold gradients, darker gold borders, and subtle shine/highlight effects.
- Keep high readability: text contrast must stay strong on gold backgrounds (prefer black/dark text on light-gold surfaces).
- Prefer elegant, restrained effects over flashy UI; this is a professional career-coaching brand.

## Color Palette
| Role | Hex |
|---|---|
| Primary gold | `#cb9769` |
| Gold hover | `#b78457` |
| Dark gold | `#8f6442` |
| Black | `#1a1a1a` |
| Accent gold text | `#f5d2b4` |
| Body bg | `#d4b69d` |
| Card/light surface | `#fffaf3` |
| Alt section (About) bg | `#cb9769` |
| Light gold highlight | `#f8dfc7` |
| Soft gold panel bg | `#f3ede5` |

## Visual Notes
- Homepage hero uses `assets/images/Home_page_bar.jpg` as main banner image.
- Inline styles on subpages should follow the same gold/black palette as `style.css`.
- Avoid reintroducing teal/blue accents from earlier versions.

## JavaScript Conventions
- All JS goes in `js/script.js`; secrets/config in `js/config.js`
- DOM queries must be inside `DOMContentLoaded` (avoid querying at top scope)
- Flip cards: click toggles `.flipped` class on `.feature-card`; CSS handles the 3D transform
- EmailJS form submit uses `emailjs.sendForm()` inside the contact page only — guard with `if (document.getElementById('contact-form'))`

## Git Commit Hygiene
- Prioritize readable commit history.
- Use small, focused commits (one logical change per commit).
- Write descriptive commit messages in imperative form.
- Avoid mixing unrelated changes in a single commit.
- Before pushing, summarize planned commits (scope + message) when asked.

## Known Issues to Fix (not to repeat)
- `querySelectorAll('.feature-card')` is called twice in `script.js` — once at top level (before DOM ready) returning an empty NodeList, and once correctly inside `DOMContentLoaded`
- `getElementById('contact-form')` runs at top scope and throws on pages without that element
