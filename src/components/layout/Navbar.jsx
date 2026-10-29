'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { siteLinks, navItems } from "../../data/links";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy for active nav link
      const sections = ["about", "work", "experience", "capabilities", "contact"];
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i]);
        if (sec) {
          const top = sec.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    // If on homepage and linking to an anchor
    if (typeof window !== "undefined" && window.location.pathname === "/" && item.id) {
      const el = document.getElementById(item.id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${item.id}`);
        setActiveSection(item.id);
        setMobileMenuOpen(false);
      }
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/70 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Name */}
        <Link
          href="/"
          onClick={(e) => {
            if (typeof window !== "undefined" && window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "/");
              setActiveSection("");
            }
          }}
          className="flex items-center gap-2.5 text-white transition-transform hover:opacity-95 group"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center font-mono font-bold text-teal-400 text-sm shadow-[0_0_15px_rgba(20,184,166,0.15)] group-hover:border-teal-400 transition-colors">
            N
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-slate-100 text-sm tracking-tight group-hover:text-teal-300 transition-colors">
                {siteLinks.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            </div>
            <span className="block text-[11px] font-mono text-slate-400">
              Backend Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 ${
                  isActive
                    ? "text-teal-300 font-semibold bg-slate-800/80 border border-teal-500/30 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions: Professional Links & Primary "Hire Me" CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* GitHub */}
          <a
            href={siteLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile (ng-geeks)"
            className="w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:-translate-y-0.5"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* LeetCode */}
          <a
            href={siteLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode Profile (ng404)"
            className="w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all hover:-translate-y-0.5"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .666-1.794l3.76-4.027 5.281-5.65a1.377 1.377 0 0 0-.977-2.355zM20.36 10.4a1.377 1.377 0 0 0-1.376 1.377v.005a1.377 1.377 0 0 0 1.376 1.377h1.264a1.377 1.377 0 0 0 1.376-1.377v-.005a1.377 1.377 0 0 0-1.376-1.377H20.36z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href={siteLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="w-8 h-8 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:-translate-y-0.5"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Résumé PDF */}
          <a
            href={siteLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            title="Download CV"
            className="px-2.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-xs font-mono text-slate-300 hover:text-white transition-all hover:-translate-y-0.5"
          >
            CV
          </a>

          {/* Primary Action: Hire Me */}
          <Link
            href="/contact"
            className="px-4 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs font-mono transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.45)] hover:-translate-y-0.5"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/contact"
            className="px-3 py-1 text-xs font-mono font-semibold bg-teal-500 text-slate-950 rounded shadow-sm"
          >
            Hire Me
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
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
        <div className="md:hidden bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-6 py-5 mt-2 space-y-3">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`py-1.5 text-xs font-medium border-b border-slate-900 transition-colors ${
                  activeSection === item.id ? "text-teal-400 font-semibold" : "text-slate-200 hover:text-teal-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 text-teal-400 font-semibold text-xs"
            >
              Contact / Hire Me →
            </Link>
          </div>

          <div className="pt-2 flex items-center gap-3 text-xs font-mono text-slate-400">
            <a href={siteLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <span>•</span>
            <a href={siteLinks.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">LeetCode</a>
            <span>•</span>
            <a href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <span>•</span>
            <a href={siteLinks.resume} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">CV</a>
          </div>
        </div>
      )}
    </header>
  );
}
