'use client';

import Link from "next/link";
import { caseStudies } from "../../data/caseStudies";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 lg:py-28 bg-navy-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
              <span>Deep-Dive Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Architecture Case Studies
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Real-world systems, concrete tradeoffs, failure modes, and technical specifications. Every case study documents actual problem spaces and verified architectural solutions.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-500">
            6 Production & Systems Case Studies
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.slug}
              className="rounded-2xl bg-navy-900/70 border border-slate-800 hover:border-tealAccent/50 transition-all shadow-card flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-7">
                {/* Category & Company Header */}
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-tealAccent bg-tealAccent/10 px-2.5 py-0.5 rounded-full border border-tealAccent/20">
                    {study.category}
                  </span>
                  <span className="text-slate-400">{study.company}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-tealAccent transition-colors">
                  <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
                </h3>

                {/* Subtitle / Headline */}
                <p className="text-xs font-mono text-slate-400 mb-4 line-clamp-2">
                  {study.headline}
                </p>

                {/* Short Overview */}
                <p className="text-sm text-slate-300 leading-relaxed line-clamp-3 mb-6">
                  {study.overview}
                </p>

                {/* Reported Scope Highlights */}
                <div className="p-3.5 rounded-xl bg-navy-950/80 border border-slate-800/80 space-y-1.5 mb-6 text-xs font-mono">
                  {Object.entries(study.reportedScope).slice(0, 2).map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between text-slate-300">
                      <span className="text-slate-400 capitalize">{k}:</span>
                      <span className="text-tealAccent-light font-semibold">{v}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {study.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-500">
                      +{study.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-7 py-4 bg-navy-950/90 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium">
                <span className="text-slate-400 font-mono">Complete Architecture</span>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="text-tealAccent group-hover:text-tealAccent-light flex items-center gap-1 font-semibold transition-colors"
                >
                  <span>Read Case Study</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
