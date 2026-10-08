# Your Name — Frontend Portfolio

A framework-free, multi-page portfolio made with semantic HTML, CSS, and vanilla JavaScript.

## Pages

- `index.html` — homepage and skills overview
- `projects.html` — filterable project gallery
- `about.html` — introduction, principles, and a sample timeline
- `contact.html` — contact details and an email-app form
- `lab.html` — interactive color-token playground with live CSS output
- `case-studies/` — three illustrative project write-ups

Shared responsive styles live in `styles.css` and `css/pages.css`; the playground has its own `css/lab.css`. Shared navigation behavior lives in `scripts/site.js`; page-specific interactions are in `scripts/projects.js`, `scripts/contact.js`, and `scripts/lab.js`. The project artwork is intentionally made with HTML and CSS, so no image packages or build step are required.

## Preview locally

Open `index.html` in a browser, or start a local static server from this folder for a more realistic preview. For example, if Python is installed:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Personalize

1. Replace `Your Name`, the `Y.` initials, and every `hello@example.com` address.
2. Update the illustrative project descriptions and case-study content with real work. The project pages are concepts, not claims of shipped client work.
3. Replace the placeholder GitHub and LinkedIn profile URLs.
4. Adjust the skill list, availability message, and sample timeline to match your experience.

The contact form validates its fields and opens the visitor's default email app; it does not send or store data on a server.
