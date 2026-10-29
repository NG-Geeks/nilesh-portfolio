'use client';

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { siteLinks } from "../../data/links";
import CanvasFallback from "../canvas/CanvasFallback";

// Dynamically load browser-dependent Three.js canvas without SSR
const ComputersCanvas = dynamic(() => import("../canvas/Computers"), {
  ssr: false,
  loading: () => <CanvasFallback title="Interactive 3D Workstation (Three.js)" />,
});

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 sm:pb-20 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden bg-slate-950"
    >
      {/* 1. Restored Original Flowing Contour Lines Background */}
      <div
        className="absolute inset-0 bg-hero-pattern bg-cover bg-no-repeat bg-center opacity-85 pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 2. Ambient depth gradients to blend contour lines into deep navy base */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950 pointer-events-none z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* 3. Hero Content Container (Fully Visible, High Contrast Foreground) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Narrative Column with Original Visual Framing Pin */}
          <div className="lg:col-span-7 flex flex-row items-start gap-3.5 sm:gap-6">
            {/* Original Purple Pin & Vertical Gradient Line */}
            <div className="hidden xs:flex flex-col justify-center items-center mt-3 shrink-0" aria-hidden="true">
              <div className="w-4 h-4 rounded-full bg-[#915EFF] shadow-[0_0_15px_#915EFF]" />
              <div className="w-1 sm:h-80 h-56 violet-gradient rounded-b" />
            </div>

            {/* Narrative Content */}
            <div className="space-y-6 flex-1">
              {/* Identity & Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-slate-200 font-medium">Nilesh Gupta</span>
                <span className="text-slate-500">•</span>
                <span className="text-teal-400 font-semibold tracking-wide">Backend Software Engineer</span>
              </div>

              {/* Core Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.14]">
                Building Secure,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-300">
                  Scalable Backend Systems
                </span>
              </h1>

              {/* Specialization Line */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-[13px] font-mono text-slate-300">
                {["Multi-Tenant SaaS", "IAM & Security", "Billing Systems", "Distributed Systems"].map((pill, idx) => (
                  <React.Fragment key={pill}>
                    {idx > 0 && <span className="text-slate-600 hidden sm:inline">·</span>}
                    <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800/80 text-teal-300/95 font-medium backdrop-blur-sm shadow-sm">
                      {pill}
                    </span>
                  </React.Fragment>
                ))}
              </div>

              {/* Supporting Description */}
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
                I build backend systems that solve complex engineering problems, strengthen platform security, and support reliable growth.
              </p>

              {/* Primary Actions & Social Links */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="#case-studies"
                  className="px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs sm:text-sm font-mono transition-all shadow-[0_0_20px_rgba(20,184,166,0.25)] hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] flex items-center gap-2 group hover:-translate-y-0.5"
                >
                  <span>View Selected Work</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>

                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-100 font-semibold text-xs sm:text-sm font-mono transition-all hover:-translate-y-0.5 shadow-sm"
                >
                  Hire Me
                </Link>

                {/* Secondary Reference Links */}
                <div className="flex items-center gap-2 pl-1 sm:pl-2">
                  <a
                    href={siteLinks.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg text-xs font-mono text-slate-400 hover:text-white transition-colors"
                    title="Verified Résumé (Google Drive)"
                  >
                    CV / Résumé ↗
                  </a>

                  <a
                    href={siteLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-white transition-colors"
                    title="GitHub Profile (ng-geeks)"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>

                  <a
                    href={siteLinks.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-amber-400 transition-colors"
                    title="LeetCode Profile (ng404)"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.794l3.76-4.027 5.281-5.65a1.377 1.377 0 0 0-.977-2.355zM20.36 10.4a1.377 1.377 0 0 0-1.376 1.377v.005a1.377 1.377 0 0 0 1.376 1.377h1.264a1.377 1.377 0 0 0 1.376-1.377v-.005a1.377 1.377 0 0 0-1.376-1.377H20.36z" />
                    </svg>
                  </a>

                  <a
                    href={siteLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-400 hover:text-white transition-colors"
                    title="LinkedIn Profile"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive 3D Workstation (Always visible, responsive) */}
          <div className="lg:col-span-5 h-[360px] sm:h-[420px] lg:h-[480px] w-full relative z-10 flex flex-col justify-center">
            <div className="absolute top-2 left-2 z-20 text-[11px] font-mono text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800 backdrop-blur-sm flex items-center gap-1.5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Interactive 3D Workstation (WebGL)</span>
            </div>

            <ComputersCanvas />

            <div className="absolute bottom-2 right-2 z-20 pointer-events-none text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-0.5 rounded border border-slate-800/80 backdrop-blur-sm">
              Drag to Orbit • Auto-Rotate
            </div>
          </div>
        </div>
      </div>

      {/* 4. Original Animated Scroll Indicator Pill */}
      <div className="absolute xs:bottom-8 bottom-4 w-full flex justify-center items-center z-20 pointer-events-auto">
        <a href="#about" aria-label="Scroll to About section" className="group">
          <div className="w-[30px] h-[54px] rounded-3xl border-2 border-slate-600/80 group-hover:border-teal-400 flex justify-center items-start p-1.5 transition-colors backdrop-blur-sm bg-slate-950/30">
            <div className="w-2.5 h-2.5 rounded-full bg-teal-400 mb-1 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
