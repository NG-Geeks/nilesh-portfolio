'use client';

import { engineeringPrinciples } from "../../data/principles";

export default function PrinciplesSection() {
  return (
    <section id="principles" className="py-16 md:py-24 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-mono bg-teal-400/10 text-teal-400 border border-teal-400/20">
            <span>Engineering Philosophy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Architecture & Engineering Principles
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Scalability is not an afterthought or a framework feature. These four pillars guide every architectural decision, data model, and concurrency pattern I build.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {engineeringPrinciples.map((item) => (
            <div
              key={item.number}
              className="p-6 sm:p-7 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-teal-400 px-2 py-0.5 rounded bg-teal-400/10 border border-teal-400/20">
                    {item.number}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    System Architecture
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs font-mono text-slate-400 italic mb-3">
                  &ldquo;{item.tagline}&rdquo;
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/50">
                <p className="text-[11px] font-mono uppercase text-slate-400 mb-2 font-semibold">
                  Engineering Realization
                </p>
                <ul className="space-y-1.5">
                  {item.points.map((pt, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <span className="text-teal-400 mt-0.5">•</span>
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
