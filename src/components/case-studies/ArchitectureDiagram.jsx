'use client';

export default function ArchitectureDiagram({ diagram, flow, title }) {
  return (
    <div className="rounded-2xl bg-navy-950 border border-slate-800 overflow-hidden shadow-card">
      {/* Diagram Header */}
      <div className="px-5 py-3.5 bg-navy-900 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-tealAccent" />
          <span className="text-xs font-mono font-semibold text-slate-200">
            {title || "Architectural Topology & Data Pipeline"}
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-500">
          Normalized Architecture Diagram
        </span>
      </div>

      {/* ASCII Architectural Schema */}
      {diagram && (
        <div className="p-6 overflow-x-auto bg-navy-950 font-mono text-[11px] sm:text-xs text-tealAccent-light leading-snug border-b border-slate-900 selection:bg-tealAccent selection:text-navy-950">
          <pre className="whitespace-pre">{diagram.trim()}</pre>
        </div>
      )}

      {/* Sequential Pipeline Flow Steps */}
      {flow && flow.length > 0 && (
        <div className="p-6 bg-navy-900/60">
          <h4 className="text-xs font-mono uppercase text-slate-400 mb-4 font-semibold tracking-wider">
            Execution Flow Sequence
          </h4>
          <ol className="space-y-2.5">
            {flow.map((step, index) => (
              <li key={index} className="flex items-start gap-3 text-xs text-slate-300">
                <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-navy-950 border border-slate-800 text-tealAccent font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
