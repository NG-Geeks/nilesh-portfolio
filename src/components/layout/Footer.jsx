'use client';

import Link from "next/link";
import { siteLinks } from "../../data/links";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 pt-12 pb-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/60">
          {/* Identity & Scope */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-teal-500/10 border border-teal-500/30 flex items-center justify-center font-mono font-bold text-teal-400 text-xs">
                N
              </div>
              <span className="font-bold text-slate-100 text-sm">
                {siteLinks.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Backend Software Engineer specializing in multi-tenant SaaS security, subscription & usage-based billing, high-throughput search, and distributed systems.
            </p>
            <div className="pt-1 flex items-center gap-3 text-[11px] font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Available for Backend & Platform Engineering Roles
              </span>
            </div>
          </div>

          {/* Architectural Case Studies */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
              Case Studies
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/case-studies/multi-tenant-iam" className="hover:text-teal-400 transition-colors">
                  Multi-Tenant IAM
                </Link>
              </li>
              <li>
                <Link href="/case-studies/usage-seat-billing" className="hover:text-teal-400 transition-colors">
                  Usage & Seat Billing
                </Link>
              </li>
              <li>
                <Link href="/case-studies/commerce-discovery" className="hover:text-teal-400 transition-colors">
                  Solr Commerce Discovery
                </Link>
              </li>
              <li>
                <Link href="/case-studies/composable-cart" className="hover:text-teal-400 transition-colors">
                  Composable Cart Architecture
                </Link>
              </li>
              <li>
                <Link href="/case-studies/distributed-analytics" className="hover:text-teal-400 transition-colors">
                  Distributed RPV Analytics
                </Link>
              </li>
              <li>
                <Link href="/case-studies/distributed-rate-limiter" className="hover:text-teal-400 transition-colors">
                  Distributed Rate Limiter
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Connect */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
              Connect & Verify
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <Link href="/contact" className="text-teal-400 font-semibold hover:underline">
                  Hire Me / Contact Page →
                </Link>
              </li>
              <li>
                <a href={siteLinks.mailto} className="hover:text-white transition-colors">
                  Email: {siteLinks.email}
                </a>
              </li>
              <li>
                <a href={siteLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub Profile (ng-geeks) ↗
                </a>
              </li>
              <li>
                <a href={siteLinks.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  LeetCode Profile (ng404) ↗
                </a>
              </li>
              <li>
                <a href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn Profile ↗
                </a>
              </li>
              <li>
                <a href={siteLinks.resume} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Download Résumé (PDF) ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <p>© {currentYear} {siteLinks.name}. Next.js App Router • Three.js WebGL.</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-slate-300 transition-colors">
              System Overview
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact
            </Link>
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
