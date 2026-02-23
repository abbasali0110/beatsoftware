import { Link } from 'react-router-dom';
import { ArrowRight, Bus, Building2, GraduationCap, Hotel, Truck, UtensilsCrossed } from 'lucide-react';

const solutions = [
  { title: 'Travel & Booking Systems', icon: Bus },
  { title: 'Fleet Management', icon: Truck },
  { title: 'Restaurant Management', icon: UtensilsCrossed },
  { title: 'HR & Manpower ERP', icon: Building2 },
  { title: 'Educational ERP', icon: GraduationCap },
  { title: 'Construction ERP', icon: Hotel },
];

export default function Solutions() {
  return (
    <section>
      <div className="bg-charcoal-gradient text-white border-b border-white/10">
        <div className="container-xl py-16 sm:py-20">
          <span className="section-tag">Solutions</span>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl leading-tight mb-5">Industry-ready software solutions</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            Purpose-built solutions mapped to your exact sitemap categories.
          </p>
        </div>
      </div>

      <div className="section-pad bg-surface-50">
        <div className="container-xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {solutions.map(({ title, icon: Icon }) => (
            <article key={title} className="card p-6">
              <div className="w-11 h-11 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-4">
                <Icon size={20} className="text-crimson" />
              </div>
              <h2 className="text-lg font-bold text-charcoal mb-2">{title}</h2>
              <p className="text-surface-500 text-sm leading-relaxed">
                Configurable software modules designed for scalability and operational control.
              </p>
            </article>
          ))}
        </div>

        <div className="container-xl mt-10">
          <Link to="/contact" className="btn-primary">
            Request Solution Demo <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
