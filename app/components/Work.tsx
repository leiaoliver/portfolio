"use client";

import { links, works } from "../data";
import SectionTitle from "./SectionTitle";

function Glyph({ kind }: { kind: string }) {
  if (kind === "ai") {
    return (
      <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
        <circle cx="60" cy="60" r="18" fill="var(--violet)" className="animate-pulse" />
        {[0, 60, 120, 180, 240, 300].map((a) => {
          const x = 60 + 42 * Math.cos((a * Math.PI) / 180);
          const y = 60 + 42 * Math.sin((a * Math.PI) / 180);
          return (
            <g key={a}>
              <line x1="60" y1="60" x2={x} y2={y} stroke="var(--blue)" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx={x} cy={y} r="7" fill="var(--surface)" stroke="var(--blue)" strokeWidth="3" />
            </g>
          );
        })}
      </svg>
    );
  }
  if (kind === "calendar") {
    return (
      <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
        <rect x="16" y="22" width="88" height="80" rx="14" fill="var(--surface)" stroke="var(--violet)" strokeWidth="3" />
        <rect x="16" y="22" width="88" height="22" rx="11" fill="var(--violet)" />
        {[0, 1, 2, 3].map((c) =>
          [0, 1, 2].map((r) => (
            <rect
              key={`${c}-${r}`}
              x={26 + c * 19}
              y={54 + r * 15}
              width="13"
              height="9"
              rx="3"
              fill={c === 2 && r === 1 ? "var(--pink)" : "var(--surface-2)"}
            />
          ))
        )}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
      <rect x="14" y="34" width="70" height="46" rx="10" fill="var(--blue)" transform="rotate(-8 49 57)" />
      <rect x="34" y="44" width="72" height="46" rx="10" fill="var(--violet)" />
      <rect x="44" y="56" width="18" height="12" rx="3" fill="#ffd36e" />
      <rect x="44" y="76" width="44" height="5" rx="2.5" fill="rgba(255,255,255,.7)" />
    </svg>
  );
}

export default function Work() {
  return (
    <section id="trabalhos" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="Trabalhos"
          intro="Alguns produtos em que trabalhei. São projetos de clientes e empresas, por isso o código não é público."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {works.map((w, i) => (
            <article
              key={w.title}
              className={`reveal spotlight group flex flex-col rounded-3xl border border-line bg-surface/80 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-violet/50 hover:shadow-2xl hover:shadow-violet/10 ${
                i === 0 ? "lg:col-span-2 lg:flex-row lg:items-center lg:gap-10" : ""
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
            >
              <div
                className={`mb-6 grid place-items-center rounded-2xl bg-surface-2 transition-transform duration-700 group-hover:scale-[1.03] ${
                  i === 0 ? "h-44 lg:mb-0 lg:h-56 lg:w-72 lg:shrink-0" : "h-40"
                }`}
              >
                <div className="h-28 w-28 transition-transform duration-700 group-hover:rotate-6">
                  <Glyph kind={w.glyph} />
                </div>
              </div>
              <div className="flex flex-1 flex-col">
                <p className="text-sm font-semibold text-violet">{w.kind}</p>
                <h3 className={`mt-1 font-display font-bold leading-tight text-ink ${i === 0 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
                  {w.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{w.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {w.tags.map((t) => (
                    <span key={t} className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs font-medium text-ink">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 flex flex-col items-start gap-4 rounded-3xl border border-dashed border-line p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-muted">Projetos pessoais e de estudo estão no meu GitHub.</p>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-semibold text-bg transition-transform hover:-translate-y-0.5"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.2 11.39.6.11.83-.26.83-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Ver no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
