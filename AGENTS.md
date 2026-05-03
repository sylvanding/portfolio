# AGENTS.md

Guidelines for AI coding agents working on this repository.

## Project Overview

Single-page personal portfolio built with React 19, TypeScript, Vite 7, and Tailwind CSS v4.

## Code Style

- **Language**: All code, comments, commit messages, and documentation in English.
- **TypeScript**: Strict mode. Prefer explicit types over `any`. Use `interface` for object shapes, `type` for unions/intersections.
- **React**: Functional components only. Use hooks, no class components. Default exports for page-level components.
- **CSS**: Tailwind utility classes exclusively. No inline `style` unless dynamic values are required (e.g., computed `backgroundColor`). Use the `dark:` variant for dark mode.
- **Formatting**: Prettier with the config in `.prettierrc.json`. Double quotes, semicolons, trailing comma `none`, 2-space indent, 100 char print width.
- **Linting**: ESLint 9 flat config in `eslint.config.js`. Fix all warnings before committing.
- **Imports**: Use path aliases sparingly — relative paths are standard in this project. SVGs imported as React components use the `?react` query suffix.

## Architecture Conventions

- **Components**: One component per file in `src/components/<SectionName>/`. Shared UI goes in `src/components/UI/`.
- **i18n**: Lightweight custom solution in `src/i18n/`. All user-facing strings go in `src/i18n/locales/en.ts` and `zh.ts`. Both files implement `Translations` from `src/i18n/types.ts`.
- **Theme**: System preference detection + manual toggle via `ThemeContext`. Use Tailwind `dark:` classes, never runtime JS for color switching.
- **Constants**: Static data (skill lists, social links, nav config) lives in `src/constants.ts`.
- **Assets**: All SVGs in `src/assets/` organized by category. Skill icons use `import.meta.glob` for dynamic loading.
- **Animations**: Use the `motion` package (Framer Motion). Prefer `whileInView` with `viewport={{ once: true }}` for scroll-triggered animations. Keep durations under 1s.

## SVG Color Strategy

- Skill icons: `brightness-0 dark:invert` — renders black in light mode, white in dark mode.
- Social icons: Use `fill="currentColor"` in the SVG source, then control color via Tailwind `text-*` classes.
- Always-dark sections (About Me, Experience cards, Footer): Icons use `invert` or `brightness-0 invert` regardless of theme.

## Do Not

- Add runtime dependencies without strong justification. The bundle is already >500 kB.
- Use `any` type.
- Add comments that narrate what the code does. Comments should explain *why*, not *what*.
- Modify the i18n architecture (no i18next, no react-intl — the custom solution is intentional).
- Use CSS-in-JS or CSS modules. Tailwind only.
- Commit `.env` files or secrets.

## Testing Changes

```bash
npm run build        # must pass with zero errors
npm run lint         # must pass with zero warnings
npm run format:check # must pass
```

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new skill icons for cloud providers
fix: correct dark mode QR code visibility
style: adjust skill card vertical alignment
refactor: remove EmailJS dependency from contact form
docs: update README with deployment instructions
```
