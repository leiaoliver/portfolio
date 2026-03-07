"use client";

import { useState } from "react";
import { useMultiReveal } from "../hooks/useScrollReveal";

const contacts = [
  {
    label: "Email",
    value: "leiaoliver@gmail.com",
    href: "mailto:leiaoliver@gmail.com",
    copyable: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "/in/leiaoliver",
    href: "https://linkedin.com/in/leiaoliver",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "/LeiaOliver",
    href: "https://github.com/LeiaOliver",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "(11) 99658-8992",
    href: "https://wa.me/5511996588992",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const services = [
  { name: "Desenvolvimento Full-Stack", msg: "Olá! Gostaria de saber mais sobre desenvolvimento full-stack." },
  { name: "Projetos com IA", msg: "Olá! Tenho interesse em projetos com inteligência artificial." },
  { name: "Prompt Engineering", msg: "Olá! Gostaria de conversar sobre prompt engineering." },
  { name: "APIs & Integrações", msg: "Olá! Preciso de ajuda com APIs e integrações." },
  { name: "Deploy & DevOps", msg: "Olá! Gostaria de saber mais sobre deploy e DevOps." },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { revealRef, isVisible } = useMultiReveal();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contato" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={revealRef("header")} className={`flex items-center gap-6 mb-16 transition-all duration-700 ${isVisible("header") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
          <span className="text-7xl sm:text-8xl font-bold text-white/[0.03] font-mono select-none">05</span>
          <div>
            <span className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em]">Fale comigo</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Contato</h2>
          </div>
          <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div ref={revealRef("cta")} className={`mb-12 transition-all duration-700 ${isVisible("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-zinc-500">Disponível para novos projetos</span>
              </div>
              <h3 className="text-2xl sm:text-3xl text-white font-bold leading-tight">
                Vamos criar algo<br />incrível.
              </h3>
            </div>

            <div ref={revealRef("contacts")} className="space-y-3">
              {contacts.map((contact, i) => (
                <div
                  key={contact.label}
                  className={`group flex items-center gap-4 p-4 rounded-lg border border-white/5 hover:border-white/15 hover:bg-white/[0.02] transition-all duration-500 ${
                    isVisible("contacts") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="text-zinc-600 group-hover:text-white transition-colors duration-300">
                    {contact.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">{contact.label}</span>
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-300 hover:text-white transition-colors truncate"
                    >
                      {contact.value}
                    </a>
                  </div>
                  {contact.copyable && (
                    <button
                      onClick={() => handleCopy(contact.value)}
                      className="text-zinc-700 hover:text-white transition-colors text-xs font-mono"
                    >
                      {copied ? "Copiado!" : "Copiar"}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div ref={revealRef("services")} className="lg:pt-20">
            <h4 className="text-xs font-mono text-zinc-600 uppercase tracking-[0.2em] mb-6">Serviços</h4>
            <div className="space-y-2">
              {services.map((service, i) => (
                <a
                  key={service.name}
                  href={`https://wa.me/5511996588992?text=${encodeURIComponent(service.msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between p-4 rounded-lg border border-white/5 hover:border-white/15 hover:bg-white/[0.02] transition-all duration-500 ${
                    isVisible("services") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">{service.name}</span>
                  <svg className="w-4 h-4 text-zinc-700 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div ref={revealRef("footer")} className={`mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-700 ${isVisible("footer") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-xl font-bold text-white tracking-tight">LO.</span>
          <p className="text-xs text-zinc-600 font-mono">
            Feito com Next.js, TailwindCSS e ☕
          </p>
          <span className="text-xs text-zinc-700 font-mono">
            © {new Date().getFullYear()} Léia Oliveira
          </span>
        </div>
      </div>
    </section>
  );
}
