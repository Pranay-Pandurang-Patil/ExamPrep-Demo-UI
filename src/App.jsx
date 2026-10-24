import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from './components/hero/HeroSection.jsx'
import Footer from './components/Footer.jsx'
import { TrustStrip, Features, Subjects, Purpose, Testimonials, Closing } from './components/Sections.jsx'

export default function App() {
  // Restrained, one-time reveals for the sections below the hero. Created after Hero's pin.
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray('[data-reveal]').forEach((el) =>
          gsap.from(el.children, {
            y: 22, opacity: 0, duration: 0.8, stagger: 0.08, ease: 'power2.out', clearProps: 'transform,opacity',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }))
      })
    })
    return () => ctx.revert()
  }, [])
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <main id="main" tabIndex={-1}>
        <HeroSection />
        <TrustStrip />
        <Features />
        <Subjects />
        <Purpose />
        <Testimonials />
        <Closing />
      </main>
      <Footer />
    </>
  )
}
