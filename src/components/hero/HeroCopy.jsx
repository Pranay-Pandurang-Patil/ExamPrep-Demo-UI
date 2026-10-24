import { useRef } from 'react'
import Icon from '../Icons.jsx'
import { STORY_VIDEO } from '../../data/content.js'

const L = ({ children }) => <span className="h-line"><span>{children}</span></span>

function StoryDialog({ dlg }) {
  const close = () => { dlg.current?.querySelector('video')?.pause(); dlg.current?.close() }
  return (
    <dialog ref={dlg} className="story-dlg" aria-labelledby="story-title"
      onClick={(e) => { if (e.target === dlg.current) close() }}>
      <button className="dlg-x" onClick={close} aria-label="Close"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
      <h2 id="story-title">Why we’re building this</h2>
      {STORY_VIDEO && <video src={STORY_VIDEO} controls playsInline preload="none" />}
      <p>UPSC preparation is long, lonely and easy to scatter. We’re building one calm place where practice, revision and current affairs work together, guided by AI and shaped by experienced educators.</p>
      <p>The goal is simple: help serious aspirants prepare smarter, stay consistent, and get closer to a life of public purpose.</p>
      <div className="dlg-act">
        <a className="btn btn-dark btn-sm" href="#cta" onClick={close}>Start Preparing <Icon name="arrow" size={14} /></a>
        <a className="c-link dark" href="#features" onClick={close}>See the tools</a>
      </div>
    </dialog>
  )
}

export function HeroActions() {
  const dlg = useRef(null)
  return (
    <div className="hero-cta h-fade">
      <a className="btn btn-dark" href="#cta">Start Preparing <Icon name="arrow" size={15} /></a>
      <button className="story" aria-haspopup="dialog" onClick={() => dlg.current?.showModal()}>
        <span className="play"><svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true"><path d="M1 1l10 6-10 6z" fill="currentColor" /></svg></span>
        <span>Watch Our Story<small>{STORY_VIDEO ? '2 min' : 'Our mission'}</small></span>
      </button>
      <StoryDialog dlg={dlg} />
    </div>
  )
}

export default function HeroCopy() {
  return (
    <div className="hero-copy">
      <p className="kicker h-fade">India’s most intelligent<br />UPSC preparation platform</p>
      <h1>
        <L>A Brighter</L>
        <L><em>India</em> Begins</L>
        <L><s>With</s> Prepared</L>
        <L>Minds.</L>
      </h1>
      <p className="lede h-fade">UPSC Zone AI combines the power of AI with expert-curated content to help you prepare smarter, stay consistent, and get closer to a life of purpose.</p>
      <HeroActions />
    </div>
  )
}
