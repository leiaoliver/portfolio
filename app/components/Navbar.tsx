"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { id: "experiencia", label: "Experiência" },
  { id: "trabalhos", label: "Trabalhos" },
  { id: "stack", label: "Stack" },
  { id: "formacao", label: "Formação" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
      let current = "";
      for (const s of [...sections, { id: "contato" }]) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 160) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-line bg-bg/75 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="font-display text-2xl font-extrabold tracking-tight text-ink">
          léia<span className="text-violet">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === s.id ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {active === s.id && <span className="absolute inset-0 -z-10 rounded-full bg-surface-2" />}
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contato"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-bg transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Fale comigo
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface md:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden transition-all duration-500 md:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <ul className="space-y-1 border-t border-line bg-bg/95 px-4 py-4 backdrop-blur-xl">
          {[...sections, { id: "contato", label: "Contato" }].map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-display text-xl font-semibold text-ink hover:bg-surface-2"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-violet via-blue to-pink"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
