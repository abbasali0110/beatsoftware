import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Cloud,
  Cog,
  Globe2,
  Handshake,
  Landmark,
  Layers3,
  Network,
  PlugZap,
  ShieldCheck,
  Workflow,
  Sparkles,
  Users,
} from "lucide-react";
import { carouselSlides } from "../../data/home";

const highlights = [
  { value: "500+", label: "Enterprise engagements", icon: Briefcase },
  { value: "1000+", label: "Projects delivered", icon: BadgeCheck },
  { value: "10+", label: "Years of execution excellence", icon: Building2 },
  { value: "2", label: "Strategic operating regions", icon: Globe2 },
];

const coreServices = [
  {
    title: "Enterprise Software Development",
    desc: "Enterprise-grade web and mobile platforms built with strong delivery governance.",
    icon: Layers3,
    img: "assets/images/home/home11-lg.jpg",
  },
  {
    title: "Cloud & DevOps",
    desc: "Cloud-ready architecture, deployment pipelines, and operational reliability controls.",
    icon: Cloud,
    img: "assets/images/home/home12-lg.jpg",
  },
  {
    title: "Microservices Architecture",
    desc: "Modular service architecture for resilience, scalability, and long-term maintainability.",
    icon: Network,
    img: "assets/images/home/home13-lg.jpg",
  },
  {
    title: "API & Integration Services",
    desc: "Secure APIs and integration layers connecting enterprise systems and partner tools.",
    icon: PlugZap,
    img: "assets/images/home/home14-lg.jpg",
  },
  {
    title: "SaaS Development",
    desc: "Subscription-ready software products designed for growth, usage visibility, and performance.",
    icon: Workflow,
    img: "assets/images/home/home8.jpg",
  },
  {
    title: "Maintenance & AMC",
    desc: "Continuous support, monitoring, enhancements, and lifecycle management for critical systems.",
    icon: Cog,
    img: "assets/images/home/home9.jpg",
  },
];

const flagshipSolutions = [
  {
    title: "Travel & Booking Systems",
    desc: "Digital reservation and journey workflows for travel operators and service teams.",
    img: "assets/images/home/travel-n-booking.jpg",
  },
  {
    title: "Fleet Management",
    desc: "Dispatch control, tracking visibility, and operational performance reporting.",
    img: "assets/images/home/fleet-mgmt.jpg",
  },
  {
    title: "Restaurant Management",
    desc: "Order lifecycle, branch-level operations, and integrated service workflows.",
    img: "assets/images/home/restaurant-mgmt.jpg",
  },
  {
    title: "HR & Manpower ERP",
    desc: "Workforce planning, attendance, payroll, and governance-ready records.",
    img: "assets/images/home/hr-manpower.jpg",
  },
  {
    title: "Educational ERP",
    desc: "Academic operations, student lifecycle management, and communication modules.",
    img: "assets/images/home/educational-erp.jpg",
  },
  {
    title: "Construction ERP",
    desc: "Project execution controls, vendor management, and budget visibility.",
    img: "assets/images/home/constructionerp.jpg",
  },
];

const valuePillars = [
  {
    title: "Corporate Delivery Governance",
    desc: "Structured planning, transparent milestones, and executive reporting aligned with enterprise standards.",
    icon: Landmark,
  },
  {
    title: "Security & Compliance Mindset",
    desc: "Security-by-design delivery controls and disciplined implementation for business-critical systems.",
    icon: ShieldCheck,
  },
  {
    title: "Regional Business Understanding",
    desc: "Practical delivery approach for India and Saudi Arabia with strong enterprise communication practices.",
    icon: Handshake,
  },
];

export default function Home() {
  return (
    <section className="bg-white">
      <HeroSection />
      <HighlightsBar />
      <CorporateOverview />
      <ServicesSnapshot />
      <SolutionsSnapshot />
      <WhyBeatSection />
      <GlobalPresenceSection />
      <FinalCallToAction />
    </section>
  );
}

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
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/35 to-black/20" />
            <div className="absolute inset-0 brand-grid-overlay" />

            <div className="relative z-10 h-full flex items-center">
              <div className="container-xl">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 mb-6 text-xs font-semibold tracking-[0.13em] text-white bg-white/10 border border-white/20 backdrop-blur-sm">
                    <Sparkles size={14} className="text-crimson" />
                    Enterprise Software Partner
                  </div>

                  <h1 className="carousel-p text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.94] text-white mb-5">
                    Beat Software Technologies
                  </h1>

                  <p className="carousel-cta text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed mb-8">
                    Delivering corporate-grade software engineering, digital
                    platforms, and operational systems for organizations across
                    India and the Kingdom of Saudi Arabia.
                  </p>

                  <div className="carousel-cta flex flex-wrap items-center gap-3 sm:gap-4">
                    <Link to="/contact" className="btn-primary btn-lg">
                      Request Corporate Consultation <ArrowRight size={18} />
                    </Link>
                    <Link to="/portfolio" className="btn-ghost btn-lg">
                      View Case Studies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function HighlightsBar() {
  return (
    <div className="bg-charcoal border-t border-b border-white/10">
      <div className="container-xl py-3">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {highlights.map(({ value, label, icon: Icon }) => (
            <div key={label} className="px-6 py-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-crimson/15 border border-crimson/20 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-crimson" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white leading-none mb-1">
                    {value}
                  </p>
                  <p className="text-surface-400 text-xs uppercase tracking-[0.1em]">
                    {label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CorporateOverview() {
  return (
    <div className="section-pad bg-surface-50">
      <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="section-tag">Corporate Profile</span>
          <h2 className="section-title">
            A trusted technology organization for enterprise transformation
          </h2>
          <p className="section-desc mb-4">
            Beat Software Technologies is a specialized software company
            delivering scalable digital systems, mission-critical applications,
            and long-term technology partnership models.
          </p>
          <p className="text-surface-500 text-base leading-relaxed">
            Our corporate delivery framework emphasizes accountability,
            disciplined execution, and measurable value creation for public and
            private sector organizations.
          </p>
        </div>

        <div className="card p-7 sm:p-8">
          <h3 className="text-xl font-bold text-charcoal mb-4">
            Leadership Commitment
          </h3>
          <ul className="space-y-3">
            <li className="text-surface-600 text-sm">
              • Vision-aligned technology roadmaps
            </li>
            <li className="text-surface-600 text-sm">
              • Governance-driven program execution
            </li>
            <li className="text-surface-600 text-sm">
              • Long-term maintenance and AMC stewardship
            </li>
            <li className="text-surface-600 text-sm">
              • Regional client support across India and Saudi Arabia
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ServicesSnapshot() {
  return (
    <div className="section-pad bg-white">
      <div className="container-xl">
        <div className="max-w-2xl mb-10">
          <span className="section-tag">Core Services</span>
          <h2 className="section-title">Comprehensive enterprise services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreServices.map(({ title, desc, icon: Icon, img }) => (
            <article key={title} className="card p-0 overflow-hidden group">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-charcoal/10" />
                <div className="absolute left-4 bottom-4 w-10 h-10 rounded-xl bg-white/90 border border-white/80 flex items-center justify-center">
                  <Icon size={18} className="text-crimson" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {title}
                </h3>
                <p className="text-surface-500 text-sm">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function SolutionsSnapshot() {
  return (
    <div className="section-pad bg-surface-50">
      <div className="container-xl">
        <div className="max-w-2xl mb-10">
          <span className="section-tag">Business Solutions</span>
          <h2 className="section-title">
            Operational platforms tailored by domain
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {flagshipSolutions.map(({ title, desc, img }) => (
            <article key={title} className="card p-0 overflow-hidden group">
              <div className="relative h-40 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-charcoal/10" />
                <div className="absolute left-4 bottom-4 w-10 h-10 rounded-xl bg-white/90 border border-white/80 flex items-center justify-center">
                  <Building2 size={18} className="text-crimson" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-charcoal mb-2">
                  {title}
                </h3>
                <p className="text-surface-500 text-sm">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhyBeatSection() {
  return (
    <div className="section-pad bg-charcoal">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="section-tag">Why Beat</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Built on trust, governance, and delivery quality
          </h2>
          <p className="text-surface-400 text-base sm:text-lg">
            Our organization supports corporate stakeholders with executive
            clarity and delivery discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {valuePillars.map(({ title, desc, icon: Icon }) => (
            <article key={title} className="card-dark p-6">
              <div className="w-11 h-11 rounded-xl bg-crimson/15 border border-crimson/30 flex items-center justify-center mb-4">
                <Icon size={20} className="text-crimson" />
              </div>
              <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
              <p className="text-surface-400 text-sm leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function GlobalPresenceSection() {
  return (
    <div className="section-pad bg-white">
      <div className="container-xl">
        <div className="rounded-2xl border border-surface-200 bg-surface-50 p-8 sm:p-10">
          <span className="section-tag">Global Presence</span>
          <h2 className="section-title mb-3">
            India Development Center and Saudi Client Operations
          </h2>
          <p className="text-surface-500 text-base mb-6 max-w-3xl">
            We provide full-stack engineering and innovation support from India,
            with enterprise client handling and on-site coordination
            capabilities in Saudi Arabia.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/global-presence" className="btn-primary">
              View Global Presence <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Regional Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinalCallToAction() {
  return (
    <div className="section-pad bg-charcoal-gradient border-t border-white/10">
      <div className="container-xl text-center">
        <Users size={28} className="text-crimson mx-auto mb-4" />
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Engage with a corporate technology partner committed to outcomes
        </h2>
        <p className="text-white/75 text-base sm:text-lg max-w-3xl mx-auto mb-8">
          Let us structure your next initiative with executive-level planning,
          enterprise architecture, and regional execution support.
        </p>
        <Link to="/contact" className="btn-primary btn-lg">
          Schedule Executive Discussion <ArrowRight size={17} />
        </Link>
      </div>
    </div>
  );
}
