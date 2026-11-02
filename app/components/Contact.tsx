"use client";

import { useState } from "react";
import { links } from "../data";

const channels = [
  {
    label: "LinkedIn",
    href: links.linkedin,
    icon: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
  },
  {
    label: "GitHub",
    href: links.github,
    icon: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.2 11.39.6.11.83-.26.83-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z",
  },
  {
    label: "WhatsApp",
    href: links.whatsapp,
    icon: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88zM20.46 3.49A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${links.email}`;
    }
  };

  return (
    <section id="contato" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-violet via-blue to-pink p-8 text-white shadow-2xl shadow-violet/30 sm:p-14">
          <div className="dots absolute inset-0 opacity-20" aria-hidden="true" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" aria-hidden="true" />

          <div className="relative">
            <h2 className="max-w-3xl font-display text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
              Vamos construir algo juntos?
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Estou aberta a vagas de desenvolvimento full stack, pleno ou sênior, remotas ou em São Paulo. Me
              manda uma mensagem, respondo rápido.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={`mailto:${links.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-[#17162b] transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="3" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
                {links.email}
              </a>
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/15"
                aria-live="polite"
              >
                {copied ? "E-mail copiado" : "Copiar e-mail"}
              </button>
            </div>

            <ul className="mt-10 flex flex-wrap gap-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 font-medium backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/25"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={c.icon} />
                    </svg>
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-line pt-8 text-sm text-muted sm:flex-row">
          <span className="font-display text-xl font-extrabold text-ink">
            léia<span className="text-violet">.</span>
          </span>
          <span>Keep it simple. Feito com Next.js e Tailwind CSS.</span>
          <span>© {new Date().getFullYear()} Léia Oliveira</span>
        </footer>
      </div>
    </section>
  );
}
