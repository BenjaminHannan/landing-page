# benhannan.dev — landing page

Personal landing page: the paper, the Upper Valley Mental Health Finder, and the code.
React + TypeScript + plain CSS, built with Vite, deployed on Vercel.

## Running it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check, then bundle to dist/
npm run preview    # serve the built bundle
npm run typecheck
```

## Structure

```
src/
  components/      one .tsx + one .css per component
  data/site.ts     all page copy and links, typed — edit content here, not in JSX
  hooks/           usePalette (theme cycling), useReveal (scroll-in)
  styles/
    tokens.css     the four palettes + type/space scales
    global.css     resets, shared utilities
public/
  finder/          the Mental Health Finder, served as static files at /finder/
```

Content lives in `src/data/site.ts`. Components read from it, so adding a repo or
rewording a section does not mean touching layout code.

## The palette control

The four stacked rules to the right of the wordmark are a palette cycler, not a menu.
Each rule stands for one theme — Parchment, Ink, Paper, Graphite — and the active one
is thicker and takes the accent colour. Clicking advances to the next theme; the
choice is stored in `localStorage` under `bh:palette` and every read/write is wrapped
in `try/catch`, so a blocked-storage browser still renders correctly.

Themes are whole token sets in `src/styles/tokens.css`, applied via `html[data-palette]`.
Adding a fifth theme means adding a block there and an entry in `palettes` in
`src/hooks/usePalette.ts` — the control sizes itself to the list.

## The numbers on the page

The stat row and the before/after plot in the hero are hand-built from tokens rather
than a charting library. Two constraints worth preserving if you edit them:

- **One hue, two shades.** `--mark-soft` → `--mark-strong` per palette. These pairs were
  checked for colour-vision separation (worst case ΔE 17.9, well above the ΔE 8 floor)
  and for contrast against their surface; the softer step lands below 3:1, which is why
  **both endpoints are always directly labelled**. Keep the labels if you change the colours.
- **Fixed domain.** The plot's axis is pinned to 0.60–0.80 rather than fitted to the two
  points, so the gap between them reads at its true size instead of filling the track.

## Deploying

Vercel, as a Vite project — `vercel.json` sets the build command, output directory and
asset caching. Importing the repo once in the Vercel dashboard is enough; pushes to the
default branch deploy from there.

`public/finder/` is copied verbatim into the build, so the Finder ships at `/finder/`
alongside the landing page rather than as a second project.
