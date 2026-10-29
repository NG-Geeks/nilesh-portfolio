'use client';

import React from "react";
import { experiences } from "../../data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-800/60 bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-mono bg-teal-400/10 text-teal-400 border border-teal-400/20">
            <span>Career Track</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Engineering & Architecture Experience
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Verified backend engineering track record across multi-tenant SaaS security platforms and high-volume e-commerce search infrastructure.
          </p>
        </div>

        {/* Alternating Vertical Timeline */}
        <div className="relative">
          {/* Central Vertical Spine (Desktop) */}
          <div
            className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-teal-400/60 via-slate-700 to-slate-800"
            aria-hidden="true"
          />

          {/* Left Vertical Spine (Mobile) */}
          <div
            className="md:hidden absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-teal-400/60 via-slate-700 to-slate-800"
            aria-hidden="true"
          />

          {/* Timeline Milestones */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.company}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Central Node Marker (Desktop) */}
                  <div
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-20 w-9 h-9 rounded-full bg-slate-900 border-2 border-teal-400 items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.35)]"
                    aria-hidden="true"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-300 animate-pulse" />
                  </div>

                  {/* Mobile Node Marker */}
                  <div
                    className="md:hidden absolute left-4 -translate-x-1/2 top-7 z-20 w-4 h-4 rounded-full bg-slate-900 border-2 border-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.4)]"
                    aria-hidden="true"
                  />

                  {/* Even Item (Desktop Left Side) */}
                  {isEven ? (
                    <>
                      {/* Left Side: Experience Card */}
                      <div className="w-full md:w-[calc(50%-2.5rem)] md:mr-auto pl-10 md:pl-0">
                        <div className="p-6 sm:p-7 rounded-xl bg-slate-900/50 border border-slate-800/70 hover:border-slate-700/90 transition-all shadow-sm relative group">
                          {/* Desktop Connector Arrow */}
                          <div
                            className="hidden md:block absolute right-[-8px] top-9 w-4 h-4 bg-slate-900 border-t border-r border-slate-800/70 rotate-45 pointer-events-none"
                            aria-hidden="true"
                          />

                          {/* Card Header */}
                          <div className="pb-4 mb-4 border-b border-slate-800/60">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <h3 className="text-lg font-bold text-white tracking-tight">
                                  {exp.company}
                                </h3>
                                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-teal-500/10 text-teal-400 border border-teal-500/20">
                                  {exp.badge}
                                </span>
                              </div>
                              <span className="font-mono text-xs text-slate-400 md:hidden">
                                {exp.period}
                              </span>
                            </div>

                            <div className="text-xs sm:text-sm font-semibold text-teal-300 mt-1">
                              {exp.role}
                            </div>
                            <div className="font-mono text-[11px] text-slate-400 mt-0.5">
                              {exp.location}
                            </div>
                          </div>

                          {/* Summary */}
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                            {exp.summary}
                          </p>

                          {/* Highlights */}
                          <div className="space-y-2 mb-5">
                            <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                              Key Architectural Impact
                            </h4>
                            <ul className="space-y-1.5">
                              {exp.highlights.map((item, idx) => (
                                <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                                  <span className="text-teal-400 text-xs mt-1 leading-none">▹</span>
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div className="pt-3 border-t border-slate-800/50 flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Desktop Timeline Date Column */}
                      <div className="hidden md:flex md:w-[calc(50%-2.5rem)] md:ml-auto md:pl-10 items-center">
                        <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/50">
                          <div className="font-mono text-sm font-bold text-teal-300">
                            {exp.period}
                          </div>
                          <div className="font-mono text-xs text-slate-400 mt-0.5">
                            {exp.location}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono mt-1">
                            Current Production Platform
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Odd Item (Desktop Right Side) */}
                      {/* Left Side: Desktop Timeline Date Column */}
                      <div className="hidden md:flex md:w-[calc(50%-2.5rem)] md:mr-auto md:pr-10 justify-end items-center text-right">
                        <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/50">
                          <div className="font-mono text-sm font-bold text-teal-300">
                            {exp.period}
                          </div>
                          <div className="font-mono text-xs text-slate-400 mt-0.5">
                            {exp.location}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono mt-1">
                            Global E-Commerce Infrastructure
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Experience Card */}
                      <div className="w-full md:w-[calc(50%-2.5rem)] md:ml-auto pl-10 md:pl-0">
                        <div className="p-6 sm:p-7 rounded-xl bg-slate-900/50 border border-slate-800/70 hover:border-slate-700/90 transition-all shadow-sm relative group">
                          {/* Desktop Connector Arrow */}
                          <div
                            className="hidden md:block absolute left-[-8px] top-9 w-4 h-4 bg-slate-900 border-b border-l border-slate-800/70 rotate-45 pointer-events-none"
                            aria-hidden="true"
                          />

                          {/* Card Header */}
                          <div className="pb-4 mb-4 border-b border-slate-800/60">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <h3 className="text-lg font-bold text-white tracking-tight">
                                  {exp.company}
                                </h3>
                                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-teal-500/10 text-teal-400 border border-teal-500/20">
                                  {exp.badge}
                                </span>
                              </div>
                              <span className="font-mono text-xs text-slate-400 md:hidden">
                                {exp.period}
                              </span>
                            </div>

                            <div className="text-xs sm:text-sm font-semibold text-teal-300 mt-1">
                              {exp.role}
                            </div>
                            <div className="font-mono text-[11px] text-slate-400 mt-0.5">
                              {exp.location}
                            </div>
                          </div>

                          {/* Summary */}
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                            {exp.summary}
                          </p>

                          {/* Highlights */}
                          <div className="space-y-2 mb-5">
                            <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                              Key Architectural Impact
                            </h4>
                            <ul className="space-y-1.5">
                              {exp.highlights.map((item, idx) => (
                                <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                                  <span className="text-teal-400 text-xs mt-1 leading-none">▹</span>
                                  <span className="leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div className="pt-3 border-t border-slate-800/50 flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
