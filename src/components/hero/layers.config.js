// pos = desktop/tablet, mpos = recomposed mobile (<=820px). Applied via CSS variables.
// Single source of truth for the hero composition (percentages of the .art container,
// which has a fixed aspect ratio). Heights are never set: images keep their own ratio.
export const ASSET = '/assets/hero/'

// Back-to-front stacking order inside the artwork container.
export const Z = { circle: 1, architecture: 2, aspirant: 3, ground: 4, annotation: 6 }

export const LAYERS = {
  circle:       { src: 'hero-rust-orange-circle', ws: [512, 1024], sizes: '(max-width:820px) 48vw, min(21vw, 340px)', w: 1024, h: 1024, pos: { left: '25%', top: '2%',  width: '34%' }, mpos: { left: '6%', top: '3%', width: '48%' }, z: Z.circle },
  architecture: { src: 'hero-parliament-building', ws: [600, 1200], sizes: '(max-width:820px) 94vw, min(43vw, 700px)', w: 1200, h: 880,  pos: { right: '0',  bottom: '15%', width: '70%' }, mpos: { right: '0', bottom: '10%', width: '94%' }, z: Z.architecture },
  aspirant:     { src: 'hero-student-backpack', ws: [424, 848], sizes: '(max-width:820px) 42vw, min(19vw, 300px)', w: 848,  h: 1264, pos: { left: '31%', bottom: '4%',  width: '30%' }, mpos: { left: '20%', bottom: '0%', width: '42%' }, z: Z.aspirant },
}
export const ARCHIVAL = { src: 'hero-parchment-background', ws: [800, 1376], sizes: '100vw', w: 1376, h: 768 }

// Build a WebP srcset from a base name + widths (files: <base>-<w>.webp).
export const srcset = (L) => L.ws.map((w) => `${ASSET}${L.src}-${w}.webp ${w}w`).join(', ')
export const fallback = (L) => `${ASSET}${L.src}-${L.ws[L.ws.length - 1]}.webp`
