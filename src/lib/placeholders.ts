function encodeSvg(svg: string) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export function templePlaceholderSvg({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FF6A00"/>
      <stop offset="1" stop-color="#FFB347"/>
    </linearGradient>
    <radialGradient id="r" cx="0.2" cy="0.2" r="0.9">
      <stop offset="0" stop-color="rgba(255,255,255,0.55)"/>
      <stop offset="1" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
    <pattern id="p" width="120" height="120" patternUnits="userSpaceOnUse">
      <path d="M60 10c27.6 0 50 22.4 50 50S87.6 110 60 110 10 87.6 10 60 32.4 10 60 10Z" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
      <path d="M60 26c18.8 0 34 15.2 34 34S78.8 94 60 94 26 78.8 26 60 41.2 26 60 26Z" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
      <path d="M60 6v108M6 60h108" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    </pattern>
    <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="18"/>
    </filter>
  </defs>
  <rect width="1600" height="900" fill="url(#g)"/>
  <rect width="1600" height="900" fill="url(#p)" opacity="0.9"/>
  <circle cx="260" cy="180" r="220" fill="url(#r)" filter="url(#blur)"/>
  <circle cx="1320" cy="260" r="240" fill="url(#r)" filter="url(#blur)" opacity="0.7"/>
  <g font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif">
    <text x="80" y="760" font-size="52" fill="rgba(255,255,255,0.92)" font-weight="600">${escapeXml(
      title
    )}</text>
    ${
      subtitle
        ? `<text x="80" y="820" font-size="28" fill="rgba(255,255,255,0.78)">${escapeXml(
            subtitle
          )}</text>`
        : ""
    }
  </g>
</svg>`;
  return encodeSvg(svg);
}

function escapeXml(s: string) {
  return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}


