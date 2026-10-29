'use client';

export default function ArchitectureDiagram({ layers, flow, title }) {
  return (
    <div className="rounded-xl bg-slate-900/70 border border-slate-800/60 overflow-hidden">
      {/* Header Bar */}
      <div className="px-5 py-3 bg-slate-900/90 border-b border-slate-800/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-teal-400" />
          <span className="text-xs font-mono font-medium text-slate-200">
            {title || "System Architecture & Data Flow"}
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">
          Component Topology
        </span>
      </div>

      {/* Visual Architectural Layers */}
      {layers && layers.length > 0 && (
        <div className="p-6 md:p-8 space-y-6 bg-slate-950/40">
          {layers.map((layer, index) => (
            <div key={layer.name} className="space-y-2">
              {/* Layer Title & Badge */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="text-teal-400 font-semibold">{String(index + 1).padStart(2, '0')}.</span>
                <span className="uppercase tracking-wider font-medium text-[11px] text-slate-300">
                  {layer.name}
                </span>
              </div>

              {/* Components in this Layer */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {layer.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800/70 text-xs text-slate-200 flex items-center gap-2.5 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400/80 shrink-0" />
                    <span className="font-mono font-medium leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Downward Connector Line (between layers) */}
              {index < layers.length - 1 && (
                <div className="flex justify-center pt-2 pb-1 text-slate-600">
                  <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-4-4m4 4l4-4" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Ordered Execution Flow Sequence */}
      {flow && flow.length > 0 && (
        <div className="p-6 border-t border-slate-800/60 bg-slate-900/40">
          <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
            Pipeline Execution Sequence
          </h4>
          <ol className="space-y-2.5">
            {flow.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs text-slate-300">
                <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-teal-400 font-bold shrink-0">
                  {idx + 1}
                </span>
                <span className="leading-relaxed pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
