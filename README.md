# Field Guide — AI/ML Learning Path

A static, editable study roadmap designed for a beginner who is learning AI/ML alongside placement preparation.

## Run locally

No build tool, backend, or API key is required.

- Open `index.html` directly in a browser, or
- From this folder, run `python -m http.server 8000` and open `http://localhost:8000`.

## Deploy

### Cloudflare Pages
1. Push this folder to a GitHub repository.
2. In Cloudflare, create a Pages project and connect the repository.
3. Choose **Direct Upload** or Git integration as appropriate.
4. For a static HTML project with no build system, leave the build command blank and set the output directory to `/` or the repository root (where `index.html` lives).

### Vercel
1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Choose **Other** as the framework if prompted; no build command is needed. Set the output directory to `.` if configuration is requested.

This site is plain HTML, CSS, and JavaScript. It intentionally has no dependency installation step.

## Customise the route

Most of the roadmap content lives in `app.js` inside the `phases` array. Edit:
- `title`, `description`, `time`, and `intro` for phase details
- `tasks` for the saved task checkpoints
- `resources` for resource labels, explanations, and links
- `projectTitle` and `project` for the practical project
- `exit` for the move-on criteria

If you add or rename phase IDs or change the number of tasks after you have started using the site, existing progress for removed task IDs is safely ignored. Export a backup before making major changes.

## Progress and privacy

Checkboxes and focus-mode preference are saved in `localStorage` in this browser only. Nothing is sent to a server. Use **Export progress** to download a JSON backup, or **Import progress** to restore it on another device/browser. Progress does not automatically sync between devices.

## Notes

- Links are curated starting points, not a guarantee that every external course will always have the same structure or access terms.
- Most core learning resources listed are free; individual external platforms can change their policies.
- Completing checkboxes is not a measure of mastery. Use each phase's exit criteria to check your understanding.
