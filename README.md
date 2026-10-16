# portfolio

A short, single-page portfolio for **Shay Silberstein**, Senior AI Engineer at Palo Alto Networks: background, experience, skills and certifications.

**Live:** https://shaysil.github.io/portfolio/

## Preview locally

Serve the folder with any static server (for example `python -m http.server`) and open it in a browser. The page is plain HTML (`index.html`), CSS (`assets/site.css`) and a small vanilla script (`assets/site.js`) for the mobile menu and the achievements filter. Its monochrome look is adapted from the "Tomasz Gajda" Figma Community portfolio template (see `docs/DESIGN.md`). Everything stays readable without JavaScript.

## Development

No build step: GitHub Pages serves the files as they are. The only tooling is the brand-logo copier:

```sh
npm install      # simple-icons (pinned devDependency)
npm run icons    # copy the brand SVGs listed in scripts/icons.mjs into assets/icons/, in brand colours
```

The generated `assets/icons/*.svg` files are committed. Line icons, the SS monogram and the flags are inline SVG in `index.html`. To show a photo in the hero, add `assets/photo.jpg` and follow the comment in the hero markup.

## About

Built with [Claude Code](https://claude.com/claude-code) as the lesson 8 project of the 10X AI-development course. Hosted on GitHub Pages.
