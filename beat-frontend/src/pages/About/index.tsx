import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Eye,
  Heart,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Slider from "../../components/Slider";

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
    desc: "Every architecture decision starts with regulatory obligations, not as an afterthought. We build compliance into the foundation, not the finish.",
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
    desc: "We would rather take the time to get the architecture right than ship fast and rebuild. Enterprise systems demand it.",
  },
  {
    icon: Eye,
    title: "Transparency at every stage",
    desc: "Clients see exactly what is being built, why decisions were made, and what risks exist without filtering.",
  },
  {
    icon: Award,
    title: "Domain depth, not generalism",
    desc: "We go deep in regulated industries. Each engagement builds on genuine domain knowledge, not surface-level templates.",
  },
  {
    icon: Heart,
    title: "Client success as the only metric",
    desc: "Our measure of success is operational certainty for the client, not lines of code, sprint velocity, or ticket count.",
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
  "SAMA, ZATCA, SDAIA, and NCA ECC aligned",
  "Arabic and English delivery capability",
  "Finance, healthcare, government, and infrastructure programs",
  "Vision 2030-aligned governance reporting",
];

const indiaPoints = [
  "RBI, RERA, GST, and SEBI compliance context",
  "High-volume transaction architecture",
  "Fintech, manufacturing, logistics, and education delivery",
  "Multi-timezone enterprise support",
];

function MarketBadge({ market }: { market: string }) {
  const style = {
    color: market === "KSA" ? "var(--bs-ksa-text)" : "var(--bs-india-text)",
    background: market === "KSA" ? "var(--bs-ksa-bg)" : "var(--bs-india-bg)",
    borderColor:
      market === "KSA" ? "var(--bs-ksa-border)" : "var(--bs-india-border)",
  };

  return (
    <span
      className="inline-flex items-center rounded border px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.2em]"
      style={style}
    >
      {market}
    </span>
  );
}

export default function About() {
  return (
    <div className="bg-theme-base">
      <section className="relative w-full -mt-[72px] h-[100svh] min-h-[620px] bg-charcoal-dark text-white overflow-hidden flex flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
          style={{
            backgroundImage: "url('assets/images/industry/giga.jpg')",
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
                <Sparkles size={12} />
                Built for regulated industries
              </div>

              <h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[0.94] tracking-tight text-white">
                Engineering systems for when failure is not an option.
                <span className="mt-1 block bg-crimson-gradient bg-clip-text text-transparent pb-1">
                  Strategy, compliance, and delivery.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                We build compliance-native, mission-critical platforms for
                enterprises across{" "}
                <span className="font-semibold text-white">
                  Saudi Arabia and India
                </span>
                .
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  to="/portfolio"
                  className="btn-primary shadow-glow hover:shadow-glow-hover transition-shadow"
                >
                  View Our Work <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-ghost">
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0e] border-t border-white/[0.07]">
        <div className="container-xl">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`px-6 sm:px-8 py-5 sm:py-6 ${
                  i < stats.length - 1 ? "border-r border-white/[0.07]" : ""
                }`}
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

      <section className="border-b border-theme-border bg-theme-base">
        <div className="container-xl py-20 sm:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="h-px w-5 bg-crimson" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
                Our Mission
              </span>
              <div className="h-px w-5 bg-crimson" />
            </div>
            <blockquote className="text-[clamp(1.75rem,3.6vw,3rem)] font-bold leading-tight tracking-tight text-theme-text-primary">
              "Our mission is operational certainty for industries that cannot
              afford failure."
            </blockquote>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-theme-text-secondary sm:text-lg">
              We exist to give enterprises in regulated sectors the software
              infrastructure they need to operate with precision, scale with
              confidence, and remain compliant without compromise.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-theme-border bg-theme-overlay">
        <div className="container-xl py-20 sm:py-24">
          <div className="mb-10 flex items-center gap-3">
            <div className="h-px w-5 shrink-0 bg-crimson" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
              How We Work
            </span>
          </div>
          <Slider className="md:grid md:grid-cols-3 md:gap-px md:overflow-hidden md:rounded-2xl">
            {howWeWork.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-theme-raised">
                <div className="group h-full border border-theme-border px-8 py-10 transition-all duration-300 hover:border-theme-border-accent hover:bg-theme-base hover:[box-shadow:var(--bs-shadow-card)] md:border-0">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-crimson/20 bg-crimson/10 transition-all duration-300 group-hover:border-crimson/35 group-hover:bg-crimson/15">
                    <Icon size={19} className="text-crimson" />
                  </div>
                  <h3 className="mb-3 text-base font-bold text-theme-text-primary">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-theme-text-secondary">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="border-b border-theme-border bg-theme-base">
        <div className="container-xl py-20 sm:py-24">
          <div className="mb-10 flex items-center gap-3">
            <div className="h-px w-5 shrink-0 bg-crimson" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
              Our Values
            </span>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group flex gap-5 rounded-2xl border border-theme-border bg-theme-raised p-6 transition-all duration-300 hover:-translate-y-1 hover:border-theme-border-accent hover:[box-shadow:var(--bs-shadow-card)]"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-crimson/15 bg-crimson/10 transition-all duration-300 group-hover:border-crimson/30 group-hover:bg-crimson/15">
                  <Icon size={17} className="text-crimson" />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-bold text-theme-text-primary">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-theme-text-secondary">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-theme-border bg-theme-overlay">
        <div className="container-xl py-20 sm:py-24">
          <div className="mb-10 flex items-center gap-3">
            <div className="h-px w-5 shrink-0 bg-crimson" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
              Leadership
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map(({ name, role, bio, market }) => (
              <div
                key={name}
                className="group relative overflow-hidden rounded-2xl border border-theme-border bg-theme-raised p-6 transition-all duration-300 hover:-translate-y-1 hover:border-theme-border-accent hover:[box-shadow:var(--bs-shadow-elevated)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-crimson/20 bg-crimson/10">
                  <Users size={19} className="text-crimson" />
                </div>
                <div className="mb-3">
                  <MarketBadge market={market} />
                </div>
                <h3 className="mb-1 text-sm font-bold text-theme-text-primary">
                  {name}
                </h3>
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-theme-text-accent">
                  {role}
                </p>
                <p className="text-xs leading-relaxed text-theme-text-secondary">
                  {bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-theme-border bg-theme-base">
        <div className="container-xl py-20 sm:py-24">
          <div className="mb-10 flex items-center gap-3">
            <div className="h-px w-5 shrink-0 bg-crimson" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
              Market Presence
            </span>
          </div>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--bs-ksa-border)] bg-gradient-to-br from-amber-400/[0.08] to-transparent p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-amber-400/35 via-amber-400/15 to-transparent" />
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--bs-ksa-text)]">
                Saudi Arabia
              </p>
              <h3 className="mb-4 text-xl font-bold text-theme-text-primary">
                Vision 2030 Execution Partner
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-theme-text-secondary">
                Our Riyadh-based team leads regional engagement, in-country
                delivery, and compliance alignment across SAMA, ZATCA, SDAIA,
                and NCA ECC frameworks.
              </p>
              <ul className="space-y-2">
                {ksaPoints.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs text-theme-text-secondary"
                  >
                    <CheckCircle2
                      size={12}
                      className="mt-0.5 shrink-0 text-[var(--bs-ksa-text)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-[var(--bs-india-border)] bg-gradient-to-br from-sky-400/[0.08] to-transparent p-8">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-sky-400/35 via-sky-400/15 to-transparent" />
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--bs-india-text)]">
                India
              </p>
              <h3 className="mb-4 text-xl font-bold text-theme-text-primary">
                Scale-Grade Engineering Hub
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-theme-text-secondary">
                Our Hyderabad engineering centre drives architecture, platform
                delivery, and managed services designed for high-volume,
                multi-tenant enterprise environments.
              </p>
              <ul className="space-y-2">
                {indiaPoints.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs text-theme-text-secondary"
                  >
                    <CheckCircle2
                      size={12}
                      className="mt-0.5 shrink-0 text-[var(--bs-india-text)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-theme-base">
        <div className="container-xl py-20 sm:py-24">
          <div
            className="relative overflow-hidden rounded-3xl p-[1px]"
            style={{
              background:
                "linear-gradient(135deg, rgba(220,20,60,0.5) 0%, rgba(220,20,60,0.15) 40%, rgba(11,18,34,0.08) 100%)",
            }}
          >
            <div className="relative flex flex-col gap-8 overflow-hidden rounded-3xl bg-theme-raised px-8 py-10 sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
              <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-crimson/10 blur-[100px] pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-crimson/40 via-crimson/20 to-transparent" />
              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-px w-5 bg-crimson" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-crimson">
                    Work With Us
                  </span>
                </div>
                <h3 className="mb-4 text-3xl font-bold leading-tight text-theme-text-primary sm:text-4xl">
                  Ready to build with us?
                </h3>
                <p className="max-w-md text-base leading-relaxed text-theme-text-secondary">
                  Tell us about your domain, your compliance obligations, and
                  your operating scale. We will frame the right architecture
                  conversation.
                </p>
              </div>
              <div className="relative flex shrink-0 flex-col items-start gap-3 lg:items-center">
                <Link to="/contact" className="btn-primary whitespace-nowrap">
                  Start a Conversation <ArrowRight size={16} />
                </Link>
                <Link to="/portfolio" className="btn-outline whitespace-nowrap">
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
