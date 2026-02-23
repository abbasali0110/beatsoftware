import { Link } from "react-router-dom";
import { ArrowRight, Building2, Globe2, MapPin, Phone } from "lucide-react";

const indiaCapabilities = [
  "Full-stack engineering team",
  "R&D and product innovation",
];

const saudiCapabilities = [
  "Enterprise client handling",
  "Corporate mobility solutions",
  "On-site project coordination",
  "Arabic support capability",
];

export default function GlobalPresence() {
  return (
    <section>
      <div className="bg-charcoal-gradient text-white border-b border-white/10">
        <div className="container-xl py-16 sm:py-20">
          <span className="section-tag">Global Presence</span>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl leading-tight mb-5">
            Trusted delivery presence across India and Saudi Arabia
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            Beat Software operates through a strong engineering center in India
            and a client-focused operations setup in Saudi Arabia for enterprise
            execution.
          </p>
        </div>
      </div>

      <div className="section-pad bg-surface-50">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="card p-7 sm:p-8">
            <div className="inline-flex items-center gap-2 badge-crimson mb-4">
              <Globe2 size={14} />
              🇮🇳 India Development Center (India Office)
            </div>
            <h2 className="text-2xl font-bold text-charcoal mb-2">
              Beat Software Technologies
            </h2>
            <ul className="space-y-2 mb-6">
              {indiaCapabilities.map((item) => (
                <li
                  key={item}
                  className="text-surface-600 text-sm leading-relaxed flex items-start gap-2"
                >
                  <span className="text-crimson mt-1">*</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3 p-4 rounded-xl border border-surface-200 bg-white">
              <p className="flex items-start gap-2 text-sm text-surface-700">
                <MapPin size={16} className="text-crimson mt-0.5" />
                26/107, 3rd floor, LBS Nagar, Bangalore - 560013
              </p>
              <p className="flex items-start gap-2 text-sm text-surface-700">
                <Phone size={16} className="text-crimson mt-0.5" />
                9867721712, 8799346695
              </p>
            </div>
          </article>

          <article className="card p-7 sm:p-8">
            <div className="inline-flex items-center gap-2 badge-crimson mb-4">
              <Building2 size={14} />
              🇸🇦 Saudi Client Operations (Saudi Operations)
            </div>
            <h2 className="text-2xl font-bold text-charcoal mb-2">
              Enterprise Client Operations Hub
            </h2>
            <ul className="space-y-2 mb-6">
              {saudiCapabilities.map((item) => (
                <li
                  key={item}
                  className="text-surface-600 text-sm leading-relaxed flex items-start gap-2"
                >
                  <span className="text-crimson mt-1">*</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-3 p-4 rounded-xl border border-surface-200 bg-white">
              <p className="flex items-start gap-2 text-sm text-surface-700">
                <MapPin size={16} className="text-crimson mt-0.5" />
                13th street, Makkah road, Al khobar - 34623
              </p>
              <p className="flex items-start gap-2 text-sm text-surface-700">
                <Phone size={16} className="text-crimson mt-0.5" />
                +966553776285
              </p>
            </div>
          </article>
        </div>

        <div className="container-xl mt-8">
          <div className="rounded-2xl bg-white border border-surface-200 p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <p className="text-charcoal text-2xl font-bold mb-2">
                Need support in India or Saudi Arabia?
              </p>
              <p className="text-surface-500 text-sm sm:text-base">
                Our teams are ready to support enterprise product delivery and
                on-ground coordination.
              </p>
            </div>
            <Link to="/contact" className="btn-primary self-start lg:self-auto">
              Contact Global Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
