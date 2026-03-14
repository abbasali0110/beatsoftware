import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Clock,
  Cpu,
  LayoutPanelTop,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

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
    excerpt:
      "Retrofitting compliance into a live enterprise system costs 3-5x more than building it in from the start. We break down the architecture decisions that make the difference.",
    author: "Beat Engineering",
    readTime: "8 min",
    date: "Feb 2026",
    featured: true,
  },
  {
    title: "SAMA CSF 2.0: What Financial Institutions Must Engineer Before Q3",
    category: "Compliance",
    excerpt:
      "SAMA's updated Cyber Security Framework introduces new obligations for financial platform operators. Here is what your architecture team needs to address now.",
    author: "Beat Compliance",
    readTime: "6 min",
    date: "Feb 2026",
  },
  {
    title: "Designing PMO Command Layers for NEOM-Scale Projects",
    category: "Engineering",
    excerpt:
      "Multi-site infrastructure programs with 20+ subcontractors need a different kind of PMO platform. We share the architecture patterns that work at this scale.",
    author: "Beat Engineering",
    readTime: "10 min",
    date: "Jan 2026",
  },
  {
    title: "The Hidden Cost of Fragmented Healthcare IT in Indian Multi-Hospital Networks",
    category: "Market",
    excerpt:
      "Disconnected OPD, IPD, and billing systems create invisible operational drag. Our analysis of 12 healthcare networks quantifies what this actually costs.",
    author: "Beat Research",
    readTime: "7 min",
    date: "Jan 2026",
  },
  {
    title: "ZATCA Phase 3: A Technical Implementation Guide for Enterprise ERP Teams",
    category: "Compliance",
    excerpt:
      "Phase 3 of Saudi Arabia's e-invoicing mandate covers mid-market enterprises. This is the engineering guide your ERP integration team needs before the deadline.",
    author: "Beat Compliance",
    readTime: "12 min",
    date: "Jan 2026",
  },
  {
    title: "How We Built a 3,000-Vehicle Fleet Control Tower in 90 Days",
    category: "Engineering",
    excerpt:
      "Real-time fleet intelligence at this scale requires WebSocket architecture, smart alerting, and a very deliberate data model. This is how we did it.",
    author: "Beat Engineering",
    readTime: "9 min",
    date: "Dec 2025",
  },
  {
    title: "RBI's Digital Lending Guidelines: A Platform Architect's Breakdown",
    category: "Compliance",
    excerpt:
      "RBI's revised digital lending framework has direct implications for platform architecture. We map each regulatory obligation to a concrete engineering decision.",
    author: "Beat Compliance",
    readTime: "8 min",
    date: "Dec 2025",
  },
  {
    title: "Executive Dashboard Design: What Boards Actually Need to See",
    category: "Product",
    excerpt:
      "Most enterprise dashboards show the wrong things. We examine what board-level stakeholders actually need and how to design for decision-making rather than data display.",
    author: "Beat Product",
    readTime: "5 min",
    date: "Dec 2025",
  },
  {
    title: "Vision 2030 and the Demand for Enterprise Software Localisation in KSA",
    category: "Market",
    excerpt:
      "Saudi Arabia's transformation agenda is driving demand for Arabic-first enterprise platforms. We analyse what localisation actually means beyond language translation.",
    author: "Beat Research",
    readTime: "6 min",
    date: "Nov 2025",
  },
];

const categories: Category[] = [
  "All",
  "Engineering",
  "Compliance",
  "Market",
  "Product",
];

function CategoryBadge({ category }: { category: Category }) {
  const style =
    category === "Engineering"
      ? {
          color: "var(--bs-text-accent)",
          background: "rgba(220,20,60,0.08)",
          borderColor: "rgba(220,20,60,0.18)",
        }
      : category === "Compliance"
        ? {
            color: "var(--bs-ksa-text)",
            background: "var(--bs-ksa-bg)",
            borderColor: "var(--bs-ksa-border)",
          }
        : category === "Market"
          ? {
              color: "var(--bs-india-text)",
              background: "var(--bs-india-bg)",
              borderColor: "var(--bs-india-border)",
            }
          : category === "Product"
            ? {
                color: "var(--bs-both-text)",
                background: "var(--bs-both-bg)",
                borderColor: "var(--bs-both-border)",
              }
            : {
                color: "var(--bs-text-muted)",
                background: "var(--bs-bg-overlay)",
                borderColor: "var(--bs-border)",
              };

  return (
    <span
      className="inline-flex rounded-md border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em]"
      style={style}
    >
      {category}
    </span>
  );
}

function ArticleCard({ article }: { article: Article }) {
  const { title, category, excerpt, author, readTime, date } = article;

  return (
    <article className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-theme-border bg-theme-raised p-6 transition-all duration-300 hover:-translate-y-1 hover:border-theme-border-accent hover:[box-shadow:var(--bs-shadow-elevated)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent pointer-events-none" />

      <div className="mb-4 flex items-center justify-between gap-3">
        <CategoryBadge category={category} />
        <span className="flex items-center gap-1.5 text-[10px] text-theme-text-muted">
          <Clock size={10} />
          {readTime}
        </span>
      </div>

      <h3 className="mb-3 flex-1 text-[0.95rem] font-bold leading-snug text-theme-text-primary transition-colors duration-200 group-hover:text-theme-text-accent">
        {title}
      </h3>

      <p className="mb-5 text-sm leading-relaxed text-theme-text-secondary">
        {excerpt}
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-theme-border pt-4">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full border border-crimson/25 bg-crimson/10">
            <span className="text-[8px] font-black text-crimson">BS</span>
          </div>
          <span className="text-[11px] font-medium text-theme-text-muted">
            {author}
          </span>
        </div>
        <span className="text-[10px] text-theme-text-muted">{date}</span>
      </div>
    </article>
  );
}

export default function Insights() {
  const [active, setActive] = useState<Category>("All");

  const featured = articles.find((a) => a.featured);
  const filtered =
    active === "All"
      ? articles.filter((a) => !a.featured)
      : articles.filter((a) => a.category === active && !a.featured);

  return (
    <div className="bg-theme-base">
      <section className="relative w-full -mt-[72px] h-[100svh] min-h-[620px] bg-charcoal-dark text-white overflow-hidden flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
          style={{
            backgroundImage: "url('/images/industry/giga.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-[#1a1f2e]/60" />
        <div className="absolute inset-y-0 left-0 w-full lg:w-[80%] bg-gradient-to-r from-[#1a1f2e]/85 via-[#1a1f2e]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent" />
        <div className="absolute inset-x-0 top-[72px] h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #DC143C 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute top-[-15%] right-[-8%] h-[640px] w-[640px] rounded-full bg-crimson/[0.10] blur-[160px]" />
        <div className="absolute bottom-[15%] left-[-12%] h-[420px] w-[420px] rounded-full bg-crimson/[0.06] blur-[130px]" />

        <div className="relative z-10 flex flex-1 items-end pb-14 sm:pb-16">
          <div className="w-full pl-8 pr-4 sm:pl-14 sm:pr-6 lg:pl-20 lg:pr-8 xl:pl-28">
            <div className="max-w-4xl">
              <div className="section-tag inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/10 px-3 py-1.5 mb-6">
                <BookOpen size={12} />
                Enterprise knowledge for operators
              </div>

              <h1 className="max-w-5xl text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[0.94] tracking-tight text-white">
                Insight for teams building software in
                <span className="mt-1 block text-crimson">
                  regulated, high-stakes environments.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
                Analysis on compliance architecture, platform governance, and
                enterprise delivery written from the perspective of engineers
                operating across KSA and India.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <a href="#insights-grid" className="btn-primary">
                  Browse Insights <ArrowRight size={16} />
                </a>
                <Link to="/contact" className="btn-ghost">
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-theme-overlay border-t border-theme-border">
        <div className="container-xl">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { value: "9+", label: "Published pieces" },
              { value: "4", label: "Core topics" },
              { value: "2", label: "Markets covered" },
              { value: "100%", label: "Operator-focused" },
            ].map(({ value, label }, i) => (
              <div
                key={label}
                className={`px-6 sm:px-8 py-5 sm:py-6 ${
                  i < 3 ? "border-r border-theme-border" : ""
                }`}
              >
                <p className="mb-1 text-2xl font-black leading-none tabular-nums text-theme-text-primary sm:text-3xl">
                  {value}
                </p>
                <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-theme-text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="insights-grid" className="section-pad bg-theme-base">
        <div className="container-xl">
          {featured && active === "All" && (
            <div className="mb-10">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-crimson" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
                  Featured
                </span>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-theme-border bg-theme-raised p-8 transition-all duration-300 hover:border-theme-border-accent hover:[box-shadow:var(--bs-shadow-elevated)] sm:p-10">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-crimson/40 via-crimson/20 to-transparent" />
                <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-crimson/10 blur-3xl pointer-events-none" />
                <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                  <div>
                    <div className="mb-4">
                      <CategoryBadge category={featured.category} />
                    </div>
                    <h2 className="mb-4 text-xl font-bold leading-snug text-theme-text-primary transition-colors duration-200 group-hover:text-theme-text-accent sm:text-2xl">
                      {featured.title}
                    </h2>
                    <p className="mb-6 max-w-2xl text-sm leading-relaxed text-theme-text-secondary sm:text-base">
                      {featured.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-[11px] text-theme-text-muted">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-crimson/25 bg-crimson/10">
                          <span className="text-[8px] font-black text-crimson">
                            BS
                          </span>
                        </div>
                        <span>{featured.author}</span>
                      </div>
                      <span>{featured.readTime}</span>
                      <span>{featured.date}</span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-crimson transition-all duration-200 group-hover:gap-3">
                      Read Article <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-5 shrink-0 bg-crimson" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
              All Insights
            </span>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-lg border px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 ${
                  active === cat
                    ? "border-crimson bg-crimson text-white"
                    : "border-theme-border bg-theme-raised text-theme-text-muted hover:border-theme-border-accent hover:text-theme-text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </div>

          <div className="mb-16 rounded-2xl border border-theme-border bg-theme-overlay p-8 sm:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-crimson" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
                Topics We Cover
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {topics.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="group flex cursor-pointer flex-col items-center gap-3 rounded-xl border border-theme-border bg-theme-raised p-4 text-center transition-all duration-200 hover:border-theme-border-accent hover:bg-theme-base"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-crimson/18 bg-crimson/10 transition-all duration-300 group-hover:bg-crimson/15">
                    <Icon size={15} className="text-crimson" />
                  </div>
                  <span className="text-[11px] font-semibold leading-tight text-theme-text-secondary">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-3xl p-[1px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(220,20,60,0.5) 0%, rgba(220,20,60,0.15) 40%, rgba(11,18,34,0.08) 100%)",
            }}
          >
            <div className="relative flex flex-col gap-8 overflow-hidden rounded-3xl bg-theme-raised px-8 py-10 sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-crimson/10 blur-[100px] pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-crimson/40 via-crimson/20 to-transparent" />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-px w-5 bg-crimson" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
                    Newsletter
                  </span>
                </div>
                <h3 className="mb-3 text-2xl font-bold leading-tight text-theme-text-primary sm:text-3xl">
                  Insights for engineering and compliance leaders
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-theme-text-secondary">
                  New analysis delivered when it matters. No filler, no fixed
                  cadence, and no noise.
                </p>
              </div>
              <div className="relative w-full shrink-0 lg:w-auto">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="your@company.com"
                    className="form-input-box flex-1 lg:w-64"
                  />
                  <button className="btn-primary whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="mt-3 text-xs text-theme-text-disabled">
                  NDA-safe. No spam. Unsubscribe any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



