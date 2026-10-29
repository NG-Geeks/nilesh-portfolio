'use client';

import Link from "next/link";
import { caseStudies } from "../../data/caseStudies";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-16 md:py-24 relative">
      <span className="hash-span" id="work" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-mono bg-teal-400/10 text-teal-400 border border-teal-400/20">
              <span>Deep-Dive Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Selected Architecture Case Studies
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              In-depth technical breakdowns documenting actual system scale, architectural constraints, key engineering decisions, and trade-offs.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-400 shrink-0">
            6 Detailed Systems Case Studies
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.slug}
              className="rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-all flex flex-col justify-between overflow-hidden group shadow-sm"
            >
              <div className="p-6 space-y-3">
                {/* Category & Company Header */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-teal-400 font-medium">
                    {study.category}
                  </span>
                  <span className="text-slate-400">{study.company}</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                  <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
                </h3>

                {/* Headline Summary */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {study.headline}
                </p>

                {/* Technologies */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {study.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {study.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono text-slate-400">
                      +{study.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 py-3.5 bg-slate-900/60 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">Architecture Spec</span>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="text-teal-400 group-hover:text-teal-300 flex items-center gap-1 font-semibold transition-colors"
                >
                  <span>Read Case Study</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
