import { Sparkles } from "lucide-react";

const TechHeroSection = () => {
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
            Our Technology Stack 2026
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[0.95] max-w-5xl">
            Resilient, scalable, and modern engineering for
            <span className="block text-crimson">
              mission-critical digital products.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-white/80 text-base sm:text-lg leading-relaxed">
            We operate as an innovation partner, not a commodity dev shop. Every
            stack decision is built for future-proof architectures, sub-second
            latency, and secure, ethical AI implementation at enterprise scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechHeroSection;
