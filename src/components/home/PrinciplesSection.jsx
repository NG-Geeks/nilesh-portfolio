'use client';

import { engineeringPrinciples } from "../../data/principles";

export default function PrinciplesSection() {
  return (
    <section id="principles" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-tealAccent/10 border border-tealAccent/30 text-tealAccent text-xs font-mono">
            <span>Core Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Architecture & Engineering Principles
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Scalability is not an afterthought or a framework feature. These four pillars guide every architectural decision, data model, and concurrency pattern I design.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {engineeringPrinciples.map((item) => (
            <div
              key={item.number}
              className="p-8 rounded-2xl bg-navy-950/80 border border-slate-800/90 hover:border-tealAccent/40 transition-all shadow-card flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-tealAccent px-2.5 py-1 rounded bg-tealAccent/10 border border-tealAccent/20">
                    {item.number}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    System Architecture
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tealAccent-light transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-slate-400 italic mb-4">
                  &ldquo;{item.tagline}&rdquo;
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/60">
                <p className="text-[11px] font-mono uppercase text-slate-400 mb-2 font-semibold">
                  Engineering Realization
                </p>
                <ul className="space-y-1.5">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-tealAccent mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
