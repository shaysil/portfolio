# portfolio

A short, single-page portfolio for **Shay Silberstein**, Senior AI Engineer at Palo Alto Networks: background, experience, skills and certifications.

**Live:** https://shaysil.github.io/portfolio/

## Preview locally

Serve the folder with any static server (for example `python -m http.server`) and open it in a browser. The page is built with Material Design 3 and Google's [Material Web](https://github.com/material-components/material-web) components, bundled into `assets/material.js`. Content stays readable without JavaScript.

## Development

```sh
npm install      # Material Web, esbuild, material-color-utilities (pinned devDependencies)
npm run theme    # regenerate assets/theme.css (M3 light + dark color tokens) from the seed color #2a4bc4
npm run build    # bundle the components imported in src/material.js into assets/material.js
```

`npm run theme -- "#123456"` uses a different seed color. The built `assets/material.js` and `assets/theme.css` are committed so GitHub Pages can serve them without a build step.

## About

Built with [Claude Code](https://claude.com/claude-code) as the lesson 8 project of the 10X AI-development course. Hosted on GitHub Pages.
