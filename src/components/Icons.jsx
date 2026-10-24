const P = {
  doc: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
  book: <><path d="M3 5c3-1 6-1 9 1v14c-3-2-6-2-9-1zM21 5c-3-1-6-1-9 1v14c3-2 6-2 9-1z"/></>,
  files: <><path d="M8 3h7l3 3v12H8z"/><path d="M5 7v14h10M11 10h4M11 14h4"/></>,
  chart: <><path d="M4 21V12h4v9M10 21V6h4v15M16 21v-6h4v6M3 21h18"/></>,
  people: <><circle cx="12" cy="8" r="3"/><circle cx="5" cy="10" r="2"/><circle cx="19" cy="10" r="2"/><path d="M6 20c0-3 3-5 6-5s6 2 6 5M2 18c0-2 1-3 3-3M22 18c0-2-1-3-3-3"/></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6"/>,
  chevron: <path d="M9 6l6 6-6 6"/>,
  plus: <path d="M12 5v14M5 12h14"/>,
}
export default function Icon({ name, size = 18, stroke = 1.5, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>{P[name]}</svg>
  )
}
