import { FOOTER } from '../data/content.js'

const S = {
  X: <path d="M4 4l16 16M20 4L4 20" />,
  Instagram: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><circle cx="17" cy="7" r=".6" /></>,
  YouTube: <><rect x="3" y="6" width="18" height="12" rx="4" /><path d="M10 9.5v5l4-2.5z" /></>,
  LinkedIn: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 11v5M8 8v.1M12 16v-5M12 13c0-3 4-3 4 0v3" /></>,
}

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="ft-top">
        <div className="ft-brand">
          <a href="#top" className="brand" aria-label="UPSC Zone AI home">
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="M2 8 13 2l11 6zM4 10v10M9 10v10M13 10v10M17 10v10M22 10v10M2 22h22" /></svg>
            <span><b>UPSC ZONE AI</b><small>PREPARE · LEARN · GROW · SERVE</small></span>
          </a>
          <p>{FOOTER.blurb}</p>
        </div>
        {FOOTER.columns.map(([title, links]) => (
          <nav key={title} aria-label={title}>
            <h3>{title}</h3>
            <ul>{links.map(([l, h]) => <li key={l}><a href={h}>{l}</a></li>)}</ul>
          </nav>
        ))}
      </div>
      <div className="ft-bot">
        <p>© {new Date().getFullYear()} UPSC Zone AI. All rights reserved.</p>
        {FOOTER.legal.length > 0 && <ul className="ft-legal">{FOOTER.legal.map(([l, h]) => <li key={l}><a href={h}>{l}</a></li>)}</ul>}
        {FOOTER.social.length > 0 && <ul className="ft-social">
          {FOOTER.social.map(([l, h]) => (
            <li key={l}><a href={h} aria-label={l}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{S[l]}</svg>
            </a></li>
          ))}
        </ul>}
      </div>
    </footer>
  )
}
