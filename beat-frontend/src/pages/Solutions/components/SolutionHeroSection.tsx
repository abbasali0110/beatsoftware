import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionHeroSection = () => {
  return (
    <section className="relative w-full -mt-[72px] h-[100svh] min-h-[620px] bg-charcoal-dark text-white overflow-hidden flex flex-col">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
        style={{
          backgroundImage: "url('assets/images/industry/automobile.avif')",
        }}
      />

      <div className="absolute inset-0 bg-[#1a1f2e]/60" />
      <div className="absolute inset-y-0 left-0 w-full lg:w-[80%] bg-gradient-to-r from-[#1a1f2e]/80 via-[#1a1f2e]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent" />
      <div className="absolute top-[72px] inset-x-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #DC143C 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="absolute top-[-15%] right-[-8%] w-[640px] h-[640px] bg-crimson/[0.10] rounded-full blur-[160px]" />
      <div className="absolute bottom-[15%] left-[-12%] w-[420px] h-[420px] bg-crimson/[0.06] rounded-full blur-[130px]" />

      <div className="relative z-10 flex-1 flex items-end pb-14 sm:pb-16">
        <div className="w-full pl-8 sm:pl-14 lg:pl-20 xl:pl-28 pr-4 sm:pr-6 lg:pr-8">
          <div className="max-w-4xl">
            <div className="section-tag inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/10 px-3 py-1.5 mb-6">
              <Sparkles size={12} />
              Industry Solutions 2026
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[0.94] max-w-5xl">
            Enterprise solutions engineered for
            <span className="block text-crimson">
              operational control, growth, and compliance.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-white/80 text-base sm:text-lg leading-relaxed">
            We design and deliver configurable digital solutions that help
            organizations standardize operations, improve visibility, and scale
            confidently across teams and regions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link to="/contact" className="btn-primary">
              Request Solution Demo <ArrowRight size={16} />
            </Link>
            <Link to="/portfolio" className="btn-ghost">
              View Solution Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHeroSection;
