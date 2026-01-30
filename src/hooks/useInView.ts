import { useEffect, useRef, useState } from "react";

export function useInView<T extends Element>({
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.15,
  once = true
}: {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
} = {}) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, isInView } as const;
}


