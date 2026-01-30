import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-[0.22em] text-saffron-700/80">
          {eyebrow.toUpperCase()}
        </p>
      ) : null}
      <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-saffron-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-saffron-900/75 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}


