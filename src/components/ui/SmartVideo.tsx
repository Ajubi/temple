import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";
import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function SmartVideo({
  src,
  poster,
  className,
  title,
  eager = false
}: {
  src: string;
  poster?: string;
  className?: string;
  title: string;
  eager?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const { ref, isInView } = useInView<HTMLVideoElement>({
    rootMargin: "250px 0px 250px 0px",
    threshold: 0.01,
    once: false
  });

  const shouldLoad = eager || isInView;
  const [canPlay, setCanPlay] = useState(false);

  const preload = useMemo(() => (shouldLoad ? "metadata" : "none"), [shouldLoad]);

  // Reset "can play" when we stop loading (e.g., scrolled far away)
  useEffect(() => {
    if (!shouldLoad) setCanPlay(false);
  }, [shouldLoad]);

  return (
    <video
      ref={ref}
      className={cn(className)}
      title={title}
      muted
      playsInline
      loop
      autoPlay={shouldLoad && !reduceMotion}
      preload={preload}
      poster={poster}
      // Keep it decorative; text overlays already provide meaning.
      aria-hidden="true"
      onCanPlay={() => setCanPlay(true)}
    >
      {shouldLoad ? <source src={src} type="video/mp4" /> : null}
      {/* Fallback text */}
      {canPlay ? null : "Your browser does not support HTML5 video."}
    </video>
  );
}


