// ─────────────────────────────────────────────────────────────
// Editable site content. Replace placeholders with verified data.
// ─────────────────────────────────────────────────────────────

// Optional: path/URL to a story video (mp4). If empty, the "Watch Our Story" dialog shows the written story.
export const STORY_VIDEO = ''

export const NAV_LINKS = [
  ['Home', '#top'], ['Features', '#features'], ['Resources', '#resources'],
  ['Success Stories', '#stories'], ['About', '#about'],
]

// PLACEHOLDER METRICS — not verified. Set `value` to real, sourced figures before launch.
export const TRUST = {
  statement: ['Made for serious UPSC aspirants', 'Learn, practise and revise in one place'],
  metrics: [
    { value: '00%', label: ['Would recommend', 'UPSC Zone AI'] },
    { value: '0.0/5', label: ['Average rating', 'by learners'] },
  ],
  // SAMPLE excerpt — replace with a real, permissioned testimonial.
  excerpt: { quote: 'A platform that truly understands the UPSC journey.', by: 'Sample aspirant testimonial' },
}

// DEMONSTRATION testimonials — replace names, roles and quotes with authentic, permissioned ones.
export const TESTIMONIALS = [
  { id: 'ananya', name: 'Aspirant name', role: 'UPSC aspirant', quote: 'The mock tests and personalised feedback helped me see exactly where to improve.' },
  { id: 'rohit', name: 'Aspirant name', role: 'UPSC aspirant', quote: 'Current affairs and notes are well-curated, and they save me hours of effort.' },
  { id: 'sneha', name: 'Aspirant name', role: 'UPSC aspirant', quote: 'It feels like having a mentor on call. A real help for serious preparation.' },
]

export const FOOTER = {
  blurb: 'AI-assisted UPSC Civil Services preparation: mock tests, current affairs, notes and mentorship in one place.',
  columns: [
    ['Product', [['Features', '#features'], ['AI Mock Tests', '#features'], ['Personalized Plan', '#features']]],
    ['Resources', [['Subjects', '#resources'], ['Previous Year Questions', '#features'], ['Current Affairs', '#features']]],
    ['Company', [['About', '#about'], ['Success Stories', '#stories']]],
  ],
  // Add real destinations to show these. Empty on purpose: no placeholder links that do nothing.
  // legal: [['Privacy', '/privacy'], ['Terms', '/terms']]   social: [['LinkedIn', 'https://…']]  (X / Instagram / YouTube / LinkedIn icons exist)
  legal: [],
  social: [],
}
