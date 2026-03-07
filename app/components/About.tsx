"use client";

import { useMultiReveal } from "../hooks/useScrollReveal";

const timeline = [
  { year: "ETEC", title: "Técnico de Informática", desc: "Base sólida em programação, redes e sistemas" },
  { year: "FIAP", title: "Análise e Desenv. de Software", desc: "Graduação em ADS — desenvolvimento full-stack" },
  { year: "Rocketseat", title: "Eng. de Prompt de IA", desc: "Certificação em engenharia de prompt e IA generativa" },
  { year: "Hoje", title: "Full-Stack & IA", desc: "Do desenvolvimento ao deploy, com inteligência artificial" },
];

const facts = [
  { label: "Formação", value: "ADS — FIAP · Téc. Info — ETEC" },
  { label: "Foco", value: "Full-Stack + IA" },
  { label: "Stack", value: "React · Node · Python · Next.js" },
  { label: "IA", value: "LLMs · RAG · Automação" },
  { label: "Local", value: "São Paulo, Brasil" },
];

export default function About() {
  const { revealRef, isVisible } = useMultiReveal();

  return (
    <section id="sobre" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-white/[0.01] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={revealRef("header")} className={`flex items-center gap-6 mb-16 transition-all duration-700 ${isVisible("header") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className="text-7xl sm:text-8xl font-bold text-white/[0.03] font-mono select-none">01</span>
          <div>
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em]">Quem sou</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Sobre mim</h2>
          </div>
          <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div ref={revealRef("bio")} className={`space-y-6 transition-all duration-700 ${isVisible("bio") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Sou <span className="text-white font-medium">Analista de Software</span> formada em
                Análise e Desenvolvimento de Software pela <span className="text-white font-medium">FIAP</span>,
                com técnico de informática pela <span className="text-white font-medium">ETEC</span> e
                certificada em Engenharia de Prompt de IA pela <span className="text-white font-medium">Rocketseat</span>.
                Minha paixão é construir aplicações completas — <span className="text-white font-medium">do desenvolvimento ao deploy</span>.
              </p>
              <p className="text-zinc-500 leading-relaxed">
                Trabalho com desenvolvimento full-stack criando sites e aplicações web de ponta a ponta.
                Além disso, atuo com <span className="text-zinc-300">projetos de IA</span> que venho
                desenvolvendo tanto nos meus estudos quanto na empresa onde trabalho, como o projeto{" "}
                <span className="text-white font-medium">Kysee</span>.
              </p>
              <p className="text-zinc-500 leading-relaxed">
                Combino conhecimento técnico em engenharia de software com inteligência artificial
                para entregar soluções que realmente fazem diferença — com código limpo,
                boas práticas e foco em resultado.
              </p>
            </div>
            <div ref={revealRef("facts")} className={`grid grid-cols-2 gap-3 pt-8 transition-all duration-700 ${isVisible("facts") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              {facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`p-3 border border-white/5 rounded-lg hover:border-white/15 hover:bg-white/[0.02] transition-all duration-500 ${
                    isVisible("facts") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">{fact.label}</span>
                  <p className="text-sm text-zinc-300 mt-0.5">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div ref={revealRef("timeline")} className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div
                    key={item.year}
                    className={`relative pl-12 group transition-all duration-500 ${
                      isVisible("timeline") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <div className="absolute left-[11px] top-2 w-2.5 h-2.5 rounded-full border border-zinc-700 bg-[#09090b] group-hover:border-white/50 group-hover:bg-white/20 transition-all duration-300" />
                    <div className="font-mono text-xs text-zinc-600 mb-1">{item.year}</div>
                    <h3 className="text-white font-medium group-hover:translate-x-1 transition-transform duration-300">{item.title}</h3>
                    <p className="text-zinc-500 text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div ref={revealRef("stats")} className="mt-16 grid grid-cols-3 gap-4">
              {[
                { number: "30+", label: "Projetos" },
                { number: "25+", label: "Tecnologias" },
                { number: "2+", label: "Anos exp." },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center p-4 border border-white/5 rounded-lg animate-pulse-glow transition-all duration-500 hover:border-white/15 ${
                    isVisible("stats") ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-xs font-mono text-zinc-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
