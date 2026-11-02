"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const firstName = "Léia";
const lastName = "Oliveira";

// Each line of the code window: [text, color class]
const codeLines: [string, string][][] = [
  [["const ", "text-[#c4a7ff]"], ["leia", "text-[#7aa2f7]"], [" = {", "text-[#e8e6f5]"]],
  [["  role: ", "text-[#9d99b8]"], ['"Full Stack"', "text-[#a6e3a1]"], [",", "text-[#e8e6f5]"]],
  [["  stack: [", "text-[#9d99b8]"], ['"React"', "text-[#a6e3a1]"], [", ", "text-[#e8e6f5]"], ['"Next.js"', "text-[#a6e3a1]"], [", ", "text-[#e8e6f5]"], ['"Node"', "text-[#a6e3a1]"], ["],", "text-[#e8e6f5]"]],
  [["  platforms: [", "text-[#9d99b8]"], ['"web"', "text-[#a6e3a1]"], [", ", "text-[#e8e6f5]"], ['"mobile"', "text-[#a6e3a1]"], ["],", "text-[#e8e6f5]"]],
  [["  motto: ", "text-[#9d99b8]"], ['"keep it simple"', "text-[#f9a8d4]"], [",", "text-[#e8e6f5]"]],
  [["};", "text-[#e8e6f5]"]],
  [["", ""]],
  [["render", "text-[#7aa2f7]"], ["(", "text-[#e8e6f5]"], ["<Leia />", "text-[#c4a7ff]"], [");", "text-[#e8e6f5]"]],
];
const totalChars = codeLines.reduce((sum, line) => sum + line.reduce((s, [t]) => s + t.length, 0) + 1, 0);

/** Returns the colored code cut down to the first `count` characters. */
function sliceCode(count: number): [string, string][][] {
  let remaining = count;
  return codeLines.map((line) => {
    const parts: [string, string][] = [];
    for (const [text, color] of line) {
      if (remaining <= 0) break;
      parts.push([text.slice(0, remaining), color]);
      remaining -= text.length;
    }
    remaining -= 1; // newline
    return parts;
  });
}

function CodeWindow() {
  const [typed, setTyped] = useState(0);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const instant = setTimeout(() => {
        setTyped(totalChars);
        setRendered(true);
      }, 0);
      return () => clearTimeout(instant);
    }
    let timer: ReturnType<typeof setInterval> | undefined;
    let reveal: ReturnType<typeof setTimeout> | undefined;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        setTyped((t) => {
          if (t >= totalChars) {
            clearInterval(timer);
            reveal = setTimeout(() => setRendered(true), 250);
            return t;
          }
          return t + 2;
        });
      }, 28);
    }, 900);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
      clearTimeout(reveal);
    };
  }, []);

  const visibleLines = sliceCode(typed);
  const done = typed >= totalChars;

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-violet/30 via-blue/20 to-pink/30 blur-2xl" aria-hidden="true" />

      {/* Editor */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[var(--code-bg)] shadow-2xl shadow-violet/20">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-[#9d99b8]">leia.tsx</span>
        </div>
        <pre className="min-h-[13.5rem] overflow-hidden px-4 py-4 font-mono text-[12.5px] leading-6 sm:text-[13.5px]" aria-label="Código de apresentação">
          {visibleLines.map((parts, i) => (
            <div key={i} className="flex">
              <span className="mr-4 w-4 select-none text-right text-[#5e5b78]">{i + 1}</span>
              <span className="whitespace-pre">
                {parts.map(([t, c], j) => (
                  <span key={j} className={c}>
                    {t}
                  </span>
                ))}
                {!done && parts.length > 0 && i === visibleLines.findLastIndex((p) => p.length > 0) && <span className="caret" />}
              </span>
            </div>
          ))}
        </pre>
      </div>

      {/* Rendered output */}
      <div
        className={`relative z-10 -mt-4 ml-auto w-[86%] rounded-2xl border border-line bg-surface p-4 shadow-xl sm:-mr-8 ${
          rendered ? "render-in" : "opacity-0"
        }`}
        aria-hidden={!rendered}
      >
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl ring-2 ring-violet/40">
            <Image src="/perfil.jpg" alt="Foto de Léia Oliveira" fill sizes="64px" className="object-cover" priority />
          </div>
          <div className="min-w-0">
            <p className="font-display text-lg font-bold leading-tight text-ink">Léia Oliveira</p>
            <p className="text-sm text-muted">Full Stack · web e mobile</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["React", "Next.js", "Node"].map((t) => (
                <span key={t} className="rounded-full bg-surface-2 px-2.5 py-0.5 text-xs font-medium text-ink">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <span className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-violet to-blue px-3 py-1 font-mono text-[11px] font-semibold text-white shadow-lg">
          renderizado ✓
        </span>
      </div>
    </div>
  );
}

function Letters({ word, offset }: { word: string; offset: number }) {
  return (
    <>
      {word.split("").map((ch, i) => (
        <span key={i} className="name-letter" style={{ animationDelay: `${(offset + i) * 55}ms` }}>
          {ch}
        </span>
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center pb-16 pt-28">
      <div className="dots pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="fade-in inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-4 py-2 text-sm font-medium text-ink backdrop-blur" style={{ animationDelay: "0.1s" }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            Aberta a novas oportunidades
          </p>

          <h1 className="mt-6 font-display text-[clamp(3.5rem,11vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-ink">
            <span className="block">
              <Letters word={firstName} offset={0} />
            </span>
            <span className="relative block">
              <span className="name-letter gradient-ink" style={{ animationDelay: `${firstName.length * 55 + 80}ms, 0ms` }}>
                {lastName}
              </span>
              <svg className="scribble absolute -bottom-3 left-0 h-5 w-[min(100%,26rem)] text-pink" viewBox="0 0 420 20" fill="none" preserveAspectRatio="none" aria-hidden="true">
                <path d="M3 14 C 90 4, 180 4, 250 11 S 380 16, 417 6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="fade-in mt-10 font-display text-2xl font-semibold text-ink sm:text-3xl" style={{ animationDelay: "0.9s" }}>
            Desenvolvedora Full Stack
          </p>
          <p className="fade-in mt-4 max-w-xl text-lg leading-relaxed text-muted" style={{ animationDelay: "1.05s" }}>
            Quase 5 anos construindo produtos web e mobile com React, Next.js, React Native, Node.js e
            TypeScript. Já passei por banco, fintech e, hoje, atendo clientes internacionais, usando IA para
            automatizar o que antes era manual.
          </p>

          <div className="fade-in mt-9 flex flex-wrap gap-3" style={{ animationDelay: "1.2s" }}>
            <a
              href="#experiencia"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet to-blue px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet/40"
            >
              Ver minha experiência
              <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-7 py-3.5 font-semibold text-ink transition-all duration-300 hover:-translate-y-1 hover:border-violet"
            >
              Falar comigo
            </a>
          </div>

          <dl className="fade-in mt-12 grid max-w-md grid-cols-3 gap-6" style={{ animationDelay: "1.35s" }}>
            {[
              ["~5", "anos de experiência"],
              ["5", "empresas"],
              ["IA", "aplicada em produtos"],
            ].map(([n, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-4xl font-extrabold text-ink">{n}</dd>
                <dd className="mt-1 text-sm leading-snug text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="float">
            <CodeWindow />
          </div>
        </div>
      </div>
    </section>
  );
}
