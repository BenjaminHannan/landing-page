# landing-page

Personal site for Benjamin Hannan. Three sections: **the paper**, **the Mental
Health Finder**, and **code**.

React + TypeScript + plain CSS (CSS Modules), built with Vite, deployed on Vercel.
No UI framework, no CSS framework, no runtime dependencies beyond React.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build into dist/
npm run preview  # serve the built site
```

## Editing the content

Every word on the site lives in [`src/content.ts`](src/content.ts) — the paper,
the Finder copy, the project list, the nav labels, the contact links. Nothing in
`src/components` needs to change when the copy does.

The entries marked `TODO(ben)` are scaffold copy waiting on the real thing.

## Structure

```
index.html              # shell; resolves the theme before first paint
src/
  main.tsx              # mount
  App.tsx               # composition + page-level state
  content.ts            # all copy and links, typed
  styles/global.css     # design tokens, reset, shared primitives
  components/
    SiteHeader          # fixed masthead
    MenuButton          # the three lines, top-left
    NavOverlay          # full-screen section index
    ThemeToggle         # light / dark
    Hero                # opening statement
    Section             # shared numbered-rail frame
    PaperSection        # 01
    FinderSection       # 02
    CodeSection         # 03
    ProjectRow          # one repo row
    SiteFooter
  hooks/
    useTheme            # persisted light/dark, no flash on load
    useScrollProgress   # 0→1, drives the middle menu line
    useScrolled         # settles the masthead once you start reading
    useActiveSection    # marks the current section in the overlay
    useReveal           # one-shot fade-up on first view
    useLockBodyScroll   # holds the page while the overlay is open
```

### The three lines, top-left

The menu mark is the one piece of the page that is deliberately fussy:

- Closed, the lines are three different lengths, and the middle one is a reading
  indicator — it grows from a third of the width to full as you scroll the page.
- On hover the short lines pull out to full width, one after the other, 40ms apart.
- On open the stack folds into a cross, rotating about its own centre.
- All of it collapses to an instant state change under `prefers-reduced-motion`.

## Design notes

- One column, left-aligned, measure capped at `34rem`. The whitespace is the design.
- Instrument Serif for display, Inter for body, JetBrains Mono for labels.
- Warm paper (`#fcfbf9`) and a true dark mode (`#0f0f0e`), both with a muted
  sienna accent. The theme is resolved by an inline script before first paint, so
  the page never flashes the wrong palette.
- Keyboard-complete: skip link, visible focus rings, Escape closes the overlay,
  and focus returns to the menu button when it does.

## Deploying

Vercel auto-detects the Vite build; [`vercel.json`](vercel.json) pins it anyway
(`npm run build` → `dist`). Import the repo at
[vercel.com/new](https://vercel.com/new) and deploy — no environment variables,
no build settings to fill in.
