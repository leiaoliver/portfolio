"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["sobre", "skills", "projetos", "formacao", "contato"];
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#skills", label: "Skills" },
    { href: "#projetos", label: "Projetos" },
    { href: "#formacao", label: "Formação" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="group relative font-mono text-lg font-bold tracking-tighter"
        >
          <span className="relative z-10">LO</span>
          <span className="text-zinc-500 group-hover:text-white transition-colors duration-300">.</span>
          <span className="absolute -inset-2 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm transition-colors duration-300 rounded-full ${
                  isActive
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-white/10 rounded-full" />
                )}
                <span className="relative">{link.label}</span>
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-zinc-200 transition-all duration-300 hover:scale-105"
          >
            Disponível para projetos
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-px bg-white transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-[#09090b]/95 backdrop-blur-xl border-t border-white/5">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-lg text-zinc-400 hover:text-white transition-colors duration-300"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="font-mono text-xs text-zinc-600 mr-3">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
