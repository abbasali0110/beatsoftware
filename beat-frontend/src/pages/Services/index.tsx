import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Cog, GitBranch, PlugZap, Server, Shield } from 'lucide-react';

const services = [
  { title: 'Enterprise Software Development', icon: Server },
  { title: 'Cloud & DevOps', icon: Cloud },
  { title: 'Microservices Architecture', icon: GitBranch },
  { title: 'API & Integration Services', icon: PlugZap },
  { title: 'SaaS Development', icon: Cog },
  { title: 'Maintenance & AMC', icon: Shield },
];

export default function Services() {
  return (
    <section>
      <div className="bg-charcoal-gradient text-white border-b border-white/10">
        <div className="container-xl py-16 sm:py-20">
          <span className="section-tag">Services</span>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl leading-tight mb-5">Core engineering services</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            Structured exactly as your sitemap with complete software service coverage.
          </p>
        </div>
      </div>

      <div className="section-pad bg-surface-50">
        <div className="container-xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {services.map(({ title, icon: Icon }) => (
            <article key={title} className="card p-6">
              <div className="w-11 h-11 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-4">
                <Icon size={20} className="text-crimson" />
              </div>
              <h2 className="text-lg font-bold text-charcoal mb-2">{title}</h2>
              <p className="text-surface-500 text-sm leading-relaxed">
                Delivery-focused implementation tailored to enterprise business requirements.
              </p>
            </article>
          ))}
        </div>

        <div className="container-xl mt-10">
          <Link to="/contact" className="btn-primary">
            Discuss Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
