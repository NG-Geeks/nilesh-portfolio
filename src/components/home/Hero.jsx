'use client';

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
  const engineeringThemes = [
    "Platform Architecture",
    "Distributed Systems",
    "Multi-Tenant SaaS",
    "IAM & Security",
    "Usage-Based Billing",
    "Search & Solr",
    "High-Concurrency (50k+ rps)",
  ];

  return (
    <section
      id="overview"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle architectural background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-tealAccent/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status / Role pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-tealAccent/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-tealAccent animate-pulse" />
              <span className="text-xs font-mono font-medium text-slate-300">
                Software & Solution Architect • Senior Backend
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              I build secure platforms and design{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tealAccent via-cyan-400 to-emerald-300">
                systems that scale.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              From multi-tenant SaaS security and subscription billing to global commerce discovery and distributed analytics, I solve complex engineering problems with an emphasis on security, reliability, and measurable impact.
            </p>

            {/* Core Themes Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {engineeringThemes.map((theme) => (
                <span
                  key={theme}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-navy-900/90 text-tealAccent-light border border-slate-800"
                >
                  {theme}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <Link
                href="#case-studies"
                className="px-6 py-3 rounded-xl bg-tealAccent text-navy-950 font-semibold text-sm hover:bg-tealAccent-light transition-all shadow-tealGlow flex items-center gap-2 group"
              >
                <span>Explore Case Studies</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </Link>

              <Link
                href="#principles"
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-sm font-medium transition-all"
              >
                Architecture Principles
              </Link>

              <a
                href={siteLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl text-slate-400 hover:text-tealAccent text-sm font-mono flex items-center gap-1.5 transition-colors"
              >
                <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-8 8h8" />
                </svg>
                <span>Verified CV</span>
              </a>
            </div>
          </div>

          {/* Right: Interactive 3D Workstation (Three.js preserved) */}
          <div className="lg:col-span-5 h-[380px] sm:h-[460px] lg:h-[520px] w-full rounded-2xl overflow-hidden border border-slate-800/80 bg-navy-950/70 shadow-card relative group">
            <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                Interactive 3D Workstation (WebGL)
              </span>
            </div>

            <div className="w-full h-full">
              <ComputersCanvas />
            </div>

            <div className="absolute bottom-3 right-4 z-20 pointer-events-none text-[10px] font-mono text-slate-500">
              Drag to Orbit • Auto-Rotate Enabled
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
