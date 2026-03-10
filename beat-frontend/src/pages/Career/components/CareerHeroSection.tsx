import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CareerHeroSection = () => {
  return (
    <section className="relative w-full -mt-[72px] h-[100svh] min-h-[620px] bg-charcoal-dark text-white overflow-hidden flex flex-col">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
        style={{
          backgroundImage: "url('assets/images/industry/giga.jpg')",
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

      <div className="container-xl relative z-10 flex-1 flex items-end py-12 sm:py-16 lg:py-20">
        <div className="w-full">
          <div className="section-tag inline-flex items-center gap-2 rounded-full border border-crimson/30 bg-crimson/10 px-3 py-1.5 mb-6">
            <Sparkles size={12} />
            Career Opportunities 2026
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[0.95] max-w-5xl">
            Build enterprise software that drives
            <span className="block text-crimson">real-world outcomes.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-white/80 text-base sm:text-lg leading-relaxed">
            Join a team of engineers, architects, and delivery professionals
            working on business-critical systems across regulated and high-scale
            operating environments.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a href="#roles" className="btn-primary">
              View Open Roles <ArrowRight size={16} />
            </a>
            <Link to="/career/apply" className="btn-ghost">
              Submit Your Profile
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHeroSection;
