/**
 * Every word on the site lives here.
 *
 * TODO(ben): the three section bodies below are scaffold copy. Swap in the real
 * paper, the real Finder description, and the real repos — nothing else in the
 * codebase needs to change when you do.
 */

export type Link = {
  label: string;
  href: string;
  /** External links get a target and the little ↗ mark. */
  external?: boolean;
};

export type SectionId = 'paper' | 'finder' | 'code';

export type NavItem = {
  id: SectionId | 'top';
  label: string;
};

export type Paper = {
  title: string;
  status: string;
  year: string;
  abstract: string[];
  links: Link[];
};

export type Finder = {
  tagline: string;
  body: string[];
  steps: { title: string; detail: string }[];
  links: Link[];
};

export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  href?: string;
  year?: string;
};

export const site = {
  name: 'Benjamin Hannan',
  /** Shown top-right of the masthead, in mono. */
  role: 'Student · Builder',
  /** TODO(ben): or delete — the footer handles an empty string fine. */
  email: 'benjamin.a.hannan@gmail.com',
  github: 'https://github.com/BenjaminHannan',
};

export const nav: NavItem[] = [
  { id: 'top', label: 'Index' },
  { id: 'paper', label: 'The paper' },
  { id: 'finder', label: 'Mental Health Finder' },
  { id: 'code', label: 'Code' },
];

export const intro = {
  /** Kept to two short lines on purpose — the whitespace is the design. */
  lead: 'I write, I build, and I leave the source open.',
  body: 'Three things worth your time: a paper I spent a long while on, a tool that helps people find mental health care, and the code behind both.',
};

export const paper: Paper = {
  title: 'Working title of the paper',
  status: 'Draft',
  year: '2026',
  abstract: [
    'One paragraph on the question the paper asks, in plain language — what you went looking for and why it mattered enough to spend months on.',
    'A second paragraph on what you found and what it changes. Keep it to the claim a reader could repeat to someone else after closing the tab.',
  ],
  links: [
    { label: 'Read the PDF', href: '#', external: true },
    { label: 'Notes and sources', href: '#', external: true },
  ],
};

export const finder: Finder = {
  tagline: 'Find real mental health care, faster.',
  body: [
    'The Mental Health Finder narrows a search down to providers and services someone can actually reach — filtered by what they need, where they are, and what they can afford.',
    'It exists because the alternative is a stack of stale directories and phone numbers that ring out, usually at the worst possible moment to be doing that work.',
  ],
  steps: [
    {
      title: 'Say what you need',
      detail: 'A few plain questions instead of a clinical intake form.',
    },
    {
      title: 'See what is near you',
      detail: 'Results ranked by reachability, not by who paid for placement.',
    },
    {
      title: 'Leave with a next step',
      detail: 'A number, an address, a link — something to act on today.',
    },
  ],
  links: [
    { label: 'Open the Finder', href: '#', external: true },
    { label: 'Source', href: '#', external: true },
  ],
};

export const projects: Project[] = [
  {
    name: 'mental-health-finder',
    blurb: 'The search, the ranking, and the data pipeline behind the Finder.',
    tags: ['TypeScript', 'React'],
    year: '2026',
    href: '#',
  },
  {
    name: 'landing-page',
    blurb: 'This site. React, TypeScript, plain CSS, no framework on top.',
    tags: ['TypeScript', 'CSS'],
    year: '2026',
    href: 'https://github.com/BenjaminHannan/landing-page',
  },
  {
    name: 'A third thing',
    blurb: 'Swap in whatever you want people to look at after the first two.',
    tags: ['Python'],
    year: '2025',
    href: '#',
  },
];

export const footer = {
  note: 'Built with React, TypeScript, and a lot of plain CSS.',
};
