'use client';

import { skillCategories } from "../../data/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-navy-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-mono">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering & Technology Capabilities
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Skills organized by architectural domain, reflecting hands-on production depth rather than superficial keyword matching.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-7 rounded-2xl bg-navy-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-navy-950/80 border border-slate-800/80 text-xs"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-slate-200">
                          {skill.name}
                        </span>
                        <span
                          className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                            skill.level === "Advanced"
                              ? "bg-tealAccent/10 text-tealAccent border border-tealAccent/20"
                              : skill.level === "Certified"
                              ? "bg-amber-400/10 text-amber-300 border border-amber-400/20"
                              : skill.level === "In Progress" || skill.level === "Planned"
                              ? "bg-violet-500/10 text-violet-300 border border-violet-500/20"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-mono">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
