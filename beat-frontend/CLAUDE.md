# Beat Frontend — CLAUDE.md

## Project Overview

Corporate website for **Beat Software** (enterprise software for KSA & India markets) built with React 18 + Vite + TypeScript. Migrated from Angular 13. Dev server runs on port **4202**.

## Stack

| Tool | Version | Notes |
|------|---------|-------|
| React | 18.3 | `react-dom`, `react-router-dom` v6 |
| Vite | 5.2 | Build tool + dev server |
| TypeScript | 5.4 | Strict mode, `noEmit: true` |
| Tailwind CSS | 3.4 | Custom design tokens + CSS variable theme system |
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
├── index.css                   # Tailwind + Swiper imports + CSS variable theme system
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
│   ├── GlobalPresence/index.tsx        ← theme tokens applied
│   ├── Industries/ (IndustryPage.tsx, components/)
│   ├── Insights/index.tsx              ← theme tokens partially applied
│   ├── Join/index.tsx
│   ├── Portfolio/index.tsx             ← theme tokens partially applied
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

---

## Design System & Tailwind Tokens

### Static Brand Colors (dark-theme anchors — used throughout existing code)

```js
crimson:  { DEFAULT: '#DC143C', dark: '#9B0E2A', light: '#FF2E5B' }
brand:    { navy: '#0b1222', panel: '#16213a' }
charcoal: { DEFAULT: '#1A1F2E', dark: '#0A0A0B', light: '#1A1A1C' }
surface:  // slate-based scale (50–700)
```

### Dual-Theme Semantic Tokens (CSS variable–driven)

The app has a full light/dark theme system defined in `src/index.css` via CSS variables.
Toggle dark mode by adding `class="dark"` to `<html>`.

**Tailwind utility classes available:**

| Category | Classes | CSS Variable |
|----------|---------|--------------|
| **Backgrounds** | `bg-theme-base` | `--bs-bg-base` — page root |
| | `bg-theme-raised` | `--bs-bg-raised` — cards, modals |
| | `bg-theme-overlay` | `--bs-bg-overlay` — panel sections |
| | `bg-theme-elevated` | `--bs-bg-elevated` — hover / selected |
| | `bg-theme-subtle` | `--bs-bg-subtle` — subtle dividers |
| **Text** | `text-theme-text-primary` | `--bs-text-primary` — headings |
| | `text-theme-text-secondary` | `--bs-text-secondary` — body copy |
| | `text-theme-text-muted` | `--bs-text-muted` — labels, meta |
| | `text-theme-text-disabled` | `--bs-text-disabled` — disabled / ghost |
| | `text-theme-text-accent` | `--bs-text-accent` — brand callouts |
| **Borders** | `border-theme-border` | `--bs-border` — default |
| | `border-theme-border-muted` | `--bs-border-muted` — dividers |
| | `border-theme-border-accent` | `--bs-border-accent` — crimson-tinted |
| **Status** | `text-theme-status-success` | `--bs-success` |
| | `text-theme-status-warning` | `--bs-warning` |
| | `text-theme-status-info` | `--bs-info` |
| | `text-theme-status-destructive` | `--bs-destructive` |

**Market tag CSS variables (use via inline styles):**

```css
--bs-ksa-text / --bs-ksa-bg / --bs-ksa-border       /* KSA amber */
--bs-india-text / --bs-india-bg / --bs-india-border  /* India sky */
--bs-both-text / --bs-both-bg / --bs-both-border     /* Both emerald */
```

Use the `<MarketBadge market="KSA|India|Both" />` pattern (see `GlobalPresence/index.tsx`) to render market tags that adapt to both themes automatically.

**Shadow CSS variables (use via inline styles):**

```css
--bs-shadow-card      /* default card shadow */
--bs-shadow-elevated  /* hover / elevated state */
--bs-shadow-glow      /* crimson brand glow */
```

**Light theme values (`:root`):**

| Token | Value |
|-------|-------|
| `--bs-bg-base` | `#F7F9FC` |
| `--bs-bg-raised` | `#FFFFFF` |
| `--bs-text-primary` | `#0B1222` |
| `--bs-text-secondary` | `#2D3748` |
| `--bs-text-muted` | `#64748B` |

**Dark theme values (`.dark`):**

| Token | Value |
|-------|-------|
| `--bs-bg-base` | `#070709` |
| `--bs-bg-raised` | `#0D0D10` |
| `--bs-text-primary` | `#FFFFFF` |
| `--bs-text-secondary` | `rgba(255,255,255,0.65)` |
| `--bs-text-muted` | `rgba(255,255,255,0.40)` |

### Custom Gradients

```
bg-crimson-gradient   → linear-gradient(90deg, #9B0E2A, #DC143C, #FF2E5B)
bg-charcoal-gradient  → linear-gradient(120deg, #0A0A0B, #1A1F2E)
```

### Custom Shadows (static Tailwind tokens)

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

---

## CSS Import Order (Critical)

`@import` statements MUST come **before** `@tailwind` directives:

```css
/* CORRECT order in index.css */
@import url('...');     /* fonts */
@import 'swiper/css';   /* swiper */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS variables (:root / .dark) go AFTER @tailwind directives */
```

---

## Theme Consistency Rules

- **Hero sections** are always dark regardless of theme — they use `bg-charcoal-dark text-white` with atmospheric overlays. Do not apply theme tokens to hero backgrounds.
- **All content sections below the hero** must use semantic theme tokens (`bg-theme-*`, `text-theme-text-*`, `border-theme-border`) — never hardcode `bg-[#0d0d0e]`, `text-white/45`, etc. in new code.
- **Market badges** must use the `--bs-ksa-*` / `--bs-india-*` / `--bs-both-*` CSS variables via inline styles (or a `<MarketBadge>` component), never hardcoded Tailwind color classes.
- **Cross-border grid gaps** (`gap-px` grids): use `style={{ background: 'var(--bs-border)' }}` as the grid background, not `bg-white/[0.06]`.
- Pages with theme tokens fully applied: **GlobalPresence**. Use it as the reference implementation.

---

## API & Proxy

Backend proxy configured in `vite.config.ts`:

| Prefix | Target |
|--------|--------|
| `/api` | `https://misbah.org.in` |
| `/image` | `https://misbah.org.in` |

### API Functions (`src/services/api.ts`)

- `sendContact(data)` → POST `/api/beat/contact1`
- `applyForJob(formData)` → POST `/api/beat/apply` (multipart, includes resume file)

---

## Assets

Static assets live in `public/assets/images/` (served at `/assets/images/`):

```
public/assets/images/
├── about/       home/       career/
├── academy/     industry/   employee/
├── contact/     join/       logo/
├── course/      flags/      tech/
└── buildwithimgfolder.jpg, vision2030.png, contact-hero.jpg
```

Do **not** put assets in `src/assets/` — use `public/assets/images/` so paths work without Vite imports.

---

## TypeScript Interfaces (`src/types/index.ts`)

Key types: `Opportunity`, `Benefit`, `Life`, `Leader`, `Team`, `Thought`, `TopCourse`, `Project`, `Testimonial`, `CarouselSlide`

---

## Design System Page

A `/design-system` route documents all UI components. When creating new components, check [src/pages/design-system/](src/pages/design-system/) for existing patterns and tokens to reuse.

---

## Coding Conventions

- Components are `.tsx` files; one component per file
- Page-level data lives in `src/data/`, not inline in components
- Shared/reusable components go in `src/components/shared/`
- Page-specific sub-components go in `pages/<PageName>/components/`
- Use Tailwind utility classes; avoid inline styles **except** for CSS variable references (`var(--bs-*)`)
- Use `lucide-react` for all icons
- Use `react-hook-form` for all form state
- Use `swiper/react` for any carousel/slider
- Prefer semantic theme tokens over hardcoded colors in all new code
