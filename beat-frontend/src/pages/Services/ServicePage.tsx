import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Cog,
  Gauge,
  GitBranch,
  Layers,
  LockKeyhole,
  PlugZap,
  Server,
  Shield,
} from "lucide-react";
import ServiceHeroSection from "./components/ServiceHeroSection";

const services = [
  {
    title: "Enterprise Software Development",
    icon: Server,
    summary:
      "Business-critical platforms engineered for reliability, security, and long-term maintainability.",
    outcomes: [
      "Domain-driven architecture and clean service boundaries",
      "High-availability design with measurable SLAs",
      "Governance-ready documentation and engineering standards",
    ],
  },
  {
    title: "Cloud & DevOps Enablement",
    icon: Cloud,
    summary:
      "Cloud-native delivery pipelines that improve release speed without compromising control.",
    outcomes: [
      "Automated CI/CD with quality gates and rollback strategies",
      "Infrastructure as Code with policy-driven provisioning",
      "Observability stack for logs, metrics, and traceability",
    ],
  },
  {
    title: "Microservices & Platform Architecture",
    icon: GitBranch,
    summary:
      "Scalable, modular platforms that support product growth and multi-team collaboration.",
    outcomes: [
      "Service decomposition with API-first contracts",
      "Resilience patterns for fault tolerance and recovery",
      "Event-driven integration for high-throughput workloads",
    ],
  },
  {
    title: "API & Systems Integration",
    icon: PlugZap,
    summary:
      "Secure integration layers connecting ERP, CRM, payment, and third-party systems.",
    outcomes: [
      "Versioned APIs with centralized authentication",
      "Reliable data synchronization and workflow orchestration",
      "Audit-friendly transaction and integration logs",
    ],
  },
  {
    title: "SaaS Product Engineering",
    icon: Cog,
    summary:
      "Multi-tenant SaaS products built for scale, compliance, and continuous innovation.",
    outcomes: [
      "Tenant isolation and role-based access governance",
      "Subscription, billing, and usage analytics readiness",
      "Feature delivery roadmap aligned to business KPIs",
    ],
  },
  {
    title: "Managed Support & Modernization",
    icon: Shield,
    summary:
      "Structured support and modernization for legacy systems, with controlled risk and uptime continuity.",
    outcomes: [
      "L2/L3 support with incident and problem management",
      "Legacy replatforming and technical debt reduction",
      "Security patching, dependency health, and compliance upkeep",
    ],
  },
];

const deliveryModel = [
  {
    title: "Discover",
    detail:
      "Align on business goals, system constraints, security posture, and success metrics.",
  },
  {
    title: "Architect",
    detail:
      "Define solution blueprint, operating model, release strategy, and non-functional requirements.",
  },
  {
    title: "Build & Validate",
    detail:
      "Execute in iterative milestones with test automation, governance checkpoints, and transparent reporting.",
  },
  {
    title: "Scale & Optimize",
    detail:
      "Operationalize with SRE practices, cost-performance optimization, and continuous improvement loops.",
  },
];

export default function ServicePage() {
  return (
    <>
      <ServiceHeroSection />
      <section>
        <div className="section-pad bg-surface-50">
          <div className="container-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <div className="rounded-2xl border border-surface-200 bg-white p-4 sm:p-5">
                <div className="flex items-center gap-2 text-charcoal font-bold mb-1">
                  <Gauge size={16} className="text-crimson" />
                  Performance-first
                </div>
                <p className="text-surface-500 text-sm">
                  SLI/SLO driven delivery standards.
                </p>
              </div>
              <div className="rounded-2xl border border-surface-200 bg-white p-4 sm:p-5">
                <div className="flex items-center gap-2 text-charcoal font-bold mb-1">
                  <LockKeyhole size={16} className="text-crimson" />
                  Security by design
                </div>
                <p className="text-surface-500 text-sm">
                  Controls embedded from architecture to release.
                </p>
              </div>
              <div className="rounded-2xl border border-surface-200 bg-white p-4 sm:p-5">
                <div className="flex items-center gap-2 text-charcoal font-bold mb-1">
                  <Layers size={16} className="text-crimson" />
                  Modular architecture
                </div>
                <p className="text-surface-500 text-sm">
                  Composable platforms for evolving business needs.
                </p>
              </div>
              <div className="rounded-2xl border border-surface-200 bg-white p-4 sm:p-5">
                <div className="flex items-center gap-2 text-charcoal font-bold mb-1">
                  <CheckCircle2 size={16} className="text-crimson" />
                  Delivery governance
                </div>
                <p className="text-surface-500 text-sm">
                  Transparent milestones, quality gates, and reporting.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {services.map(({ title, icon: Icon, summary, outcomes }) => (
                <article key={title} className="card p-6 sm:p-7">
                  <div className="w-11 h-11 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-crimson" />
                  </div>
                  <h2 className="text-lg font-bold text-charcoal mb-2">
                    {title}
                  </h2>
                  <p className="text-surface-500 text-sm leading-relaxed mb-4">
                    {summary}
                  </p>
                  <ul className="space-y-2">
                    {outcomes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-surface-600"
                      >
                        <CheckCircle2
                          size={14}
                          className="text-crimson mt-[2px] shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="section-pad-sm bg-white border-y border-surface-200">
          <div className="container-xl">
            <div className="mb-8">
              <p className="section-tag mb-2">Delivery Model</p>
              <h2 className="section-title mb-2">
                How we execute enterprise programs
              </h2>
              <p className="section-desc max-w-3xl">
                A practical operating model that balances speed, control, and
                predictable outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {deliveryModel.map((phase, index) => (
                <article
                  key={phase.title}
                  className="rounded-2xl border border-surface-200 bg-surface-50 p-5"
                >
                  <p className="text-2xs font-bold uppercase tracking-[0.18em] text-crimson mb-2">
                    Phase {index + 1}
                  </p>
                  <h3 className="text-lg font-bold text-charcoal mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-surface-500 leading-relaxed">
                    {phase.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="section-pad-sm bg-surface-50">
          <div className="container-xl">
            <div className="rounded-2xl bg-charcoal text-white p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              <div className="max-w-2xl">
                <p className="text-2xs font-extrabold uppercase tracking-[0.22em] text-crimson mb-2">
                  Engagement
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-2">
                  Need a delivery partner for your next transformation
                  initiative?
                </h3>
                <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                  Share your current architecture, priorities, and timelines. We
                  will propose a phased execution plan aligned to your business
                  goals.
                </p>
              </div>
              <Link
                to="/contact"
                className="btn-primary self-start lg:self-auto"
              >
                Discuss Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
