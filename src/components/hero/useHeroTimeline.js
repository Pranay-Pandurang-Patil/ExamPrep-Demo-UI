import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const FULL = 'inset(0% 0% 0% 0%)', NONE = 'inset(100% 0% 0% 0%)'
const NOPREF = '(prefers-reduced-motion: no-preference)'

/* Pinned assembly (desktop/tablet). `end` sets the scroll distance. */
function pinned(root, end) {
  const tl = gsap.timeline({
    defaults: { ease: 'power2.inOut' },
    scrollTrigger: { trigger: root.current, start: 'top top', end, pin: true, scrub: 0.8, anticipatePin: 1, invalidateOnRefresh: true, refreshPriority: 1 },
  })
  tl.fromTo('.h-bg', { opacity: 0.12, scale: 1.08 }, { opacity: 0.9, scale: 1, duration: 2.5 }, 0)
    .fromTo('.h-draw', { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 2.5, stagger: 0.25, ease: 'none' }, 0.3)
    .to('.h-bg', { yPercent: -4, duration: 10, ease: 'none' }, 0)
    .fromTo('.h-parl', { clipPath: NONE, yPercent: 8, scale: 1.05, transformOrigin: '50% 100%' }, { clipPath: FULL, yPercent: 0, scale: 1, duration: 2.5 }, 2.5)
    .fromTo('.h-circle', { clipPath: 'circle(0% at 50% 50%)', scale: 0.88 }, { clipPath: 'circle(72% at 50% 50%)', scale: 1, duration: 1.5 }, 5)
    .fromTo('.h-student', { clipPath: NONE, yPercent: 5, transformOrigin: '50% 100%' }, { clipPath: FULL, yPercent: 0, duration: 1.6 }, 6.5)
    .fromTo('.ground', { opacity: 0, yPercent: 30 }, { opacity: 1, yPercent: 0, duration: 1 }, 8)
    .fromTo('.h-detail', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }, 8.2)
    .to({}, { duration: 1 }, 9.5)
}

/* Mobile: short, unpinned, one-time assembly when the artwork scrolls into view.
   Only clip-path/opacity — no parallax, no continuous scrub. */
function brief(root) {
  gsap.timeline({
    defaults: { ease: 'power2.out' },
    scrollTrigger: { trigger: root.current.querySelector('.art'), start: 'top 85%', once: true },
  })
    .fromTo('.h-parl', { clipPath: NONE }, { clipPath: FULL, duration: 0.9 }, 0)
    .fromTo('.h-circle', { clipPath: 'circle(0% at 50% 50%)' }, { clipPath: 'circle(72% at 50% 50%)', duration: 0.8 }, 0.2)
    .fromTo('.h-student', { clipPath: NONE }, { clipPath: FULL, duration: 0.8 }, 0.5)
    .fromTo('.ground', { opacity: 0 }, { opacity: 1, duration: 0.5 }, 1)
}

export default function useHeroTimeline(root, ready = true) {
  useLayoutEffect(() => {
    if (!ready) return undefined // assets still loading: nothing is hidden, nothing is animating
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      // Headline entrance (any size, motion allowed)
      mm.add(NOPREF, () => {
        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .from('.h-line > span', { yPercent: 110, duration: 1, stagger: 0.09 })
          .from('.h-fade', { y: 12, opacity: 0, duration: 0.7, stagger: 0.07 }, 0.4)
      })
      // Pin only when it can be smooth: wide enough AND tall enough for the whole hero.
      mm.add(`(min-width: 1181px) and (min-height: 620px) and ${NOPREF}`, () => pinned(root, '+=2200'))
      mm.add(`(min-width: 821px) and (max-width: 1180px) and (min-height: 620px) and ${NOPREF}`, () => pinned(root, '+=1400'))
      mm.add(`(max-width: 820px) and ${NOPREF}`, () => brief(root))
      // Reduced motion: full composition immediately; a brief fade only.
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.from('.hero-copy, .art', { opacity: 0, duration: 0.4, ease: 'none' })
      })
    }, root)
    ScrollTrigger.refresh() // pin was created after the page's other triggers: re-measure them
    return () => ctx.revert()
  }, [root, ready])
}
