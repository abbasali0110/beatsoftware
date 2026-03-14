import { ArrowRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const GlobalPresenceHeroSection = () => {
  return (
    <section className="relative w-full -mt-[72px] h-[100svh] min-h-[620px] bg-charcoal-dark text-white overflow-hidden flex flex-col">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
        style={{ backgroundImage: "url('/images/industry/giga.jpg')" }}
      />

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-[#1a1f2e]/60" />
      <div className="absolute inset-y-0 left-0 w-full lg:w-[80%] bg-gradient-to-r from-[#1a1f2e]/85 via-[#1a1f2e]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent" />
      <div className="absolute top-[72px] inset-x-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #DC143C 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Crimson ambient glows */}
      <div className="absolute top-[-15%] right-[-8%] w-[640px] h-[640px] bg-crimson/[0.10] rounded-full blur-[160px]" />
      <div className="absolute bottom-[15%] left-[-12%] w-[420px] h-[420px] bg-crimson/[0.06] rounded-full blur-[130px]" />

      {/* Content — anchored to bottom-left */}
      <div className="relative z-10 flex-1 flex items-end pb-14 sm:pb-16">
        <div className="w-full pl-8 sm:pl-14 lg:pl-20 xl:pl-28 pr-4 sm:pr-6 lg:pr-8">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-crimson/30 bg-crimson/10 px-4 py-2 mb-8 backdrop-blur-sm">
            <Globe size={14} className="text-crimson-light" />
            <span className="text-sm font-medium tracking-wide text-crimson-light uppercase">
              2 Markets · 11 Domains · 1 Standard
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[0.94] max-w-4xl">
            Compliance-native software for
            <span className="block bg-crimson-gradient bg-clip-text text-transparent mt-2 pb-1">
              two high-growth markets.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-white/80 text-base sm:text-lg leading-relaxed">
            Operating exclusively in{" "}
            <span className="text-white font-semibold">
              Saudi Arabia and India
            </span>
            . We bypass generalizations to build precision-engineered,
            market-specific platforms.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              to="/contact"
              className="btn-primary shadow-glow hover:shadow-glow-hover transition-shadow"
            >
              Start a Domain Conversation <ArrowRight size={16} />
            </Link>
            <Link to="/portfolio" className="btn-ghost">
              View Delivered Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceHeroSection;



