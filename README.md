# Landing Page

A modern, responsive landing page built as a single self-contained `index.html` — no build step, no dependencies.

## Preview

Open `index.html` in any browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customizing

- **Copy & branding** — all text (product name, headline, features, testimonials) lives directly in `index.html`; search for "Lumen" to rebrand.
- **Theme colors** — edit the CSS custom properties in the `:root` block at the top of the `<style>` tag (`--accent`, `--accent-2`, `--accent-3`, `--gradient`, `--bg`).
- **Fonts** — swap the Google Fonts `<link>` and the `--font-display` / `--font-body` variables.
