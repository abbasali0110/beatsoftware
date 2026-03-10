import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  Code2,
  Globe,
  MapPin,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import CareerHeroSection from "./components/CareerHeroSection";

type Dept = "All" | "Engineering" | "Architecture" | "Delivery" | "Design";

interface Role {
  title: string;
  dept: Dept;
  location: string;
  type: string;
  market: string;
}

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

const whyUs = [
  {
    icon: Target,
    title: "Work That Matters",
    desc: "Build production systems that run critical operations in regulated environments.",
  },
  {
    icon: Code2,
    title: "Technical Depth",
    desc: "Own architecture and implementation decisions, not only ticket execution.",
  },
  {
    icon: Globe,
    title: "Cross-Market Exposure",
    desc: "Deliver for India and KSA business contexts with enterprise governance expectations.",
  },
  {
    icon: Users,
    title: "Ownership Culture",
    desc: "Operate with accountability, autonomy, and transparent delivery standards.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Standards",
    desc: "Work with secure-by-design practices, quality controls, and documented processes.",
  },
  {
    icon: Briefcase,
    title: "Career Progression",
    desc: "Clear advancement from engineer to lead and architect through delivery impact.",
  },
];

const lookFor = [
  "Systems-thinking mindset with strong problem framing",
  "Comfort with compliance, quality gates, and structured delivery",
  "Strong written communication for distributed collaboration",
  "Ownership-driven approach to execution and outcomes",
  "Curiosity for business domains and operational workflows",
];

const roles: Role[] = [
  {
    title: "Senior Full-Stack Engineer",
    dept: "Engineering",
    location: "Hyderabad / Remote",
    type: "Full-time",
    market: "India",
  },
  {
    title: "Platform Architect",
    dept: "Architecture",
    location: "Riyadh",
    type: "Full-time",
    market: "KSA",
  },
  {
    title: "Compliance Systems Analyst",
    dept: "Delivery",
    location: "Riyadh",
    type: "Full-time",
    market: "KSA",
  },
  {
    title: "React Frontend Engineer",
    dept: "Engineering",
    location: "Hyderabad",
    type: "Full-time",
    market: "India",
  },
  {
    title: "DevOps / Cloud Engineer",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
    market: "Both",
  },
  {
    title: "Enterprise Delivery Manager",
    dept: "Delivery",
    location: "Riyadh",
    type: "Full-time",
    market: "KSA",
  },
  {
    title: "UI/UX Designer - Enterprise",
    dept: "Design",
    location: "Hyderabad / Remote",
    type: "Full-time",
    market: "India",
  },
  {
    title: "Data Platform Engineer",
    dept: "Engineering",
    location: "Hyderabad",
    type: "Contract",
    market: "India",
  },
];

const stack = [
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "AWS",
  "Azure",
  "Docker",
  "Terraform",
  "Redis",
  "Kafka",
];

const processSteps = [
  {
    n: "01",
    title: "Application Review",
    desc: "Every application is reviewed by the hiring team within 3-5 business days.",
  },
  {
    n: "02",
    title: "Technical Screen",
    desc: "Role-relevant technical assessment focused on practical engineering judgement.",
  },
  {
    n: "03",
    title: "Panel Interview",
    desc: "Structured conversation covering system design, collaboration, and ownership.",
  },
  {
    n: "04",
    title: "Offer & Onboarding",
    desc: "Clear offer process followed by a guided onboarding and domain handover plan.",
  },
];

const depts: Dept[] = [
  "All",
  "Engineering",
  "Architecture",
  "Delivery",
  "Design",
];

export default function CareerPage() {
  const [activeDept, setActiveDept] = useState<Dept>("All");

  const whyRef = useReveal(0.12);
  const lookRef = useReveal(0.12);
  const rolesRef = useReveal(0.12);
  const processRef = useReveal(0.12);
  const ctaRef = useReveal(0.12);

  const filteredRoles = useMemo(() => {
    if (activeDept === "All") return roles;
    return roles.filter((r) => r.dept === activeDept);
  }, [activeDept]);

  return (
    <>
      <CareerHeroSection />
      <section>
        <div
          ref={whyRef.ref}
          className="section-pad bg-surface-50 border-b border-surface-200"
        >
          <div className="container-xl">
            <p className="section-tag">Why Beat</p>
            <h2 className="section-title">
              A place for high ownership engineering
            </h2>
            <p className="section-desc max-w-3xl mb-8">
              We hire professionals who value technical rigor, delivery
              discipline, and measurable business impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyUs.map(({ icon: Icon, title, desc }, i) => (
                <article
                  key={title}
                  className="card p-6 hover:-translate-y-1"
                  style={{
                    opacity: whyRef.visible ? 1 : 0,
                    transform: whyRef.visible
                      ? "translateY(0)"
                      : "translateY(24px)",
                    transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms`,
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-crimson" />
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-surface-500 leading-relaxed">
                    {desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={lookRef.ref}
          className="section-pad-sm bg-white border-b border-surface-200"
        >
          <div className="container-xl grid lg:grid-cols-2 gap-8">
            <div
              style={{
                opacity: lookRef.visible ? 1 : 0,
                transform: lookRef.visible
                  ? "translateX(0)"
                  : "translateX(-24px)",
                transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <p className="section-tag">What We Look For</p>
              <h2 className="section-title">
                Profiles that thrive in enterprise delivery
              </h2>
              <ul className="space-y-3 mt-4">
                {lookFor.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-surface-600"
                    style={{
                      opacity: lookRef.visible ? 1 : 0,
                      transform: lookRef.visible
                        ? "translateX(0)"
                        : "translateX(-18px)",
                      transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${180 + i * 70}ms`,
                    }}
                  >
                    <CheckCircle2
                      size={14}
                      className="text-crimson mt-[2px] shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                opacity: lookRef.visible ? 1 : 0,
                transform: lookRef.visible
                  ? "translateX(0)"
                  : "translateX(24px)",
                transition: "all 0.7s cubic-bezier(0.16,1,0.3,1) 120ms",
              }}
            >
              <p className="text-2xs font-bold uppercase tracking-[0.2em] text-crimson mb-3">
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2.5">
                {stack.map((tech, i) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-surface-200 bg-surface-50 px-3.5 py-1.5 text-sm font-semibold text-surface-600 transition-all duration-300 hover:border-crimson/30 hover:-translate-y-0.5"
                    style={{
                      opacity: lookRef.visible ? 1 : 0,
                      transform: lookRef.visible
                        ? "translateY(0)"
                        : "translateY(12px)",
                      transition: `all 0.45s cubic-bezier(0.16,1,0.3,1) ${260 + i * 45}ms`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          id="roles"
          ref={rolesRef.ref}
          className="section-pad bg-surface-50 border-b border-surface-200"
        >
          <div className="container-xl">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-6">
              <div>
                <p className="section-tag mb-1">Open Roles</p>
                <h2 className="section-title mb-0">Current opportunities</h2>
              </div>
              <p className="text-sm text-surface-500">
                {filteredRoles.length} positions
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {depts.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-bold uppercase tracking-[0.08em] transition-all duration-300 ${
                    activeDept === dept
                      ? "bg-crimson text-white border-crimson shadow-glow"
                      : "bg-white text-surface-600 border-surface-200 hover:border-crimson/30 hover:text-charcoal hover:-translate-y-0.5"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            <div className="space-y-3">
              {filteredRoles.map((role, i) => (
                <article
                  key={`${activeDept}-${role.title}-${role.location}`}
                  className="card p-5 sm:p-6 hover:-translate-y-0.5"
                  style={{
                    opacity: rolesRef.visible ? 1 : 0,
                    transform: rolesRef.visible
                      ? "translateY(0)"
                      : "translateY(18px)",
                    transition: `all 0.45s cubic-bezier(0.16,1,0.3,1) ${i * 55}ms`,
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-charcoal mb-2">
                        {role.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-surface-500">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={12} className="text-crimson" />{" "}
                          {role.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={12} className="text-crimson" />{" "}
                          {role.type}
                        </span>
                        <span className="badge badge-surface">
                          {role.market}
                        </span>
                      </div>
                    </div>
                    <Link
                      to="/career/apply"
                      className="btn-primary whitespace-nowrap self-start sm:self-auto"
                    >
                      Apply Now <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={processRef.ref}
          className="section-pad-sm bg-white border-b border-surface-200"
        >
          <div className="container-xl">
            <p className="section-tag">Hiring Process</p>
            <h2 className="section-title">How we hire</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {processSteps.map((step, i) => (
                <article
                  key={step.n}
                  className="rounded-2xl border border-surface-200 bg-surface-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson/30"
                  style={{
                    opacity: processRef.visible ? 1 : 0,
                    transform: processRef.visible
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 90}ms`,
                  }}
                >
                  <p className="text-2xs font-bold uppercase tracking-[0.16em] text-crimson mb-2">
                    Step {step.n}
                  </p>
                  <h3 className="text-lg font-bold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-surface-500 leading-relaxed">
                    {step.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div ref={ctaRef.ref} className="section-pad-sm bg-surface-50">
          <div className="container-xl">
            <div
              className="rounded-2xl bg-charcoal text-white p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5"
              style={{
                opacity: ctaRef.visible ? 1 : 0,
                transform: ctaRef.visible
                  ? "translateY(0)"
                  : "translateY(22px)",
                transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <div className="max-w-2xl">
                <p className="text-2xs font-extrabold uppercase tracking-[0.22em] text-crimson mb-2">
                  Apply
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-2">
                  Ready to do your best work?
                </h3>
                <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                  Apply for a current opening or share your profile. Our team
                  reviews every application and responds within 5 business days.
                </p>
              </div>
              <Link
                to="/career/apply"
                className="btn-primary self-start lg:self-auto"
              >
                Apply Now <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
