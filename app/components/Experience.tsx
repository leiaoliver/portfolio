"use client";

import { useEffect, useRef, useState } from "react";
import { experiences } from "../data";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const [fill, setFill] = useState(0);

  // The timeline line fills as you scroll through the section.
  useEffect(() => {
    const onScroll = () => {
      const el = listRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const start = window.innerHeight * 0.7;
      const value = (start - rect.top) / rect.height;
      setFill(Math.min(1, Math.max(0, value)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="experiencia" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="Experiência"
          intro="De banco a fintech e a clientes internacionais: cada lugar me ensinou a entregar em um contexto diferente."
        />

        <ol ref={listRef} className="relative space-y-6 pl-8 sm:pl-12">
          <span className="absolute bottom-2 left-[7px] top-2 w-0.5 rounded-full bg-line sm:left-[11px]" aria-hidden="true" />
          <span
            className="absolute left-[7px] top-2 w-0.5 rounded-full bg-gradient-to-b from-violet via-blue to-pink sm:left-[11px]"
            style={{ height: `calc((100% - 1rem) * ${fill})` }}
            aria-hidden="true"
          />

          {experiences.map((exp, i) => (
            <li key={exp.company} className="reveal relative" style={{ transitionDelay: `${i * 60}ms` }}>
              <span
                className={`absolute -left-8 top-8 h-4 w-4 rounded-full border-4 border-bg sm:-left-12 sm:h-6 sm:w-6 ${
                  i === 0 ? "bg-violet shadow-[0_0_0_6px_var(--glow)]" : "bg-muted"
                }`}
                aria-hidden="true"
              />
              <article
                className="spotlight group rounded-3xl border border-line bg-surface/80 p-6 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-violet/50 sm:p-8"
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
                }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">{exp.company}</h3>
                  <p className="font-mono text-sm text-muted">{exp.period}</p>
                </div>
                <p className="mt-1 font-semibold text-violet">
                  {exp.role}
                  <span className="font-normal text-muted"> · {exp.place}</span>
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-ink/90">{exp.summary}</p>
                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span key={t} className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs font-medium text-ink">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
