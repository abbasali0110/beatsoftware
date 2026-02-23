import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Cpu, LayoutPanelTop } from 'lucide-react';

const insightTracks = [
  'Engineering Playbooks',
  'Architecture and Scalability Notes',
  'Product and UX Thinking',
  'AI, Cloud, and DevOps Updates',
];

export default function Insights() {
  return (
    <section>
      <div className="bg-charcoal-gradient text-white border-b border-white/10">
        <div className="container-xl py-16 sm:py-20">
          <span className="section-tag">Insights / Blog</span>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl leading-tight mb-5">
            Insights, articles, and technology viewpoints
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            A structured insights hub for engineering, product strategy, and digital execution knowledge.
          </p>
        </div>
      </div>

      <div className="section-pad bg-surface-50">
        <div className="container-xl grid grid-cols-1 md:grid-cols-2 gap-5">
          {insightTracks.map((track, index) => (
            <article key={track} className="card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center">
                  {index % 3 === 0 ? <BookOpen size={18} className="text-crimson" /> : index % 3 === 1 ? <Cpu size={18} className="text-crimson" /> : <LayoutPanelTop size={18} className="text-crimson" />}
                </div>
                <h2 className="text-lg font-bold text-charcoal">{track}</h2>
              </div>
              <p className="text-surface-500 text-sm leading-relaxed">
                Curated articles and implementation perspectives from the Beat engineering and product teams.
              </p>
            </article>
          ))}
        </div>

        <div className="container-xl mt-10">
          <Link to="/contact" className="btn-primary">
            Subscribe for Updates <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
