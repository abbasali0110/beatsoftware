import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function CtaBand() {
  const { pathname } = useLocation();
  const isIndustriesPage = pathname.startsWith("/industries");
  const isTechnologiesPage = pathname.startsWith("/technologies");

  if (isIndustriesPage) {
    return (
      <section
        id="contact-us"
        className="border-b border-white/10 bg-brand-navy py-14 sm:py-16"
      >
        <div className="container-xl">
          <div className="rounded-3xl border border-white/[0.12] bg-brand-panel p-7 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-crimson mb-3">
                Contact Us
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Ready to modernize your industry operations?
              </h3>
              <p className="mt-3 text-white/70 text-sm sm:text-base leading-relaxed">
                Speak with our team about your business model, systems
                landscape, and transformation priorities.
              </p>
            </div>

            <Link
              to="/contact"
              className="btn-primary btn-lg whitespace-nowrap"
            >
              Book a Demo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (isTechnologiesPage) {
    return (
      <section className="border-b border-white/10 bg-slate-950 text-slate-100">
        <div className="border-t border-white/10 bg-slate-900/55">
          <div className="container-xl py-12 sm:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-300 mb-2">
                Architecture Consultation
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
                Build a stack strategy your team can scale for the next decade.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We map your product roadmap to an execution-ready architecture,
                covering reliability, cost, security, and AI readiness.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="btn-primary btn-lg whitespace-nowrap"
              >
                Book a Stack Workshop <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-lg border border-indigo-400/35 bg-indigo-500/10 px-5 py-3 text-sm font-semibold text-indigo-200 hover:bg-indigo-500/20 transition-colors whitespace-nowrap"
              >
                Explore Engineering Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="border-b border-white/10 bg-brand-panel">
      <div className="container-xl py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="max-w-xl">
          <p className="text-2xs font-extrabold uppercase tracking-[0.22em] text-crimson mb-2">
            Scale with Confidence
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            Ready to architect your future?
          </h2>
          <p className="text-surface-500 text-sm mt-2 leading-relaxed">
            500+ enterprise systems delivered. A 90-minute strategy session -
            documented, structured, and yours to keep. No pitch. No commitment.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link to="/contact" className="btn-primary btn-lg whitespace-nowrap">
            Book a Strategy Session <ArrowRight size={16} />
          </Link>
          <Link to="/portfolio" className="btn-ghost btn-lg whitespace-nowrap">
            View Case Studies
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CtaBand;
