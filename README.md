# UPSC Zone AI

**An editorial, scroll-driven landing page for an AI-powered UPSC Civil Services preparation platform.**

🌐 **Live demo:** https://upsc-zone-ai-bay.vercel.app/
💻 **Source code:** [Pranay-Pandurang-Patil/ExamPrep-Demo-UI](https://github.com/Pranay-Pandurang-Patil/ExamPrep-Demo-UI)

---

## About

UPSC aspirants prepare for years, often with scattered tools. UPSC Zone AI is a concept for one calm place where **AI mock tests, current affairs, smart notes, previous-year questions, a personalised study plan and mentorship** come together.

This repository is the **frontend-only homepage** for that product. It is built as a real, responsive React website, not an image mockup, and focuses on visual storytelling and engineering quality.

## Highlights

- **Cinematic hero:** the artwork assembles layer by layer as you scroll (archival texture, then Parliament, then the vermilion circle, then the aspirant, then the ground and labels), using a pinned, scrubbed GSAP ScrollTrigger timeline. It works in both scroll directions.
- **Responsive by design:** full pinned animation on desktop, a shorter pin on tablets, and a recomposed, unpinned hero on phones.
- **Accessibility:**
  - It respects `prefers-reduced-motion`: no pinning, and the finished scene shows immediately.
  - It has a skip link, visible keyboard focus, semantic landmarks, and an accessible mobile menu and dialog.
- **Performance:**
  - Images are WebP with responsive `srcset`; the hero payload is about 440 KB, down from about 6 MB.
  - Below-the-fold images are lazy-loaded with fixed dimensions to prevent layout shift.
  - The hero waits for its assets to decode before animating.
- **Native scrolling only:** no scroll hijacking.

## Sections

Hero → Trust strip → Features → Subjects → Purpose ("More Than a Career") → Testimonials → Closing CTA → Footer

## Tech stack

| | |
|---|---|
| Framework | React 18 |
| Build tool | Vite 5 |
| Animation | GSAP + ScrollTrigger |
| Styling | Hand-written CSS with design tokens (no Tailwind) |
| Icons | Inline SVG |
| Hosting | Vercel |

## Run locally

**Requirements:** Node.js 18 or newer, and npm.

```bash
# 1. Get the code
git clone https://github.com/Pranay-Pandurang-Patil/ExamPrep-Demo-UI.git
cd ExamPrep-Demo-UI          # if the project sits in a subfolder, cd into it

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev                  # http://localhost:5173
```

Other commands:

```bash
npm run build      # production build into /dist
npm run preview    # serve the production build locally
```

If you downloaded the ZIP instead, unzip it, open a terminal in the project folder (the one containing `package.json`), and run steps 2 and 3.

## Project structure

```
src/
  App.jsx                    page assembly + section reveals
  styles.css                 all styling (design tokens in :root)
  data/content.js            editable copy: nav, metrics, testimonials, footer
  components/
    Nav.jsx, Sections.jsx, Footer.jsx, Icons.jsx
    hero/                    layered hero + GSAP timeline
      layers.config.js       position / size / z-index of every hero layer
      useHeroTimeline.js     scroll-driven assembly logic
      useAssetsReady.js      waits for images before animating
public/assets/               optimised WebP images
assets-src/                  lossless source images (not deployed)
docs/DEVELOPMENT_NOTES.md    phase-by-phase build notes
```

## Customising

- **Copy and data:** edit `src/data/content.js`.
- **Hero composition:** edit `src/components/hero/layers.config.js`.
- **Animation pacing:** edit the `end` distance and timeline positions in `useHeroTimeline.js`.
- **Colours and type:** edit the tokens at the top of `src/styles.css`.

## Deployment

Deployed on Vercel with the Vite preset: build command `npm run build`, output directory `dist`. No environment variables are required.

## Honest notes

This is a **hackathon demo**, so some content is intentionally placeholder:

- Trust metrics (`00%`, `0.0/5`), the trust quote, and the three testimonials are **clearly labelled sample content**, not real data.
- Subject photos, the lion capital, India Gate and the avatars are placeholder crops, to be replaced with licensed imagery.
- There is **no backend or authentication**. The CTAs scroll within the page. The AI features shown are the product concept, not working tools.

## Roadmap

- Real photography and licensed imagery
- Sign-up / waitlist flow and backend
- Subject detail pages
- Scroll-aware navigation highlight
- Verified metrics and real testimonials

## Author

**Pranay Patil** – [GitHub](https://github.com/Pranay-Pandurang-Patil)

---

*Built for a hackathon. Not affiliated with UPSC or any government body.*
