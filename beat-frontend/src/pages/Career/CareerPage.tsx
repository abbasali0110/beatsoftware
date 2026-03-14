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
  X,
} from "lucide-react";
import CareerHeroSection from "./components/CareerHeroSection";

type Dept = "All" | "Engineering" | "Architecture" | "Delivery" | "Design";

interface Role {
  title: string;
  dept: Dept;
  location: string;
  type: string;
  market: string;
  description: string;
  requirements: string[];
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
    description: "We are looking for a Senior Full-Stack Engineer to lead the development of our enterprise platforms. You will be responsible for designing, building, and maintaining robust applications that scale.",
    requirements: [
      "5+ years of experience with React, Node.js, and TypeScript",
      "Strong understanding of microservices architecture",
      "Experience with cloud platforms (AWS or Azure)",
      "Excellent problem-solving and communication skills"
    ]
  },
  {
    title: "Platform Architect",
    dept: "Architecture",
    location: "Riyadh",
    type: "Full-time",
    market: "KSA",
    description: "As a Platform Architect, you will design the technical foundation for our core products, ensuring scalability, security, and high performance across distributed systems.",
    requirements: [
      "10+ years in software engineering with 3+ years in architecture",
      "Deep expertise in distributed systems and cloud-native patterns",
      "Strong background in enterprise security and compliance",
      "Ability to influence technical direction and mentor senior engineers"
    ]
  },
  {
    title: "Compliance Systems Analyst",
    dept: "Delivery",
    location: "Riyadh",
    type: "Full-time",
    market: "KSA",
    description: "Join our Delivery team to ensure our systems meet rigorous enterprise and regulatory standards. You will analyze requirements, audit processes, and drive compliance initiatives.",
    requirements: [
      "3+ years experience as a systems or compliance analyst",
      "Familiarity with financial or healthcare regulatory standards",
      "Strong documentation and analytical skills",
      "Experience working closely with engineering teams"
    ]
  },
  {
    title: "React Frontend Engineer",
    dept: "Engineering",
    location: "Hyderabad",
    type: "Full-time",
    market: "India",
    description: "We are seeking a React Frontend Engineer to build intuitive, high-performance user interfaces for our enterprise applications, focusing on user experience and accessibility.",
    requirements: [
      "3+ years of specialized experience in React and TypeScript",
      "Deep understanding of state management and performance optimization",
      "Experience with modern CSS and component libraries",
      "Passion for pixel-perfect design and fluid animations"
    ]
  },
  {
    title: "DevOps / Cloud Engineer",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
    market: "Both",
    description: "The DevOps/Cloud Engineer will optimize our CI/CD pipelines, manage infrastructure as code, and ensure maximum reliability and availability of our cloud environments.",
    requirements: [
      "Experience with Docker, Kubernetes, and Terraform",
      "Strong background in AWS or Azure administration",
      "Proficiency in scripting languages (Python, Bash)",
      "Understanding of security best practices in cloud environments"
    ]
  },
  {
    title: "Enterprise Delivery Manager",
    dept: "Delivery",
    location: "Riyadh",
    type: "Full-time",
    market: "KSA",
    description: "Lead the successful delivery of complex enterprise projects. You will act as the bridge between business stakeholders and engineering teams to ensure on-time, high-quality outcomes.",
    requirements: [
      "7+ years of experience in technical project or program management",
      "Proven track record of delivering enterprise-scale software",
      "Strong agile methodology experience",
      "Excellent stakeholder management and communication skills"
    ]
  },
  {
    title: "UI/UX Designer - Enterprise",
    dept: "Design",
    location: "Hyderabad / Remote",
    type: "Full-time",
    market: "India",
    description: "Shape the user experience for complex enterprise tools. You will conduct user research, create wireframes, and deliver high-fidelity designs that simplify complex workflows.",
    requirements: [
      "4+ years of UI/UX design experience, preferably in B2B or enterprise",
      "Expertise in Figma and prototyping tools",
      "Strong portfolio demonstrating systems thinking",
      "Experience collaborating with frontend engineering teams"
    ]
  },
  {
    title: "Data Platform Engineer",
    dept: "Engineering",
    location: "Hyderabad",
    type: "Contract",
    market: "India",
    description: "Build robust data pipelines and infrastructure. You will be responsible for the ingestion, storage, and processing of large-scale datasets that drive our analytics products.",
    requirements: [
      "Experience with data modeling and ETL pipeline development",
      "Proficiency in SQL, Python, and big data technologies (e.g., Spark, Kafka)",
      "Knowledge of cloud data warehouses (e.g., Snowflake, Redshift)",
      "Understanding of data governance and security principles"
    ]
  },
];

type StackItem = {
  name: string;
  icon?: string;
  Icon?: React.ElementType;
};

const stack: StackItem[] = [
  { name: "React", icon: "/assets/images/tech/react.svg" },
  { name: "Node.js", icon: "/assets/images/tech/nodejs.svg" },
  { name: "TypeScript", icon: "/assets/images/tech/typescript.svg" },
  { name: "PostgreSQL", icon: "/assets/images/tech/postgresql.svg" },
  { name: "AWS", icon: "/assets/images/tech/aws.svg" },
  { name: "Azure", icon: "/assets/images/tech/azure.svg" },
  { name: "Docker", icon: "/assets/images/tech/docker.svg" },
  { name: "Terraform", icon: "/assets/images/tech/terraform.svg" },
  { name: "Redis", icon: "/assets/images/tech/redis.svg" },
  { name: "Kafka", icon: "/assets/images/tech/kafka.svg" },
  { name: "AI/ML", icon: "/assets/images/tech/aiml.svg" },
  { name: "Cloud Integration", icon: "/assets/images/tech/cloud.svg" },
  { name: "Data Center", icon: "/assets/images/tech/datacenter.svg" },
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
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  useEffect(() => {
    if (selectedRole) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedRole]);

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
                  <p className="text-base text-surface-600 leading-relaxed">
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
              <div className="flex flex-wrap gap-3 mt-4">
                {stack.map((tech, i) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-3 rounded-xl border border-surface-200 bg-surface-50 px-4 py-2.5 text-base font-bold text-surface-600 transition-all duration-300 hover:border-crimson/30 hover:-translate-y-0.5"
                    style={{
                      opacity: lookRef.visible ? 1 : 0,
                      transform: lookRef.visible
                        ? "translateY(0)"
                        : "translateY(12px)",
                      transition: `all 0.45s cubic-bezier(0.16,1,0.3,1) ${260 + i * 45}ms`,
                    }}
                  >
                    {tech.Icon ? (
                      <tech.Icon size={24} className="text-surface-600" />
                    ) : (
                      <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                    )}
                    <span>{tech.name}</span>
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
              <p className="text-base font-medium text-surface-600">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredRoles.map((role, i) => (
                <article
                  key={`${activeDept}-${role.title}-${role.location}`}
                  className="card p-5 sm:p-6 flex flex-col justify-between hover:-translate-y-1"
                  style={{
                    opacity: rolesRef.visible ? 1 : 0,
                    transform: rolesRef.visible
                      ? "translateY(0)"
                      : "translateY(18px)",
                    transition: `all 0.45s cubic-bezier(0.16,1,0.3,1) ${i * 55}ms`,
                  }}
                >
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-charcoal mb-3">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-surface-600">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={14} className="text-crimson" />{" "}
                        {role.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={14} className="text-crimson" />{" "}
                        {role.type}
                      </span>
                      <span className="badge badge-surface">
                        {role.market}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <button
                      onClick={() => setSelectedRole(role)}
                      className="rounded-xl border border-surface-200 bg-white px-4 py-2 text-sm font-bold text-charcoal transition-all hover:bg-surface-50 hover:border-crimson hover:-translate-y-0.5 flex-1 text-center"
                    >
                      View Details
                    </button>
                    <Link
                      to="/career/apply"
                      className="btn-primary flex-1 justify-center px-4 py-2"
                    >
                      Apply <ArrowRight size={14} />
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
                  <p className="text-base text-surface-600 leading-relaxed">
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

      {/* Job Description Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6">
          <div 
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedRole(null)}
          />
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl flex flex-col max-h-[90vh] sm:max-h-[85vh] animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-surface-200 bg-surface-50 rounded-t-2xl">
              <div>
                <h3 className="text-xl font-bold text-charcoal">{selectedRole.title}</h3>
                <div className="flex items-center gap-4 text-sm font-medium text-surface-600 mt-2">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} className="text-crimson" /> {selectedRole.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} className="text-crimson" /> {selectedRole.type}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedRole(null)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-200 text-surface-500 hover:text-charcoal transition-colors focus:outline-none"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-5 sm:p-6 overflow-y-auto min-h-[30vh]">
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal mb-3">About the Role</h4>
                <p className="text-surface-700 font-medium leading-relaxed text-base">
                  {selectedRole.description}
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal mb-3">Requirements</h4>
                <ul className="space-y-3">
                  {selectedRole.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-surface-700 font-medium">
                      <CheckCircle2 size={18} className="text-crimson mt-0.5 shrink-0" />
                      <span className="text-base leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="p-5 sm:p-6 border-t border-surface-200 bg-surface-50 flex justify-end gap-3 rounded-b-2xl">
              <button
                onClick={() => setSelectedRole(null)}
                className="rounded-xl border border-surface-200 bg-white px-5 py-2.5 text-sm font-bold text-surface-600 hover:bg-surface-50 transition-colors"
              >
                Close
              </button>
              <Link
                to="/career/apply"
                className="btn-primary"
                onClick={() => setSelectedRole(null)}
              >
                Apply Now <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
