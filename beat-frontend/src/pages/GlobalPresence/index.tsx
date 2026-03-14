import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import GlobalPresenceHeroSection from "./components/GlobalPresenceHeroSection";

// ─── Data ─────────────────────────────────────────────────────────────────────

const ksaPoints = [
  "SAMA CSF — Saudi Central Bank cyber security framework",
  "ZATCA — E-invoicing phases 1, 2 & 3",
  "SDAIA — National data and AI authority compliance",
  "NCA ECC — Essential cyber security controls",
  "NPHIES — National health information exchange system",
  "Vision 2030 governance reporting alignment",
];

const indiaPoints = [
  "RBI — Reserve Bank of India platform architecture",
  "RERA — Real estate regulatory compliance",
  "GST — e-Invoice and e-Way bill integration",
  "SEBI — Capital markets platform obligations",
  "MCA21 — Corporate governance reporting",
  "DPDP Act — Data protection compliance",
];

const complianceMatrix = [
  { framework: "ISO 27001",        market: "Both",  domains: "Finance, Healthcare, IT Services, Govt",  approach: "Architecture-embedded controls with annual audit readiness" },
  { framework: "SAMA CSF 2.0",     market: "KSA",   domains: "Digital Finance, Banking",                approach: "Compliance-native platform design from day one" },
  { framework: "ZATCA Phase 3",    market: "KSA",   domains: "Retail, ERP, Commerce",                   approach: "Real-time e-invoicing integration with FATOORA API" },
  { framework: "SDAIA Practices",  market: "KSA",   domains: "Public Sector, AI Platforms",             approach: "Data localisation and AI governance controls" },
  { framework: "NPHIES",           market: "KSA",   domains: "Healthcare",                              approach: "HL7 FHIR-compatible architecture for payer integration" },
  { framework: "RBI Digital Lending", market: "India", domains: "Fintech, NBFC Platforms",             approach: "DLG-compliant process architecture and audit trail" },
  { framework: "GST e-Invoice",    market: "India", domains: "ERP, Commerce, Manufacturing",            approach: "IRP integration and IRN lifecycle management" },
  { framework: "RERA Alignment",   market: "India", domains: "Real Estate",                             approach: "State-level RERA workflow and disclosure automation" },
  { framework: "ISO 9001",         market: "Both",  domains: "Infrastructure, Manufacturing",           approach: "Quality management controls in delivery governance" },
  { framework: "HIPAA Controls",   market: "Both",  domains: "Healthcare",                              approach: "PHI protection architecture for international healthcare clients" },
];

const crossBorder = [
  {
    title: "Multi-Currency & Multi-Entity Architectures",
    desc: "Financial platforms that operate across SAR and INR jurisdictions with separate entity structures, reporting lines, and regulatory obligations.",
  },
  {
    title: "Bilingual Platform Delivery",
    desc: "Arabic-first user experiences for KSA with full RTL layout support, alongside English-primary enterprise interfaces for India operations.",
  },
  {
    title: "Cross-Border Data Governance",
    desc: "Data residency controls that respect Saudi data localisation requirements and India's DPDP Act obligations simultaneously.",
  },
];

const deliveryModel = [
  {
    market: "KSA",
    color: "amber",
    title: "In-Country Delivery · Riyadh",
    points: [
      "Discovery and architecture workshops in-country",
      "Client-embedded delivery teams for sensitive programs",
      "Arabic-language stakeholder engagement",
      "Vision 2030 and regulatory alignment reviews",
      "NDA-first engagement from first conversation",
    ],
  },
  {
    market: "India",
    color: "sky",
    title: "Engineering Hub · Hyderabad",
    points: [
      "Full-stack engineering and platform architecture",
      "Multi-timezone delivery support for GCC clients",
      "High-volume and multi-tenant system design",
      "Managed services and post-go-live operations",
      "Compliance review cycles with internal audit teams",
    ],
  },
];

// ─── Market badge helper ───────────────────────────────────────────────────────

function MarketBadge({ market, size = "sm" }: { market: string; size?: "sm" | "xs" }) {
  const style = {
    color:            market === "KSA"  ? "var(--bs-ksa-text)"   : market === "India" ? "var(--bs-india-text)"  : "var(--bs-both-text)",
    background:       market === "KSA"  ? "var(--bs-ksa-bg)"     : market === "India" ? "var(--bs-india-bg)"    : "var(--bs-both-bg)",
    borderColor:      market === "KSA"  ? "var(--bs-ksa-border)" : market === "India" ? "var(--bs-india-border)": "var(--bs-both-border)",
  };
  return (
    <span
      className={`font-bold uppercase tracking-wide border rounded ${
        size === "xs" ? "text-[9px] px-2 py-0.5" : "text-[9px] px-2.5 py-1 tracking-[0.2em]"
      }`}
      style={style}
    >
      {market}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GlobalPresence() {
  return (
    <div className="bg-theme-base">

      <GlobalPresenceHeroSection />

      {/* ── STATS BAR ── */}
      <section className="bg-[#0d0d0e] border-b border-white/[0.07]">
        <div className="container-xl">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { value: "2",   label: "Active markets" },
              { value: "11",  label: "Strategic domains" },
              { value: "50+", label: "Enterprise rollouts" },
              { value: "1",   label: "Delivery standard" },
            ].map(({ value, label }, i) => (
              <div
                key={label}
                className={`px-6 sm:px-8 py-5 sm:py-6 ${i < 3 ? "border-r border-white/[0.07]" : ""}`}
              >
                <p className="text-2xl sm:text-3xl font-black text-white tabular-nums leading-none mb-1">
                  {value}
                </p>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.12em] font-medium">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKET DEEP DIVE ── */}
      <section className="bg-theme-base border-b border-theme-border">
        <div className="container-xl py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-5 h-[1px] bg-crimson shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
              Market Depth
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* KSA */}
            <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-amber-400/[0.07] to-transparent border border-amber-400/[0.16] overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-amber-400/40 via-amber-400/20 to-transparent" />
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-400/[0.04] rounded-full blur-3xl pointer-events-none" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-400/75 mb-2">
                Saudi Arabia
              </p>
              <h3 className="text-theme-text-primary text-2xl font-bold mb-2">
                Vision 2030 Execution
              </h3>
              <p className="text-theme-text-secondary text-sm leading-relaxed mb-6">
                Saudi Arabia's transformation agenda demands enterprise software
                that is bilingual, compliant, and architecturally aligned with
                the Kingdom's regulatory frameworks from day one.
              </p>
              <ul className="space-y-2.5 mb-6">
                {ksaPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 size={13} className="text-amber-400/60 shrink-0 mt-0.5" />
                    <span className="text-theme-text-muted text-xs leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-amber-400/[0.10]">
                <div className="flex items-center gap-2 text-theme-text-muted text-xs">
                  <MapPin size={11} /> Riyadh Office
                </div>
                <span className="text-theme-text-disabled">·</span>
                <div className="flex items-center gap-2 text-theme-text-muted text-xs">
                  <Phone size={11} /> +966 11 XXX XXXX
                </div>
                <span className="text-theme-text-disabled">·</span>
                <div className="flex items-center gap-2 text-theme-text-muted text-xs">
                  <Mail size={11} /> ksa@beatsoftware.com
                </div>
              </div>
            </div>

            {/* India */}
            <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-sky-400/[0.07] to-transparent border border-sky-400/[0.16] overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-sky-400/40 via-sky-400/20 to-transparent" />
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-sky-400/[0.04] rounded-full blur-3xl pointer-events-none" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-400/75 mb-2">
                India
              </p>
              <h3 className="text-theme-text-primary text-2xl font-bold mb-2">
                Scale-Grade Delivery
              </h3>
              <p className="text-theme-text-secondary text-sm leading-relaxed mb-6">
                India's high-volume enterprise environment requires platforms
                architected for millions of transactions, multi-state compliance,
                and continuous regulatory evolution.
              </p>
              <ul className="space-y-2.5 mb-6">
                {indiaPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 size={13} className="text-sky-400/60 shrink-0 mt-0.5" />
                    <span className="text-theme-text-muted text-xs leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-sky-400/[0.10]">
                <div className="flex items-center gap-2 text-theme-text-muted text-xs">
                  <MapPin size={11} /> Hyderabad Office
                </div>
                <span className="text-theme-text-disabled">·</span>
                <div className="flex items-center gap-2 text-theme-text-muted text-xs">
                  <Phone size={11} /> +91 40 XXXX XXXX
                </div>
                <span className="text-theme-text-disabled">·</span>
                <div className="flex items-center gap-2 text-theme-text-muted text-xs">
                  <Mail size={11} /> india@beatsoftware.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE MATRIX ── */}
      <section className="bg-theme-raised border-b border-theme-border">
        <div className="container-xl py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-5 h-[1px] bg-crimson shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
              Compliance Coverage
            </span>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-theme-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-theme-elevated">
                  <th className="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-[0.18em] whitespace-nowrap text-theme-text-muted">Framework</th>
                  <th className="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-[0.18em] whitespace-nowrap text-theme-text-muted">Market</th>
                  <th className="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-[0.18em] whitespace-nowrap text-theme-text-muted">Domains</th>
                  <th className="px-5 py-4 text-left text-[10px] font-bold uppercase tracking-[0.18em] text-theme-text-muted">Our Approach</th>
                </tr>
              </thead>
              <tbody>
                {complianceMatrix.map(({ framework, market, domains, approach }, i) => (
                  <tr
                    key={framework}
                    className={`border-t border-theme-border-muted transition-colors duration-150 hover:bg-theme-elevated ${
                      i % 2 === 0 ? "bg-theme-overlay" : "bg-theme-raised"
                    }`}
                  >
                    <td className="px-5 py-4 font-bold text-theme-text-primary text-sm whitespace-nowrap">{framework}</td>
                    <td className="px-5 py-4">
                      <MarketBadge market={market} size="xs" />
                    </td>
                    <td className="px-5 py-4 text-theme-text-muted text-xs">{domains}</td>
                    <td className="px-5 py-4 text-theme-text-muted text-xs leading-relaxed">{approach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CROSS-BORDER CAPABILITY ── */}
      <section className="bg-theme-base border-b border-theme-border">
        <div className="container-xl py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-5 h-[1px] bg-crimson shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
              Cross-Border Capability
            </span>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden"
            style={{ background: "var(--bs-border)" }}
          >
            {crossBorder.map(({ title, desc }) => (
              <div
                key={title}
                className="group bg-theme-raised px-8 py-10 hover:bg-theme-overlay transition-colors duration-200"
              >
                <div className="w-2 h-2 rounded-full bg-crimson/60 mb-6" />
                <h3 className="text-theme-text-primary font-bold text-base mb-3">{title}</h3>
                <p className="text-theme-text-muted text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ON-THE-GROUND DELIVERY ── */}
      <section className="bg-theme-overlay border-b border-theme-border">
        <div className="container-xl py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-5 h-[1px] bg-crimson shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
              On-the-Ground Delivery
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {deliveryModel.map(({ market, color, title, points }) => (
              <div
                key={market}
                className="group relative flex flex-col gap-5 p-8 rounded-2xl bg-theme-raised border border-theme-border [box-shadow:var(--bs-shadow-card)] hover:border-theme-border-accent hover:-translate-y-1 hover:[box-shadow:var(--bs-shadow-elevated)] transition-all duration-300 overflow-hidden"
              >
                <div
                  className="absolute top-0 inset-x-0 h-px pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, var(--bs-border), transparent)" }}
                />
                <div className="flex items-center gap-3">
                  <MarketBadge market={market} size="sm" />
                  <h3 className="text-theme-text-primary font-bold text-sm">{title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <CheckCircle2 size={13} className="text-crimson shrink-0 mt-0.5" />
                      <span className="text-theme-text-secondary text-sm leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-theme-base">
        <div className="container-xl py-20 sm:py-24">
          <div
            className="relative rounded-3xl p-[1px] overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(220,20,60,0.5) 0%, rgba(220,20,60,0.15) 40%, rgba(255,255,255,0.06) 100%)",
            }}
          >
            <div className="relative rounded-3xl bg-theme-raised px-8 py-10 sm:px-12 sm:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 overflow-hidden">
              <div className="absolute -top-40 -left-40 w-80 h-80 bg-crimson/[0.06] rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-crimson/40 via-crimson/20 to-transparent" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-5 h-[1px] bg-crimson" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
                    Get Started
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-theme-text-primary leading-tight mb-4">
                  Ready to operate in
                  <br />
                  KSA or India?
                </h3>
                <p className="text-theme-text-muted text-base leading-relaxed max-w-md">
                  Share your market context and operating constraints. We'll
                  frame a compliance-aware delivery blueprint for your domain.
                </p>
              </div>
              <div className="relative flex flex-col items-start lg:items-center gap-3 shrink-0">
                <Link to="/contact" className="btn-primary whitespace-nowrap">
                  Start a Domain Conversation <ArrowRight size={16} />
                </Link>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={11} className="text-theme-text-disabled" />
                  <p className="text-theme-text-disabled text-xs">NDA available on request</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
