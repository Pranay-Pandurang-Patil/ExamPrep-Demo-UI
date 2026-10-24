import { useEffect, useRef, useState } from 'react'
import Icon from './Icons.jsx'
import { NAV_LINKS } from '../data/content.js'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const btn = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); btn.current?.focus() } }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`nav${open ? ' open' : ''}`}>
      <a href="#top" className="brand" aria-label="UPSC Zone AI home">
        <svg width="26" height="24" viewBox="0 0 26 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
          <path d="M2 8 13 2l11 6zM4 10v10M9 10v10M13 10v10M17 10v10M22 10v10M2 22h22" />
        </svg>
        <span><b>UPSC ZONE AI</b><small>PREPARE · LEARN · GROW · SERVE</small></span>
      </a>
      <nav id="primary-nav" aria-label="Primary">
        {NAV_LINKS.map(([label, href], i) => (
          <a key={label} href={href} className={i === 0 ? 'on' : ''} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <a className="btn btn-dark btn-sm nav-cta" href="#cta">Get Started <Icon name="arrow" size={14} /></a>
      <button ref={btn} className="menu-btn" aria-expanded={open} aria-controls="primary-nav"
        aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
        </svg>
      </button>
    </header>
  )
}
