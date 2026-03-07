"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

export function useMultiReveal() {
  const [visibleSet, setVisibleSet] = useState<Set<string>>(new Set());
  const observers = useRef<Map<string, IntersectionObserver>>(new Map());

  const revealRef = useCallback((id: string) => {
    return (el: HTMLDivElement | null) => {
      if (!el) return;
      if (observers.current.has(id)) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSet((prev) => {
              const next = new Set(prev);
              next.add(id);
              return next;
            });
          } else {
            setVisibleSet((prev) => {
              const next = new Set(prev);
              next.delete(id);
              return next;
            });
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
      );

      observer.observe(el);
      observers.current.set(id, observer);
    };
  }, []);

  useEffect(() => {
    return () => {
      observers.current.forEach((obs) => obs.disconnect());
    };
  }, []);

  const isVisible = useCallback(
    (id: string) => visibleSet.has(id),
    [visibleSet]
  );

  return { revealRef, isVisible };
}
