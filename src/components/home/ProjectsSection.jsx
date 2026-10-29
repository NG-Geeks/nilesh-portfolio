'use client';

import Link from "next/link";
import { secondaryProjects } from "../../data/projects";
import { siteLinks } from "../../data/links";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-mono bg-teal-400/10 text-teal-400 border border-teal-400/20">
            <span>Independent Systems & Code</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Systems Projects & Open Source Repositories
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Independent systems engineering projects, concurrency benchmarks, and application repositories.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {secondaryProjects.map((project) => (
            <div
              key={project.name}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="text-[11px] font-mono text-teal-400 mb-1.5 font-medium">
                  {project.type}
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {project.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/50">
                {project.isCaseStudy ? (
                  <Link
                    href={`/case-studies/${project.caseStudySlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span>Read System Benchmark & Architecture</span>
                    <span>→</span>
                  </Link>
                ) : (
                  <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>View Repository (GitHub)</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Profile Repositories & LeetCode Callout */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="text-teal-400">▹</span>
            <span>Looking for more code & algorithmic problem solving?</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={siteLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
            >
              <span>GitHub (ng-geeks)</span>
              <span>↗</span>
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={siteLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-amber-400 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>LeetCode (ng404)</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
