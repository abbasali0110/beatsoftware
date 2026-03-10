# Beat Frontend — CLAUDE.md

## Project Overview

Corporate website for **Beat Technologies** built with React 18 + Vite + TypeScript. Migrated from Angular 13. Dev server runs on port **4202**.

## Stack

| Tool | Version | Notes |
|------|---------|-------|
| React | 18.3 | `react-dom`, `react-router-dom` v6 |
| Vite | 5.2 | Build tool + dev server |
| TypeScript | 5.4 | Strict mode, `noEmit: true` |
| Tailwind CSS | 3.4 | Custom design tokens |
| Swiper.js | 11 | Carousel (react bindings) |
| Lucide React | 0.344 | Icons |
| React Hook Form | 7.51 | Form handling |

## Commands

```bash
npm run dev       # Start dev server on http://localhost:4202
npm run build     # tsc + vite build → dist/
npm run lint      # ESLint (max-warnings 0 — strict)
npm run preview   # Preview production build
```

## Project Structure

```
src/
├── App.tsx                     # Router setup + Layout wrapper
├── main.tsx                    # React root mount
├── index.css                   # Tailwind + Swiper imports + global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   └── shared/
│       ├── CtaBand.tsx
│       ├── InfoPageTemplate.tsx
│       ├── LiveProject.tsx
│       └── Newsletter.tsx
├── pages/
│   ├── Home/index.tsx
│   ├── About/index.tsx
│   ├── Academy/ (index.tsx, Enroll.tsx)
│   ├── Career/ (CareerPage.tsx, Apply.tsx, components/)
│   ├── Contact/index.tsx
│   ├── GlobalPresence/index.tsx
│   ├── Industries/ (IndustryPage.tsx, components/)
│   ├── Insights/index.tsx
│   ├── Join/index.tsx
│   ├── Portfolio/index.tsx
│   ├── Resources/index.tsx
│   ├── Services/ (ServicePage.tsx, components/)
│   ├── Solutions/ (SolutionPage.tsx, components/)
│   ├── Technologies/ (TechnologyPage.tsx, components/)
│   ├── design-system/ (DesignSystem.tsx, components/)
│   └── NotFound.tsx
├── data/                       # Static page data (about.ts, academy.ts, career.ts, home.ts)
├── services/api.ts             # API calls (sendContact, applyForJob)
└── types/index.ts              # Shared TypeScript interfaces
```

## Routing

All routes are wrapped in a `<Layout>` component (Header + Footer).

| Path | Component |
|------|-----------|
| `/` | Redirects to `/home` |
| `/home` | Home |
| `/about` | About |
| `/services` | ServicePage |
| `/solutions` | SolutionPage |
| `/industries` | IndustryPage |
| `/technologies` | TechnologyPage |
| `/global-presence` | GlobalPresence |
| `/portfolio` | Portfolio |
| `/insights` | Insights |
| `/contact` | Contact |
| `/career` | CareerPage |
| `/career/apply` | Apply |
| `/join` | Join |
| `/design-system` | DesignSystem |
| `/resources/:resourceSlug` | ResourceDocumentPage |

## Design System & Tailwind Tokens

### Custom Colors

```js
crimson:  { DEFAULT: '#DC143C', dark: '#9B0E2A', light: '#FF2E5B' }
brand:    { navy: '#0b1222', panel: '#16213a' }
charcoal: { DEFAULT: '#1A1F2E', dark: '#0A0A0B', light: '#1A1A1C' }
surface:  // slate-based scale (50–700)
```

### Custom Gradients

```
bg-crimson-gradient   → linear-gradient(90deg, #9B0E2A, #DC143C, #FF2E5B)
bg-charcoal-gradient  → linear-gradient(120deg, #0A0A0B, #1A1F2E)
```

### Custom Shadows

```
shadow-glow       → crimson glow (0.35 opacity)
shadow-glow-hover → crimson glow (0.6 opacity)
shadow-card       → light card shadow
shadow-card-dark  → dark card shadow
shadow-hover      → elevated hover shadow
```

### Typography

- **Body font**: `Manrope` (weights 400–800)
- **Display/Headings**: `Space Grotesk` (weights 500, 700)
- Loaded via Google Fonts in `index.css`

## CSS Import Order (Critical)

`@import` statements MUST come **before** `@tailwind` directives:

```css
/* CORRECT order in index.css */
@import url('...');     /* fonts */
@import 'swiper/css';   /* swiper */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## API & Proxy

Backend proxy configured in `vite.config.ts`:

| Prefix | Target |
|--------|--------|
| `/api` | `https://misbah.org.in` |
| `/image` | `https://misbah.org.in` |

### API Functions (`src/services/api.ts`)

- `sendContact(data)` → POST `/api/beat/contact1`
- `applyForJob(formData)` → POST `/api/beat/apply` (multipart, includes resume file)

## Assets

Static assets live in `public/assets/images/` (served at `/assets/images/`):

```
public/assets/images/
├── about/       home/       career/
├── academy/     industry/   employee/
├── contact/     join/       logo/
├── course/      flags/
└── buildwithimgfolder.jpg, vision2030.png
```

Do **not** put assets in `src/assets/` — use `public/assets/images/` so paths work without Vite imports.

## TypeScript Interfaces (`src/types/index.ts`)

Key types: `Opportunity`, `Benefit`, `Life`, `Leader`, `Team`, `Thought`, `TopCourse`, `Project`, `Testimonial`, `CarouselSlide`

## Design System Page

A `/design-system` route documents all UI components. When creating new components, check [src/pages/design-system/](src/pages/design-system/) for existing patterns and tokens to reuse.

## Coding Conventions

- Components are `.tsx` files; one component per file
- Page-level data lives in `src/data/`, not inline in components
- Shared/reusable components go in `src/components/shared/`
- Page-specific sub-components go in `pages/<PageName>/components/`
- Use Tailwind utility classes; avoid inline styles
- Use `lucide-react` for all icons
- Use `react-hook-form` for all form state
- Use `swiper/react` for any carousel/slider
