import { cn } from "@/lib/cn";
import { useState } from "react";

export function SmartImage({
  src,
  fallbackSrc,
  alt,
  className,
  loading = "lazy",
  decoding = "async"
}: {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
}) {
  const [failed, setFailed] = useState(false);
  const resolved = failed && fallbackSrc ? fallbackSrc : src;

  return (
    <img
      src={resolved}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onError={() => setFailed(true)}
      className={cn(className)}
    />
  );
}







