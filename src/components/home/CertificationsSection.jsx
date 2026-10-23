'use client';

import { certifications } from "../../data/certifications";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono">
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Technical Accreditations
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Formal technical credentials across Cloud Architecture, Site Reliability Engineering (SRE), Identity & Access Management, and Distributed Systems.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="p-7 rounded-2xl bg-navy-950/80 border border-slate-800 hover:border-slate-700 transition-all shadow-card flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                    {cert.badge}
                  </span>
                  <span className="text-slate-500">{cert.issuer}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {cert.name}
                </h3>

                <p className="text-xs font-mono text-slate-400 mb-3">
                  {cert.type}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-tealAccent hover:text-tealAccent-light transition-colors"
                >
                  <span>View Verified Credential (Drive)</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
