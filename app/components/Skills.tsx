"use client";

import { useState } from "react";
import { useMultiReveal } from "../hooks/useScrollReveal";

const categories = [
  {
    name: "Frontend",
    icon: "◆",
    skills: [
      { name: "React / Next.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "TailwindCSS", level: 95 },
      { name: "HTML / CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "Figma → Code", level: 80 },
    ],
  },
  {
    name: "Backend",
    icon: "▲",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "Prisma / ORM", level: 80 },
    ],
  },
  {
    name: "IA & Prompt Eng.",
    icon: "●",
    skills: [
      { name: "Prompt Engineering", level: 90 },
      { name: "LLMs (GPT, Claude)", level: 88 },
      { name: "RAG Systems", level: 82 },
      { name: "LangChain", level: 78 },
      { name: "Automação com IA", level: 85 },
      { name: "Fine-tuning", level: 70 },
    ],
  },
  {
    name: "DevOps & Tools",
    icon: "■",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 78 },
      { name: "Vercel / Deploy", level: 88 },
      { name: "Linux / Terminal", level: 80 },
      { name: "CI/CD", level: 72 },
      { name: "AWS Basics", level: 68 },
    ],
  },
];

const allSkillNames = categories.flatMap((c) => c.skills.map((s) => s.name));

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const { revealRef, isVisible } = useMultiReveal();

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={revealRef("header")} className={`flex items-center gap-6 mb-16 transition-all duration-700 ${isVisible("header") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className="text-7xl sm:text-8xl font-bold text-white/[0.03] font-mono select-none">02</span>
          <div>
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em]">Competências</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
          </div>
          <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
        </div>

        <div ref={revealRef("tabs")} className={`flex flex-wrap gap-2 mb-12 transition-all duration-700 ${isVisible("tabs") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                activeTab === i
                  ? "bg-white/10 text-white border border-white/20"
                  : "text-zinc-600 border border-transparent hover:text-zinc-400 hover:border-white/5"
              }`}
            >
              <span className="text-xs">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div ref={revealRef("skills")} className={`grid sm:grid-cols-2 gap-x-12 gap-y-5 transition-all duration-700 ${isVisible("skills") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {categories[activeTab].skills.map((skill, i) => (
            <div key={skill.name} className="group" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{skill.name}</span>
                <span className="text-xs font-mono text-zinc-600">{skill.level}%</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-white/30 to-white/60 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible("skills") ? `${skill.level}%` : "0%",
                    transitionDelay: `${i * 80}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div ref={revealRef("marquee")} className={`mt-20 overflow-hidden transition-all duration-700 ${isVisible("marquee") ? "opacity-100" : "opacity-0"}`}>
          <div className="flex animate-marquee whitespace-nowrap">
            {[...allSkillNames, ...allSkillNames].map((name, i) => (
              <span key={i} className="text-xs font-mono text-zinc-700 mx-4">
                {name} <span className="text-zinc-800">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
