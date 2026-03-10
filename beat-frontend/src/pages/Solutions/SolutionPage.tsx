import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Bus,
  Building2,
  CheckCircle2,
  GraduationCap,
  Hotel,
  Layers,
  ShieldCheck,
  Truck,
  UtensilsCrossed,
} from "lucide-react";
import SolutionHeroSection from "./components/SolutionHeroSection";

const solutions = [
  {
    title: "Travel & Booking Systems",
    icon: Bus,
    summary:
      "Integrated reservation and operations platforms for transport and travel enterprises.",
    modules: [
      "Real-time booking, seat inventory, and fare controls",
      "Partner and channel integrations for distribution",
      "Operations dashboard with route and occupancy intelligence",
    ],
  },
  {
    title: "Fleet Management",
    icon: Truck,
    summary:
      "Digital command center for fleet utilization, compliance, and cost optimization.",
    modules: [
      "Vehicle, driver, and maintenance lifecycle management",
      "GPS-based tracking with trip and route analytics",
      "Fuel, downtime, and utilization KPI monitoring",
    ],
  },
  {
    title: "Restaurant Management",
    icon: UtensilsCrossed,
    summary:
      "Multi-outlet restaurant operations with tighter control over service and margins.",
    modules: [
      "POS, kitchen workflow, and order orchestration",
      "Inventory and vendor controls with wastage tracking",
      "Outlet performance analytics and daily reconciliation",
    ],
  },
  {
    title: "HR & Manpower ERP",
    icon: Building2,
    summary:
      "Workforce management systems for staffing, attendance, payroll, and compliance.",
    modules: [
      "Employee lifecycle and role-based access management",
      "Shift planning, attendance, and payroll automation",
      "Compliance workflows with audit-ready records",
    ],
  },
  {
    title: "Educational ERP",
    icon: GraduationCap,
    summary:
      "Campus-wide platforms connecting admissions, academics, and administration.",
    modules: [
      "Student lifecycle from enrollment to graduation",
      "Timetable, examinations, and faculty operations",
      "Parent/student portals with communication workflows",
    ],
  },
  {
    title: "Construction ERP",
    icon: Hotel,
    summary:
      "Project-centric ERP for planning, execution, procurement, and site governance.",
    modules: [
      "Project milestones, BOQ, and progress monitoring",
      "Procurement, inventory, and subcontractor workflows",
      "Cost, quality, and risk controls across project stages",
    ],
  },
];

const implementationModel = [
  {
    phase: "Assess",
    detail:
      "Evaluate process maturity, data landscape, and integration touchpoints.",
  },
  {
    phase: "Design",
    detail:
      "Define target operating model, module blueprint, and rollout architecture.",
  },
  {
    phase: "Deploy",
    detail:
      "Launch in controlled phases with migration, user enablement, and governance checks.",
  },
  {
    phase: "Optimize",
    detail:
      "Improve adoption, performance, and reporting through continuous feedback loops.",
  },
];

export default function SolutionPage() {
  return (
    <>
      <SolutionHeroSection />
      <section>
        <div className="section-pad bg-surface-50">
          <div className="container-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <div className="rounded-2xl border border-surface-200 bg-white p-4 sm:p-5">
                <div className="flex items-center gap-2 text-charcoal font-bold mb-1">
                  <Layers size={16} className="text-crimson" />
                  Modular by design
                </div>
                <p className="text-surface-500 text-sm">
                  Deploy capabilities as phased, business-ready modules.
                </p>
              </div>
              <div className="rounded-2xl border border-surface-200 bg-white p-4 sm:p-5">
                <div className="flex items-center gap-2 text-charcoal font-bold mb-1">
                  <BarChart3 size={16} className="text-crimson" />
                  Data-driven decisions
                </div>
                <p className="text-surface-500 text-sm">
                  Real-time insights for operational and leadership visibility.
                </p>
              </div>
              <div className="rounded-2xl border border-surface-200 bg-white p-4 sm:p-5">
                <div className="flex items-center gap-2 text-charcoal font-bold mb-1">
                  <ShieldCheck size={16} className="text-crimson" />
                  Governance aligned
                </div>
                <p className="text-surface-500 text-sm">
                  Built with controls for security, auditability, and compliance.
                </p>
              </div>
              <div className="rounded-2xl border border-surface-200 bg-white p-4 sm:p-5">
                <div className="flex items-center gap-2 text-charcoal font-bold mb-1">
                  <CheckCircle2 size={16} className="text-crimson" />
                  Enterprise adoption
                </div>
                <p className="text-surface-500 text-sm">
                  Rollout frameworks focused on change management and outcomes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {solutions.map(({ title, icon: Icon, summary, modules }) => (
                <article key={title} className="card p-6 sm:p-7">
                  <div className="w-11 h-11 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-crimson" />
                  </div>
                  <h2 className="text-lg font-bold text-charcoal mb-2">{title}</h2>
                  <p className="text-surface-500 text-sm leading-relaxed mb-4">
                    {summary}
                  </p>
                  <ul className="space-y-2">
                    {modules.map((item) => (
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
              <p className="section-tag mb-2">Implementation Model</p>
              <h2 className="section-title mb-2">
                Structured rollout for enterprise programs
              </h2>
              <p className="section-desc max-w-3xl">
                A practical framework for delivering configurable solutions with
                governance, speed, and operational continuity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {implementationModel.map((item, index) => (
                <article
                  key={item.phase}
                  className="rounded-2xl border border-surface-200 bg-surface-50 p-5"
                >
                  <p className="text-2xs font-bold uppercase tracking-[0.18em] text-crimson mb-2">
                    Phase {index + 1}
                  </p>
                  <h3 className="text-lg font-bold text-charcoal mb-2">
                    {item.phase}
                  </h3>
                  <p className="text-sm text-surface-500 leading-relaxed">
                    {item.detail}
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
                  Solution Workshop
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-2">
                  Need a tailored solution blueprint for your operations?
                </h3>
                <p className="text-white/75 text-sm sm:text-base leading-relaxed">
                  Let us map your operational workflows into a phased solution
                  architecture, implementation plan, and KPI-driven roadmap.
                </p>
              </div>
              <Link
                to="/contact"
                className="btn-primary self-start lg:self-auto"
              >
                Request Solution Demo <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
