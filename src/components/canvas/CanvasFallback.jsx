'use client';

export default function CanvasFallback({ title = "Interactive 3D Visualizer" }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center rounded-2xl bg-navy-950/60 border border-slate-800/80 backdrop-blur-sm relative overflow-hidden"
      role="status"
      aria-label={title}
    >
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tealAccent-dark/10 via-transparent to-transparent opacity-60" />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Orbiting pulse loader */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-tealAccent/30 animate-ping opacity-30" />
          <div className="w-10 h-10 rounded-full border-2 border-tealAccent/80 border-t-transparent animate-spin" />
          <div className="w-2.5 h-2.5 rounded-full bg-tealAccent shadow-tealGlow" />
        </div>
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest text-tealAccent font-mono font-semibold">
            Loading 3D Scene
          </p>
          <p className="text-[11px] text-slate-400 font-mono mt-0.5">{title}</p>
        </div>
      </div>
    </div>
  );
}
