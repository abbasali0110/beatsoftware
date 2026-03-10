export const Section = () => {
  return (
    <>
      {/* The Dark Hero (Primary) */}
      <section className="bg-charcoal-dark py-20 px-8 border-b border-surface-700/30">
        <h2 className="text-crimson font-display font-bold uppercase tracking-widest text-xs mb-4">
          Core Components
        </h2>
        <h1 className="text-4xl text-white font-display font-bold">
          The Sequencer Engine
        </h1>
      </section>

      {/* The Light Spec (Secondary) */}
      <section className="bg-surface-100 py-20 px-8">
        <h2 className="text-surface-600 font-sans font-bold uppercase tracking-widest text-xs mb-4">
          Technical Specs
        </h2>
        <div className="grid grid-cols-3 gap-8 text-charcoal-dark"></div>
      </section>

      {/* The Dark Code (Primary) */}

      <section className="bg-charcoal py-20 px-8 shadow-inner">
        <div className="max-w-4xl mx-auto bg-charcoal-dark rounded-xl p-6 border border-white/5">
          <pre className="text-crimson-light font-mono text-sm">
            <code>// Implementation code...</code>
          </pre>
        </div>
      </section>
    </>
  );
};
