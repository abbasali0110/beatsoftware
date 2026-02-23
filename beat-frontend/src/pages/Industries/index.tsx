import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Banknote,
  Building2,
  Factory,
  GraduationCap,
  Home,
  Landmark,
  Plane,
  ShoppingBag,
  Stethoscope,
  Truck,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

interface Stat {
  value: string;
  label: string;
}

interface IndustryItem {
  title: string;
  icon: LucideIcon;
  intro: string;
  focus: string[];
  outcome: string;
}

const stats: Stat[] = [
  { value: '10+', label: 'Industries served' },
  { value: '50+', label: 'Projects delivered' },
  { value: '8+', label: 'Years of domain experience' },
  { value: '3', label: 'Global delivery regions' },
];

const industries: IndustryItem[] = [
  {
    title: 'Travel & Tourism',
    icon: Plane,
    intro:
      'We help travel operators, destination businesses, and service providers digitize booking journeys and improve customer experience consistency.',
    focus: [
      'Centralized booking and reservation workflows',
      'Real-time inventory, pricing, and package controls',
      'Partner and vendor integration through secure APIs',
    ],
    outcome:
      'Result: faster response times, better service visibility, and stronger conversion across digital channels.',
  },
  {
    title: 'Construction',
    icon: Wrench,
    intro:
      'We support construction companies with ERP-led project governance and operational visibility across planning, procurement, and delivery phases.',
    focus: [
      'Project planning, milestone tracking, and reporting',
      'Budget, vendor, and material lifecycle controls',
      'Site-level execution dashboards for leadership teams',
    ],
    outcome:
      'Result: improved project governance, reduced delays, and better control over cost and execution.',
  },
  {
    title: 'Education',
    icon: GraduationCap,
    intro:
      'We build institutional systems for schools, colleges, and training organizations to modernize administration and communication workflows.',
    focus: [
      'Admissions, fee, attendance, and examination modules',
      'Academic operations and stakeholder communication tools',
      'Role-based dashboards for administration and faculty',
    ],
    outcome:
      'Result: streamlined operations, lower manual dependency, and transparent institutional reporting.',
  },
  {
    title: 'Healthcare',
    icon: Stethoscope,
    intro:
      'We enable healthcare organizations to digitize critical processes while maintaining structured and secure operational controls.',
    focus: [
      'Patient process management and service coordination',
      'Operational reporting and management dashboards',
      'Integration-ready data architecture for healthcare systems',
    ],
    outcome:
      'Result: improved service efficiency, better operational oversight, and stronger continuity of care workflows.',
  },
  {
    title: 'Retail & E-commerce',
    icon: ShoppingBag,
    intro:
      'We help retailers and online sellers build robust commerce platforms with end-to-end visibility across catalog, orders, and fulfillment.',
    focus: [
      'Product catalog, pricing engine, and inventory control',
      'Order lifecycle management and fulfillment tracking',
      'Customer account portals and loyalty program integration',
    ],
    outcome:
      'Result: higher order accuracy, reduced manual overhead, and consistent shopping experiences across channels.',
  },
  {
    title: 'Finance & Banking',
    icon: Banknote,
    intro:
      'We design workflow-driven systems for financial institutions and fintech companies that demand accuracy, auditability, and regulatory alignment.',
    focus: [
      'Transaction processing and reconciliation workflows',
      'Compliance-ready reporting and audit trail management',
      'Secure client onboarding and KYC process automation',
    ],
    outcome:
      'Result: reduced operational risk, faster compliance cycles, and improved back-office process integrity.',
  },
  {
    title: 'Logistics & Supply Chain',
    icon: Truck,
    intro:
      'We deliver end-to-end visibility platforms for logistics operators managing freight, last-mile, and warehouse operations at scale.',
    focus: [
      'Shipment tracking, route optimization, and fleet visibility',
      'Warehouse operations, inventory, and dispatch coordination',
      'Vendor and carrier data integration through API layer',
    ],
    outcome:
      'Result: fewer fulfillment gaps, better delivery SLA adherence, and real-time operational visibility.',
  },
  {
    title: 'Real Estate & Property',
    icon: Home,
    intro:
      'We build property management and transaction platforms for developers, agents, and property firms managing multi-location portfolios.',
    focus: [
      'Property listing, lead capture, and enquiry workflows',
      'Lease, payment, and tenancy lifecycle management',
      'Asset reporting dashboards for portfolio oversight',
    ],
    outcome:
      'Result: centralized portfolio control, reduced revenue leakage, and faster deal-to-closure cycles.',
  },
  {
    title: 'Manufacturing',
    icon: Factory,
    intro:
      'We provide manufacturers with production and supply-chain management systems that connect the shop floor to executive reporting.',
    focus: [
      'Production scheduling, work order, and quality control modules',
      'Raw material procurement and inventory replenishment workflows',
      'OEE reporting and downtime analytics for plant leadership',
    ],
    outcome:
      'Result: improved throughput, reduced waste, and better alignment between production targets and actual output.',
  },
  {
    title: 'IT Services',
    icon: Building2,
    intro:
      'We partner with IT and digital companies to build scalable delivery platforms and optimize execution across teams and clients.',
    focus: [
      'Project and resource management automation',
      'Service delivery workflows and reporting mechanisms',
      'Cloud-ready architecture for growth-stage operations',
    ],
    outcome:
      'Result: enhanced delivery predictability, faster execution cycles, and improved client service quality.',
  },
  {
    title: 'Government',
    icon: Landmark,
    intro:
      'We contribute to public-sector digitization initiatives by designing process-oriented systems with accountability and governance in mind.',
    focus: [
      'Workflow standardization and service digitization',
      'Citizen-centric process visibility and tracking',
      'Administrative reporting aligned to governance requirements',
    ],
    outcome:
      'Result: stronger process transparency, improved service responsiveness, and better institutional control.',
  },
];

function IndustriesHero() {
  return (
    <div
      className="relative text-white border-b border-white/10 bg-cover bg-center min-h-[520px] sm:min-h-[600px] flex items-center"
      style={{ backgroundImage: "url('assets/images/industry/automobile.avif')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/50 to-black/35" />
      <div className="container-xl py-20 sm:py-28 relative z-10">
        <div className="max-w-4xl bg-charcoal/28 backdrop-blur-[1px] rounded-2xl p-4 sm:p-6">
          <span className="inline-block text-white text-xs font-bold uppercase tracking-[0.2em] mb-3 bg-crimson/85 px-3 py-1 rounded-full">
            Industries
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-4xl leading-tight mb-5 text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.45)]">
            Industry-specific software expertise built for operational impact
          </h1>
          <p className="text-white/92 text-base sm:text-lg max-w-3xl leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
            Beat Software delivers domain-aligned digital systems that reflect real-world business workflows,
            compliance expectations, and executive reporting needs.
          </p>
        </div>
      </div>
    </div>
  );
}

function IndustriesStats() {
  return (
    <div className="bg-crimson">
      <div className="container-xl py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{value}</p>
              <p className="text-white/80 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ApproachSection() {
  return (
    <div className="container-xl mb-10">
      <div className="rounded-2xl border border-surface-200 bg-white p-7 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-charcoal mb-3">How we approach each industry</h2>
        <p className="text-surface-600 text-sm sm:text-base leading-relaxed max-w-4xl">
          We begin with business process discovery, identify operational bottlenecks, and translate them
          into secure, scalable software modules. Our delivery model combines practical engineering,
          domain context, and governance-ready reporting for leadership teams.
        </p>
      </div>
    </div>
  );
}

function IndustryCard({ title, icon: Icon, intro, focus, outcome }: IndustryItem) {
  return (
    <article className="card p-6 sm:p-7">
      <div className="w-11 h-11 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-4">
        <Icon size={20} className="text-crimson" />
      </div>
      <h2 className="text-xl font-bold text-charcoal mb-3">{title}</h2>
      <p className="text-surface-600 text-sm leading-relaxed mb-4">{intro}</p>

      <p className="text-charcoal text-sm font-semibold mb-2">Solution focus:</p>
      <ul className="space-y-2 mb-4">
        {focus.map((item) => (
          <li key={item} className="text-surface-500 text-sm leading-relaxed flex gap-2">
            <span className="text-crimson mt-[2px]">*</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="text-surface-700 text-sm font-medium">{outcome}</p>
    </article>
  );
}

function IndustriesGrid() {
  return (
    <div className="container-xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {industries.map((industry) => (
        <IndustryCard key={industry.title} {...industry} />
      ))}
    </div>
  );
}

function IndustryCTA() {
  return (
    <div className="container-xl mt-10">
      <div className="rounded-2xl border border-surface-200 bg-white p-7 sm:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        <div>
          <h3 className="text-2xl font-bold text-charcoal mb-2">Need a domain-specific solution discussion?</h3>
          <p className="text-surface-500 text-sm sm:text-base leading-relaxed">
            Share your industry context and operational priorities. Our team will propose a practical solution roadmap.
          </p>
        </div>
        <Link to="/contact" className="btn-primary self-start lg:self-auto">
          Discuss Industry Needs <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default function Industries() {
  return (
    <section>
      <IndustriesHero />
      <IndustriesStats />

      <div className="section-pad bg-surface-50">
        <ApproachSection />
        <IndustriesGrid />
        <IndustryCTA />
      </div>
    </section>
  );
}
