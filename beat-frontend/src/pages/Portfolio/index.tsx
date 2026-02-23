import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, BarChart3, Layers3 } from 'lucide-react';

const caseStudies = [
  'Travel Platform Modernization',
  'Fleet Workflow Digitization',
  'Restaurant Operations Suite',
  'ERP Transformation Program',
];

export default function Portfolio() {
  return (
    <section>
      <div className="bg-charcoal-gradient text-white border-b border-white/10">
        <div className="container-xl py-16 sm:py-20">
          <span className="section-tag">Portfolio / Case Studies</span>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl leading-tight mb-5">
            Delivery portfolio with practical business outcomes
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            Explore selected case studies across software modernization and enterprise operations.
          </p>
        </div>
      </div>

      <div className="section-pad bg-surface-50">
        <div className="container-xl grid grid-cols-1 md:grid-cols-2 gap-5">
          {caseStudies.map((item, index) => (
            <article key={item} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center">
                  {index % 3 === 0 ? <Briefcase size={18} className="text-crimson" /> : index % 3 === 1 ? <Layers3 size={18} className="text-crimson" /> : <BarChart3 size={18} className="text-crimson" />}
                </div>
                <h2 className="text-lg font-bold text-charcoal">{item}</h2>
              </div>
              <p className="text-surface-500 text-sm leading-relaxed">
                Scope, architecture, execution approach, and measurable impact documentation available on request.
              </p>
            </article>
          ))}
        </div>

        <div className="container-xl mt-10">
          <Link to="/contact" className="btn-primary">
            Request Case Studies <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

