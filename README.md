# sylvanding.site

Personal portfolio of **Sylvan Ding** — Full-Stack Agent & Algorithm Engineer.

**Live** → [sylvanding.site](https://sylvanding.site/)

## Tech Stack

| Layer     | Technology                                      |
| --------- | ----------------------------------------------- |
| Framework | [React 19](https://react.dev/) + TypeScript 5.8 |
| Build     | [Vite 7](https://vite.dev/)                     |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com/)     |
| Animation | [Motion](https://motion.dev/) (Framer Motion)   |
| SVG       | [SVGR](https://react-svgr.com/) — SVG as React components |
| Lint      | ESLint 9 + Prettier 3                           |

## Features

- **Bilingual** — English / 中文 with `navigator.language` auto-detection
- **Dark / Light mode** — follows system preference, toggle in header
- **60+ skill icons** in a horizontal auto-scrolling marquee with fade edges and pause-on-hover
- **QR code modals** for WeChat & Telegram with auto clipboard copy
- **Full SEO** — meta tags, Open Graph, Twitter Cards, JSON-LD, sitemap, robots.txt, web manifest
- **Responsive** — mobile-first with full-screen overlay menu on small screens
- **Custom cursor** — circular enlarge/shrink effect on desktop (hidden on touch devices)
- **Contact form** — assembles `mailto:` link from form inputs, no backend required

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command                | Description                         |
| ---------------------- | ----------------------------------- |
| `npm run dev`          | Start Vite dev server               |
| `npm run build`        | Type-check + production build       |
| `npm run preview`      | Serve production build locally      |
| `npm run lint`         | Run ESLint                          |
| `npm run lint:fix`     | Run ESLint with auto-fix            |
| `npm run format`       | Format with Prettier                |
| `npm run format:check` | Check formatting without writing    |
| `npm run typecheck`    | TypeScript type checking (no emit)  |

## Project Structure

```
public/
├── favicon.svg             # SVG favicon
├── favicon-416x416.png     # PNG fallback / OG image
├── robots.txt
├── sitemap.xml
└── site.webmanifest

src/
├── assets/                 # SVG icons, illustrations, logos
│   ├── favicon/
│   ├── loves/              # Hobby icons
│   ├── my-jobs/            # Company/org logos
│   ├── personal/           # Character illustrations
│   ├── sign/               # Signature logo
│   ├── skills/             # 60+ skill SVGs
│   └── social/             # Social media icons
├── components/
│   ├── Header/             # Nav, logo, theme/language toggles, mobile menu
│   ├── Hero/               # Landing section with type animation & social links
│   ├── Skills/             # Auto-scrolling marquee
│   ├── AboutMe/            # Bio, MBTI badge, hobby badges
│   ├── Experience/         # Career & research journey cards
│   ├── Contact/            # Contact form & social links
│   ├── Footer/             # Copyright & ICP placeholder
│   └── UI/                 # Shared UI (QRCodeModal, Cursor, UpButton)
├── contexts/               # React contexts (CursorContext, ThemeContext)
├── hooks/                  # Custom hooks (useCursorHover)
├── i18n/                   # Internationalization
│   ├── locales/            # en.ts, zh.ts
│   ├── types.ts            # Translation type definitions
│   └── index.tsx           # i18n provider & useTranslation hook
├── constants.ts            # Skills data, social links, nav links
├── App.tsx                 # Root layout
├── main.tsx                # Entry point with providers
└── index.css               # Global styles & Tailwind imports
```

## Deployment

Build for production and deploy the `dist/` folder to any static hosting service:

```bash
npm run build
```

The site is designed to be deployed at the root of `https://sylvanding.site/`. Update `base` in `vite.config.ts` if deploying to a subpath.

## Acknowledgments

Original design inspired by [Jhanvi Shah](https://www.figma.com/@jhanvishah). Further developed by [Nataliia Liubynets](https://github.com/IntToLong). Redesigned and rebuilt by [Sylvan Ding](https://github.com/sylvanding).

## License

[MIT](LICENSE)
