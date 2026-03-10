import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactUsSection() {
  return (
    <section id="contact-us" className="bg-brand-navy py-14 sm:py-16">
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
              Speak with our team about your business model, systems landscape,
              and transformation priorities.
            </p>
          </div>

          <Link to="/contact" className="btn-primary btn-lg whitespace-nowrap">
            Book a Demo <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
