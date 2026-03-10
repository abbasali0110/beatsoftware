import React from "react";

interface TrackCardProps {
  title: string;
  instrument: string;
  isActive?: boolean;
  children?: React.ReactNode;
}

export const TrackCard = ({
  title,
  instrument,
  isActive = false,
  children,
}: TrackCardProps) => (
  <div
    className={`
    group relative p-4 rounded-md transition-all duration-300 border-l-4
    ${isActive ? "bg-charcoal border-crimson shadow-glow" : "bg-charcoal-dark border-transparent hover:bg-charcoal-light"}
  `}
  >
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="font-display text-sm font-bold text-white uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-2xs text-surface-500 font-sans">{instrument}</p>
      </div>
      <div
        className={`w-2 h-2 rounded-full ${isActive ? "bg-crimson animate-pulse" : "bg-surface-700"}`}
      />
    </div>
    <div className="mt-2 h-16 bg-black/20 rounded-sm border border-surface-700/30 overflow-hidden relative">
      {/* Waveform Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
        <div className="w-full h-[1px] bg-surface-500"></div>
      </div>
      {children}
    </div>
  </div>
);
