'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { siteLinks, navItems } from "../../data/links";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-card py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-white transition-opacity hover:opacity-90"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tealAccent/20 to-slate-800 border border-tealAccent/40 flex items-center justify-center shadow-tealGlow group-hover:border-tealAccent transition-colors">
            <span className="font-mono font-bold text-tealAccent text-lg">N</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-100 text-base tracking-tight">Nilesh</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-tealAccent animate-pulse" />
            </div>
            <span className="block text-[11px] font-mono text-slate-400">
              Platform & Solution Architect
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all text-[13px] tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Social Icons */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* GitHub */}
          <a
            href={siteLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-tealAccent/50 flex items-center justify-center text-slate-300 hover:text-tealAccent transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* LeetCode */}
          <a
            href={siteLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode Profile"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400/50 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-colors"
          >
            <span className="font-mono text-xs font-bold text-amber-400">{"</>"}</span>
          </a>

          {/* LinkedIn */}
          <a
            href={siteLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-400/50 flex items-center justify-center text-slate-300 hover:text-sky-400 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Résumé CTA */}
          <a
            href={siteLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-tealAccent bg-tealAccent/10 border border-tealAccent/30 hover:bg-tealAccent hover:text-navy-950 transition-all shadow-tealGlow"
          >
            <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-8 8h8" />
            </svg>
            <span>CV / Résumé</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={siteLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 text-[11px] font-mono text-tealAccent border border-tealAccent/40 rounded-md"
          >
            CV
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/95 border-b border-slate-800 px-6 py-6 mt-3 space-y-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-slate-200 hover:text-tealAccent text-sm font-medium border-b border-slate-900"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 flex items-center gap-3">
            <a
              href={siteLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-white"
            >
              GitHub
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={siteLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-amber-400"
            >
              LeetCode
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={siteLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-sky-400"
            >
              LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
