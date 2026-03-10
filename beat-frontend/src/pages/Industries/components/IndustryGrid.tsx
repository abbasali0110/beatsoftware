import { Banknote, CheckCircle2, Factory, Landmark, ShoppingBag, Wrench, Zap, type LucideIcon } from "lucide-react";

interface MegaCategory {
  title: string;
  icon: LucideIcon;
  description: string;
  industries: string[];
}

const megaCategories: MegaCategory[] = [
  {
    title: "Manufacturing & Industrial",
    icon: Factory,
    description:
      "Optimize production, manage complex supply chains, and drive innovation with real-time data and IoT integration for discrete and process manufacturing.",
    industries: [
      "Discrete Manufacturing",
      "High Tech",
      "Industrial Manufacturing",
      "Aerospace & Defense",
      "Automotive",
      "Process Manufacturing",
    ],
  },
  {
    title: "Energy & Utilities",
    icon: Zap,
    description:
      "Navigate market volatility and the energy transition with robust tools for asset management, regulatory compliance, and sustainable operations.",
    industries: [
      "Energy & Natural Resources",
      "Chemicals",
      "Oil, Gas, and Energy",
      "Utilities",
      "Mining & Metals",
    ],
  },
  {
    title: "Services",
    icon: Wrench,
    description:
      "Empower your service-based business with solutions for project management, resource optimization, and client engagement to ensure profitability.",
    industries: [
      "Professional Services",
      "Transport & Logistics",
      "Engineering, Construction & Operations",
      "Passenger Travel & Leisure",
      "Media & Entertainment",
    ],
  },
  {
    title: "Consumer & Life Sciences",
    icon: ShoppingBag,
    description:
      "Adapt to changing consumer demands and regulatory landscapes with enhanced supply chain visibility, personalized marketing, and strict compliance.",
    industries: [
      "Consumer Products",
      "Wholesale Distribution",
      "Life Sciences & Pharma",
      "Retail",
      "Agribusiness",
    ],
  },
  {
    title: "Public Services",
    icon: Landmark,
    description:
      "Deliver better outcomes for citizens with modern, secure, and scalable solutions for government, healthcare, and education to improve efficiency.",
    industries: [
      "Healthcare Providers",
      "Higher Education",
      "Federal and National Government",
    ],
  },
  {
    title: "Financial Services",
    icon: Banknote,
    description:
      "Drive growth and manage risk in a dynamic financial world with our secure, compliant, and customer-centric platform for banking and insurance.",
    industries: ["Banking & Capital Markets", "Insurance"],
  },
];

export default function IndustryGrid() {
  return (
    <section id="industries-grid" className="bg-white py-16 sm:py-20">
      <div className="container-xl">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-crimson mb-3">
            Enterprise Coverage
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
            Industry Mega-Categories
          </h2>
          <p className="mt-4 text-surface-600 text-base leading-relaxed">
            Purpose-built ERP and SaaS capabilities for data-intensive
            operations, multi-entity supply chains, and compliance-driven
            execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {megaCategories.map(({ title, icon: Icon, description, industries }) => (
            <article
              key={title}
              className="group rounded-2xl border border-surface-200 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-crimson/50 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-crimson/[0.08] border border-crimson/[0.18] flex items-center justify-center">
                  <Icon size={18} className="text-crimson" />
                </div>
                <h3 className="text-lg font-bold text-charcoal leading-tight">
                  {title}
                </h3>
              </div>

              <p className="text-sm text-surface-600 leading-relaxed mb-5">
                {description}
              </p>

              <ul className="space-y-2.5">
                {industries.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-surface-700 leading-relaxed"
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
    </section>
  );
}
