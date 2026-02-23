import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface InfoPageTemplateProps {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
}

export default function InfoPageTemplate({
  eyebrow,
  title,
  description,
  highlights,
}: InfoPageTemplateProps) {
  return (
    <section>
      <div className="bg-charcoal-gradient text-white border-b border-white/10">
        <div className="container-xl py-16 sm:py-20">
          <span className="section-tag">{eyebrow}</span>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl leading-tight mb-5">{title}</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="section-pad bg-surface-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {highlights.map((item) => (
              <article key={item} className="card p-6">
                <h2 className="text-lg font-bold text-charcoal mb-2">{item}</h2>
                <p className="text-surface-500 text-sm leading-relaxed">
                  Built with business-first delivery standards and measurable outcomes.
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-white border border-surface-200 p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <p className="text-charcoal text-2xl font-bold mb-2">Need help with this area?</p>
              <p className="text-surface-500 text-sm sm:text-base">
                Talk to Beat Software and get a practical execution plan tailored to your goals.
              </p>
            </div>
            <Link to="/contact" className="btn-primary self-start lg:self-auto">
              Talk to Our Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
