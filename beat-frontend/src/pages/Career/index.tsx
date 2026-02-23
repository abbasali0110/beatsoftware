import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, IndianRupee, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import { opportunities, pleasureList, lifes } from '../../data/career';
import { Opportunity } from '../../types';

export default function Career() {
  const [selected, setSelected] = useState<Opportunity | null>(null);

  return (
    <section>
      {/* Banner */}
      <div className="bg-charcoal-gradient text-white">
        <div className="container-xl py-20">
          <div className="max-w-2xl">
            <span className="section-tag">Careers</span>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-4">
              Build Your Career<br />at <span className="text-crimson">Beat</span>
            </h1>
            <p className="text-surface-300 text-xl leading-relaxed">
              Join a team of innovators and help shape the future of technology.
            </p>
          </div>
        </div>
        <div className="h-1 bg-crimson-gradient" />
      </div>

      {/* Opportunities */}
      <div className="bg-white section-pad">
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="section-tag">Open Positions</span>
              <h2 className="section-title">Find Your Perfect Role</h2>
            </div>
          </div>

          {selected ? (
            <OpportunityDetail opportunity={selected} onBack={() => setSelected(null)} />
          ) : (
            <div className="space-y-4">
              {opportunities.map((opp) => (
                <div
                  key={opp.id}
                  className="card p-6 hover:border-l-4 hover:border-crimson hover:pl-5 transition-all cursor-pointer"
                  onClick={() => setSelected(opp)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-charcoal mb-2">{opp.name}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-surface-500 mb-3">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} className="text-crimson" /> {opp.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} className="text-crimson" /> {opp.duration} months
                        </span>
                        <span className="flex items-center gap-1.5">
                          <IndianRupee size={14} className="text-crimson" /> ₹{opp.stipend.toLocaleString()}/month
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {opp.skills.map((skill) => (
                          <span key={skill} className="badge badge-crimson">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        to="/career/apply"
                        state={{ opportunityId: opp.id, opportunityName: opp.name }}
                        className="btn-primary"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Apply Now
                      </Link>
                      <ChevronRight className="text-surface-300" size={20} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Benefits */}
      <BenefitsSection />

      {/* Life at Beat */}
      <LifeAtBeatSection />
    </section>
  );
}

/* ── Opportunity Detail ── */
function OpportunityDetail({ opportunity: opp, onBack }: { opportunity: Opportunity; onBack: () => void }) {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-1 text-crimson text-sm mb-8 hover:text-crimson-dark transition-colors font-medium"
      >
        ← Back to Opportunities
      </button>

      <div className="card p-8">
        <div className="border-l-4 border-crimson pl-6 mb-8">
          <h2 className="text-3xl font-bold text-charcoal mb-3">{opp.name}</h2>
          <div className="flex flex-wrap gap-4 text-sm text-surface-500">
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-crimson" /> {opp.location}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} className="text-crimson" /> {opp.duration} months</span>
            <span className="flex items-center gap-1.5"><IndianRupee size={14} className="text-crimson" /> ₹{opp.stipend.toLocaleString()}/month</span>
          </div>
        </div>

        <p className="text-surface-600 leading-relaxed mb-10">{opp.desc}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DetailSection title="Skills Required" items={opp.skills} />
          <DetailSection title="Qualifications" items={opp.qualifications} />
          <DetailSection title="Requirements" items={opp.requirements} />
          <DetailSection title="Benefits" items={opp.benefits} />
        </div>

        <div className="mt-8">
          <DetailSection title="Responsibilities" items={opp.responsibilities} />
        </div>

        <div className="mt-10 pt-8 border-t border-surface-100">
          <Link
            to="/career/apply"
            state={{ opportunityId: opp.id, opportunityName: opp.name }}
            className="btn-primary btn-lg"
          >
            Apply for this Position <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function DetailSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="font-bold text-charcoal mb-4 text-base flex items-center gap-2">
        <span className="w-5 h-0.5 bg-crimson rounded" />
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-surface-600 text-sm">
            <CheckCircle className="text-crimson shrink-0 mt-0.5" size={14} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Benefits ── */
function BenefitsSection() {
  return (
    <div className="bg-surface-50 section-pad">
      <div className="container-xl">
        <div className="section-header-center">
          <span className="section-tag">Perks</span>
          <h2 className="section-title">
            Why Join <span className="text-crimson">Beat?</span>
          </h2>
          <p className="section-desc mx-auto">
            We offer more than just a job — we offer an experience worth cherishing.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-2">
          {pleasureList.map((pleasure) => (
            <div key={pleasure.id} className="card overflow-hidden group">
              <div className="overflow-hidden">
                <img
                  src={pleasure.imgUrl}
                  alt={pleasure.heading}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-1 bg-crimson-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-5">
                <h3 className="font-bold text-charcoal mb-2">{pleasure.heading}</h3>
                <p className="text-surface-500 text-sm leading-relaxed">{pleasure.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Life at Beat ── */
function LifeAtBeatSection() {
  return (
    <div className="bg-white section-pad">
      <div className="container-xl">
        <div className="section-header-center">
          <span className="section-tag">Culture</span>
          <h2 className="section-title">
            Life at <span className="text-crimson">Beat</span>
          </h2>
          <p className="section-desc mx-auto">
            More than just work — we cultivate community, creativity, and growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
          {lifes.map((life, i) => (
            <div key={life.id} className="group" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="overflow-hidden rounded-2xl shadow-card mb-5">
                <img
                  src={life.imgUrl}
                  alt={life.heading}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-charcoal text-xl mb-3">{life.heading}</h3>
              <p className="text-surface-500 text-sm leading-relaxed">{life.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/career/apply" className="btn-primary btn-lg">
            Apply Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
