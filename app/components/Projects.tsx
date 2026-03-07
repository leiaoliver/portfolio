"use client";

import { useState } from "react";
import { useMultiReveal } from "../hooks/useScrollReveal";

const projects = [
  {
    title: "Kysee",
    subtitle: "Projeto profissional — empresa atual",
    description:
      "Plataforma inteligente que utiliza IA e LLMs para automatizar processos internos da empresa. Desenvolvimento full-stack com integração de modelos de linguagem, RAG e automação de workflows complexos.",
    tags: ["IA", "LLMs", "Python", "Automação"],
    highlight: true,
  },
  {
    title: "AI Interview System",
    subtitle: "Sistema de entrevistas com IA",
    description:
      "Plataforma que conduz entrevistas técnicas automatizadas usando LLMs. Gera perguntas contextuais, avalia respostas em tempo real e produz relatórios detalhados de performance dos candidatos.",
    tags: ["Next.js", "OpenAI", "TypeScript", "Prisma"],
    github: "https://github.com/LeiaOliver",
  },
  {
    title: "Knowledge Base RAG",
    subtitle: "Base de conhecimento inteligente",
    description:
      "Sistema RAG (Retrieval-Augmented Generation) que permite consultas em linguagem natural sobre documentos internos. Utiliza embeddings, vector store e LLMs para respostas precisas e contextuais.",
    tags: ["Python", "LangChain", "ChromaDB", "FastAPI"],
    github: "https://github.com/LeiaOliver",
  },
  {
    title: "E-commerce Full-Stack",
    subtitle: "Loja virtual completa",
    description:
      "E-commerce completo com catálogo dinâmico, carrinho, checkout integrado com gateway de pagamento, painel admin e dashboard de métricas em tempo real.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/LeiaOliver",
  },
  {
    title: "Bot Telegram + IA",
    subtitle: "Assistente inteligente no Telegram",
    description:
      "Bot para Telegram com integração a modelos de IA para atendimento automatizado, respostas contextuais e execução de comandos por linguagem natural.",
    tags: ["Python", "Telegram API", "GPT", "Redis"],
    github: "https://github.com/LeiaOliver",
  },
  {
    title: "Dashboard Analytics",
    subtitle: "Painel de análise de dados",
    description:
      "Dashboard interativo para visualização de dados em tempo real com gráficos dinâmicos, filtros avançados e exportação de relatórios customizados.",
    tags: ["Next.js", "Chart.js", "TailwindCSS", "API REST"],
    github: "https://github.com/LeiaOliver",
  },
];

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const { revealRef, isVisible } = useMultiReveal();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="projetos" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={revealRef("header")} className={`flex items-center gap-6 mb-16 transition-all duration-700 ${isVisible("header") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className="text-7xl sm:text-8xl font-bold text-white/[0.03] font-mono select-none">03</span>
          <div>
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em]">Portfólio</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Projetos</h2>
          </div>
          <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
        </div>

        <div ref={revealRef("grid")} className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`tilt-card relative group p-6 rounded-xl border transition-all duration-500 cursor-pointer ${
                project.highlight ? "md:col-span-2 border-white/10 bg-white/[0.02]" : "border-white/5 hover:border-white/15"
              } ${hoveredIdx !== null && hoveredIdx !== i ? "opacity-40" : "opacity-100"} ${
                isVisible("grid") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              onMouseMove={handleMouseMove}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="tilt-card-spotlight absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:translate-x-1 transition-transform duration-300">
                      {project.title}
                      {project.highlight && (
                        <span className="ml-2 text-[10px] font-mono text-zinc-500 border border-white/10 px-2 py-0.5 rounded-full">
                          DESTAQUE
                        </span>
                      )}
                    </h3>
                    <p className="text-xs font-mono text-zinc-600 mt-0.5">{project.subtitle}</p>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-600 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className={`text-sm text-zinc-500 leading-relaxed transition-all duration-300 ${expanded === i ? "" : "line-clamp-2"}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={revealRef("cta")} className={`mt-12 text-center transition-all duration-700 ${isVisible("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <a
            href="https://github.com/LeiaOliver"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-white border border-white/10 px-6 py-3 rounded-lg hover:border-white/30 hover:bg-white/5 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Ver mais no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
