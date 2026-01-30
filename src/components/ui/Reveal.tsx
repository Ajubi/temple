import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

export function Reveal({
  children,
  className,
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y: 14 }}
      animate={isInView || reduce ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}


