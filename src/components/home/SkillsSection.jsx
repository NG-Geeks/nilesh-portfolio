'use client';

import React from "react";
import dynamic from "next/dynamic";
import { skillCategories } from "../../data/skills";
import {
  nodejs,
  typescript,
  docker,
  mongodb,
  reactjs,
  tailwind,
  threejs,
  git,
} from "../../assets";

// Dynamically load browser-dependent 3D ball canvas without SSR
const BallCanvas = dynamic(() => import("../canvas/Ball"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-2xl bg-slate-900/60 border border-slate-800 animate-pulse flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border border-teal-500/30 animate-spin" />
    </div>
  ),
});

const interactiveTech = [
  { name: "Node.js", icon: nodejs, category: "Runtime & API" },
  { name: "TypeScript", icon: typescript, category: "Type Safety" },
  { name: "Docker", icon: docker, category: "Containers" },
  { name: "MongoDB", icon: mongodb, category: "Persistence" },
  { name: "React", icon: reactjs, category: "Next.js UI" },
  { name: "Tailwind CSS", icon: tailwind, category: "Design System" },
  { name: "Three.js", icon: threejs, category: "WebGL Graphics" },
  { name: "Git", icon: git, category: "Version Control" },
];

export default function SkillsSection() {
  return (
    <section id="capabilities" className="py-16 md:py-24 border-t border-slate-800/60 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top: Section Header & Capability Domains */}
        <div>
          <div className="max-w-2xl mb-12 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded text-xs font-mono bg-teal-400/10 text-teal-400 border border-teal-400/20">
              <span>Core Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Technical Stack & Engineering Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Organized by architectural domain, reflecting verified hands-on production depth rather than superficial keyword checklists.
            </p>
          </div>

          {/* Domain Capabilities Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat) => (
              <div
                key={cat.category}
                className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/60 hover:border-slate-700/80 transition-all flex flex-col justify-between shadow-sm"
              >
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight pb-3 mb-3 border-b border-slate-800/60 flex items-center justify-between">
                    <span>{cat.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  </h3>

                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-0.5">
                        <div className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono leading-relaxed">
                          {skill.note}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Restored Original Three.js 3D Interactive Technology Spheres */}
        <div className="pt-10 border-t border-slate-800/60">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded text-[11px] font-mono bg-teal-400/10 text-teal-400 border border-teal-400/20">
                <span>Three.js Visual Stack</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Interactive 3D Technology Spheres
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Interactive floating icosahedron spheres rendered in real-time WebGL. Drag to orbit, spin, or observe continuous physics float.
              </p>
            </div>

            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>Real-Time Physics & Decal Mapping</span>
            </div>
          </div>

          {/* Floating Spheres Flex Grid */}
          <div className="flex flex-row flex-wrap justify-center items-center gap-6 sm:gap-10 p-6 sm:p-8 rounded-2xl bg-slate-900/30 border border-slate-800/60">
            {interactiveTech.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center group"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 relative">
                  <BallCanvas icon={tech.icon} name={tech.name} />
                </div>
                <span className="text-xs font-mono font-medium text-slate-200 mt-2 group-hover:text-teal-400 transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {tech.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
