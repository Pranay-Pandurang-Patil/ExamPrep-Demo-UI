import Icon from './Icons.jsx'
import { TRUST, TESTIMONIALS } from '../data/content.js'

const P = '/assets/placeholders/'

export function TrustStrip() {
  const { statement, metrics, excerpt } = TRUST
  return (
    <section className="trust" aria-label="Trust and metrics">
      <div className="t-cell t-people">
        <img src={P + 'trust-avatars.webp'} alt="" width="342" height="171" loading="lazy" decoding="async" />
        <p>{statement[0]}<br /><span>{statement[1]}</span></p>
      </div>
      {metrics.map((m) => (
        <div className="t-cell" key={m.value}><b>{m.value}</b><p>{m.label[0]}<br />{m.label[1]}</p></div>
      ))}
      <div className="t-cell t-quote"><p>“{excerpt.quote}”<br /><span>— {excerpt.by}</span></p></div>
    </section>
  )
}

const features = [
  ['doc', 'AI Mock Tests', 'Get personalized tests, real-time analysis and smart recommendations.'],
  ['globe', 'Current Affairs', 'Stay updated with AI-curated, exam-relevant news and analysis.'],
  ['book', 'Smart Notes', 'Concise, structured notes for quick and effective revision.'],
  ['files', 'Previous Year Questions', 'Topic-wise PYQs with solutions and trend analysis.'],
  ['chart', 'Personalized Plan', 'AI creates a study plan based on your strengths and goals.'],
  ['people', 'Mentorship & Community', 'Learn, discuss and grow with a community of serious aspirants.'],
]

export function Features() {
  return (
    <section className="features" id="features" aria-labelledby="features-h">
      <div className="f-head">
        <p className="kicker">Built for every<br />stage of your journey</p>
        <h2 id="features-h">Smarter Tools<br />for a <em>Deeper</em><br />Preparation.</h2>
        <p className="lede">From conceptual clarity to exam-level practice, UPSC Zone AI gives you everything you need — powered by AI, designed for aspirants.</p>
        <a className="btn btn-dark" href="#resources">Explore Subjects <Icon name="arrow" size={15} /></a>
      </div>
      <div className="f-grid" data-reveal>
        {features.map(([ic, t, d]) => (
          <article key={t}><Icon name={ic} size={30} stroke={1.2} /><h3>{t}</h3><p>{d}</p></article>
        ))}
      </div>
    </section>
  )
}

const subjects = [
  ['polity', 'Polity & Governance'], ['history', 'History & Culture'], ['geography', 'Geography & Environment'],
  ['economy', 'Economy & Development'], ['science', 'Science & Technology'], ['international', 'International Relations'],
]

export function Subjects() {
  return (
    <section className="subjects" id="resources" aria-labelledby="subjects-h">
      <div className="s-head">
        <p className="kicker">Explore by subject</p>
        <h2 id="subjects-h">Understand<br /><em>India</em>, One Subject<br />at a Time.</h2>
        <p className="lede sm">Comprehensive, well-structured resources across the entire UPSC syllabus.</p>
      </div>
      <ul className="s-row" data-reveal tabIndex={0} aria-label="UPSC subjects">
        {subjects.map(([k, t]) => (
          <li key={k}>
            <article>
              <img src={P + `subject-${k}.webp`} alt="" width="300" height="270" loading="lazy" decoding="async" />
              <div><h3>{t}</h3><span className="go" aria-hidden="true"><Icon name="arrow" size={13} /></span></div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Chakra() {
  return (
    <svg className="chakra" viewBox="-100 -100 200 200" fill="none" stroke="currentColor" aria-hidden="true">
      <circle r="96" strokeWidth="2" /><circle r="14" strokeWidth="2" /><circle r="80" strokeWidth=".8" />
      {Array.from({ length: 24 }, (_, i) => <line key={i} y1="14" y2="94" strokeWidth="1.4" transform={`rotate(${i * 15})`} />)}
    </svg>
  )
}

export function Purpose() {
  return (
    <section className="purpose" id="purpose" aria-labelledby="purpose-h">
      <img className="p-lion" src={P + 'lion-capital.webp'} alt="Lion Capital of Ashoka, the national emblem of India" width="840" height="465" loading="lazy" decoding="async" />
      <ul className="p-words"><li>People</li><li>Policies</li><li>Progress</li></ul>
      <p className="p-foot">The next generation<br />of change makers</p>
      <div className="p-copy" data-reveal>
        <h2 id="purpose-h">More Than a Career.<br />A Greater <em>Purpose.</em></h2>
        <p>UPSC is not just about a job. It’s about being part of something bigger — people, policies and a more inclusive India. We’re here to support you every step of that journey.</p>
      </div>
      <p className="p-tag">Same questions.<br />A brighter tomorrow.</p>
      <Chakra />
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="voices" id="stories" aria-labelledby="voices-h">
      <div className="v-head">
        <p className="kicker">Real stories. Real impact.</p>
        <h2 id="voices-h">From Aspirants<br />to <em>Change Makers.</em></h2>
        <p className="lede sm">Hear from our community of learners who are turning their aspirations into reality.</p>
      </div>
      <div className="v-row" data-reveal>
        {TESTIMONIALS.map(({ id: k, name: n, role: r, quote: q }) => (
          <figure key={k}>
            <blockquote>“{q}”</blockquote>
            <figcaption><img src={P + `avatar-${k}.webp`} alt="" width="129" height="129" loading="lazy" decoding="async" /><span><b>{n}</b>{r}<i className="sample">Demonstration content</i></span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export function Closing() {
  return (
    <section className="closing" id="cta" aria-labelledby="cta-h">
      <img className="c-gate" src={P + 'india-gate.webp'} alt="" width="654" height="399" loading="lazy" decoding="async" />
      <div className="c-copy" data-reveal>
        <p className="kicker">Your journey starts now</p>
        <h2 id="cta-h">Let’s Build a Brighter India,<br /><em>Together.</em></h2>
        <p>Join thousands of aspirants who are preparing smarter with UPSC Zone AI.</p>
      </div>
      <div className="c-act">
        <a className="btn btn-light" href="#top">Start Preparing <Icon name="arrow" size={15} /></a>
        <a className="c-link" href="#resources">Explore Our Resources</a>
      </div>
    </section>
  )
}
