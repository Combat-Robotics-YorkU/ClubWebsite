# YorkU Combat Robotics Website

The website for YorkU Combat Robotics, a proposed student design team that designs, builds and competes with combat robots. Most content is placeholder until the team is approved.

## Pages

- **Home:** what the team does, the weight classes we build in, and ways to join or sponsor.
- **About:** mission, how a fight works, subteams and leadership.
- **Robots:** every robot, each with its own page and engineering journal.
- **Sponsors:** where the money goes, why sponsor, sponsorship tiers and the sponsor wall.
- **Resources:** rules, competitions, design tools and references.
- **Contact:** Discord, email and social links.

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router) with React 19 and TypeScript
- CSS Modules, one stylesheet per component, with shared design tokens in `src/app/globals.css`
- Self-hosted Space Grotesk and Inter fonts (SIL Open Font License)
- Hosted on [Vercel](https://vercel.com)

## Getting started

You need [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server with live reload |
| `npm run build` | Builds the production site |
| `npm run start` | Serves the production build locally |
| `npm run lint` | Checks the code with ESLint |

## Test site on GitHub Pages

The `gh-pages` branch holds a static build of the site for testing at
https://combat-robotics-yorku.github.io/ClubWebsite/. To update it, build with
`GITHUB_PAGES=true npm run build` and replace the branch contents with the `out/` folder.

## Project structure

```
src/
  app/
    globals.css      Design tokens (colours, type, spacing) and base styles
    layout.tsx       Navbar and footer shared by every page
    page.tsx         Home page
    about/           One folder per page, each with its own stylesheet
    robots/          Robots list, plus robots/[slug] for each robot's page
    sponsors/
    contact/
    resources/
  components/        Navbar, Footer, Section, Button and other shared pieces
  fonts/             Self-hosted font files
  robots.ts          Every robot, its specs and its engineering journal
  site.ts            Club name, email, Discord, socials and navigation links
public/social/       Social media icons
```

## Updating content

Page content lives in plain lists at the top of each page file, and club-wide details live in `src/site.ts`, so most updates don't need new code.
