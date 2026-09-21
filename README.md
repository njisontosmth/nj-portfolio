# Niranjana Vincent — NJ Portfolio

An interactive personal portfolio and living project dashboard for Niranjana Vincent (NJ). It is a static site with no build step, so it can be hosted free on GitHub Pages.

## Preview locally

Open `index.html` directly, or run a local server in this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Personal links

The site currently connects to NJ's GitHub profile (`njisontosmth`), LinkedIn profile and public job-application email. The project names, progress and case-study copy are kept in the `projects` array at the top of `script.js`. Edit a project there once and the card and pop-up will both update.

## Publish with GitHub Pages

1. Create a public repository named `nj-portfolio`.
2. Upload `index.html`, `styles.css`, `script.js` and this README to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will provide the link `https://njisontosmth.github.io/nj-portfolio/`.

The LinkedIn display name can still be **NJ Portfolio** even though GitHub includes the account username in the technical URL. A purchased custom domain can hide the GitHub username later.

## Design notes

- Cozy cinematic animation-inspired desk scene without copying any studio or character.
- Professional narrative suitable for LinkedIn and applications.
- Filters, project-detail dialogs, honest progress states, evening mode and responsive mobile layout.
- No personal job-search records, private contacts, finances, relationship content or sensitive data.

## Suggested next pass

- Replace provisional progress values after review.
- Add screenshots or short demos to the strongest case studies.
- Add a downloadable CV and a custom social-sharing image.
