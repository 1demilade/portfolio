# David Adeyemi — portfolio

Personal portfolio for David Adeyemi, web developer and computer engineer. Built with React, Vite, React Router and plain CSS. Deployed to GitHub Pages at <https://1demilade.github.io/portfolio/>.

## Run it

```bash
npm install
npm run dev       # development server at http://localhost:5173/portfolio/
npm run build     # production build in dist/
npm run preview   # serve the production build at http://localhost:4173/portfolio/
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: hero, projects, about, skills, services, contact |
| `/projects/aso-and-thread` | Case study with a working copy of the WhatsApp order panel |
| `/projects/cocoacare` | Case study with results from the B.Eng report |
| `/projects/obstacle-avoidance-robot` | Case study with wiring diagram, parts and demo video |
| `/projects/bluetooth-controlled-robot` | Case study with wiring diagram and parts |

## GitHub Pages and the `/portfolio/` subpath

- `vite.config.js` sets `base: '/portfolio/'`, so every asset URL is built under the subpath, and the router uses the same base.
- After each build, `index.html` is copied to `404.html`. GitHub Pages serves `404.html` for any path it does not know, so refreshing or opening a link such as `/portfolio/projects/cocoacare` loads the app, which then shows the right page.
- `public/.nojekyll` stops GitHub's Jekyll step from touching the build.
- `.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

## Structure

```
src/
  config.js            name, links, email
  data/                projects (all facts and sources), skills and services
  lib/order.js         the Aso & Thread order-message code, reproduced for the demo
  components/          header, footer, contact form, order builder, video embed, fragments
  pages/               Home, Project (case study), NotFound
  styles/global.css    design tokens and base styles
  assets/img/          optimised WebP images
public/                favicon, social preview image, CocoaCare report PDF
```

## Credits

Photographs of components and cocoa are from Wikimedia Commons and are credited beside each photo on its case-study page: Suyash Dwivedi (CC BY-SA 4.0), Ridzaina (CC BY-SA 4.0), Bernard Gagnon (CC BY-SA 3.0). Aso & Thread screenshots show that project's Unsplash photography, credited on the Aso & Thread site itself. Fonts: Red Hat Display and Red Hat Text (SIL Open Font License), self-hosted through `@fontsource`.
