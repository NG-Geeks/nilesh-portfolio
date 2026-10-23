'use client';

import Link from "next/link";
import ArchitectureDiagram from "./ArchitectureDiagram";
import { siteLinks } from "../../data/links";

export default function CaseStudyTemplate({ study, prevStudy, nextStudy }) {
  if (!study) return null;

  return (
    <article className="min-h-screen pt-28 pb-24 text-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <Link
            href="/#case-studies"
            className="hover:text-tealAccent inline-flex items-center gap-1.5 transition-colors"
          >
            <span>←</span>
            <span>Back to Case Studies</span>
          </Link>
          <span className="text-slate-600">/case-studies/{study.slug}</span>
        </div>

        {/* Hero Header */}
        <header className="space-y-6 pb-10 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-tealAccent/10 text-tealAccent border border-tealAccent/30">
              {study.category}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {study.company}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs font-mono text-slate-400">
              {study.role}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {study.title}
          </h1>

          <p className="text-lg sm:text-xl text-tealAccent-light font-medium leading-relaxed">
            {study.headline}
          </p>

          {/* Reported Scope Highlights Panel */}
          {study.reportedScope && (
            <div className="p-6 rounded-2xl bg-navy-950 border border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              {Object.entries(study.reportedScope).map(([key, val]) => (
                <div key={key} className="space-y-1">
                  <span className="text-slate-500 capitalize">{key}</span>
                  <div className="text-slate-100 font-bold text-sm sm:text-base">
                    {val}
                  </div>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* 1. Overview */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-tealAccent font-mono text-base">01.</span>
            <span>Overview</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {study.overview}
          </p>
        </section>

        {/* 2. Problem & Context */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-tealAccent font-mono text-base">02.</span>
            <span>Problem & System Context</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {study.context}
          </p>
        </section>

        {/* 3. Engineering Constraints */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-tealAccent font-mono text-base">03.</span>
            <span>Architectural Constraints</span>
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {study.constraints.map((c, idx) => (
              <li
                key={idx}
                className="p-4 rounded-xl bg-navy-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
              >
                <span className="text-tealAccent font-mono mt-0.5">▪</span>
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. My Personal Contribution */}
        <section className="space-y-4 p-8 rounded-2xl bg-navy-950 border border-tealAccent/30 shadow-card">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span className="text-tealAccent font-mono text-base">04.</span>
              <span>My Engineering Contribution</span>
            </h2>
            <span className="text-xs font-mono text-tealAccent bg-tealAccent/10 px-2 py-0.5 rounded">
              Direct Implementation
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Distinguishing individual architectural implementation from overall platform and team scope:
          </p>
          <ul className="space-y-3 pt-2">
            {study.personalContribution.map((item, idx) => (
              <li
                key={idx}
                className="text-sm text-slate-200 flex items-start gap-3"
              >
                <span className="text-tealAccent text-base leading-none mt-1">▸</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Architecture & Data Flow */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-tealAccent font-mono text-base">05.</span>
            <span>Architecture & Data Flow</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {study.architecture.description}
          </p>
          <ArchitectureDiagram
            diagram={study.architecture.diagram}
            flow={study.architecture.flow}
            title={`${study.shortTitle} Architecture`}
          />
        </section>

        {/* 6. Key Engineering Decisions */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-tealAccent font-mono text-base">06.</span>
            <span>Key Engineering Decisions</span>
          </h2>
          <div className="space-y-4">
            {study.decisions.map((d, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 space-y-2"
              >
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="font-mono text-xs text-tealAccent">
                    #{idx + 1}
                  </span>
                  <span>{d.decision}</span>
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {d.rationale}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Trade-offs & Alternatives */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-tealAccent font-mono text-base">07.</span>
            <span>Trade-offs & Alternatives Considered</span>
          </h2>
          <div className="space-y-4">
            {study.tradeoffs.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 space-y-3"
              >
                <div className="text-xs font-mono font-bold text-tealAccent uppercase tracking-wider">
                  {t.aspect}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-navy-900 border border-slate-800 text-slate-300">
                    <span className="text-tealAccent block font-bold mb-1">Chosen Approach:</span>
                    {t.chosen}
                  </div>
                  <div className="p-3 rounded-lg bg-navy-900 border border-slate-800 text-slate-400">
                    <span className="text-rose-400 block font-bold mb-1">Alternative Discarded:</span>
                    {t.alternative}
                  </div>
                </div>
                <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                  <span className="font-semibold text-slate-200">Architectural Impact:</span> {t.impact}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Reliability & Security */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-tealAccent font-mono text-base">08.</span>
            <span>Reliability, Security & Failure Handling</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed p-6 rounded-2xl bg-navy-950/80 border border-slate-800">
            {study.reliabilityAndSecurity}
          </p>
        </section>

        {/* 9. Results & Measurement */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-tealAccent font-mono text-base">09.</span>
            <span>Results & Measurement</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {study.results.map((r, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-navy-950/80 border border-slate-800 text-xs sm:text-sm text-slate-200 flex items-start gap-2.5"
              >
                <span className="text-emerald-400 font-mono mt-0.5">✓</span>
                <span className="leading-relaxed">{r}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Lessons Learned */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-tealAccent font-mono text-base">10.</span>
            <span>Lessons Learned</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic border-l-2 border-tealAccent pl-4 py-1">
            &ldquo;{study.lessonsLearned}&rdquo;
          </p>
        </section>

        {/* 11. Relevant Technologies */}
        <section className="space-y-4 pt-6 border-t border-slate-800">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Technologies & Protocols Employed
          </h3>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-navy-950 text-slate-200 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Next / Prev Navigation */}
        <nav className="pt-12 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevStudy ? (
            <Link
              href={`/case-studies/${prevStudy.slug}`}
              className="p-5 rounded-2xl bg-navy-950 border border-slate-800 hover:border-slate-700 transition-all text-left group"
            >
              <span className="text-[11px] font-mono text-slate-500 block mb-1">
                ← Previous Case Study
              </span>
              <span className="text-sm font-bold text-slate-200 group-hover:text-tealAccent transition-colors">
                {prevStudy.shortTitle}
              </span>
            </Link>
          ) : <div />}

          {nextStudy ? (
            <Link
              href={`/case-studies/${nextStudy.slug}`}
              className="p-5 rounded-2xl bg-navy-950 border border-slate-800 hover:border-slate-700 transition-all text-right group"
            >
              <span className="text-[11px] font-mono text-slate-500 block mb-1">
                Next Case Study →
              </span>
              <span className="text-sm font-bold text-slate-200 group-hover:text-tealAccent transition-colors">
                {nextStudy.shortTitle}
              </span>
            </Link>
          ) : <div />}
        </nav>
      </div>
    </article>
  );
}
