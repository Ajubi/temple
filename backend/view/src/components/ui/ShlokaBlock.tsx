import { cn } from "@/lib/cn";

export function ShlokaBlock({
  lines,
  className
}: {
  lines: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-gold-500/35 bg-temple-surface p-4 shadow-soft backdrop-blur",
        className
      )}
    >
      <div className="font-devanagari text-base font-semibold leading-relaxed text-[#b11226] [text-shadow:0_0_12px_rgba(245,158,11,0.22)]">
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>
      <div className="mt-2 text-xs font-medium text-gold-800/90">
        Sanskrit shloka (always unchanged)
      </div>
    </div>
  );
}


