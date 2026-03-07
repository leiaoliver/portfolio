"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const roles = [
  "Desenvolvedora Full-Stack",
  "Engenheira de IA",
  "Prompt Engineer",
  "Analista de Software",
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && displayText === role) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayText === "") {
      setTimeout(() => {
        setIsDeleting(false);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 0);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? role.substring(0, displayText.length - 1)
          : role.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const el = containerRef.current;
    el?.addEventListener("mousemove", handleMouseMove);
    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.03), transparent 50%)`,
        }}
      />
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#09090b] via-transparent to-[#09090b]" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/[0.015] rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-1000 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-zinc-400">
                Disponível para projetos
              </span>
            </div>
            <div
              className={`transition-all duration-1000 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="text-white">Leia</span>
                <br />
                <span className="text-white">Oliver</span>
                <span className="text-zinc-600">.</span>
              </h1>
            </div>
            <div
              className={`transition-all duration-1000 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-center gap-2 font-mono text-lg sm:text-xl">
                <span className="text-zinc-500">{`>`}</span>
                <span className="text-zinc-300">{displayText}</span>
                <span className="w-[2px] h-6 bg-white animate-pulse" />
              </div>
            </div>
            <p
              className={`text-zinc-500 text-lg max-w-xl leading-relaxed transition-all duration-1000 delay-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Formada em ADS pela <span className="text-zinc-300">FIAP</span> e
              técnica em informática pela <span className="text-zinc-300">ETEC</span>.
              Construo aplicações completas — do desenvolvimento ao deploy,
              com experiência em projetos com IA e automação inteligente.
            </p>
            <div
              className={`flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="#projetos"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black text-sm font-medium rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <span className="relative z-10">Ver projetos</span>
                <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-zinc-400 border border-white/10 rounded-full hover:border-white/30 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Entre em contato
              </a>
            </div>
            <div
              className={`flex items-center gap-6 pt-4 transition-all duration-1000 delay-[900ms] ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="https://github.com/LeiaOliver"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-zinc-600 hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span className="text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/leiaoliver/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-zinc-600 hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
              </a>
            </div>
          </div>
          <div
            className={`lg:col-span-2 flex justify-center lg:justify-end transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-700" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-white/20 transition-all duration-500">
                <Image
                  src="/perfil.jpg"
                  alt="Leia Oliver"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-white/30 rounded-full" />
              </div>
              <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-1.5 h-1.5 bg-white/20 rounded-full" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#09090b] border border-white/10 rounded-full">
                <span className="text-xs font-mono text-zinc-400">FIAP · ETEC · São Paulo</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-[1100ms] ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-8 bg-linear-to-b from-zinc-600 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
