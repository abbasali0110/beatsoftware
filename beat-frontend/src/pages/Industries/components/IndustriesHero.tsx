import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  Factory,
  Globe,
  GraduationCap,
  Landmark,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  Truck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const domainIcons: Array<{ icon: LucideIcon; label: string }> = [
  { icon: Banknote, label: "Finance" },
  { icon: Wrench, label: "Infra" },
  { icon: GraduationCap, label: "Education" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Truck, label: "Logistics" },
  { icon: Factory, label: "Mfg." },
  { icon: Landmark, label: "Public" },
];

const heroCoverageItems = [
  "Sovereign Banking & Financial Services",
  "National Infrastructure & Capital Projects Management",
  "Institutional Education & Digital Campuses",
  "Healthcare Networks & Clinical Operations Management",
  "Omnichannel Commerce & Retail Intelligence",
  "Logistics & Supply Chain Control Towers",
];

function IndustriesHero() {
  const total = domainIcons.length + 1;
  const coverageTotal = heroCoverageItems.length + 1;
  const [count, setCount] = useState(0);
  const [coverageCount, setCoverageCount] = useState(0);

  useEffect(() => {
    const delay = count < total ? 360 : 2350;
    const t = setTimeout(
      () => setCount((c) => (c >= total ? 0 : c + 1)),
      delay,
    );
    return () => clearTimeout(t);
  }, [count, total]);

  useEffect(() => {
    const delay = coverageCount < coverageTotal ? 420 : 2000;
    const t = setTimeout(
      () => setCoverageCount((c) => (c >= coverageTotal ? 0 : c + 1)),
      delay,
    );
    return () => clearTimeout(t);
  }, [coverageCount, coverageTotal]);

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
      <div className="absolute top-[72px] inset-x-0 h-px bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />

      <div className="container-xl relative z-10 flex-1 flex items-end py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 w-full items-center">
          <div className="lg:col-span-7 xl:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-crimson/30 bg-crimson/[0.12] text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-crimson" />
              </span>
              Multi-Region Compliance Active
            </div>

            <h1 className="font-extrabold leading-[0.93] tracking-tight mb-7">
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-white">
                Transforming Industries with
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl bg-crimson-gradient bg-clip-text text-transparent mt-3">
                AI-Native Intelligence.
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <Link to="/contact" className="btn-primary btn-lg">
                Discuss Your Industry Needs
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck size={13} className="text-crimson" />
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/80">
                  Vision 2030 Ready
                </span>
              </div>
              <span className="hidden sm:block w-px h-4 bg-white/15" />
              <div className="flex items-center gap-2">
                <Globe size={13} className="text-crimson" />
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/80">
                  Pan-India Scale
                </span>
              </div>
              <span className="hidden sm:block w-px h-4 bg-white/15" />
              <div className="flex items-center gap-2">
                <Zap size={13} className="text-crimson" />
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/80">
                  Zero-Lag Systems
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 xl:col-span-6 hidden lg:flex items-center justify-end">
            <ul className="space-y-4">
              {heroCoverageItems.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-center gap-3 transition-all duration-400 ease-out ${
                    i < coverageCount
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1"
                  }`}
                >
                  <CheckCircle2 size={18} className="text-crimson shrink-0" />
                  <span className="font-medium text-white/90">{item}</span>
                </li>
              ))}
              <li
                className={`pl-9 font-medium transition-all duration-400 ease-out ${
                  coverageCount > heroCoverageItems.length
                    ? "opacity-100 translate-y-0 text-white/90"
                    : "opacity-0 translate-y-1 text-white/40"
                }`}
              >
                ...and 5 more.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustriesHero;
