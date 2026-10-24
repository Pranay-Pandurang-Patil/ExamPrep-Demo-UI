import { useEffect, useState } from 'react'

/* Resolves true once every hero <img> is loaded AND decoded (and web fonts have settled),
   or after `maxWait` ms so the page never stays hidden on a slow/failed asset. The scroll
   timeline is only built after this, so layers never pop in mid-animation. */
export default function useAssetsReady(root, maxWait = 4000) {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    let alive = true
    const imgs = [...root.current.querySelectorAll('img')]
    const loaded = (img) => (img.complete && img.naturalWidth
      ? Promise.resolve()
      : new Promise((res) => { img.addEventListener('load', res, { once: true }); img.addEventListener('error', res, { once: true }) }))
        .then(() => (img.decode ? img.decode().catch(() => {}) : null))
    const all = Promise.all([...imgs.map(loaded), document.fonts?.ready ?? null])
    const t = new Promise((res) => setTimeout(res, maxWait))
    Promise.race([all, t]).then(() => { if (alive) setReady(true) })
    return () => { alive = false }
  }, [root, maxWait])
  return ready
}
