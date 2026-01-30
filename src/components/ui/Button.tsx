import { cn } from "@/lib/cn";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
          "disabled:pointer-events-none disabled:opacity-50",
          size === "sm" && "h-9 px-3 text-sm",
          size === "md" && "h-11 px-4 text-sm",
          size === "lg" && "h-12 px-5 text-base",
          variant === "primary" &&
            "bg-saffron-sunrise text-white shadow-glow hover:brightness-[1.03] active:brightness-[0.98] [box-shadow:inset_0_1px_0_rgba(255,255,255,0.25),_0_0_0_1px_rgba(255,179,71,0.18),_0_10px_40px_rgba(255,106,0,0.18)]",
          variant === "secondary" &&
            "bg-temple-surface text-saffron-900 shadow-soft ring-1 ring-saffron-500/25 backdrop-blur hover:brightness-[1.03]",
          variant === "ghost" &&
            "bg-transparent text-saffron-900/80 hover:bg-saffron-500/10",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";


