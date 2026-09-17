export type Link = { label: string; href: string; external?: boolean }

export type Stat = {
  label: string
  value: string
  delta?: { text: string; direction: 'up' | 'down' | 'flat' }
  note: string
}

export const site = {
  name: 'Benjamin Hannan',
  email: 'benjamin.a.hannan@gmail.com',
  github: 'https://github.com/BenjaminHannan',
  tagline:
    'Independent research on language and mental health, and the tools that come out of it.',
  intro:
    'I write NLP research and build the software around it. The current paper asks how much of a mental-health classifier’s signal is real linguistic change versus the quality of its labels; the answer turned out to be mostly labels. The Finder is the applied side of the same interest — a provider-matching tool for the Upper Valley that runs its triage entirely in the browser.',
} as const

export const paper = {
  title:
    'Longitudinal Linguistic Markers of Mental Health Deterioration',
  subtitle: 'A Reddit-Based Sliding-Window Feature Study',
  venue: 'arXiv preprint (cs.CL) → CLPsych / *ACL workshop',
  author: 'Benjamin Hannan · Independent Researcher',
  summary:
    'Can you detect linguistic shifts in the weeks before a self-reported crisis or recovery post, while controlling for stable individual writing style — so you measure change rather than identity? Two cohorts: a 2019–21 baseline of 96,073 posts from five mental-health subreddits, and a 2025–26 replication corpus collected from 58 subreddits with usernames pseudonymised at ingest.',
  finding:
    'Holding features and learners fixed, improving the labelling pipeline lifts crisis-class ROC-AUC by +0.120. Scaling the hyperparameter search 27× moves macro AUC by +0.004. Label quality is the binding constraint.',
  caveat:
    'The cohort grew alongside the label improvements, so the progression is observational rather than a controlled ablation. The same strictness shrinks the recovery class from 106 to 40 users — most keyword-matched “recovery” users were false positives of the phrase “made it” — leaving that class underpowered rather than fictitiously separable.',
  progression: {
    caption: 'Crisis-class ROC-AUC, same features and learners throughout',
    from: { label: 'Keyword-only labels', value: 0.642, spread: '± 0.026', n: 'n = 852' },
    to: { label: 'Fully adjudicated labels', value: 0.762, spread: '± 0.011', n: 'n = 1,035' },
  },
  stats: [
    {
      label: 'Crisis-class ROC-AUC',
      value: '0.762',
      delta: { text: '+0.120 from labelling', direction: 'up' },
      note: 'Fully adjudicated labels, ± 0.011',
    },
    {
      label: 'From a 27× larger search',
      value: '+0.004',
      delta: { text: 'macro AUC', direction: 'flat' },
      note: 'Measured on the pre-refresh 852-user cohort',
    },
    {
      label: 'Replication corpus',
      value: '58',
      note: 'Subreddits, pseudonymised at ingest; 1,035 labelled users',
    },
  ] satisfies Stat[],
  pipeline: [
    { step: '01', name: 'Keyword dictionary', detail: '2019-era term list' },
    { step: '02', name: 'Algospeak + first-person filter', detail: '“unalive”, “ctb”' },
    { step: '03', name: 'LLM rubric', detail: 'Qwen-2.5-7B, strict first-person' },
    { step: '04', name: 'Per-user adjudication', detail: 'Ambiguous matches reviewed' },
  ],
  links: [
    { label: 'Read the repository', href: 'https://github.com/BenjaminHannan/reddit-mental-health', external: true },
    { label: 'Methodology', href: 'https://github.com/BenjaminHannan/reddit-mental-health/blob/main/METHODOLOGY.md', external: true },
  ] satisfies Link[],
}

export const finder = {
  title: 'Upper Valley Mental Health Finder',
  region: 'New Hampshire & Vermont',
  summary:
    'Finding a therapist in the Upper Valley means calling a dozen practices to learn which ones take your insurance and are accepting patients. The Finder collapses that into one filtered search — insurance, age, telehealth, urgency, language, session format — over local providers plus live results from the SAMHSA national database.',
  privacy:
    'The free-text triage runs entirely in the browser. You describe what you are going through in your own words, the tool identifies likely concerns and maps them to filters, and the text is never transmitted anywhere.',
  features: [
    {
      name: 'Describe it in your own words',
      detail:
        'In-browser analysis reads a free-text description, surfaces likely concerns, and applies them as filters. No text leaves the page.',
    },
    {
      name: 'Filters that match how care actually works',
      detail:
        'Insurance carrier, age band, telehealth preference, urgency, session format, language, provider gender, accessibility and identity needs.',
    },
    {
      name: 'Live national coverage',
      detail:
        'Local Upper Valley providers are supplemented with live results from the SAMHSA treatment locator for the entered zip code.',
    },
    {
      name: 'Crisis routing, always visible',
      detail:
        '988, the Headrest 24-hour line and Crisis Text Line sit in a persistent banner, and any self-harm language in the description escalates immediately.',
    },
  ],
  links: [
    { label: 'Open the Finder', href: '/finder/', external: false },
    { label: 'Leave a provider review', href: '/finder/reviews.html', external: false },
  ] satisfies Link[],
}

export type Repo = {
  name: string
  href: string
  language: string
  blurb: string
}

export const code: Repo[] = [
  {
    name: 'reddit-mental-health',
    href: 'https://github.com/BenjaminHannan/reddit-mental-health',
    language: 'Python',
    blurb:
      'The research codebase: the four-source labelling pipeline, feature extraction, a tuned five-learner stack with multi-seed CV, bootstrap CIs and DeLong tests, and the figure scripts.',
  },
  {
    name: 'Congressional-app',
    href: 'https://github.com/BenjaminHannan/Congressional-app',
    language: 'Jupyter Notebook',
    blurb:
      'Trace — a Lyme disease tracking and patient-advocacy app for New Hampshire, built for the Congressional App Challenge in NH-02.',
  },
  {
    name: 'trader-improved',
    href: 'https://github.com/BenjaminHannan/trader-improved',
    language: 'Python',
    blurb:
      'A Grinold–Kahn multi-factor system across eight sleeves, with point-in-time discipline as the load-bearing wall: free data only, no ML, walk-forward validation with deflated Sharpe.',
  },
  {
    name: 'polymarket-agent',
    href: 'https://github.com/BenjaminHannan/polymarket-agent',
    language: 'Python',
    blurb:
      'A paper-trading agent that streams the live Polymarket feed, reconstructs order books, and matches news from 30+ free sources to markets. No real money, no private keys.',
  },
  {
    name: 'game',
    href: 'https://github.com/BenjaminHannan/game',
    language: 'TypeScript',
    blurb:
      'Metropolis — an open-source 3D city builder for the browser in TypeScript and three.js. Simulation-first: engine loop, procedural terrain and save system are in, zoning is next.',
  },
  {
    name: 'Black-Scholes',
    href: 'https://github.com/BenjaminHannan/Black-Scholes',
    language: 'Python',
    blurb:
      'Call and put pricing from custom inputs, plus implied volatility solved back out of an observed option price. The first project I ever finished.',
  },
]

export const nav: Link[] = [
  { label: 'The paper', href: '#paper' },
  { label: 'Finder', href: '#finder' },
  { label: 'Code', href: '#code' },
]
