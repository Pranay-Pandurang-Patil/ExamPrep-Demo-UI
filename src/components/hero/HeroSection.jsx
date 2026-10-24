import { useRef } from 'react'
import useAssetsReady from './useAssetsReady.js'
import Nav from '../Nav.jsx'
import HeroCopy from './HeroCopy.jsx'
import useHeroTimeline from './useHeroTimeline.js'
import {
  ArchivalLayer, OutlineLayer, VermilionCircleLayer, ArchitectureLayer,
  AspirantForegroundLayer, GroundLayer, AnnotationLayer, EditorialLabels, ScrollIndicator,
} from './HeroLayers.jsx'

/* HeroSection
   ├─ ArchivalLayer (background)   ├─ Nav            ├─ HeroCopy (+ HeroActions)
   ├─ OutlineLayer                 └─ HeroArtwork: Circle → Architecture → Aspirant → Ground → Annotations
   └─ ScrollIndicator */
export default function HeroSection() {
  const root = useRef(null)
  const ready = useAssetsReady(root)
  useHeroTimeline(root, ready)
  return (
    <section className={`hero${ready ? ' is-ready' : ''}`} id="top" ref={root}>
      <ArchivalLayer />
      <OutlineLayer />
      <Nav />
      <HeroCopy />
      <div className="art">
        <VermilionCircleLayer />
        <ArchitectureLayer />
        <AspirantForegroundLayer />
        <GroundLayer />
        <AnnotationLayer />
      </div>
      <EditorialLabels />
      <ScrollIndicator />
    </section>
  )
}
