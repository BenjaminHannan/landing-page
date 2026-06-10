# benjaminhannan.github.io

Personal landing page for Benjamin Hannan. Plain HTML/CSS, no build step, hosted on GitHub Pages.

## Local preview

Open `index.html` in a browser to see the page directly. To get a real `http://` server (recommended, since some browser features behave differently from `file://`), run from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a new **public** repository on GitHub named exactly `benjaminhannan.github.io` (it must match your username).
2. From this folder, push the contents to the new repo's `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial landing page"
   git branch -M main
   git remote add origin https://github.com/benjaminhannan/benjaminhannan.github.io.git
   git push -u origin main
   ```

3. On GitHub, go to the repo's **Settings → Pages**. Under "Build and deployment", set the source to **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. Wait ~1 minute for the first deploy. The site goes live at `https://benjaminhannan.github.io`.

Any push to `main` after that will redeploy automatically.

## Editing content

All text lives in `index.html`, organized section by section. Open it in any text editor, change the text, save, and push.

- **Add a project** → duplicate one of the `<article class="project">` blocks in the `#projects` section.
- **Add a course or activity** → add a new `<li>` to the relevant `<ul class="record-list">`.
- **Update headline stats** → edit the `<ul class="stat-grid">` block in the `#research` section.
- **Change the accent color** → in `styles.css`, modify `--accent` and `--accent-light` near the top.

## Files

- `index.html` — page structure and all content
- `styles.css` — all styling, organized by section
- `.nojekyll` — disables GitHub's Jekyll preprocessor (we serve plain static files)
- `README.md` — this file
