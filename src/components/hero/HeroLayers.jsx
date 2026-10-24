import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LAYERS, ARCHIVAL, srcset, fallback } from './layers.config.js'

// Coalesce the per-image onLoad refreshes into one ScrollTrigger.refresh() per frame.
let queued = false
const refresh = () => {
  if (queued) return
  queued = true
  requestAnimationFrame(() => { queued = false; ScrollTrigger.refresh() })
}

const vars = (p, pre) => Object.fromEntries(Object.entries(p).map(([k, v]) => [`--${pre}${k[0]}`, v]))

function Layer({ id, cls, alt = '', priority }) {
  const L = LAYERS[id]
  return (
    <img className={`layer ${cls}`} src={fallback(L)} srcSet={srcset(L)} sizes={L.sizes} width={L.w} height={L.h} alt={alt}
      decoding="async" fetchPriority={priority}
      style={{ ...vars(L.pos, ''), ...vars(L.mpos, 'm'), zIndex: L.z }} onLoad={refresh} />
  )
}

/* Full-bleed archival paper. The supplied parchment asset already contains the faint map,
   Constitution page and manuscript script, so texture + map/manuscript are one layer. */
export const ArchivalLayer = () => (
  <img className="h-bg" src={fallback(ARCHIVAL)} srcSet={srcset(ARCHIVAL)} sizes={ARCHIVAL.sizes} width={ARCHIVAL.w} height={ARCHIVAL.h}
    alt="" decoding="async" fetchPriority="high" onLoad={refresh} />
)

/* Fine architectural line-work, drawn on scroll. */
export const OutlineLayer = () => (
  <svg className="h-lines" viewBox="0 0 400 300" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
    <path className="h-draw" pathLength="1" d="M250 20 A60 60 0 0 1 370 20 M250 20v120M370 20v120M260 60h100" />
    <path className="h-draw" pathLength="1" d="M40 220h320M40 232h320M90 140v92M150 140v92" />
  </svg>
)

export const VermilionCircleLayer = () => <Layer id="circle" cls="h-circle" />
export const ArchitectureLayer = () => <Layer id="architecture" cls="h-parl" alt="Parliament House of India" priority="high" />
export const AspirantForegroundLayer = () => (
  <Layer id="aspirant" cls="h-student" alt="A young UPSC aspirant with a backpack, looking toward Parliament" priority="high" />
)

/* Torn-paper ground that seats the architecture and aspirant. */
export const GroundLayer = () => <div className="ground" aria-hidden="true" />

/* FoliageLayer: intentionally absent. The ZIP has no foliage assets and the only trees exist
   in the flattened reference at ~100px, which would cut out crudely. Drop a layer config +
   component here when a transparent foliage PNG is available. */

/* Annotations inside the artwork container: the pull-quote. */
export const AnnotationLayer = () => (
  <blockquote className="q q1 h-detail" style={{ zIndex: 6 }}>“Not just an exam.<br />A chance to make<br />a difference.”</blockquote>
)

/* Editorial labels positioned against the hero edges (outside the art container). */
export const EditorialLabels = () => (
  <>
    <ul className="words h-detail"><li>Knowledge</li><li>Citizenship</li><li>Opportunity</li><li>A better India</li></ul>
    <ul className="steps h-detail"><li>Learn</li><li>Practice</li><li>Analyze</li><li>Improve</li><li>Serve</li></ul>
  </>
)

export const ScrollIndicator = () => (
  <div className="scroll-ind h-detail" aria-hidden="true"><span>Scroll</span><i /></div>
)
