'use client';

import React, { useState } from "react";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import { siteLinks } from "../../data/links";
import CanvasFallback from "../canvas/CanvasFallback";

const EarthCanvas = dynamic(() => import("../canvas/Earth"), {
  ssr: false,
  loading: () => <CanvasFallback title="Interactive 3D Planetary Node (Three.js)" />,
});

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Spam prevention field (hidden from real users)
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Honeypot check (Spam bot protection)
    if (form.honeypot) {
      console.warn("Spam bot submission caught by honeypot.");
      setStatus({ submitting: false, submitted: true, error: null });
      return;
    }

    // 2. Client-side input validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ submitting: false, submitted: false, error: "Please complete all required fields." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setStatus({ submitting: false, submitted: false, error: "Please provide a valid email address." });
      return;
    }

    // 3. Prevent duplicate submissions
    if (status.submitting) return;

    setStatus({ submitting: true, submitted: false, error: null });

    // 4. Configurable EmailJS keys via env vars with fallback
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_cwjtp9t";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_z5ohjpl";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "21kf0H_70ey5M6duv";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          to_name: "Nilesh",
          from_email: form.email.trim(),
          to_email: siteLinks.email,
          subject: form.subject.trim() || "Portfolio Inbound Inquiry",
          message: form.message.trim(),
        },
        publicKey
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setForm({ name: "", email: "", subject: "", message: "", honeypot: "" });
    } catch (err) {
      console.error("EmailJS submission error:", err);
      // Even if network or provider error occurs, provide direct email fallback
      setStatus({
        submitting: false,
        submitted: false,
        error: `Submission failed. You can reach me directly at ${siteLinks.email}.`,
      });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Form Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-tealAccent/10 border border-tealAccent/30 text-tealAccent text-xs font-mono">
                <span>Direct Inquiries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Architectural Inquiries & Contact
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                Interested in discussing Software Architecture, Solution Architecture, Platform Engineering, or Senior Backend leadership opportunities? Let&apos;s connect.
              </p>
            </div>

            {/* Direct Channel Pills */}
            <div className="flex flex-wrap gap-4 text-xs font-mono">
              <a
                href={`mailto:${siteLinks.email}`}
                className="px-3.5 py-2 rounded-xl bg-navy-950 border border-slate-800 text-slate-300 hover:text-tealAccent hover:border-tealAccent/40 transition-colors flex items-center gap-2"
              >
                <span>✉</span>
                <span>{siteLinks.email}</span>
              </a>
              <a
                href={siteLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-navy-950 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-400/40 transition-colors flex items-center gap-2"
              >
                <span>in</span>
                <span>LinkedIn Message</span>
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 bg-navy-950/80 p-8 rounded-2xl border border-slate-800 shadow-card">
              {/* Honeypot field (hidden) */}
              <input
                type="text"
                name="honeypot"
                value={form.honeypot}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Name <span className="text-tealAccent">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-tealAccent transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                    Work Email <span className="text-tealAccent">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-tealAccent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                  Subject / Role Context
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. Platform Architecture / Senior Backend Role"
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-tealAccent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">
                  Message <span className="text-tealAccent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Share details regarding your team, architecture requirements, or project scope..."
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-900 border border-slate-800 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-tealAccent transition-colors"
                />
              </div>

              {/* Status alerts */}
              {status.error && (
                <div className="p-3 rounded-lg bg-rose-950/50 border border-rose-800 text-rose-300 text-xs">
                  {status.error}
                </div>
              )}

              {status.submitted && (
                <div className="p-3 rounded-lg bg-emerald-950/50 border border-emerald-800 text-emerald-300 text-xs">
                  ✓ Message transmitted successfully. I will review and respond promptly.
                </div>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-tealAccent text-navy-950 font-semibold text-sm hover:bg-tealAccent-light disabled:opacity-50 transition-all shadow-tealGlow flex items-center justify-center gap-2"
              >
                {status.submitting ? (
                  <>
                    <span className="w-3.5 h-3.5 rounded-full border-2 border-navy-950 border-t-transparent animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <span>Send Direct Inquiry →</span>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: 3D Earth Globe (Three.js preserved) */}
          <div className="lg:col-span-5 h-[380px] sm:h-[460px] lg:h-[520px] w-full rounded-2xl overflow-hidden border border-slate-800/80 bg-navy-950/70 shadow-card relative group">
            <div className="absolute top-3 left-4 z-20 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-tealAccent/80 animate-ping" />
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                Global Distributed Node (WebGL)
              </span>
            </div>

            <div className="w-full h-full">
              <EarthCanvas />
            </div>

            <div className="absolute bottom-3 right-4 z-20 pointer-events-none text-[10px] font-mono text-slate-500">
              Interactive 3D Planetary Canvas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
