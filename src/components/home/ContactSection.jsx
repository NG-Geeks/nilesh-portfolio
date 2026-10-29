"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import { siteLinks } from "../../data/links";
import CanvasFallback from "../canvas/CanvasFallback";

const EarthCanvas = dynamic(() => import("../canvas/Earth"), {
  ssr: false,
  loading: () => (
    <CanvasFallback title="Interactive 3D Planetary Node (Three.js)" />
  ),
});

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
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

    if (form.honeypot) {
      setStatus({ submitting: false, submitted: true, error: null });
      return;
    }

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please fill out all required fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please provide a valid work email.",
      });
      return;
    }

    if (status.submitting) return;

    setStatus({ submitting: true, submitted: false, error: null });

    const serviceId =
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_cwjtp9t";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_z5ohjpl";
    const publicKey =
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "21kf0H_70ey5M6duv";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          to_name: "Nilesh Gupta",
          from_email: form.email.trim(),
          to_email: siteLinks.email,
          subject: `Homepage Inquiry from ${form.name.trim()}`,
          message: form.message.trim(),
        },
        publicKey,
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setForm({ name: "", email: "", message: "", honeypot: "" });
    } catch (err) {
      console.error("Submission error:", err);
      setStatus({
        submitting: false,
        submitted: false,
        error: `Could not send message automatically. Please email me directly at ${siteLinks.email}.`,
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-t border-slate-800/60 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950 border border-teal-500/30 p-6 sm:p-10 lg:p-12 shadow-sm">
          {/* Top Intro Bar */}
          <div className="max-w-3xl mb-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-mono bg-teal-400/10 text-teal-400 border border-teal-400/20">
              <span>Direct Hiring & Collaboration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Looking for a Backend Software Engineer?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              I am actively considering opportunities focused on distributed
              systems, multi-tenant SaaS security, subscription billing, and
              scalable commerce platforms.
            </p>
          </div>

          {/* Side-by-Side: Interactive Form & 3D Planetary Visualizer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Quick Direct Inquiry Form + Quick Actions */}
            <div className="lg:col-span-6 space-y-5">
              <div className="p-6 sm:p-7 rounded-xl bg-slate-950/70 border border-slate-800/80 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Quick Inquiry Form
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Send a message directly to my inbox.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="text-xs font-mono text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    Full Contact Page →
                  </Link>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="honeypot"
                    value={form.honeypot}
                    onChange={handleChange}
                    style={{ display: "none" }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="hp_name"
                        className="block text-[11px] font-mono text-slate-300 mb-1"
                      >
                        Your Name *
                      </label>
                      <input
                        id="hp_name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Doe"
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-teal-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hp_email"
                        className="block text-[11px] font-mono text-slate-300 mb-1"
                      >
                        Work Email *
                      </label>
                      <input
                        id="hp_email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@company.com"
                        className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-teal-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="hp_msg"
                      className="block text-[11px] font-mono text-slate-300 mb-1"
                    >
                      Message / Opportunity Scope *
                    </label>
                    <textarea
                      id="hp_msg"
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your role, team, or platform challenge..."
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-teal-400 transition-colors"
                    />
                  </div>

                  {status.error && (
                    <div className="p-2.5 rounded bg-rose-950/40 border border-rose-800/60 text-rose-300 text-[11px]">
                      {status.error}
                    </div>
                  )}

                  {status.submitted && (
                    <div className="p-2.5 rounded bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-[11px]">
                      ✓ Message received. I will respond to your email promptly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 disabled:opacity-50 text-slate-950 font-semibold text-xs font-mono transition-all shadow-sm"
                  >
                    {status.submitting ? "Sending..." : "Submit Message →"}
                  </button>
                </form>
              </div>

              {/* Quick Channels Links */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <a
                  href={siteLinks.mailto}
                  className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 transition-colors"
                >
                  <span>Email Directly ({siteLinks.email})</span>
                  <span>↗</span>
                </a>

                <div className="flex items-center gap-3 text-slate-400">
                  <a
                    href={siteLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                  <span>•</span>
                  <a
                    href={siteLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    GitHub ↗
                  </a>
                  <span>•</span>
                  <a
                    href={siteLinks.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    CV / Résumé ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Restored Interactive 3D Earth Planetary Globe */}
            <div className="lg:col-span-6 h-[340px] sm:h-[400px] lg:h-[440px] w-full rounded-xl overflow-hidden border border-slate-800/70 bg-slate-950/60 relative shadow-inner">
              <div className="absolute top-3 left-3 z-10 text-[11px] font-mono text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded border border-slate-700/80 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                {/* <span>Interactive 3D Planetary Node</span> */}
              </div>

              <div className="absolute bottom-3 right-3 z-10 text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800 pointer-events-none">
                Drag to Orbit • Continuous Rotation
              </div>

              <EarthCanvas />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
