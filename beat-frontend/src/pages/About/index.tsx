import { Link } from "react-router-dom";
import { ArrowRight, Building2, Eye, ShieldCheck, Target } from "lucide-react";

const aboutSections = [
  {
    title: "Company Overview",
    icon: Building2,
    desc: "Beat Software Technologies is a software company focused on scalable enterprise-grade product engineering and digital transformation.",
  },
  {
    title: "Vision & Mission",
    icon: Target,
    desc: "Our vision is to build reliable software ecosystems for modern businesses. Our mission is to deliver measurable outcomes through practical engineering excellence.",
  },
  {
    title: "Leadership",
    icon: Eye,
    desc: "Our leadership team combines product strategy, software architecture, and delivery governance to guide business-critical initiatives.",
  },
  {
    title: "Compliance & Governance",
    icon: ShieldCheck,
    desc: "We follow secure delivery practices, transparent processes, and governance controls to ensure quality and operational accountability.",
  },
];

export default function About() {
  return (
    <section>
      <div className="bg-charcoal-gradient text-white border-b border-white/10">
        <div className="container-xl py-16 sm:py-20">
          <span className="section-tag">About Us</span>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl leading-tight mb-5">
            Company profile, leadership, and governance foundations
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            This page is structured according to your sitemap to provide a clear
            and professional company overview.
          </p>
        </div>
      </div>

      <div className="section-pad bg-surface-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {aboutSections.map(({ title, icon: Icon, desc }) => (
              <article key={title} className="card p-6 sm:p-7">
                <div className="w-11 h-11 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-crimson" />
                </div>
                <h2 className="text-xl font-bold text-charcoal mb-2">
                  {title}
                </h2>
                <p className="text-surface-500 text-sm leading-relaxed">
                  {desc}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-white border border-surface-200 p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <p className="text-charcoal text-2xl font-bold mb-2">
                Need more company details?
              </p>
              <p className="text-surface-500 text-sm sm:text-base">
                Contact us for corporate profile, leadership connect, and
                governance documentation.
              </p>
            </div>
            <Link to="/contact" className="btn-primary self-start lg:self-auto">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
