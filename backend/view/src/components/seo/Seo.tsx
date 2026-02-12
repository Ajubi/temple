import { useEffect } from "react";

export function Seo({
  title,
  description
}: {
  title: string;
  description?: string;
}) {
  const fullTitle = title.includes("Temple") ? title : `${title} · Shree Temple`;
  // SPA-friendly SEO: sets document title + meta description
  // (For true SEO, add SSR/prerender later.)
  useEffect(() => {
    document.title = fullTitle;
    if (description) {
      let meta = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [fullTitle, description]);
  return null;
}


