# Beat Frontend - CLAUDE.md

## Project Overview

Corporate website for **Beat Software** focused on enterprise software delivery across KSA and India. The app is built with React 18, Vite, TypeScript, Tailwind CSS, Swiper, and React Hook Form. The dev server runs on **4202**.

## Stack

| Tool | Version | Notes |
|------|---------|-------|
| React | 18.3 | `react-dom`, `react-router-dom` v6 |
| Vite | 5.2 | Dev server + build tool |
| TypeScript | 5.4 | `noEmit: true` |
| Tailwind CSS | 3.4 | Custom tokens + CSS variable theme system |
| Swiper | 11 | Hero and slider UI |
| Lucide React | 0.344 | Icons |
| React Hook Form | 7.51 | Form state |

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Project Structure

```text
src/
|-- App.tsx
|-- main.tsx
|-- index.css
|-- components/
|   |-- layout/
|   |   |-- Header.tsx          # search dialog + region dropdown
|   |   |-- Footer.tsx
|   |   `-- MobileNav.tsx
|   `-- shared/
|       |-- CtaBand.tsx
|       |-- InfoPageTemplate.tsx
|       |-- LiveProject.tsx
|       `-- Newsletter.tsx
|-- pages/
|   |-- Home/index.tsx          # includes pinned WhatWhoHowSection
|   |-- About/index.tsx
|   |-- Academy/
|   |-- Career/
|   |-- Contact/index.tsx
|   |-- GlobalPresence/index.tsx
|   |-- Industries/
|   |-- Insights/index.tsx
|   |-- Join/index.tsx
|   |-- Portfolio/index.tsx
|   |-- Resources/
|   |-- Services/
|   |-- Solutions/
|   |-- Technologies/
|   |-- design-system/
|   `-- NotFound.tsx
|-- data/
|-- services/api.ts
`-- types/index.ts
```

## Routing

All routes are wrapped in the shared layout with `Header` and `Footer`.

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

## Design System And Tokens

### Static brand colors

```js
crimson:  { DEFAULT: '#DC143C', dark: '#9B0E2A', light: '#FF2E5B' }
brand:    { navy: '#0b1222', panel: '#16213a' }
charcoal: { DEFAULT: '#1A1F2E', dark: '#0A0A0B', light: '#1A1A1C' }
surface:  // slate scale 50-700
```

### Semantic theme tokens

Theme variables are defined in `src/index.css` and exposed through Tailwind utilities:

- `bg-theme-base`
- `bg-theme-raised`
- `bg-theme-overlay`
- `bg-theme-elevated`
- `bg-theme-subtle`
- `text-theme-text-primary`
- `text-theme-text-secondary`
- `text-theme-text-muted`
- `text-theme-text-disabled`
- `text-theme-text-accent`
- `border-theme-border`
- `border-theme-border-muted`
- `border-theme-border-accent`

Market badge variables:

```css
--bs-ksa-text / --bs-ksa-bg / --bs-ksa-border
--bs-india-text / --bs-india-bg / --bs-india-border
--bs-both-text / --bs-both-bg / --bs-both-border
```

Shadow variables:

```css
--bs-shadow-card
--bs-shadow-elevated
--bs-shadow-glow
```

### Typography

- Body font: `Manrope`
- Display font: `Space Grotesk`

## CSS Rules

- Keep `@import` statements above Tailwind directives in `src/index.css`
- Theme variables must stay after `@tailwind base/components/utilities`

## Theme Consistency Rules

- Hero sections stay dark and should not use light theme section tokens for the hero background.
- Hero typography should follow the homepage baseline:
  - heading: `text-3xl sm:text-4xl lg:text-5xl`
  - supporting copy: `text-base sm:text-lg`
- Content sections below heroes should prefer semantic theme tokens instead of hardcoded dark surfaces.
- Market badges should use the CSS variable badge pattern, not hardcoded country colors.
- `GlobalPresence` is the cleanest reference page for semantic theme-token usage.

## API And Proxy

Vite proxy in `vite.config.ts`:

| Prefix | Target |
|--------|--------|
| `/api` | `https://misbah.org.in` |
| `/image/` | `https://misbah.org.in` |

Notes:

- Public website assets must use `/images/...`
- Backend-served proxied images must use `/image/...`
- Do not mix those two paths

API functions in `src/services/api.ts`:

- `sendContact(data)` -> POST `/api/beat/contact1`
- `applyForJob(formData)` -> POST `/api/beat/apply`

## Assets

Static assets live in `public/images/` and are served from `/images/...`.

```text
public/images/
|-- about/
|-- academy/
|-- career/
|-- contact/
|-- course/
|-- employee/
|-- flags/
|-- home/
|-- industry/
|-- join/
|-- logo/
|-- tech/
`-- root files like vision2030.png and contact-hero.jpg
```

Rules:

- Use absolute public URLs like `/images/home/home11-lg.jpg`
- Do not use `src/assets/`
- Do not use relative `images/...` paths on routed pages

## Current UI Notes

- `Header.tsx` includes a search dialog opened from the search icon.
- `Header.tsx` includes a desktop region dropdown with flags.
- `MobileNav.tsx` accepts optional region props and should remain backward-compatible.
- `Home/index.tsx` includes a pinned `WhatWhoHowSection` that swaps panels on scroll.

### WhatWhoHowSection — scroll-pinned panel animation

- Scroll zone height: `sectionSteps * 60svh` (≈ 40svh of scroll per panel transition).
- Uses **discrete state** (`activeIndex` only — no `scrollPhase` float) for clean directional transitions.
- Past panels: `translateY(-5rem) scale(0.96)` + `opacity 0` — slide up and out.
- Future panels: `translateY(+5rem) scale(0.96)` + `opacity 0` — wait below.
- Active panel: `translateY(0) scale(1)` + `opacity 1`.
- Easing: `cubic-bezier(0.16,1,0.3,1)` at 0.65s for panel; 1.4s for image ken-burns zoom.
- UI chrome: vertical pill nav (right edge), progress badge (top-right), ghost step numbers on image, bottom strip indicators, left-border accent box in content column.
- Do **not** reintroduce `scrollPhase` continuous interpolation — the discrete snap is intentional.

## TypeScript Interfaces

Key shared types include:

- `Opportunity`
- `Benefit`
- `Life`
- `Leader`
- `Team`
- `Thought`
- `TopCourse`
- `Project`
- `Testimonial`
- `CarouselSlide`

## Design System Page

The `/design-system` route documents reusable UI patterns. Check `src/pages/design-system/` before creating new components.

## Coding Conventions

- Use `.tsx` for components
- Keep page data in `src/data/` where reasonable
- Shared reusable components go in `src/components/shared/`
- Page-specific components go in `pages/<PageName>/components/`
- Prefer Tailwind utilities over custom CSS
- Use inline styles only when referencing CSS variables or necessary background images
- Use `lucide-react` for icons
- Use `react-hook-form` for forms
- Use `swiper/react` for carousels
- Prefer semantic theme tokens over hardcoded colors in new code
