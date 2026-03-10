interface MixerStripProps {
  channelName: string;
  db?: number;
  color?: "crimson" | "amber" | "sky";
}

export const MixerStrip = ({
  channelName,
  db = -12,
  color = "crimson",
}: MixerStripProps) => (
  // Keep Tailwind classes statically enumerable.
  <div className="w-20 bg-charcoal border border-surface-700/50 flex flex-col h-[320px] rounded-t-md">
    {/* Peak Meter */}
    <div className="flex-1 flex flex-col-reverse gap-1 p-2 bg-black/40 items-center">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`w-full h-1 rounded-full ${
            i < 8
              ? "bg-surface-700"
              : color === "amber"
                ? "bg-amber-400/60"
                : color === "sky"
                  ? "bg-sky-400/60"
                  : "bg-crimson/60"
          }`}
        />
      ))}
    </div>

    {/* Volume Fader Area */}
    <div className="h-40 relative flex flex-col items-center py-4 bg-charcoal-light/30">
      <div className="w-1 h-full bg-charcoal-dark rounded-full relative">
        {/* Thumb Placeholder */}
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-6 h-3 bg-white rounded-sm shadow-glow cursor-pointer hover:bg-surface-100"></div>
      </div>
    </div>

    {/* Controls */}
    <div className="p-2 space-y-2 border-t border-surface-700/30">
      <div className="flex gap-1">
        <button className="flex-1 bg-surface-700 text-[9px] font-bold py-1 rounded-xs hover:bg-surface-600">
          M
        </button>
        <button className="flex-1 bg-surface-700 text-[9px] font-bold py-1 rounded-xs hover:bg-yellow-600">
          S
        </button>
      </div>
      <div className="text-[10px] text-center font-display font-bold text-surface-300 truncate uppercase">
        {channelName} {db}dB
      </div>
    </div>
  </div>
);
