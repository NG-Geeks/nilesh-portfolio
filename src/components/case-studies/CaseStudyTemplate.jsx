'use client';

import Link from "next/link";
import ArchitectureDiagram from "./ArchitectureDiagram";
import { siteLinks } from "../../data/links";

export default function CaseStudyTemplate({ study, prevStudy, nextStudy }) {
  if (!study) return null;

  return (
    <article className="min-h-screen pt-28 pb-24 text-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <Link
            href="/#case-studies"
            className="hover:text-teal-400 inline-flex items-center gap-1.5 transition-colors"
          >
            <span>←</span>
            <span>Back to Case Studies</span>
          </Link>
          <span className="text-slate-500">Case Study • {study.category}</span>
        </div>

        {/* Header Section */}
        <header className="space-y-4 pb-8 border-b border-slate-800/60">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-teal-400/10 text-teal-400 border border-teal-400/20 font-medium">
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

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {study.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {study.headline}
          </p>

          {/* Reported Scope Highlights */}
          {study.reportedScope && (
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              {Object.entries(study.reportedScope).map(([key, val]) => (
                <div key={key} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/60">
                  <span className="text-[11px] text-slate-400 block capitalize">{key}</span>
                  <span className="text-slate-100 font-semibold text-xs mt-0.5 block">{val}</span>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* 1. Problem & System Context */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-teal-400 font-mono text-sm">01.</span>
            <span>Problem & System Context</span>
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {study.context}
          </p>
        </section>

        {/* 2. Scale & Constraints */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-teal-400 font-mono text-sm">02.</span>
            <span>Scale & Constraints</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {study.constraints.map((c, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-slate-900/40 border border-slate-800/60 text-xs text-slate-300 flex items-start gap-2.5"
              >
                <span className="text-teal-400 font-mono mt-0.5">•</span>
                <span className="leading-relaxed">{c}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. My Individual Responsibilities */}
        <section className="space-y-4 p-6 rounded-xl bg-slate-900/60 border border-teal-500/20 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-teal-400 font-mono text-sm">03.</span>
              <span>My Individual Contribution</span>
            </h2>
            <span className="text-[11px] font-mono text-teal-400 bg-teal-400/10 px-2 py-0.5 rounded">
              Verified Implementation
            </span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            Direct architectural and code implementation deliverables:
          </p>
          <ul className="space-y-2.5 pt-1">
            {study.personalContribution.map((item, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
                <span className="text-teal-400 text-sm leading-none mt-1">▹</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Architecture & System Flow */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-teal-400 font-mono text-sm">04.</span>
            <span>Architecture & System Flow</span>
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            {study.architecture.description}
          </p>
          <ArchitectureDiagram
            layers={study.architecture.layers}
            flow={study.architecture.flow}
            title={`${study.shortTitle} — Architectural Topology`}
          />
        </section>

        {/* 5. Key Engineering Decisions */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-teal-400 font-mono text-sm">05.</span>
            <span>Key Engineering Decisions</span>
          </h2>
          <div className="space-y-3">
            {study.decisions.map((d, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-slate-900/50 border border-slate-800/60 space-y-1.5"
              >
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="font-mono text-xs text-teal-400 font-semibold">
                    Decision {idx + 1}:
                  </span>
                  <span>{d.decision}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {d.rationale}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Trade-offs & Alternatives */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-teal-400 font-mono text-sm">06.</span>
            <span>Trade-offs & Alternatives Considered</span>
          </h2>
          <div className="space-y-3">
            {study.tradeoffs.map((t, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg bg-slate-900/50 border border-slate-800/60 space-y-2.5"
              >
                <div className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">
                  {t.aspect}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded bg-slate-950/70 border border-slate-800/80">
                    <span className="text-teal-300 block font-semibold mb-1">Chosen Approach:</span>
                    <span className="text-slate-300">{t.chosen}</span>
                  </div>
                  <div className="p-3 rounded bg-slate-950/70 border border-slate-800/80">
                    <span className="text-slate-400 block font-semibold mb-1">Alternative Discarded:</span>
                    <span className="text-slate-400">{t.alternative}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 pt-0.5 leading-relaxed">
                  <span className="font-semibold text-slate-200">Architectural Rationale:</span> {t.impact}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Reliability, Security & Failure Handling */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-teal-400 font-mono text-sm">07.</span>
            <span>Reliability & Security Boundaries</span>
          </h2>
          <div className="p-5 rounded-lg bg-slate-900/50 border border-slate-800/60 text-xs sm:text-sm text-slate-300 leading-relaxed">
            {study.reliabilityAndSecurity}
          </div>
        </section>

        {/* 8. Verified Results */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-teal-400 font-mono text-sm">08.</span>
            <span>Verified Results & Outcomes</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {study.results.map((r, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800/60 text-xs text-slate-200 flex items-start gap-2.5"
              >
                <span className="text-emerald-400 font-mono mt-0.5">✓</span>
                <span className="leading-relaxed">{r}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Lessons Learned */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span className="text-teal-400 font-mono text-sm">09.</span>
            <span>Lessons Learned</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic border-l-2 border-teal-400 pl-4 py-1">
            &ldquo;{study.lessonsLearned}&rdquo;
          </p>
        </section>

        {/* 10. Relevant Technologies */}
        <section className="space-y-3 pt-4 border-t border-slate-800/60">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Technologies Employed
          </h3>
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Hiring CTA Banner on Case Study */}
        <section className="p-8 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Interested in discussing this architecture?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
              I am open to Backend Software Engineering, Platform Engineering, and Distributed Systems roles. Let&apos;s talk about your technical challenges.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs font-mono transition-all shadow-sm"
            >
              Hire Me / Get in Touch →
            </Link>
          </div>
        </section>

        {/* Next / Previous Navigation */}
        <nav className="pt-8 border-t border-slate-800/60 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevStudy ? (
            <Link
              href={`/case-studies/${prevStudy.slug}`}
              className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 transition-all text-left group"
            >
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                ← Previous Case Study
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-teal-400 transition-colors">
                {prevStudy.shortTitle}
              </span>
            </Link>
          ) : <div />}

          {nextStudy ? (
            <Link
              href={`/case-studies/${nextStudy.slug}`}
              className="p-4 rounded-lg bg-slate-900/40 border border-slate-800/60 hover:border-slate-700 transition-all text-right group"
            >
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                Next Case Study →
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-teal-400 transition-colors">
                {nextStudy.shortTitle}
              </span>
            </Link>
          ) : <div />}
        </nav>
      </div>
    </article>
  );
}
