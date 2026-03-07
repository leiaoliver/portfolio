"use client";

import { useMultiReveal } from "../hooks/useScrollReveal";

const education = [
  {
    icon: "🎓",
    type: "Graduação",
    title: "Análise e Desenvolvimento de Software",
    institution: "FIAP",
  },
  {
    icon: "💻",
    type: "Técnico",
    title: "Técnico de Informática",
    institution: "ETEC",
  },
  {
    icon: "🚀",
    type: "Certificação",
    title: "Engenharia de Prompt de IA",
    institution: "Rocketseat",
  },
];

const knowledge = [
  {
    area: "Full-Stack",
    items: ["React / Next.js", "Node.js / Express", "TypeScript", "PostgreSQL / MongoDB", "REST APIs", "TailwindCSS"],
  },
  {
    area: "IA & Automação",
    items: ["Prompt Engineering", "LLMs (GPT, Claude)", "RAG Systems", "LangChain", "Automação", "Fine-tuning"],
  },
  {
    area: "Ferramentas & Infra",
    items: ["Git / GitHub", "Docker", "Vercel / AWS", "Linux", "CI/CD", "Figma"],
  },
];

export default function PromptEngineering() {
  const { revealRef, isVisible } = useMultiReveal();

  return (
    <section id="formacao" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={revealRef("header")} className={`flex items-center gap-6 mb-16 transition-all duration-700 ${isVisible("header") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className="text-7xl sm:text-8xl font-bold text-white/[0.03] font-mono select-none">04</span>
          <div>
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em]">Educação</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Formação & Certificações</h2>
          </div>
          <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
        </div>

        <div ref={revealRef("education")} className="grid md:grid-cols-3 gap-4 mb-16">
          {education.map((edu, i) => (
            <div
              key={edu.institution}
              className={`group p-6 rounded-xl border border-white/5 hover:border-white/15 hover:bg-white/[0.02] transition-all duration-500 ${
                isVisible("education") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-3xl mb-4">{edu.icon}</div>
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">{edu.type}</span>
              <h3 className="text-white font-medium mt-1 group-hover:translate-x-1 transition-transform duration-300">
                {edu.title}
              </h3>
              <p className="text-sm text-zinc-500 mt-1">{edu.institution}</p>
            </div>
          ))}
        </div>

        <div ref={revealRef("knowledge")} className="grid md:grid-cols-3 gap-8">
          {knowledge.map((k, i) => (
            <div
              key={k.area}
              className={`transition-all duration-500 ${
                isVisible("knowledge") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <h3 className="text-sm font-mono text-zinc-400 mb-4 uppercase tracking-wider">{k.area}</h3>
              <div className="space-y-2">
                {k.items.map((item) => (
                  <div
                    key={item}
                    className="text-sm text-zinc-500 hover:text-zinc-300 pl-4 border-l border-white/5 hover:border-white/20 transition-all duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div ref={revealRef("cta")} className={`mt-16 text-center transition-all duration-700 ${isVisible("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a
            href="https://linkedin.com/in/leiaoliver"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-white border border-white/10 px-6 py-3 rounded-lg hover:border-white/30 hover:bg-white/5 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Entre outras certificações e cursos no LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
