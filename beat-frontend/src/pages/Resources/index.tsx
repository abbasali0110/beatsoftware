import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Download, FileText } from 'lucide-react';

type ResourceMeta = {
  title: string;
  eyebrow: string;
  description: string;
  highlights: string[];
};

const resources: Record<string, ResourceMeta> = {
  'delivery-standards-brief': {
    title: 'Delivery Standards Brief',
    eyebrow: 'Resource Library',
    description:
      'A concise breakdown of the governance, reporting, and delivery standards we apply across enterprise engagements.',
    highlights: [
      'Governance checkpoints by phase',
      'RAID and escalation model',
      'Milestone and quality controls',
      'Client reporting format',
    ],
  },
  'pre-build-audit-guide': {
    title: 'Pre-Build Audit Guide',
    eyebrow: 'Discovery Resource',
    description:
      'How we validate business requirements, architecture constraints, and delivery risks before development starts.',
    highlights: [
      'Audit scope and timeline',
      'Stakeholder workshop structure',
      'Risk scoring framework',
      'Decision-ready output checklist',
    ],
  },
  'domain-solution-profiles': {
    title: 'Domain Solution Profiles',
    eyebrow: 'Industry Resource',
    description:
      'Solution snapshots across sectors, including architecture considerations, operational outcomes, and rollout approach.',
    highlights: [
      'Travel and booking profile',
      'Fleet and logistics profile',
      'ERP and operations profile',
      'Rollout and adoption considerations',
    ],
  },
  'impact-report-2024': {
    title: 'Impact Report 2024',
    eyebrow: 'Performance Resource',
    description:
      'Delivery outcomes, operational improvements, and implementation performance metrics from recent engagements.',
    highlights: [
      'Outcome metrics by engagement type',
      'Cost and efficiency indicators',
      'Delivery consistency analysis',
      'Implementation lessons learned',
    ],
  },
  'tech-stack-playbook': {
    title: 'Tech Stack Playbook',
    eyebrow: 'Architecture Resource',
    description:
      'A practical framework for selecting technologies based on constraints, scale, capability, and maintainability.',
    highlights: [
      'Decision matrix by use case',
      'Cloud and platform options',
      'Build-vs-buy considerations',
      'Maintainability scoring',
    ],
  },
  'india-ksa-delivery-model': {
    title: 'India-KSA Delivery Model',
    eyebrow: 'Operating Model Resource',
    description:
      'A clear view of how distributed engineering and in-country coordination work together for enterprise delivery.',
    highlights: [
      'Role split across geographies',
      'Communication and governance rhythm',
      'Regulatory alignment in KSA',
      'Delivery continuity model',
    ],
  },
  'ksa-client-brief': {
    title: 'KSA Client Brief',
    eyebrow: 'Regional Resource',
    description:
      'A focused brief for organizations in Saudi Arabia covering delivery model, regulatory context, and execution fit.',
    highlights: [
      'KSA operating and stakeholder model',
      'Compliance-aware delivery approach',
      'Language and reporting support',
      'Execution readiness checklist',
    ],
  },
  'modernization-playbook': {
    title: 'Modernization Playbook',
    eyebrow: 'Transformation Resource',
    description:
      'A phased modernization approach to reduce risk, protect continuity, and transition legacy platforms without disruption.',
    highlights: [
      'Legacy assessment framework',
      'Incremental migration strategy',
      'Parallel run and cutover plan',
      'Post-migration stabilization model',
    ],
  },
};

export default function ResourceDocumentPage() {
  const { resourceSlug } = useParams();
  const resource = resourceSlug ? resources[resourceSlug] : undefined;

  if (!resourceSlug || !resource) {
    return <Navigate to="/contact" replace />;
  }

  return (
    <section>
      <div className="bg-charcoal-gradient text-white border-b border-white/10">
        <div className="container-xl py-16 sm:py-20">
          <span className="section-tag">{resource.eyebrow}</span>
          <h1 className="text-4xl sm:text-5xl font-bold max-w-3xl leading-tight mb-5">
            {resource.title}
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            {resource.description}
          </p>
        </div>
      </div>

      <div className="section-pad bg-surface-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {resource.highlights.map((item) => (
              <article key={item} className="card p-6">
                <div className="w-10 h-10 rounded-lg bg-crimson/10 border border-crimson/20 flex items-center justify-center mb-4">
                  <FileText size={18} className="text-crimson" />
                </div>
                <h2 className="text-base font-bold text-charcoal mb-2">{item}</h2>
                <p className="text-surface-500 text-sm leading-relaxed">
                  Included in the document package with implementation notes.
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-white border border-surface-200 p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <p className="text-charcoal text-2xl font-bold mb-2">
                Request this document
              </p>
              <p className="text-surface-500 text-sm sm:text-base">
                We will share the full document with the right context for your use case.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to={`/contact?resource=${resourceSlug}`}
                className="btn-primary"
              >
                <Download size={15} />
                Request Access
              </Link>
              <Link to="/contact" className="btn-outline">
                Talk to Our Team <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
