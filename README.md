# UPSC Zone AI — landing page
React + Vite + GSAP (ScrollTrigger). No other runtime dependencies.

    npm install
    npm run dev      # http://localhost:5173
    npm run build

- Hero: `src/components/Hero.jsx` — layered PNGs (parchment, circle, parliament, student), one GSAP entrance timeline + scroll-scrubbed parallax; skipped when `prefers-reduced-motion`.
- Assets & provenance: `public/assets/ASSET_INVENTORY.md`.
- Subject photos, lion capital, avatars and India Gate are **placeholders cropped from the reference** (`public/assets/placeholders/`). Replace files in place, keeping filenames.

## Phase 4 — hero scroll sequence
`Hero.jsx`: one pinned GSAP timeline (`end: '+=2200'`, `scrub: 0.8`) — texture + outlines → parliament (vertical mask) → circle (radial mask) → student (vertical mask) → ground/labels/scroll cue → hold. Pin releases into the trust strip. Desktop (>820px) and motion-OK only; mobile/reduced-motion get the finished scene. Tune pacing via `end` and the timeline positions. Sections below use one-time reveals (`data-reveal`) in `App.jsx`.

## Phase 5 — hero layer architecture (`src/components/hero/`)
- `layers.config.js` — one place for each layer's position, size and z-index (`Z` map). Edit here to nudge the composition.
- `HeroLayers.jsx` — ArchivalLayer, OutlineLayer, VermilionCircleLayer, ArchitectureLayer, AspirantForegroundLayer, GroundLayer, AnnotationLayer, EditorialLabels, ScrollIndicator.
- `HeroCopy.jsx` (HeroCopy + HeroActions), `useHeroTimeline.js` (Phase 4 GSAP), `HeroSection.jsx` (assembly; Nav now lives inside the hero so it stays during the pin).
- Layers are absolutely positioned in a fixed-aspect container; width only, height auto, so nothing stretches.
- No FoliageLayer: no foliage asset exists. Add a config entry + component when you have a transparent PNG.

## Phase 6 — content & structure
- All editable copy/data: `src/data/content.js` (nav links, trust metrics, testimonials, footer, `STORY_VIDEO`).
- **Placeholders, not facts:** trust metrics (`00%`, `0.0/5`), the trust excerpt and the three testimonials are sample content and are labelled as such. Replace with verified, permissioned data before launch.
- "Watch Our Story" opens an accessible dialog (Esc/backdrop/close). Set `STORY_VIDEO` to an mp4 path to embed a real video.
- Nav: anchor links to `#top #features #resources #stories #about`; mobile menu has `aria-expanded`, Esc-to-close.
- Anchor ids: `#features`, `#resources` (subjects), `#purpose`, `#stories`, `#cta`, `#about` (footer).

## Phase 7 — responsive
| Range | Hero behaviour |
|---|---|
| ≥1181px (and ≥620px tall) | Full pinned assembly, `+=2200` |
| 821–1180px (and ≥620px tall) | Rebalanced layout, shorter pin `+=1400`, quote/steps hidden |
| ≤820px | Vertical recomposition, **no pin, no parallax**; brief one-time reveal (~1.5s) when the art scrolls into view |
| `prefers-reduced-motion` | No pin, no assembly; finished hero shown, 0.4s opacity fade only |
- Layer geometry: `pos` (desktop/tablet) and `mpos` (mobile) in `hero/layers.config.js`, applied as CSS variables.
- Short desktop windows (<620px tall) skip the pin so the hero is never cut off.
- Content never depends on animation: hidden states exist only while GSAP is running.

## Phase 8 — performance & engineering quality
- **Images → WebP, responsive.** Hero art is served as `-<w>.webp` pairs with `srcset`/`sizes` (config in `hero/layers.config.js`: `ws`, `sizes`; helpers `srcset()`/`fallback()`). Alpha is preserved. Hero payload ~6.3 MB → ~440 KB (desktop picks the larger candidate). Below-fold images are `loading="lazy"` with explicit `width`/`height` (no layout shift). Lossless sources are kept in `assets-src/` (not deployed); to re-export, resize/save as WebP and keep the `-<w>.webp` naming.
- **Hero loads before it animates.** `hero/useAssetsReady.js` waits for every hero `<img>` to load + decode and for web fonts (4 s cap so a failed asset can never hide the page). Until then `html.js .hero:not(.is-ready)` keeps the art invisible; the GSAP timeline is only built afterwards (`useHeroTimeline(root, ready)`). `index.html` preloads the four hero images. Pin has `refreshPriority: 1` + a refresh so later reveal triggers measure correctly.
- **A11y.** Skip link, `<main id="main">` now contains the closing CTA, `aria-labelledby` on sections, labelled scrollable subject list, meaningful alt text, focus ring recoloured on dark sections, reduced-motion CSS.
- **No dead links.** Subject cards are plain articles (no destination yet); the inert testimonial arrows were removed; fake `#`/`example.com` footer links were removed. Add real ones in `src/data/content.js` (`FOOTER.legal`, `FOOTER.social`, Contact) and they appear automatically.
- Re-run image export if you swap artwork; update `ASSET_INVENTORY.md`.
