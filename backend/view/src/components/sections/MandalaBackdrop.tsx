import { cn } from "@/lib/cn";

export function MandalaBackdrop({
  className,
  opacity = 0.18
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={cn("absolute inset-0 size-full", className)}
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <radialGradient id="mGlow" cx="0" cy="0" r="1">
          <stop offset="0" stopColor="rgba(255,255,255,0.60)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <circle cx="260" cy="190" r="220" fill="url(#mGlow)" />
      <circle cx="980" cy="230" r="260" fill="url(#mGlow)" opacity="0.65" />
      <g stroke="rgba(255,255,255,0.22)" strokeWidth="1">
        <circle cx="600" cy="400" r="270" />
        <circle cx="600" cy="400" r="210" opacity="0.9" />
        <circle cx="600" cy="400" r="150" opacity="0.8" />
        <circle cx="600" cy="400" r="90" opacity="0.7" />
        <path d="M600 130v540M330 400h540" opacity="0.55" />
        <path d="M410 210l380 380M790 210L410 590" opacity="0.55" />
      </g>
      <g stroke="rgba(255,255,255,0.14)" strokeWidth="1">
        {Array.from({ length: 18 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 18;
          const x = 600 + Math.cos(a) * 270;
          const y = 400 + Math.sin(a) * 270;
          return <circle key={i} cx={x} cy={y} r="14" />;
        })}
      </g>
    </svg>
  );
}


