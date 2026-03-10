import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock, Cpu, LayoutPanelTop, ShieldCheck, TrendingUp } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = "All" | "Engineering" | "Compliance" | "Market" | "Product";

interface Article {
  title: string;
  category: Category;
  excerpt: string;
  author: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const topics = [
  { icon: ShieldCheck, label: "Compliance Architecture" },
  { icon: BookOpen, label: "Enterprise Delivery" },
  { icon: TrendingUp, label: "KSA Digital Transformation" },
  { icon: Cpu, label: "India Scale Patterns" },
  { icon: LayoutPanelTop, label: "Platform Engineering" },
  { icon: BookOpen, label: "Data Governance" },
];

const articles: Article[] = [
  {
    title: "Why Compliance-Native Architecture Reduces Total Delivery Cost by 35%",
    category: "Engineering",
    excerpt: "Retrofitting compliance into a live enterprise system costs 3–5x more than building it in from the start. We break down the architecture decisions that make the difference.",
    author: "Beat Engineering",
    readTime: "8 min",
    date: "Feb 2026",
    featured: true,
  },
  {
    title: "SAMA CSF 2.0: What Financial Institutions Must Engineer Before Q3",
    category: "Compliance",
    excerpt: "SAMA's updated Cyber Security Framework introduces new obligations for financial platform operators. Here's what your architecture team needs to address now.",
    author: "Beat Compliance",
    readTime: "6 min",
    date: "Feb 2026",
  },
  {
    title: "Designing PMO Command Layers for NEOM-Scale Projects",
    category: "Engineering",
    excerpt: "Multi-site infrastructure programs with 20+ subcontractors need a different kind of PMO platform. We share the architecture patterns that work at this scale.",
    author: "Beat Engineering",
    readTime: "10 min",
    date: "Jan 2026",
  },
  {
    title: "The Hidden Cost of Fragmented Healthcare IT in Indian Multi-Hospital Networks",
    category: "Market",
    excerpt: "Disconnected OPD, IPD, and billing systems create invisible operational drag. Our analysis of 12 healthcare networks quantifies what this actually costs.",
    author: "Beat Research",
    readTime: "7 min",
    date: "Jan 2026",
  },
  {
    title: "ZATCA Phase 3: A Technical Implementation Guide for Enterprise ERP Teams",
    category: "Compliance",
    excerpt: "Phase 3 of Saudi Arabia's e-invoicing mandate covers mid-market enterprises. This is the engineering guide your ERP integration team needs before the deadline.",
    author: "Beat Compliance",
    readTime: "12 min",
    date: "Jan 2026",
  },
  {
    title: "How We Built a 3,000-Vehicle Fleet Control Tower in 90 Days",
    category: "Engineering",
    excerpt: "Real-time fleet intelligence at this scale requires WebSocket architecture, smart alerting, and a very deliberate data model. This is how we did it.",
    author: "Beat Engineering",
    readTime: "9 min",
    date: "Dec 2025",
  },
  {
    title: "RBI's Digital Lending Guidelines: A Platform Architect's Breakdown",
    category: "Compliance",
    excerpt: "RBI's revised digital lending framework has direct implications for platform architecture. We map each regulatory obligation to a concrete engineering decision.",
    author: "Beat Compliance",
    readTime: "8 min",
    date: "Dec 2025",
  },
  {
    title: "Executive Dashboard Design: What Boards Actually Need to See",
    category: "Product",
    excerpt: "Most enterprise dashboards show the wrong things. We examine what board-level stakeholders actually need — and how to design for decision-making rather than data display.",
    author: "Beat Product",
    readTime: "5 min",
    date: "Dec 2025",
  },
  {
    title: "Vision 2030 and the Demand for Enterprise Software Localisation in KSA",
    category: "Market",
    excerpt: "Saudi Arabia's transformation agenda is driving demand for Arabic-first enterprise platforms. We analyse what localisation actually means beyond language translation.",
    author: "Beat Research",
    readTime: "6 min",
    date: "Nov 2025",
  },
];

const categories: Category[] = ["All", "Engineering", "Compliance", "Market", "Product"];

const categoryColor: Record<Category, string> = {
  All: "text-white/50 border-white/[0.12] bg-white/[0.03]",
  Engineering: "text-crimson/80 border-crimson/[0.20] bg-crimson/[0.05]",
  Compliance: "text-amber-300/80 border-amber-400/[0.20] bg-amber-400/[0.05]",
  Market: "text-sky-300/80 border-sky-400/[0.20] bg-sky-400/[0.05]",
  Product: "text-emerald-300/80 border-emerald-400/[0.20] bg-emerald-400/[0.05]",
};

// ─── Article Card ─────────────────────────────────────────────────────────────

function ArticleCard({ article }: { article: Article }) {
  const { title, category, excerpt, author, readTime, date } = article;
  return (
    <article className="group flex flex-col bg-gradient-to-b from-[#1e2438] to-[#111520] rounded-2xl border border-white/[0.10] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.08)] hover:border-crimson/[0.25] hover:-translate-y-1 hover:[box-shadow:0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-300 p-6 overflow-hidden cursor-pointer">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.10] to-transparent pointer-events-none" />

      <div className="flex items-center justify-between mb-4">
        <span className={`text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-md border ${categoryColor[category]}`}>
          {category}
        </span>
        <span className="text-[10px] text-white/30 flex items-center gap-1.5">
          <Clock size={10} />
          {readTime}
        </span>
      </div>

      <h3 className="text-white font-bold text-[0.95rem] leading-snug mb-3 flex-1 group-hover:text-white/90 transition-colors duration-200">
        {title}
      </h3>

      <p className="text-white/45 text-sm leading-relaxed mb-5">{excerpt}</p>

      <div className="flex items-center justify-between pt-4 border-t border-white/[0.07] mt-auto">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-crimson/[0.15] border border-crimson/[0.25] flex items-center justify-center">
            <span className="text-[8px] font-black text-crimson">BS</span>
          </div>
          <span className="text-[11px] text-white/40 font-medium">{author}</span>
        </div>
        <span className="text-[10px] text-white/30">{date}</span>
      </div>
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Insights() {
  const [active, setActive] = useState<Category>("All");

  const featured = articles.find((a) => a.featured);
  const filtered =
    active === "All"
      ? articles.filter((a) => !a.featured)
      : articles.filter((a) => a.category === active && !a.featured);

  return (
    <div className="bg-charcoal-dark">
      {/* ── HERO ── */}
      <section className="relative w-full -mt-[72px] bg-charcoal-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0B]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #DC143C 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-crimson/[0.07] rounded-full blur-[150px]" />

        <div className="container-xl relative z-10 pt-36 pb-16 sm:pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-crimson/30 bg-crimson/[0.10] text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-8">
              <BookOpen size={11} className="text-crimson" />
              Enterprise Knowledge · Published by Beat Software
            </div>
            <h1 className="font-extrabold leading-[0.93] tracking-tight mb-6">
              <span className="block text-[clamp(2.2rem,6vw,4.5rem)] text-white">
                Thinking clearly about
              </span>
              <span className="block text-[clamp(2.2rem,6vw,4.5rem)] text-white/35 mt-1">
                regulated software in
              </span>
              <span className="block text-[clamp(2.2rem,6vw,4.5rem)] bg-crimson-gradient bg-clip-text text-transparent mt-1">
                KSA and India.
              </span>
            </h1>
            <p className="text-white/55 text-base sm:text-lg leading-relaxed max-w-2xl">
              Deep analysis on compliance architecture, platform governance, and
              enterprise delivery — written by the engineers who build these
              systems.
            </p>
          </div>
        </div>
      </section>

      <div className="section-pad">
        <div className="container-xl">
          {/* Featured article */}
          {featured && active === "All" && (
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-[1px] bg-crimson shrink-0" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
                  Featured
                </span>
              </div>
              <div className="group relative rounded-2xl bg-gradient-to-br from-[#1e2438] to-[#111520] border border-white/[0.12] hover:border-crimson/[0.30] hover:[box-shadow:0_24px_64px_rgba(0,0,0,0.5)] transition-all duration-300 p-8 sm:p-10 cursor-pointer overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-crimson/40 via-crimson/20 to-transparent" />
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-crimson/[0.06] rounded-full blur-3xl pointer-events-none" />
                <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
                  <div>
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-md border mb-4 ${categoryColor[featured.category]}`}>
                      {featured.category}
                    </span>
                    <h2 className="text-white font-bold text-xl sm:text-2xl leading-snug mb-4 group-hover:text-white/90 transition-colors duration-200">
                      {featured.title}
                    </h2>
                    <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-crimson/[0.15] border border-crimson/[0.25] flex items-center justify-center">
                          <span className="text-[8px] font-black text-crimson">BS</span>
                        </div>
                        <span className="text-[11px] text-white/40">{featured.author}</span>
                      </div>
                      <span className="text-white/20">·</span>
                      <span className="text-[11px] text-white/40 flex items-center gap-1.5">
                        <Clock size={10} /> {featured.readTime}
                      </span>
                      <span className="text-white/20">·</span>
                      <span className="text-[11px] text-white/40">{featured.date}</span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="inline-flex items-center gap-2 text-crimson text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                      Read Article <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Filter + Grid */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-[1px] bg-crimson shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
              All Insights
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[11px] font-bold uppercase tracking-[0.14em] px-3.5 py-1.5 rounded-lg border transition-all duration-200 ${
                  active === cat
                    ? "bg-crimson text-white border-crimson"
                    : "text-white/50 border-white/[0.12] bg-white/[0.03] hover:border-white/25 hover:text-white/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-16">
            {filtered.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>

          {/* Topics row */}
          <div className="bg-beige rounded-2xl p-8 sm:p-10 mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-5 h-[1px] bg-crimson shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
                Topics We Cover
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {topics.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white border border-black/[0.06] hover:border-crimson/20 hover:shadow-sm transition-all duration-200 text-center cursor-pointer group">
                  <div className="w-9 h-9 rounded-lg bg-crimson/[0.07] border border-crimson/[0.15] flex items-center justify-center group-hover:bg-crimson/[0.12] transition-all duration-300">
                    <Icon size={15} className="text-crimson" />
                  </div>
                  <span className="text-[11px] font-semibold text-rhino/70 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div
            className="relative rounded-3xl p-[1px] overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(220,20,60,0.5) 0%, rgba(220,20,60,0.15) 40%, rgba(255,255,255,0.06) 100%)",
            }}
          >
            <div className="relative rounded-3xl bg-[#0d0d0e] px-8 py-10 sm:px-12 sm:py-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 overflow-hidden">
              <div className="absolute -top-40 -left-40 w-80 h-80 bg-crimson/[0.06] rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-crimson/40 via-crimson/20 to-transparent" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-[1px] bg-crimson" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">Newsletter</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
                  Insights for engineering and compliance leaders
                </h3>
                <p className="text-white/45 text-sm leading-relaxed max-w-md">
                  New analysis delivered when it matters — no filler, no
                  frequency commitments. NDA-safe, unsubscribe any time.
                </p>
              </div>
              <div className="relative flex flex-col gap-3 shrink-0 w-full lg:w-auto">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="your@company.com"
                    className="flex-1 lg:w-64 bg-white/[0.05] border border-white/[0.12] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-crimson/50 transition-colors duration-200"
                  />
                  <button className="btn-primary whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-white/25 text-xs">NDA-safe · No spam · Unsubscribe any time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
