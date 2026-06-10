# Claude Access Portal

A modern, responsive landing page for launching the official Claude web app (`https://claude.ai`) with your own account. Built as a single self-contained `index.html` — no build step, no dependencies.

## What it does

- **Launch buttons** to open the official Claude interface in a new tab or the same tab
- **Copy Claude URL** button that copies `https://claude.ai` to the clipboard, with status feedback
- **How-to steps** for signing in, plus guidance to contact your admin if blocked on a managed device or network

> **Note:** The official Claude site sends frame protection headers, so browsers refuse to load it in an `<iframe>`. This cannot be bypassed from client-side HTML/JS, which is why this portal provides launch buttons instead of an embedded pane. It does not circumvent institutional access restrictions.

## Preview

Open `index.html` in any browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Customizing

- **Theme colors** — edit the CSS custom properties in the `:root` block at the top of the `<style>` tag (`--accent`, `--gold`, `--rose`, `--gradient`, `--bg`).
- **Fonts** — swap the Google Fonts `<link>` and the `--font-display` / `--font-body` variables.
