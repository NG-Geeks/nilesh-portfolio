'use client';

import { experiences } from "../../data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span>Verified Career Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering & Architecture Experience
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Hands-on technical contributions across enterprise multi-tenant SaaS security platforms and high-volume global commerce systems.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="p-8 sm:p-10 rounded-2xl bg-navy-950/80 border border-slate-800 hover:border-slate-700 transition-all shadow-card relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {exp.company}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-tealAccent/10 text-tealAccent border border-tealAccent/30">
                      {exp.badge}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-tealAccent-light">
                    {exp.role}
                  </div>
                </div>

                <div className="text-left md:text-right font-mono text-xs text-slate-400 space-y-1">
                  <div className="text-slate-200 font-semibold">{exp.period}</div>
                  <div>{exp.location}</div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {exp.summary}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Key Technical Impact & Delivery
                </h4>
                <ul className="space-y-2">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-start gap-3">
                      <span className="text-tealAccent mt-1 text-base leading-none">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-slate-900 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
