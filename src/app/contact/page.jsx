"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import emailjs from "@emailjs/browser";
import { siteLinks } from "../../data/links";
import CanvasFallback from "../../components/canvas/CanvasFallback";

const EarthCanvas = dynamic(() => import("../../components/canvas/Earth"), {
  ssr: false,
  loading: () => <CanvasFallback title="Interactive 3D Planetary Canvas" />,
});

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "Backend / Platform Engineering Role",
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

    // 1. Honeypot check
    if (form.honeypot) {
      setStatus({ submitting: false, submitted: true, error: null });
      return;
    }

    // 2. Client-side input validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please complete all required fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please enter a valid email address.",
      });
      return;
    }

    // 3. Duplicate prevention
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
          subject: `${form.role} — ${form.company || form.name}`,
          message: `Company: ${form.company || "Not Specified"}\nRole Context: ${form.role}\n\n${form.message.trim()}`,
        },
        publicKey,
      );

      setStatus({ submitting: false, submitted: true, error: null });
      setForm({
        name: "",
        email: "",
        company: "",
        role: "Backend / Platform Engineering Role",
        message: "",
        honeypot: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setStatus({
        submitting: false,
        submitted: false,
        error: `Submission service could not deliver the message. Please email me directly at ${siteLinks.email}.`,
      });
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-24 text-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded text-xs font-mono bg-teal-400/10 text-teal-400 border border-teal-400/20">
            <span>Direct Hiring & Collaboration</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Discuss Engineering Opportunities
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            I am actively evaluating roles in{" "}
            <strong>Backend Software Engineering</strong>,{" "}
            <strong>Platform Engineering</strong>, and{" "}
            <strong>Distributed Systems</strong>. If you are solving complex
            challenges in multi-tenant SaaS, billing infrastructure,
            high-throughput search, or platform reliability, I would welcome a
            conversation.
          </p>
        </div>

        {/* Quick Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Email */}
          <a
            href={siteLinks.mailto}
            className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-teal-500/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                Direct Email
              </span>
              <span className="text-xs font-mono font-semibold text-slate-100 group-hover:text-teal-400 transition-colors break-all">
                {siteLinks.email}
              </span>
            </div>
            <span className="text-xs font-mono text-teal-400 mt-3 inline-flex items-center gap-1">
              <span>Send prefilled email</span>
              <span>→</span>
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href={siteLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-teal-500/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                Professional Network
              </span>
              <span className="text-xs font-mono font-semibold text-slate-100 group-hover:text-teal-400 transition-colors">
                linkedin.com/in/nilesh-geeks
              </span>
            </div>
            <span className="text-xs font-mono text-teal-400 mt-3 inline-flex items-center gap-1">
              <span>Connect on LinkedIn</span>
              <span>↗</span>
            </span>
          </a>

          {/* GitHub */}
          <a
            href={siteLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-teal-500/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                Source Code
              </span>
              <span className="text-xs font-mono font-semibold text-slate-100 group-hover:text-teal-400 transition-colors">
                github.com/ng-geeks
              </span>
            </div>
            <span className="text-xs font-mono text-teal-400 mt-3 inline-flex items-center gap-1">
              <span>Review Repositories</span>
              <span>↗</span>
            </span>
          </a>

          {/* LeetCode */}
          <a
            href={siteLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-teal-500/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                Algorithms & Problem Solving
              </span>
              <span className="text-xs font-mono font-semibold text-slate-100 group-hover:text-teal-400 transition-colors">
                leetcode.com/ng404
              </span>
            </div>
            <span className="text-xs font-mono text-teal-400 mt-3 inline-flex items-center gap-1">
              <span>View LeetCode Profile</span>
              <span>↗</span>
            </span>
          </a>

          {/* Résumé */}
          <a
            href={siteLinks.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/70 hover:border-teal-500/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                Credentials & CV
              </span>
              <span className="text-xs font-mono font-semibold text-slate-100 group-hover:text-teal-400 transition-colors">
                Verified Résumé (PDF)
              </span>
            </div>
            <span className="text-xs font-mono text-teal-400 mt-3 inline-flex items-center gap-1">
              <span>Download PDF</span>
              <span>↗</span>
            </span>
          </a>
        </div>

        {/* Main Interactive Form & 3D Earth Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-slate-900/50 border border-slate-800/70 shadow-sm">
            <h2 className="text-base font-bold text-white mb-1">
              Send a Message
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Alternatively, send a message through the form below and I will
              get back to you promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="honeypot"
                value={form.honeypot}
                onChange={handleChange}
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-slate-300 mb-1"
                  >
                    Your Name <span className="text-teal-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-slate-300 mb-1"
                  >
                    Work Email <span className="text-teal-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-mono text-slate-300 mb-1"
                  >
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company or Team"
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-xs font-mono text-slate-300 mb-1"
                  >
                    Opportunity Context
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-teal-400 transition-colors"
                  >
                    <option value="Backend Engineering Role">
                      Backend Software Engineering Role
                    </option>
                    <option value="Platform Engineering Role">
                      Platform Engineering Role
                    </option>
                    <option value="Distributed Systems Role">
                      Distributed Systems Opportunity
                    </option>
                    <option value="Consulting / Architectural Review">
                      Technical Consultation
                    </option>
                    <option value="General Inquiry">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-slate-300 mb-1"
                >
                  Message / Role Scope <span className="text-teal-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your tech stack, system requirements, or the role you are looking to fill..."
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-teal-400 transition-colors"
                />
              </div>

              {status.error && (
                <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-800/60 text-rose-300 text-xs">
                  {status.error}
                </div>
              )}

              {status.submitted && (
                <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs">
                  ✓ Message transmitted successfully. I will review and reply
                  via email.
                </div>
              )}

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={status.submitting}
                  className="px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 disabled:opacity-50 text-slate-950 font-semibold text-xs font-mono transition-all shadow-sm flex items-center gap-2"
                >
                  {status.submitting ? (
                    <>
                      <span className="w-3 h-3 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Transmit Message →</span>
                  )}
                </button>

                <span className="text-[11px] font-mono text-slate-400">
                  Or email directly: {siteLinks.email}
                </span>
              </div>
            </form>
          </div>

          {/* 3D Visualizer Card */}
          <div className="lg:col-span-5 h-[360px] sm:h-[420px] rounded-xl overflow-hidden bg-slate-950/50 border border-slate-800/70 relative">
            <div className="absolute top-3 left-3 z-10 text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
              {/* Interactive 3D Planetary Node */}
            </div>
            <EarthCanvas />
          </div>
        </div>
      </div>
    </div>
  );
}
