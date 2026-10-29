'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { certifications } from "../../data/certifications";

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveCert(null);
      }
    };
    if (activeCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeCert]);

  return (
    <section id="certifications" className="py-16 md:py-24 border-t border-slate-800/60 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-mono bg-teal-400/10 text-teal-400 border border-teal-400/20">
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Accreditations & Professional Certifications
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Technical training and credentials across Google Cloud infrastructure, Site Reliability Engineering (SRE), IAM security, and distributed consensus. Click any credential to inspect the verified visual.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/90 transition-all flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-teal-500/5"
            >
              {/* Certificate Image Preview Header */}
              <div
                onClick={() => setActiveCert(cert)}
                className="relative h-48 w-full bg-slate-950 border-b border-slate-800/60 overflow-hidden cursor-pointer"
                title={`Click to view full certificate: ${cert.name}`}
              >
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Hover Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-teal-400 flex items-center gap-1.5 shadow-sm group-hover:bg-teal-500 group-hover:text-slate-950 transition-colors">
                  <svg className="w-3 h-3 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  <span>Expand Visual</span>
                </div>

                <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950/90 text-teal-300 border border-teal-500/30">
                  {cert.badge}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2 text-xs font-mono">
                    <span className="text-slate-400">{cert.issuer}</span>
                    <span className="text-[11px] text-slate-500">{cert.credentialId}</span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {cert.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                {/* Actions: View Visual & Direct Drive Verification */}
                <div className="pt-3 border-t border-slate-800/50 flex items-center justify-between gap-2 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1 text-[11px]"
                  >
                    <span>Inspect Visual</span>
                    <span>🔍</span>
                  </button>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors text-[11px]"
                  >
                    <span>Verify Drive Credential</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Full-View Modal Dialog */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeCert.name}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:px-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    {activeCert.issuer}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {activeCert.type}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  {activeCert.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveCert(null)}
                aria-label="Close Preview"
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Modal Certificate Image */}
            <div className="relative w-full h-[360px] sm:h-[480px] bg-slate-950 p-2 sm:p-4 flex items-center justify-center overflow-auto">
              <div className="relative w-full h-full">
                <Image
                  src={activeCert.image}
                  alt={activeCert.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:px-6 bg-slate-950/70 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
              <p className="text-slate-400 text-[11px] text-center sm:text-left">
                Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-200">Esc</kbd> or click outside to dismiss preview.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={activeCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold font-mono text-xs transition-all shadow-sm flex items-center gap-1.5"
                >
                  <span>Open Official Document on Google Drive</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
