import React, { useState } from "react";
import { Button, TrackCard, Input, MixerStrip, Section } from "./components"; // Your UI library

const DesignSystem = () => {
  const [activeComponent, setActiveComponent] = useState("Buttons");

  const components = [
    { id: "Buttons", description: "Primary, Secondary, and Ghost actions." },
    { id: "Inputs", description: "Form fields and parameter controls." },
    { id: "Cards", description: "Containers for tracks and plugins." },
    { id: "Mixer", description: "Audio channel strips and faders." },
    { id: "Section", description: "Hero, spec, and code presentation blocks." },
  ];

  return (
    <div className="flex h-screen bg-charcoal-dark text-surface-100 font-sans selection:bg-crimson/30">
      {/* SIDEBAR: Navigation */}
      <aside className="w-72 bg-charcoal border-r border-surface-700/40 flex flex-col">
        <div className="p-8 border-b border-surface-700/20">
          <h1 className="font-display text-xl font-bold text-white tracking-tighter">
            BEAT<span className="text-crimson">LAB</span>{" "}
            <span className="text-surface-500 font-light text-sm ml-2">
              v1.0
            </span>
          </h1>
          <p className="text-2xs text-surface-500 uppercase mt-2 tracking-widest">
            Design System
          </p>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto space-y-2">
          {components.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveComponent(item.id)}
              className={`w-full text-left p-4 rounded-lg transition-all group ${
                activeComponent === item.id
                  ? "bg-charcoal-light border border-surface-700 shadow-card-dark"
                  : "hover:bg-charcoal-light/50 border border-transparent"
              }`}
            >
              <div
                className={`text-sm font-display font-bold uppercase tracking-wide ${
                  activeComponent === item.id
                    ? "text-crimson"
                    : "text-surface-200"
                }`}
              >
                {item.id}
              </div>
              <div className="text-xs text-surface-500 mt-1 line-clamp-1">
                {item.description}
              </div>
            </button>
          ))}
        </nav>
      </aside>

      {/* MAIN: Component Preview & Code */}
      <main className="flex-1 overflow-y-auto p-12 bg-charcoal-gradient/5">
        <header className="mb-12">
          <h2 className="text-4xl font-display font-bold text-white mb-2">
            {activeComponent}
          </h2>
          <div className="h-1 w-20 bg-crimson-gradient rounded-full" />
        </header>

        {/* PREVIEW SECTION */}
        <section className="space-y-12">
          <div className="bg-charcoal p-8 rounded-xl border border-surface-700/30 shadow-card-dark">
            <h3 className="text-2xs font-bold text-surface-500 uppercase tracking-[0.2em] mb-8">
              Live Preview
            </h3>

            <div className="flex flex-wrap gap-6 items-center">
              {activeComponent === "Buttons" && <ButtonDemos />}
              {activeComponent === "Inputs" && <InputDemos />}
              {activeComponent === "Cards" && <CardDemos />}
              {activeComponent === "Mixer" && <MixerDemos />}
              {activeComponent === "Section" && <SectionDemos />}
              {/* Add other dynamic renders here */}
            </div>
          </div>

          {/* SPECIFICATION TABLE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-charcoal-dark/50 p-6 rounded-lg border border-surface-700/20">
              <h4 className="text-xs font-bold text-crimson uppercase mb-4">
                React Implementation
              </h4>
              <code className="text-xs text-surface-400 block bg-black/30 p-4 rounded border border-white/5 font-mono leading-relaxed">
                {`<Button variant="primary" size="lg">\n  Start Session\n</Button>`}
              </code>
            </div>

            <div className="bg-charcoal-dark/50 p-6 rounded-lg border border-surface-700/20">
              <h4 className="text-xs font-bold text-surface-400 uppercase mb-4">
                Tailwind Tokens
              </h4>
              <ul className="text-xs space-y-2 text-surface-500 font-mono">
                <li>
                  <span className="text-surface-300">bg:</span> crimson-gradient
                </li>
                <li>
                  <span className="text-surface-300">shadow:</span> glow
                </li>
                <li>
                  <span className="text-surface-300">font:</span> font-display
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const ButtonDemos = () => (
  <>
    <div className="flex flex-col gap-4 items-start">
      <span className="text-[10px] text-surface-600 uppercase font-bold">
        Primary Glow
      </span>
      <Button variant="primary" size="lg">
        Export Audio
      </Button>
    </div>
    <div className="flex flex-col gap-4 items-start">
      <span className="text-[10px] text-surface-600 uppercase font-bold">
        Secondary Surface
      </span>
      <Button variant="secondary">Import Sample</Button>
    </div>
    <div className="flex flex-col gap-4 items-start">
      <span className="text-[10px] text-surface-600 uppercase font-bold">
        Ghost State
      </span>
      <Button variant="ghost" size="sm">
        Mute Track
      </Button>
    </div>
  </>
);

const InputDemos = () => (
  <div className="w-full max-w-md">
    <Input label="Track Name" placeholder="Enter track title" />
  </div>
);

const CardDemos = () => (
  <div className="w-full max-w-sm">
    <TrackCard title="Lead Synth" instrument="Serum" isActive>
      <div className="h-full w-2/3 bg-crimson/30" />
    </TrackCard>
  </div>
);

const MixerDemos = () => (
  <div className="flex flex-wrap gap-4">
    <MixerStrip channelName="Drums" db={-6} color="amber" />
    <MixerStrip channelName="Bass" db={-8} color="crimson" />
    <MixerStrip channelName="Vox" db={-4} color="sky" />
  </div>
);

const SectionDemos = () => (
  <div className="w-full overflow-hidden rounded-xl border border-surface-700/30">
    <Section />
  </div>
);

export default DesignSystem;
