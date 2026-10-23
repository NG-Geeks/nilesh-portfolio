'use client';

import Link from "next/link";
import { siteLinks } from "../../data/links";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          {/* Identity & Scope */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-tealAccent/20 border border-tealAccent/40 flex items-center justify-center">
                <span className="font-mono font-bold text-tealAccent text-sm">N</span>
              </div>
              <span className="font-bold text-slate-100 text-base">Nilesh</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Software & Solution Architect specializing in secure multi-tenant SaaS platforms, high-throughput search discovery, distributed rate limiting, and financial subscription systems.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/50">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Production Systems Nominal
              </span>
              <span className="text-xs text-slate-500 font-mono">SOC-2 Mindset</span>
            </div>
          </div>

          {/* Quick Case Study Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
              Architecture Case Studies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/case-studies/multi-tenant-iam"
                  className="text-slate-400 hover:text-tealAccent transition-colors"
                >
                  Multi-Tenant SaaS IAM
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/usage-seat-billing"
                  className="text-slate-400 hover:text-tealAccent transition-colors"
                >
                  Usage & Seat Billing
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/commerce-discovery"
                  className="text-slate-400 hover:text-tealAccent transition-colors"
                >
                  Solr Commerce Discovery
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/composable-cart"
                  className="text-slate-400 hover:text-tealAccent transition-colors"
                >
                  Composable Cart Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/distributed-analytics"
                  className="text-slate-400 hover:text-tealAccent transition-colors"
                >
                  Distributed RPV Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies/distributed-rate-limiter"
                  className="text-slate-400 hover:text-tealAccent transition-colors"
                >
                  Distributed Rate Limiter
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Repos */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
              Engineering Profiles
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={siteLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>GitHub</span>
                  <span className="text-[10px] font-mono text-slate-600">@Nilesh-geeks</span>
                </a>
              </li>
              <li>
                <a
                  href={siteLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2"
                >
                  <span>LeetCode</span>
                  <span className="text-[10px] font-mono text-slate-600">@Nilesh-geeks</span>
                </a>
              </li>
              <li>
                <a
                  href={siteLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-2"
                >
                  <span>LinkedIn</span>
                  <span className="text-[10px] font-mono text-slate-600">/in/nilesh-geeks</span>
                </a>
              </li>
              <li>
                <a
                  href={siteLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tealAccent hover:underline inline-flex items-center gap-1 font-mono pt-1"
                >
                  <span>Download Verified Résumé (PDF)</span>
                  <span>→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {currentYear} Nilesh. Engineered with Next.js App Router & Three.js.</p>
          <div className="flex items-center gap-6">
            <span>Server-Rendered Core</span>
            <span>•</span>
            <span>Zero-Trust Architecture</span>
            <span>•</span>
            <a href="#overview" className="hover:text-slate-300 transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
