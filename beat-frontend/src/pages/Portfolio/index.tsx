import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Banknote,
  Building2,
  Factory,
  GraduationCap,
  Home,
  Landmark,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  Truck,
  Wrench,
} from "lucide-react";
import PortfolioHeroSection from "./components/PortfolioHeroSection";

// ─── Types ────────────────────────────────────────────────────────────────────

type Market = "KSA" | "India" | "Both";
type Category =
  | "All"
  | "Finance"
  | "Healthcare"
  | "Infrastructure"
  | "Education"
  | "Retail"
  | "Logistics"
  | "Public Sector"
  | "Manufacturing"
  | "Real Estate";

interface Project {
  codename: string;
  sector: Category;
  market: Market;
  icon: React.ElementType;
  challenge: string;
  outcome: string;
  metrics: string[];
  stack: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "50+", label: "Enterprise rollouts" },
  { value: "11", label: "Strategic domains" },
  { value: "2", label: "Active markets" },
  { value: "100%", label: "NDA compliance rate" },
];

const projects: Project[] = [
  {
    codename: "Project Meridian",
    sector: "Finance",
    market: "KSA",
    icon: Banknote,
    challenge:
      "Legacy core banking with no immutable audit trail or SAMA compliance controls",
    outcome:
      "60% faster compliance reporting, full SAMA CSF alignment achieved within 90 days",
    metrics: [
      "60% faster compliance reporting",
      "SAMA CSF fully aligned",
      "Zero audit exceptions post-go-live",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "AWS", "Redis"],
  },
  {
    codename: "Project Indra",
    sector: "Healthcare",
    market: "India",
    icon: Stethoscope,
    challenge:
      "Fragmented OPD, IPD, and diagnostics across 8 facilities with no unified patient record",
    outcome:
      "Unified care operations platform with 35% SLA improvement across all facilities",
    metrics: [
      "35% SLA improvement",
      "8 facilities unified",
      "NPHIES-compatible architecture",
    ],
    stack: ["React", "Java Spring", "PostgreSQL", "Azure", "HL7 FHIR"],
  },
  {
    codename: "Project Kairos",
    sector: "Infrastructure",
    market: "KSA",
    icon: Wrench,
    challenge:
      "No real-time PMO visibility on a NEOM-adjacent infrastructure program spanning 14 subcontractors",
    outcome:
      "On-time delivery milestone achieved with 28% reduction in cost variance",
    metrics: [
      "28% cost variance reduction",
      "14 subcontractors unified",
      "Real-time BOQ tracking",
    ],
    stack: ["React", "Node.js", "MongoDB", "AWS", "PowerBI"],
  },
  {
    codename: "Project Atlas",
    sector: "Logistics",
    market: "India",
    icon: Truck,
    challenge:
      "3,200-vehicle fleet operating with zero central command, manual dispatch, and no SLA visibility",
    outcome:
      "99.1% SLA adherence post-deployment, full fleet real-time command achieved",
    metrics: [
      "99.1% SLA adherence",
      "3,200 vehicles unified",
      "Zero manual dispatch errors",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "GCP", "WebSocket"],
  },
  {
    codename: "Project Sentry",
    sector: "Public Sector",
    market: "KSA",
    icon: Landmark,
    challenge:
      "Manual citizen service workflows across 6 government departments with no audit trail",
    outcome:
      "70% of services digitized within 90 days, fully audit-ready under SDAIA practices",
    metrics: [
      "70% digitized in 90 days",
      "6 departments unified",
      "Full SDAIA audit compliance",
    ],
    stack: ["React", "Java", "Oracle DB", "AWS GovCloud", "Arabic UI"],
  },
  {
    codename: "Project Nexus",
    sector: "Finance",
    market: "India",
    icon: Banknote,
    challenge:
      "Fragmented lending platform failing RBI digital lending guidelines with high manual reconciliation",
    outcome:
      "RBI-compliant architecture deployed, 45% reduction in manual reconciliation overhead",
    metrics: [
      "45% reconciliation reduction",
      "RBI DLG compliant",
      "Multi-lender support",
    ],
    stack: ["React", "Node.js", "MySQL", "AWS", "Kafka"],
  },
  {
    codename: "Project Citadel",
    sector: "Retail",
    market: "KSA",
    icon: ShoppingBag,
    challenge:
      "Disconnected POS, e-commerce, and inventory layers causing 18% order fulfilment failure rate",
    outcome:
      "Unified commerce platform with ZATCA-compliant invoicing and sub-2% fulfilment failure",
    metrics: [
      "< 2% fulfilment failure",
      "ZATCA Phase 2 compliant",
      "Omnichannel unified",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "AWS", "Elasticsearch"],
  },
  {
    codename: "Project Prajna",
    sector: "Education",
    market: "India",
    icon: GraduationCap,
    challenge:
      "Fragmented SIS, fee, and exam systems across 12 campuses with no board-level visibility",
    outcome:
      "Centralised multi-campus operations platform with NCAAA-ready reporting dashboards",
    metrics: [
      "12 campuses unified",
      "NCAAA-ready reporting",
      "40% admin overhead reduced",
    ],
    stack: ["React", "Laravel", "MySQL", "Azure", "PWA"],
  },
  {
    codename: "Project Forge",
    sector: "Manufacturing",
    market: "India",
    icon: Factory,
    challenge:
      "Siloed production planning, procurement, and maintenance systems across 4 plants",
    outcome:
      "Unified plant operations platform with OEE dashboards and predictive maintenance alerts",
    metrics: [
      "4 plants unified",
      "OEE visibility live",
      "22% downtime reduction",
    ],
    stack: ["React", "Node.js", "TimescaleDB", "AWS IoT", "MQTT"],
  },
  {
    codename: "Project Apex",
    sector: "Real Estate",
    market: "Both",
    icon: Home,
    challenge:
      "Fragmented lead-to-lease journeys across KSA and India portfolios with no unified tenant lifecycle",
    outcome:
      "Unified portfolio platform with RERA and ESG data compliance across both markets",
    metrics: [
      "Dual-market RERA compliant",
      "Lead-to-lease unified",
      "Portfolio yield dashboards",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "AWS", "Arabic + English UI"],
  },
  {
    codename: "Project Horizon",
    sector: "Infrastructure",
    market: "India",
    icon: Building2,
    challenge:
      "IT services firm with fragmented delivery governance and no account-level profitability visibility",
    outcome:
      "Delivery command platform with utilisation, margin, and SLA intelligence per account",
    metrics: [
      "Account P&L visibility",
      "SLA breach alerts",
      "ISO 20000 aligned",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Azure", "PowerBI"],
  },
];

const categories: Category[] = [
  "All",
  "Finance",
  "Healthcare",
  "Infrastructure",
  "Education",
  "Retail",
  "Logistics",
  "Public Sector",
  "Manufacturing",
  "Real Estate",
];

// ─── Card ─────────────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: Project }) {
  const {
    codename,
    sector,
    market,
    icon: Icon,
    challenge,
    outcome,
    metrics,
    stack,
  } = project;

  return (
    <article className="group relative flex flex-col bg-gradient-to-b from-[#2a3556] to-[#1e2a48] rounded-2xl border border-white/[0.10] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.08)] hover:border-crimson/[0.28] hover:-translate-y-1 hover:[box-shadow:inset_0_1px_0_0_rgba(220,20,60,0.22),0_24px_64px_rgba(0,0,0,0.5)] transition-all duration-300 p-6 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-crimson-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-crimson/[0.15] to-crimson/[0.05] border border-crimson/[0.20] flex items-center justify-center shrink-0">
          <Icon size={17} className="text-crimson" />
        </div>
        <div className="flex gap-1.5 flex-wrap justify-end">
          <span
            className={`text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded border ${
              market === "KSA"
                ? "text-amber-300/80 bg-amber-400/[0.07] border-amber-400/[0.18]"
                : market === "India"
                  ? "text-sky-300/80 bg-sky-400/[0.07] border-sky-400/[0.18]"
                  : "text-emerald-300/80 bg-emerald-400/[0.07] border-emerald-400/[0.18]"
            }`}
          >
            {market}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded border text-white/40 bg-white/[0.04] border-white/[0.08]">
            {sector}
          </span>
        </div>
      </div>

      {/* Codename */}
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-crimson/70 mb-1">
        {codename}
      </p>

      {/* Challenge */}
      <p className="text-white/50 text-xs leading-relaxed mb-4 flex-1">
        {challenge}
      </p>

      {/* Outcome */}
      <p className="text-white/80 text-sm font-medium leading-relaxed mb-4 border-l-2 border-crimson/40 pl-3">
        {outcome}
      </p>

      {/* Metrics */}
      <ul className="space-y-1.5 mb-4">
        {metrics.map((m) => (
          <li key={m} className="flex items-center gap-2 text-white/55 text-xs">
            <span className="w-1 h-1 rounded-full bg-crimson/60 shrink-0" />
            {m}
          </li>
        ))}
      </ul>

      {/* Stack */}
      <div className="flex flex-wrap gap-1 pt-3 border-t border-white/[0.07]">
        {stack.map((s) => (
          <span
            key={s}
            className="text-[10px] font-semibold text-white/35 bg-white/[0.04] border border-white/[0.07] rounded px-2 py-0.5"
          >
            {s}
          </span>
        ))}
      </div>

      {/* NDA shield */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ShieldCheck size={13} className="text-crimson/50" />
      </div>
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.sector === active);

  return (
    <div className="bg-white">
      <PortfolioHeroSection />

      <section className="bg-charcoal-dark border-t border-white/10">
        <div className="container-xl">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`px-6 sm:px-8 py-5 ${i < stats.length - 1 ? "border-r border-white/[0.07]" : ""}`}
              >
                <p className="text-2xl sm:text-3xl font-black text-white tabular-nums leading-none mb-1">
                  {value}
                </p>
                <p className="text-[10px] text-white/35 uppercase tracking-[0.12em] font-medium">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section id="portfolio-grid" className="section-pad">
        <div className="container-xl">
          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-10">
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

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <ProjectCard key={project.codename} project={project} />
            ))}
          </div>

          {/* NDA strip */}
          <div className="mt-10 flex items-center gap-4 px-5 py-4 rounded-xl border border-white/[0.07] bg-[#0d0d0e] [box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.04)]">
            <div className="w-8 h-8 rounded-lg bg-crimson/[0.08] border border-crimson/[0.18] flex items-center justify-center shrink-0">
              <ShieldCheck size={14} className="text-crimson" />
            </div>
            <p className="text-sm">
              <span className="text-white/85 font-semibold">
                NDA-Protected Delivery —{" "}
              </span>
              <span className="text-white/45">
                All client architectures, business logic, and operational data
                remain confidential from discovery through deployment and
                beyond.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="container-xl pb-20">
        <div
          className="relative rounded-3xl p-[1px] overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(220,20,60,0.5) 0%, rgba(220,20,60,0.15) 40%, rgba(255,255,255,0.06) 100%)",
          }}
        >
          <div className="relative rounded-3xl bg-[#0d0d0e] px-8 py-10 sm:px-12 sm:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 overflow-hidden">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-crimson/[0.06] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-crimson/40 via-crimson/20 to-transparent" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-5 h-[1px] bg-crimson" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
                  Your Project Next
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                Ready to build your
                <br />
                enterprise platform?
              </h3>
              <p className="text-white/45 text-base leading-relaxed max-w-md">
                Share your domain context and operating constraints. We'll frame
                a compliance-aware delivery blueprint for KSA or India scale.
              </p>
            </div>
            <div className="relative flex flex-col items-start lg:items-center gap-3 shrink-0">
              <Link to="/contact" className="btn-primary whitespace-nowrap">
                Start a Domain Conversation <ArrowRight size={16} />
              </Link>
              <p className="text-white/25 text-xs">NDA available on request</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
