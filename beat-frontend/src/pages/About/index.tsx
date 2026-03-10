import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Eye,
  Heart,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "2018", label: "Founded" },
  { value: "50+", label: "Enterprise rollouts" },
  { value: "11", label: "Strategic domains" },
  { value: "2", label: "Active markets" },
];

const howWeWork = [
  {
    icon: ShieldCheck,
    title: "Compliance-First Design",
    desc: "Every architecture decision starts with regulatory obligations — not as an afterthought. We build compliance into the foundation, not the finish.",
  },
  {
    icon: Building2,
    title: "Architecture Before Code",
    desc: "We spend disproportionate time on system design, data flow, and governance contracts before a single line of production code is written.",
  },
  {
    icon: Zap,
    title: "Delivery with Governance",
    desc: "Milestone-based execution with NDA-protected handoffs, executive dashboards, and board-ready reporting at every phase.",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision over speed",
    desc: "We'd rather take the time to get the architecture right than ship fast and rebuild. Enterprise systems demand it.",
  },
  {
    icon: Eye,
    title: "Transparency at every stage",
    desc: "Clients see exactly what's being built, why decisions were made, and what risks exist — without filtering.",
  },
  {
    icon: Award,
    title: "Domain depth, not generalism",
    desc: "We go deep in regulated industries. Each engagement builds on genuine domain knowledge, not surface-level templates.",
  },
  {
    icon: Heart,
    title: "Client success as the only metric",
    desc: "Our measure of success is operational certainty for the client — not lines of code, sprint velocity, or ticket count.",
  },
];

const leadership = [
  {
    name: "Mohammed Al-Rashid",
    role: "Chief Executive Officer",
    bio: "20 years delivering enterprise platforms across GCC financial services and public sector programs.",
    market: "KSA",
  },
  {
    name: "Priya Venkataraman",
    role: "Chief Technology Officer",
    bio: "Architect of compliance-native systems for regulated industries across India and Southeast Asia.",
    market: "India",
  },
  {
    name: "Khalid Al-Otaibi",
    role: "Head of KSA Delivery",
    bio: "Led Vision 2030-aligned programs across healthcare, infrastructure, and public sector in Saudi Arabia.",
    market: "KSA",
  },
  {
    name: "Arun Sharma",
    role: "Head of Engineering",
    bio: "Platform architect with deep expertise in high-volume transaction systems and enterprise data governance.",
    market: "India",
  },
];

const ksaPoints = [
  "SAMA · ZATCA · SDAIA · NCA ECC aligned",
  "Arabic + English delivery capability",
  "Finance, Healthcare, Govt, Infrastructure",
  "Vision 2030-aligned governance reporting",
];

const indiaPoints = [
  "RBI · RERA · GST · SEBI compliance",
  "High-volume transaction architecture",
  "Fintech, Manufacturing, Logistics, Education",
  "Multi-timezone enterprise delivery support",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div className="bg-charcoal-dark">
      {/* ── HERO ── */}
      <section className="relative w-full -mt-[72px] min-h-[100svh] bg-charcoal-dark text-white overflow-hidden flex flex-col">
        <div className="absolute inset-0 bg-[#0A0A0B]/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #DC143C 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-crimson/[0.08] rounded-full blur-[160px]" />
        <div className="absolute bottom-[20%] left-[-8%] w-[400px] h-[400px] bg-crimson/[0.05] rounded-full blur-[130px]" />

        <div className="container-xl relative z-10 flex-1 flex items-center py-36 sm:py-44">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-crimson/30 bg-crimson/[0.10] text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-8">
              <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
              Engineering Leadership · Est. 2018
            </div>

            <h1 className="font-extrabold leading-[0.93] tracking-tight mb-7">
              <span className="block text-[clamp(2.4rem,6.5vw,5rem)] text-white">
                We don't build software.
              </span>
              <span className="block text-[clamp(2.4rem,6.5vw,5rem)] text-white/35 mt-1">
                We build the systems
              </span>
              <span className="block text-[clamp(2.4rem,6.5vw,5rem)] bg-crimson-gradient bg-clip-text text-transparent mt-1">
                companies depend on.
              </span>
            </h1>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl mb-10 border-l-2 border-crimson/50 pl-5">
              Beat Software is a compliance-native engineering firm delivering
              mission-critical platforms across{" "}
              <span className="text-white font-semibold">
                Saudi Arabia and India
              </span>
              . We partner with enterprises, institutions, and government bodies
              to engineer the software backbone of regulated industries.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/portfolio" className="btn-primary">
                View Our Work <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-ghost">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 border-t border-white/[0.08] bg-black/30 backdrop-blur-md">
          <div className="container-xl">
            <div className="grid grid-cols-2 sm:grid-cols-4">
              {stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`px-6 sm:px-8 py-5 sm:py-6 ${i < stats.length - 1 ? "border-r border-white/[0.07]" : ""}`}
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
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="bg-beige border-b border-black/[0.08]">
        <div className="container-xl py-20 sm:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-5 h-[1px] bg-crimson" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
                Our Mission
              </span>
              <div className="w-5 h-[1px] bg-crimson" />
            </div>
            <blockquote className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-rhino leading-tight tracking-tight">
              "Our mission is operational certainty for industries that cannot
              afford failure."
            </blockquote>
            <p className="text-rhino/60 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl mx-auto">
              We exist to give enterprises in regulated sectors the software
              infrastructure they need to operate with precision, scale with
              confidence, and remain compliant without compromise.
            </p>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="bg-charcoal-dark border-b border-white/[0.07]">
        <div className="container-xl py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-5 h-[1px] bg-crimson shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
              How We Work
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {howWeWork.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-[#0d0d0e] px-8 py-10 hover:bg-[#0f0f11] transition-colors duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-crimson/[0.08] border border-crimson/[0.18] flex items-center justify-center mb-6 group-hover:bg-crimson/[0.14] group-hover:border-crimson/40 transition-all duration-300">
                  <Icon size={19} className="text-crimson" />
                </div>
                <h3 className="text-white font-bold text-base mb-3">{title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-beige border-b border-black/[0.08]">
        <div className="container-xl py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-5 h-[1px] bg-crimson shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
              Our Values
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex gap-5 p-6 rounded-2xl bg-white border border-black/[0.07] hover:border-crimson/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-crimson/[0.07] border border-crimson/[0.15] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-crimson/[0.12] transition-all duration-300">
                  <Icon size={17} className="text-crimson" />
                </div>
                <div>
                  <h3 className="text-rhino font-bold text-[0.95rem] mb-2">
                    {title}
                  </h3>
                  <p className="text-rhino/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="bg-charcoal-dark border-b border-white/[0.07]">
        <div className="container-xl py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-5 h-[1px] bg-crimson shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
              Leadership
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadership.map(({ name, role, bio, market }) => (
              <div
                key={name}
                className="group relative p-6 rounded-2xl bg-gradient-to-b from-[#1e2438] to-[#111520] border border-white/[0.10] hover:border-crimson/[0.25] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
                <div className="w-12 h-12 rounded-xl bg-crimson/[0.10] border border-crimson/[0.20] flex items-center justify-center mb-5">
                  <Users size={19} className="text-crimson" />
                </div>
                <span
                  className={`inline-block text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded mb-3 border ${
                    market === "KSA"
                      ? "text-amber-300/80 bg-amber-400/[0.07] border-amber-400/[0.18]"
                      : "text-sky-300/80 bg-sky-400/[0.07] border-sky-400/[0.18]"
                  }`}
                >
                  {market}
                </span>
                <h3 className="text-white font-bold text-sm mb-1">{name}</h3>
                <p className="text-crimson/70 text-[10px] font-semibold uppercase tracking-wider mb-3">
                  {role}
                </p>
                <p className="text-white/45 text-xs leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARKET PRESENCE ── */}
      <section className="bg-[#0d0d0e] border-b border-white/[0.07]">
        <div className="container-xl py-20 sm:py-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-5 h-[1px] bg-crimson shrink-0" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
              Market Presence
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-amber-400/[0.06] to-transparent border border-amber-400/[0.14] overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-amber-400/30 via-amber-400/15 to-transparent" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-amber-400/70 mb-2">
                Saudi Arabia
              </p>
              <h3 className="text-white text-xl font-bold mb-4">
                Vision 2030 Execution Partner
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                Our Riyadh-based team leads regional engagement, in-country
                delivery, and compliance alignment across SAMA, ZATCA, SDAIA,
                and NCA ECC frameworks.
              </p>
              <ul className="space-y-2">
                {ksaPoints.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-white/55 text-xs"
                  >
                    <CheckCircle2
                      size={12}
                      className="text-amber-400/60 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-sky-400/[0.06] to-transparent border border-sky-400/[0.14] overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-sky-400/30 via-sky-400/15 to-transparent" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-sky-400/70 mb-2">
                India
              </p>
              <h3 className="text-white text-xl font-bold mb-4">
                Scale-Grade Engineering Hub
              </h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                Our Hyderabad engineering centre drives architecture, platform
                delivery, and managed services — designed for high-volume,
                multi-tenant enterprise environments.
              </p>
              <ul className="space-y-2">
                {indiaPoints.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-white/55 text-xs"
                  >
                    <CheckCircle2
                      size={12}
                      className="text-sky-400/60 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal-dark">
        <div className="container-xl py-20 sm:py-24">
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
                    Work With Us
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                  Ready to build with us?
                </h3>
                <p className="text-white/45 text-base leading-relaxed max-w-md">
                  Tell us about your domain, your compliance obligations, and
                  your operating scale. We'll frame the right architecture
                  conversation.
                </p>
              </div>
              <div className="relative flex flex-col items-start lg:items-center gap-3 shrink-0">
                <Link to="/contact" className="btn-primary whitespace-nowrap">
                  Start a Conversation <ArrowRight size={16} />
                </Link>
                <Link to="/portfolio" className="btn-ghost whitespace-nowrap">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
