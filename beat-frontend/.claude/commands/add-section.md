# Add Section to Page

Add a new content section to an existing page, following Beat Frontend design conventions.

## Instructions

The user will specify:
1. Which page to add the section to
2. What content the section should display
3. Where in the page it should appear (before/after which section)

Read the target page file first to understand existing structure, then insert the new section.

## Section template

All sections follow this wrapper pattern:
```tsx
<section className="section-pad">
  <div className="container-xl">
    {/* Optional eyebrow label */}
    <div className="flex items-center gap-3 mb-4">
      <div className="w-5 h-[1px] bg-crimson" />
      <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
        Section Label
      </span>
    </div>

    {/* Heading */}
    <h2 className="font-bold text-[clamp(1.8rem,4vw,3rem)] text-white leading-tight mb-4">
      Section <span className="bg-crimson-gradient bg-clip-text text-transparent">heading</span>
    </h2>

    {/* Content */}
  </div>
</section>
```

## Grid layouts

**3-column cards:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
```

**2-column split (text + visual):**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
```

**4-column stats:**
```tsx
<div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
```

## Background variants

- Default (dark): `section-pad` on `bg-charcoal-dark` parent
- Slightly lifted: add `bg-[#111520]` to the section
- Crimson accent band: use `src/components/shared/CtaBand.tsx`

## Rules
- Always read the target file before editing
- Insert at the exact position the user requests
- Match the page's existing section spacing and typography exactly
- Move any new static data arrays to `src/data/<pageName>.ts`, not inline
