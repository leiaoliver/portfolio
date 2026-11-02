"use client";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const current = document.documentElement.dataset.theme as Theme | undefined;
    const next: Theme = current === "dark" ? "light" : "dark";
    const apply = () => {
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {}
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };

    if (!doc.startViewTransition || reduce) {
      apply();
      return;
    }

    // Circular reveal growing from the button.
    const x = e.clientX;
    const y = e.clientY;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const transition = doc.startViewTransition(apply);
    transition.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(0.4, 0, 0.2, 1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar entre tema claro e escuro"
      title="Alternar tema"
      className="relative grid h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink transition-transform duration-300 hover:scale-110 hover:rotate-12"
    >
      {/* Sun: shown in light theme */}
      <svg
        viewBox="0 0 24 24"
        className="absolute h-5 w-5 scale-100 rotate-0 opacity-100 transition-all duration-500 dark:scale-0 dark:-rotate-90 dark:opacity-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      {/* Moon: shown in dark theme */}
      <svg
        viewBox="0 0 24 24"
        className="absolute h-5 w-5 scale-0 rotate-90 opacity-0 transition-all duration-500 dark:scale-100 dark:rotate-0 dark:opacity-100"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
