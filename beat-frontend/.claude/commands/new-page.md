# New Page Scaffold

Create a new page for the Beat Frontend project following all established conventions.

## Instructions

The user will provide a page name and optionally a route path. Scaffold the following:

### 1. Page component
Create `src/pages/<PageName>/<PageName>Page.tsx` (or `index.tsx` for simple pages).

**Hero section** must match the established pattern used by About and Portfolio:
```tsx
<section className="relative w-full -mt-[72px] min-h-[100svh] bg-charcoal-dark text-white overflow-hidden flex flex-col">
  <div className="absolute inset-0 bg-[#0A0A0B]/60" />
  <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent" />
  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
  <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #DC143C 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
  <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-crimson/[0.08] rounded-full blur-[160px]" />
  <div className="absolute bottom-[20%] left-[-8%] w-[400px] h-[400px] bg-crimson/[0.05] rounded-full blur-[130px]" />

  <div className="container-xl relative z-10 flex-1 flex items-center py-36 sm:py-44">
    <div className="max-w-3xl">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-crimson/30 bg-crimson/[0.10] text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-8">
        <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
        Badge Text
      </div>
      {/* Heading — 3 lines: white / white/35 / crimson-gradient */}
      <h1 className="font-extrabold leading-[0.93] tracking-tight mb-7">
        <span className="block text-[clamp(2.4rem,6.5vw,5rem)] text-white">Line one</span>
        <span className="block text-[clamp(2.4rem,6.5vw,5rem)] text-white/35 mt-1">line two</span>
        <span className="block text-[clamp(2.4rem,6.5vw,5rem)] bg-crimson-gradient bg-clip-text text-transparent mt-1">line three.</span>
      </h1>
      {/* Subtext with left border accent */}
      <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl border-l-2 border-crimson/50 pl-5">
        Subtext here.
      </p>
    </div>
  </div>
</section>
```

**Page wrapper** uses `bg-charcoal-dark` as the base:
```tsx
<div className="bg-charcoal-dark">
  {/* hero */}
  {/* sections */}
</div>
```

**Sections** use `section-pad` and `container-xl`:
```tsx
<section className="section-pad">
  <div className="container-xl">
    {/* content */}
  </div>
</section>
```

### 2. Components folder
Create `src/pages/<PageName>/components/` — leave a `.gitkeep` if no subcomponents yet.

### 3. Data file (if substantial data needed)
Create `src/data/<pageName>.ts` for static data arrays.

### 4. Register the route
Add the route to `src/App.tsx` following the existing pattern.

### 5. Add nav link if needed
If the page should appear in the header nav, update `src/components/layout/Header.tsx`.

## Design conventions to follow
- Outer wrapper: `bg-charcoal-dark`
- All icons: `lucide-react`
- All forms: `react-hook-form`
- All carousels: `swiper/react`
- No inline styles except for complex backgrounds
- Tailwind utility classes only
- Assets: `public/assets/images/<pageName>/` (never `src/assets/`)
- One component per `.tsx` file
