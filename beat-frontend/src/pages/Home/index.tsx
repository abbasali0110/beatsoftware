import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Check,
  Clock,
  Cloud,
  Code2,
  Cog,
  Download,
  GitBranch,
  Globe2,
  Handshake,
  Landmark,
  Layers3,
  MapPin,
  Network,
  PhoneCall,
  PlugZap,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { carouselSlides, testimonials } from "../../data/home";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const highlights = [
  {
    value: "500+",
    label: "Enterprise Projects Won — And Kept",
    sub: "73% are repeat-engagement clients",
    icon: Briefcase,
  },
  {
    value: "1,000+",
    label: "On-Budget Deliveries",
    sub: "94% milestone adherence rate",
    icon: BadgeCheck,
  },
  {
    value: "10+",
    label: "Years Without a Failed Engagement",
    sub: "Zero catastrophic delivery failures",
    icon: Clock,
  },
  {
    value: "2",
    label: "Active Markets — India & KSA",
    sub: "On-site client support in both",
    icon: Globe2,
  },
];

const clientTypes = [
  { type: "Fleet Operator", region: "KSA" },
  { type: "Education Ministry", region: "India" },
  { type: "Hospitality Group", region: "KSA" },
  { type: "Construction Firm", region: "India" },
  { type: "Retail Chain", region: "KSA" },
  { type: "Healthcare Provider", region: "India" },
  { type: "Government Body", region: "KSA" },
  { type: "Logistics Group", region: "India" },
];

const consultingPillars = [
  {
    title: "The Pre-Build Diagnosis",
    desc: "Our Discovery Sprint (2–3 weeks) maps your business workflows, identifies system constraints, and documents every assumption before we commit to a single line of architecture. You receive a written Problem Statement — the single source of truth for everything that follows.",
    icon: Target,
  },
  {
    title: "The Blueprint Before the Build",
    desc: "We produce a Technology Blueprint: system architecture diagrams, integration maps, data flow models, and a phased delivery roadmap with go/no-go milestones baked in. If we discover the solution is simpler than expected, we tell you — even if it costs us revenue.",
    icon: GitBranch,
  },
  {
    title: "The Metrics We're Held To",
    desc: "Before kick-off, we co-define 3–5 measurable success criteria with your leadership. Monthly executive reports track actuals vs. agreed metrics. If we're off-track, you know at week 4 — not month 9.",
    icon: TrendingUp,
  },
];

const coreServices = [
  {
    title: "Digital Modernization & Enterprise Build",
    desc: "Whether you're replacing a 10-year-old system or building a new one, we engineer it to handle tomorrow's load. Architecture-first, performance-validated, governance-ready — from discovery to deployment.",
    icon: Layers3,
    img: "assets/images/home/home11-lg.jpg",
  },
  {
    title: "Cloud Migration & DevOps Acceleration",
    desc: "Still running on servers from 2014? We migrate, containerize, and automate — cutting deployment time by up to 70% and infrastructure cost by up to 40% within six months of engagement.",
    icon: Cloud,
    img: "assets/images/home/home12-lg.jpg",
  },
  {
    title: "Monolith Decomposition & Service Mesh",
    desc: "A monolith that's working today is a liability compounding interest. We break it into independently deployable services — with zero-downtime migration strategy and a release cycle your team actually controls.",
    icon: Network,
    img: "assets/images/home/home13-lg.jpg",
  },
  {
    title: "Enterprise Integration & API Ecosystem",
    desc: "Your ERP doesn't talk to your CRM. Your CRM doesn't talk to your support desk. We build the integration layer that turns disconnected systems into a single operational intelligence platform.",
    icon: PlugZap,
    img: "assets/images/home/home14-lg.jpg",
  },
  {
    title: "SaaS Product Engineering & Launch",
    desc: "We've taken products from wireframe to paying customers in under 120 days. Multi-tenant, usage-metered, subscription-ready — with investor-grade architecture documentation included.",
    icon: Workflow,
    img: "assets/images/home/home8.jpg",
  },
  {
    title: "Mission-Critical Support & AMC Programs",
    desc: "When your system goes down at 2 AM before a government deadline, you need a partner with a 4-hour response SLA — not a ticketing queue. Our AMC clients average 99.7% uptime across 36 consecutive months.",
    icon: Cog,
    img: "assets/images/home/home9.jpg",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Named Agile Squads — You Know Every Person",
    desc: "You'll have a lead architect, tech lead, 2–3 engineers, a QA specialist, and a delivery manager — named individuals, not role placeholders. Your sprint reviews are decisions, not presentations.",
    icon: Zap,
  },
  {
    number: "02",
    title: "DevOps-Native from Sprint One",
    desc: "We don't retrofit DevOps at the end. Automated test pipelines, infrastructure as code, and zero-downtime deployments are baked into our delivery contract. Week 1, not week 16.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Your Team — Locked In for the Engagement",
    desc: "Team continuity is a contractual commitment. The engineer who wrote your authentication layer in month one is the same person handling the edge case in month twelve.",
    icon: UserCheck,
  },
];

const flagshipSolutions = [
  {
    title: "Travel & Booking Systems",
    microCopy: "Multi-currency · Multi-region · Multi-channel",
    desc: "Reduce booking drop-off and operational errors. End-to-end reservation systems with real-time inventory, dynamic pricing hooks, and agent workflow automation — built for operators at scale.",
    img: "assets/images/home/travel-n-booking.jpg",
    outcome: "60% error drop · 2K+ txns/day",
  },
  {
    title: "Fleet Management",
    microCopy: "GPS · Predictive Maintenance · Fuel Analytics",
    desc: "Know where every asset is. Control every cost. Real-time dispatch, predictive maintenance scheduling, and fuel-efficiency reporting — one screen, one source of truth for 500+ vehicle fleets.",
    img: "assets/images/home/fleet-mgmt.jpg",
    outcome: "40% OpEx cut · 500 vehicles",
  },
  {
    title: "Restaurant Management",
    microCopy: "POS · Kitchen Display · Branch P&L",
    desc: "Run multiple branches like one tight operation. Centralized menu management, POS integration, kitchen display systems, and branch-level P&L visibility — from a single dashboard.",
    img: "assets/images/home/restaurant-mgmt.jpg",
    outcome: "35% faster throughput · 20+ branches",
  },
  {
    title: "HR & Manpower ERP",
    microCopy: "Biometric · Payroll · Compliance · Onboarding",
    desc: "From hire to retire — with zero paperwork. Full-cycle HR automation: onboarding, biometric attendance, payroll computation, and compliance-ready document management for 1,200+ employee headcounts.",
    img: "assets/images/home/hr-manpower.jpg",
    outcome: "Zero payroll errors · 1,200+ staff",
  },
  {
    title: "Educational ERP",
    microCopy: "Admissions · Timetabling · Parent Comms",
    desc: "Give every stakeholder a single source of truth. Admissions, timetables, attendance, grades, and parent communications unified in one governed platform. Deployed in 3 institutions.",
    img: "assets/images/home/educational-erp.jpg",
    outcome: "100% paperless · 3 institutions",
  },
  {
    title: "Construction ERP",
    microCopy: "BOQ · Subcontractors · Budget vs. Actual",
    desc: "Keep your project on time and on budget. BOQ tracking, subcontractor management, material procurement, and real-time budget vs. actual dashboards — deployed on $18M+ construction projects.",
    img: "assets/images/home/constructionerp.jpg",
    outcome: "$18M+ projects managed",
  },
];

const impactMetrics = [
  {
    value: "40%",
    label: "Reduction in fleet OpEx in Year 1",
    context: "Saudi logistics operator · 2023",
  },
  {
    value: "$2.4M",
    label: "Annual cost savings unlocked",
    context: "Manufacturing ERP · post-modernization",
  },
  {
    value: "3×",
    label: "Faster release velocity",
    context: "E-commerce client · DevOps onboarding",
  },
  {
    value: "99.7%",
    label: "Uptime maintained",
    context: "Across 14 AMC clients · 36 months",
  },
];

const valuePillars = [
  {
    title: 'No More "We\'ll Update You Next Week"',
    desc: "You get a project dashboard, weekly burn-down report, and a RAID log your PMO can actually use. Our executive briefing format was built to be sent directly to your board — no translation required.",
    icon: Landmark,
  },
  {
    title: "Secure by Architecture, Not Afterthought",
    desc: "We include a Security Architecture Review in every project proposal. OWASP Top 10 is a checklist we close, not a document we file. Every system we build can pass a third-party pen test within 30 days of delivery.",
    icon: ShieldCheck,
  },
  {
    title: "We Know the Regulations You're Operating Under",
    desc: "Our KSA delivery team has worked alongside Saudi ministries, private sector enterprises, and Vision 2030 implementation bodies. We don't need onboarding on the local context — we bring it to week one.",
    icon: Handshake,
  },
  {
    title: "94% Milestone Adherence. Not a Claim. A Record.",
    desc: "Our delivery governance process was built from 10 years of failure analysis — every missed deadline we've ever had is documented, root-caused, and built into our current methodology as a prevention protocol.",
    icon: BadgeCheck,
  },
];

const techStack = [
  { label: "React", group: "Frontend" },
  { label: "Angular", group: "Frontend" },
  { label: "Next.js", group: "Frontend" },
  { label: "Vue.js", group: "Frontend" },
  { label: "TypeScript", group: "Frontend" },
  { label: "Node.js", group: "Backend" },
  { label: ".NET Core", group: "Backend" },
  { label: "Python", group: "Backend" },
  { label: "Java Spring", group: "Backend" },
  { label: "AWS", group: "Cloud" },
  { label: "Azure", group: "Cloud" },
  { label: "GCP", group: "Cloud" },
  { label: "Docker", group: "DevOps" },
  { label: "Kubernetes", group: "DevOps" },
  { label: "GitHub Actions", group: "DevOps" },
  { label: "PostgreSQL", group: "Data" },
  { label: "MongoDB", group: "Data" },
  { label: "Redis", group: "Data" },
  { label: "React Native", group: "Mobile" },
  { label: "Flutter", group: "Mobile" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <section className="bg-white">
      <HeroSection />
      <ClientLogoStrip />
      <HighlightsBar />
      <CorporateOverview />
      <StrategicConsultingSection />
      <ServicesSnapshot />
      <DeliveryEngineSection />
      <SolutionsSnapshot />
      <SocialProofSection />
      <WhyBeatSection />
      <TechStackSection />
      <TestimonialsSection />
      <GlobalPresenceSection />
      <FinalCallToAction />
    </section>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <div className="w-full -mt-[72px] brand-hero-bg">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        centeredSlides
        loop
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        style={{ height: "100svh", minHeight: "620px" }}
      >
        {carouselSlides.map((slide, i) => (
          <SwiperSlide key={i} className="relative overflow-hidden">
            <img
              src={slide.imgUrl}
              alt={slide.heading}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 image-overlay" />
            <div className="absolute inset-0 brand-grid-overlay" />

            <div className="relative z-10 h-full flex items-end pb-14 sm:pb-16">
              <div className="w-full pl-8 sm:pl-14 lg:pl-20 xl:pl-28 pr-4 sm:pr-6 lg:pr-8">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6 text-xs font-semibold tracking-[0.13em] text-white bg-white/10 border border-white/20 backdrop-blur-sm">
                    <Sparkles size={14} className="text-crimson" />
                    {slide.subheading ?? "Enterprise Software Partner"}
                  </div>

                  <h1 className="carousel-p text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[0.94] text-white mb-5 whitespace-pre-line">
                    {slide.heading}
                  </h1>

                  <p className="carousel-cta text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed mb-8">
                    {slide.desc}
                  </p>

                  <div className="carousel-cta flex flex-wrap items-center gap-3 sm:gap-4">
                    <Link
                      to={slide.ctaLink ?? "/contact"}
                      className="btn-primary btn-lg"
                    >
                      {slide.ctaText ?? "Request Corporate Consultation"}{" "}
                      <ArrowRight size={18} />
                    </Link>
                    <Link
                      to={slide.ctaSecondaryLink ?? "/portfolio"}
                      className="btn-ghost btn-lg"
                    >
                      {slide.ctaSecondaryText ?? "View Case Studies"}
                    </Link>
                  </div>

                  <p className="carousel-cta flex items-center gap-1.5 text-white/40 text-xs mt-5">
                    <span>🔒</span>
                    NDA signed before session one · No commitment required
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// ─── CLIENT LOGO STRIP ────────────────────────────────────────────────────────

function ClientLogoStrip() {
  return (
    <div className="bg-white border-b border-surface-100 py-6">
      <div className="container-xl">
        <p className="text-center text-surface-400 text-2xs uppercase tracking-[0.2em] font-bold mb-4">
          Trusted by enterprises across India & Saudi Arabia
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-3">
          {clientTypes.map(({ type, region }) => (
            <div
              key={`${type}-${region}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-50 border border-surface-200 hover:border-crimson/30 transition-colors duration-200"
            >
              <span className="text-xs text-surface-500 font-medium">
                {type}
              </span>
              <span className="w-px h-3 bg-surface-200" />
              <span className="text-xs font-bold text-crimson/70">
                {region}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-surface-300 text-xs">
          Client names withheld under signed NDAs · Reference calls available on
          request
        </p>
      </div>
    </div>
  );
}

// ─── HIGHLIGHTS BAR ───────────────────────────────────────────────────────────

function HighlightsBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("stats-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-charcoal border-t border-b border-white/10">
      <div ref={containerRef} className="container-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {highlights.map(({ value, label, sub, icon: Icon }) => (
            <div key={label} className="stat-item px-6 py-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-crimson/15 border border-crimson/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-crimson" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white leading-none mb-0.5">
                    {value}
                  </p>
                  <p className="text-white/80 text-xs font-semibold mb-0.5">
                    {label}
                  </p>
                  <p className="text-surface-400 text-xs">{sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-surface-600 text-xs py-2 border-t border-white/5 italic">
          Verified through signed client NDAs and delivery governance records.
          Auditable on request.
        </p>
      </div>
    </div>
  );
}

// ─── CORPORATE OVERVIEW ───────────────────────────────────────────────────────

function CorporateOverview() {
  return (
    <div className="section-pad bg-surface-50">
      <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="section-tag">
            The Problem With Most Software Vendors
          </span>
          <h2 className="section-title">
            Most Agencies Deliver Code.{" "}
            <span className="text-crimson">We Deliver Outcomes.</span>
          </h2>
          <p className="section-desc mb-4">
            The typical software vendor optimizes for billable hours, not your
            business result. They scope a project, deliver it, collect payment —
            and leave you to figure out why adoption is low, performance is
            degraded, and the next feature costs triple the estimate.
          </p>
          <p className="text-surface-500 text-base leading-relaxed mb-6">
            We built Beat around a single operating principle:{" "}
            <strong className="text-charcoal">
              if it doesn't move your business forward, it doesn't leave our
              sprint.
            </strong>{" "}
            Every engagement starts with a business problem, not a technology
            decision. Every delivery is measured against the outcome we agreed
            on in week one.
          </p>
          <Link to="/contact" className="btn-ghost-crimson">
            <Download size={15} />
            Download Our Delivery Standards Brief
          </Link>
        </div>

        <div className="card p-7 sm:p-8">
          <h3 className="text-xl font-bold text-charcoal mb-5">
            Our Four Non-Negotiables
          </h3>
          <ul className="space-y-4">
            {[
              "Your roadmap ties to your P&L — if it doesn't, we rebuild it before we build anything else",
              "You get RAID logs, burn-down reports, and a direct line to the delivery lead — not a ticket queue",
              "Our SLA doesn't end at go-live. Most of our long-term clients started with a single project",
              "On-site workshops, Arabic-language stakeholder comms, and KSA regulatory alignment built-in",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-crimson/10 border border-crimson/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={11} className="text-crimson" />
                </div>
                <span className="text-surface-600 text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── STRATEGIC CONSULTING ─────────────────────────────────────────────────────

function StrategicConsultingSection() {
  return (
    <div className="section-pad bg-white">
      <div className="container-xl">
        <div className="max-w-2xl mb-10">
          <span className="section-tag">
            Why Projects Fail Before a Line Is Written
          </span>
          <h2 className="section-title">
            Most Projects Are Doomed by Bad Discovery.{" "}
            <span className="text-crimson">Ours Aren't.</span>
          </h2>
          <p className="section-desc">
            68% of software projects fail due to unclear requirements and
            architecture decisions made under time pressure. Our structured
            consulting phase eliminates both risks — before your budget is at
            stake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {consultingPillars.map(({ title, desc, icon: Icon }) => (
            <article
              key={title}
              className="card p-6 group hover:border-crimson/30"
            >
              <div className="w-12 h-12 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-5 group-hover:bg-crimson group-hover:border-crimson transition-all duration-300">
                <Icon
                  size={22}
                  className="text-crimson group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-charcoal mb-2">{title}</h3>
              <p className="text-surface-500 text-sm leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary">
            Book a Zero-Cost Discovery Workshop <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn-outline">
            <Download size={15} />
            Download: How We Run a Pre-Build Audit
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── SERVICES SNAPSHOT ────────────────────────────────────────────────────────

function ServicesSnapshot() {
  return (
    <div className="section-pad bg-surface-50">
      <div className="container-xl">
        <div className="max-w-2xl mb-10">
          <span className="section-tag">
            Six Ways We Eliminate Technology Risk
          </span>
          <h2 className="section-title">
            The Full Stack of What Your Business Needs.{" "}
            <span className="text-crimson">
              No Subcontracting. No Surprises.
            </span>
          </h2>
          <p className="section-desc">
            Every service below is delivered in-house, under one contract, with
            one accountable delivery lead. We don't stitch together freelancers
            and call it a team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {coreServices.map(({ title, desc, icon: Icon, img }) => (
            <article key={title} className="card p-0 overflow-hidden group">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 image-overlay" />
                <div className="absolute left-4 bottom-4 w-10 h-10 rounded-xl bg-white/90 border border-white/80 flex items-center justify-center">
                  <Icon size={18} className="text-crimson" />
                </div>
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {title}
                </h3>
                <p className="text-surface-500 text-sm leading-relaxed flex-1">
                  {desc}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-crimson text-xs font-bold mt-4 hover:gap-2.5 transition-all duration-200"
                >
                  Discuss This Service <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <Link to="/services" className="btn-ghost-crimson">
          Compare Our Service Tiers <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

// ─── DELIVERY ENGINE ──────────────────────────────────────────────────────────

function DeliveryEngineSection() {
  return (
    <div className="section-pad bg-charcoal">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-tag">
            Why 94% of Our Projects Finish on Time
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Operating System Behind{" "}
            <span className="text-crimson">Every Beat Engagement.</span>
          </h2>
          <p className="text-surface-400 text-base sm:text-lg">
            We've codified 10 years of delivery learnings into a repeatable
            operating model. Three pillars. Zero freelancers. One accountable
            team.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1.25rem)] right-[calc(16.67%+1.25rem)] h-px bg-gradient-to-r from-crimson/20 via-crimson/60 to-crimson/20" />

          {deliverySteps.map(({ number, title, desc, icon: Icon }) => (
            <article key={number} className="card-dark p-6 relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl font-extrabold text-crimson/20 leading-none font-display">
                  {number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-crimson/15 border border-crimson/30 flex items-center justify-center">
                  <Icon size={18} className="text-crimson" />
                </div>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
              <p className="text-surface-400 text-sm leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/portfolio" className="btn-primary">
            See How This Delivered 3× Faster Releases <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn-ghost">
            Get a Custom Delivery Proposal
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── SOLUTIONS SNAPSHOT ───────────────────────────────────────────────────────

function SolutionsSnapshot() {
  return (
    <div className="section-pad bg-white">
      <div className="container-xl">
        <div className="max-w-2xl mb-10">
          <span className="section-tag">
            Proven Platforms. Measurable Outcomes.
          </span>
          <h2 className="section-title">
            Don't Pay to Solve Problems{" "}
            <span className="text-crimson">We've Already Solved.</span>
          </h2>
          <p className="section-desc">
            We've shipped production-grade systems in 6 high-complexity
            verticals. Your domain's regulations, edge cases, and operational
            workflows are already in our muscle memory — which means faster
            delivery and lower risk for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {flagshipSolutions.map(({ title, microCopy, desc, img, outcome }) => (
            <article key={title} className="card p-0 overflow-hidden group">
              <div className="relative h-44 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 image-overlay" />
                <div className="absolute left-4 bottom-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-crimson text-white text-xs font-semibold">
                    <TrendingUp size={11} />
                    {outcome}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-crimson text-2xs font-bold uppercase tracking-[0.1em] mb-1.5">
                  {microCopy}
                </p>
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {title}
                </h3>
                <p className="text-surface-500 text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to="/portfolio" className="btn-primary">
            See How We Cut Fleet OpEx by 40% <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn-outline">
            <Download size={15} />
            Download Our Domain Solution Profiles
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── SOCIAL PROOF ─────────────────────────────────────────────────────────────

function SocialProofSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>(".metric-card").forEach(
            (card, i) => {
              card.style.animationDelay = `${i * 100}ms`;
              card.classList.add("animate-fade-in-up");
            },
          );
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="section-pad bg-surface-50">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-tag">
            Numbers We're Contractually Accountable For
          </span>
          <h2 className="section-title">
            Real Engagements.{" "}
            <span className="text-crimson">Signed Off. Auditable.</span>
          </h2>
          <p className="section-desc">
            These aren't from a marketing survey. They're from delivery records,
            post-project retrospectives, and client sign-offs. We'll show you
            the methodology on request.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {impactMetrics.map(({ value, label, context }) => (
            <div
              key={value}
              className="metric-card opacity-0 card p-6 text-center"
            >
              <p className="text-4xl sm:text-5xl font-extrabold text-crimson font-display mb-2">
                {value}
              </p>
              <p className="text-charcoal text-sm font-semibold mb-1">
                {label}
              </p>
              <p className="text-surface-400 text-xs">{context}</p>
            </div>
          ))}
        </div>

        {/* Featured case study banner */}
        <div className="rounded-2xl border border-crimson/20 bg-white p-6 sm:p-8 mb-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <span className="badge-crimson text-xs mb-3 inline-block">
                Featured Case Study
              </span>
              <p className="text-charcoal font-bold text-lg sm:text-xl mb-1 leading-snug">
                From 47 Hours to 4: How a KSA Logistics Company Reduced Incident
                Response Time — and Saved $2.4M in Year One.
              </p>
              <p className="text-surface-500 text-sm">
                Fleet management · Saudi Arabia · 500+ vehicles · Full case
                study with architecture breakdown and ROI methodology.
              </p>
            </div>
            <Link to="/portfolio" className="btn-primary shrink-0">
              Read Full Case Study <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to="/portfolio" className="btn-ghost-crimson">
            View All Case Studies <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn-outline">
            <Download size={15} />
            Download Our Impact Report 2024
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── WHY BEAT ─────────────────────────────────────────────────────────────────

function WhyBeatSection() {
  return (
    <div className="section-pad bg-charcoal">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="section-tag">
            The Four Reasons Our Clients Don't Shop Around
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            73% of Our Clients Are{" "}
            <span className="text-crimson">Repeat Engagements.</span>
          </h2>
          <p className="text-surface-400 text-base sm:text-lg">
            The easiest indicator of a quality vendor isn't their pitch deck —
            it's their repeat rate. Here's what drives ours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {valuePillars.map(({ title, desc, icon: Icon }) => (
            <article key={title} className="card-dark p-6">
              <div className="w-11 h-11 rounded-xl bg-crimson/15 border border-crimson/30 flex items-center justify-center mb-4">
                <Icon size={20} className="text-crimson" />
              </div>
              <h3 className="text-white text-base font-bold mb-2">{title}</h3>
              <p className="text-surface-400 text-sm leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link to="/contact" className="btn-primary btn-lg">
            <PhoneCall size={16} />
            Request a Reference Call With an Existing Client
          </Link>
          <p className="text-surface-500 text-xs mt-3">
            We'll connect you with a client in your sector. NDA optional.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── TECH STACK ───────────────────────────────────────────────────────────────

function TechStackSection() {
  const marqueeItems = [...techStack, ...techStack];

  return (
    <div className="section-pad bg-surface-50">
      <div className="container-xl mb-10">
        <span className="section-tag">
          Technology Choices We'll Justify, Not Just List
        </span>
        <h2 className="section-title">
          We Choose Technology Based on Your Problem.{" "}
          <span className="text-crimson">Not Our Preference.</span>
        </h2>
        <p className="section-desc max-w-2xl">
          Every technology in our stack was selected because it solves a
          specific class of business problem reliably at enterprise scale. We'll
          explain every architectural decision in plain language — and we'll
          tell you when simpler is better.
        </p>
      </div>

      <div className="container-xl">
        <div className="marquee-wrap overflow-hidden py-2 mb-10">
          <div className="marquee-track flex gap-3 w-max">
            {marqueeItems.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-white border border-surface-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-charcoal whitespace-nowrap hover:border-crimson/40 hover:text-crimson transition-colors duration-200 cursor-default"
              >
                <span className="badge-crimson text-xs">{tech.group}</span>
                {tech.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stack philosophy card */}
      <div className="container-xl">
        <div className="rounded-2xl border border-surface-200 bg-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-charcoal mb-2">
                Framework-Agnostic. Cloud-Agnostic. Outcome-Focused.
              </h3>
              <p className="text-surface-500 text-sm leading-relaxed max-w-2xl">
                We will never recommend a technology because it's what our team
                prefers to work with. Every tech recommendation comes with a
                written rationale tied to your specific constraints — budget,
                team capability, time-to-market, and long-term maintainability.
              </p>
            </div>
            <Link to="/contact" className="btn-outline shrink-0">
              <Download size={15} />
              Download Our Tech Stack Playbook
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

function TestimonialsSection() {
  return (
    <div className="section-pad bg-white">
      <div className="container-xl">
        <div className="max-w-2xl mb-10">
          <span className="section-tag">The Standard We Hold Ourselves To</span>
          <h2 className="section-title">
            We Only Hire People Who Are Harder on Themselves{" "}
            <span className="text-crimson">Than Our Clients Are.</span>
          </h2>
          <p className="section-desc">
            Culture isn't a ping-pong table. It's what happens when a deployment
            fails at 11 PM. Here's what our team says about working here —
            unedited.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {testimonials.map(({ imgUrl, statement, address }) => (
            <article key={address} className="card p-6 flex flex-col gap-4">
              <Quote size={24} className="text-crimson/30" />
              <p className="text-surface-600 text-sm leading-relaxed flex-1 italic">
                "{statement}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-surface-100">
                <img
                  src={imgUrl}
                  alt={address}
                  className="w-9 h-9 rounded-full object-cover"
                />
                <span className="text-charcoal text-xs font-semibold">
                  {address}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Client voice placeholder */}
        <div className="rounded-2xl border border-surface-200 bg-surface-50 p-6 sm:p-8 mb-6">
          <Quote size={28} className="text-crimson/20 mb-3" />
          <p className="text-charcoal text-lg sm:text-xl font-medium leading-relaxed mb-3 italic max-w-3xl">
            "Beat Software is one of the few vendors we've worked with that
            actually told us when our scope was wrong — before we spent the
            budget on it."
          </p>
          <p className="text-surface-400 text-sm">
            — CTO, Enterprise Client (name withheld under NDA) · Full engagement
            story available on request
          </p>
        </div>

        <Link to="/about" className="btn-ghost-crimson">
          Meet the Team Behind Your Next Project <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

// ─── GLOBAL PRESENCE ─────────────────────────────────────────────────────────

function GlobalPresenceSection() {
  const presenceData = [
    {
      flag: "🇮🇳",
      country: "India",
      role: "Engineering Center of Excellence",
      points: [
        "Full-stack engineering & architecture",
        "QA, DevOps & cloud operations",
        "24/5 delivery capacity",
        "Product design & UX",
      ],
    },
    {
      flag: "🇸🇦",
      country: "Saudi Arabia",
      role: "In-Country Delivery & Stakeholder Management",
      points: [
        "Enterprise client liaison & coordination",
        "On-site project support & workshops",
        "Arabic-language stakeholder communications",
        "ZATCA & SDAIA regulatory compliance experience",
        "Vision 2030 digital alignment",
      ],
    },
  ];

  return (
    <div className="section-pad bg-surface-50">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="section-tag">Two Offices. One Standard.</span>
          <h2 className="section-title">
            The Cost Advantage of India.{" "}
            <span className="text-crimson">
              The Accountability of On-Site. Both.
            </span>
          </h2>
          <p className="section-desc">
            Offshoring fails when there's no one in the room when decisions are
            made. Our KSA operations team is the bridge — senior enough to make
            technical calls, accountable enough to own them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {presenceData.map(({ flag, country, role, points }) => (
            <div key={country} className="card p-7">
              <div className="flex items-start gap-3 mb-5">
                <span className="text-3xl">{flag}</span>
                <div>
                  <p className="font-bold text-charcoal text-lg">{country}</p>
                  <p className="text-crimson text-xs font-semibold uppercase tracking-wider leading-snug">
                    {role}
                  </p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-sm text-surface-600"
                  >
                    <MapPin size={13} className="text-crimson shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/contact" className="btn-primary">
            Book a Meeting at Our Riyadh Office <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn-outline">
            <Download size={15} />
            Download India–KSA Delivery Model
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── FINAL CTA ────────────────────────────────────────────────────────────────

function FinalCallToAction() {
  return (
    <div className="section-pad bg-charcoal-gradient border-t border-white/10">
      <div className="container-xl text-center">
        <Users size={28} className="text-crimson mx-auto mb-4" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Your Next Initiative Deserves a Partner{" "}
          <span className="text-crimson">Who's Done It Before.</span>
        </h2>
        <p className="text-white/75 text-base sm:text-lg max-w-3xl mx-auto mb-8">
          Stop scoping with vendors who need six months to understand your
          industry. Start with a team that's already solved your problem — for a
          client in your sector, at your scale.
        </p>
        <Link to="/contact" className="btn-primary btn-lg mb-8">
          Book a Zero-Cost Scoping Session — No Sales Pitch{" "}
          <ArrowRight size={17} />
        </Link>
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {[
            "Free 90-min session — we document findings regardless of outcome",
            "Your named delivery lead is on the first call — not just onboarding",
            "NDAs signed before session one — your IP is protected from conversation one",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-white/60 text-sm max-w-xs text-left"
            >
              <Check size={14} className="text-crimson shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
