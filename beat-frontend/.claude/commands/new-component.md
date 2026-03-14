# New Component

Create a new component for the Beat Frontend project.

## Instructions

The user will provide a component name and whether it's **shared** (reusable across pages) or **page-specific**.

### Shared component
Place in `src/components/shared/<ComponentName>.tsx`

### Page-specific component
Place in `src/pages/<PageName>/components/<ComponentName>.tsx`

## Design tokens to use

**Colors**
- Dark backgrounds: `bg-charcoal-dark` (#0A0A0B), `bg-charcoal` (#1A1F2E)
- Panel backgrounds: `bg-brand-panel` (#16213a)
- Accent: `text-crimson`, `bg-crimson`, `border-crimson`
- Gradient text: `bg-crimson-gradient bg-clip-text text-transparent`
- Muted text: `text-white/50`, `text-white/35`, `text-white/60`

**Shadows**
- `shadow-glow` — crimson glow on dark cards
- `shadow-glow-hover` — stronger glow on hover
- `shadow-card-dark` — dark card shadow

**Cards (dark)**
```tsx
<div className="rounded-2xl border border-white/[0.10] bg-gradient-to-b from-[#2a3556] to-[#1e2a48] p-6 hover:border-crimson/30 hover:-translate-y-1 transition-all duration-300">
```

**Section headings**
```tsx
<h2 className="font-bold text-[clamp(1.8rem,4vw,3rem)] text-white leading-tight mb-4">
  Heading <span className="bg-crimson-gradient bg-clip-text text-transparent">highlight</span>
</h2>
```

**Crimson accent badge**
```tsx
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-crimson/30 bg-crimson/[0.10] text-[10px] font-bold tracking-[0.2em] uppercase text-white">
  <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
  Badge label
</div>
```

**Left-border accent paragraph**
```tsx
<p className="border-l-2 border-crimson/50 pl-5 text-white/60 leading-relaxed">
```

## Rules
- One component per file, named export or default export consistent with page files
- Use `lucide-react` for all icons — never emoji or other icon libraries
- Use Tailwind classes only; avoid inline styles except for complex `backgroundImage` patterns
- Props interface defined inline at top of file
- No `useEffect` for data that can be passed as props
