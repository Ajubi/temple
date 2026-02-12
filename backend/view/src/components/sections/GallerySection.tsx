import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type GalleryItem = {
  id: string;
  title: string;
  src: string;
};

const GALLERY_FILES = [
  "/ae.jfif",
  "/be.jfif",
  "/ce.jfif",
  "/de.jfif",
  "/ee.jpg",
  "/f.jpg",
  "/gee.jpg",
  "/he.jpg",
  "/jee.jpg"
] as const;

function useGalleryItems(): GalleryItem[] {
  return useMemo(
    () =>
      GALLERY_FILES.map((src, i) => ({
        id: `g-${i}`,
        title:
          i % 3 === 0
            ? "Aarti light"
            : i % 3 === 1
              ? "Temple architecture"
              : "Festive decoration",
        src
      })),
    []
  );
}

export function GallerySection() {
  const items = useGalleryItems();
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [active, setActive] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active && !dialog.open) dialog.showModal();
    if (!active && dialog.open) dialog.close();
  }, [active]);

  return (
    <section id="gallery" className="relative py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="A quiet glimpse of temple life"
            description="Lightweight, optimized images (lazy loading) with an accessible lightbox preview."
          />
        </Reveal>

        <div className="mt-10 columns-2 gap-4 space-y-4 md:columns-3">
          {items.map((it, idx) => (
            <Reveal key={it.id} delay={idx * 0.02}>
              <button
                type="button"
                className={cn(
                  "group relative w-full overflow-hidden rounded-2xl border border-saffron-500/10 bg-white/70 shadow-soft backdrop-blur",
                  "break-inside-avoid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500/70",
                  "dark:border-white/10 dark:bg-white/5"
                )}
                onClick={() => setActive(it)}
                aria-label={`Open ${it.title}`}
              >
                <img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "w-full object-cover transition",
                    idx % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]",
                    "group-hover:scale-[1.02]"
                  )}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3 text-left">
                  <div className="text-sm font-semibold text-white">
                    {it.title}
                  </div>
                  <div className="text-xs text-white/80">Tap to preview</div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <dialog
          ref={dialogRef}
          className="w-[min(1000px,92vw)] rounded-3xl border border-saffron-500/20 bg-white p-0 shadow-glow backdrop:bg-black/60 dark:border-white/10 dark:bg-slate-950"
          onClose={() => setActive(null)}
          aria-label="Image preview"
        >
          {active ? (
            <div className="relative">
              <button
                type="button"
                className="absolute right-3 top-3 grid size-10 place-items-center rounded-2xl bg-black/55 text-white backdrop-blur hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500/70"
                onClick={() => setActive(null)}
                aria-label="Close preview"
              >
                <X className="size-5" aria-hidden />
              </button>

              <img
                src={active.src}
                alt={active.title}
                className="aspect-[16/9] w-full rounded-3xl object-cover"
                decoding="async"
              />
              <div className="p-5">
                <div className="font-heading text-xl font-semibold">
                  {active.title}
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  A placeholder preview. Replace with real temple photos in{" "}
                  <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">
                    src/assets/
                  </code>
                  .
                </p>
              </div>
            </div>
          ) : null}
        </dialog>
      </Container>
    </section>
  );
}


