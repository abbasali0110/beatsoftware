import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Cpu, Database, GitBranch, MonitorSmartphone } from 'lucide-react';

const technologies = [
  { title: 'Frontend', icon: MonitorSmartphone, stack: 'React, TypeScript, Tailwind CSS' },
  { title: 'Backend', icon: Database, stack: 'Node.js, Java, .NET, SQL APIs' },
  { title: 'Cloud', icon: Cloud, stack: 'AWS, Azure, scalable cloud architectures' },
  { title: 'DevOps', icon: GitBranch, stack: 'CI/CD, monitoring, release automation' },
  { title: 'Messaging Systems', icon: Cpu, stack: 'Event-driven integrations and queue systems' },
];

export default function Technologies() {
  return (
    <section>
      <div className="bg-charcoal-gradient text-white border-b border-white/10">
        <div className="container-xl py-16 sm:py-20">
          <span className="section-tag">Technologies</span>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl leading-tight mb-5">Technology stack and engineering foundations</h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            Technology capabilities grouped exactly as your sitemap.
          </p>
        </div>
      </div>

      <div className="section-pad bg-surface-50">
        <div className="container-xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {technologies.map(({ title, icon: Icon, stack }) => (
            <article key={title} className="card p-6">
              <div className="w-11 h-11 rounded-xl bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-4">
                <Icon size={20} className="text-crimson" />
              </div>
              <h2 className="text-lg font-bold text-charcoal mb-2">{title}</h2>
              <p className="text-surface-500 text-sm leading-relaxed">{stack}</p>
            </article>
          ))}
        </div>

        <div className="container-xl mt-10">
          <Link to="/contact" className="btn-primary">
            Explore Technology Fit <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
