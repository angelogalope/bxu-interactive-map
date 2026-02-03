import { useEffect, useMemo } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

function escapeXml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildWatermarkSvg({
  text,
  fontSize = 24,
  tileWidth = 360,
  tileHeight = 240,
  angle = -35,
}) {
  const safeText = escapeXml(text);

  // A single tile that will be repeated via CSS background-repeat.
  // We draw the text twice so repetition looks denser and more uniform.
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${tileWidth}" height="${tileHeight}" viewBox="0 0 ${tileWidth} ${tileHeight}">
  <rect width="100%" height="100%" fill="transparent"/>
  <g transform="rotate(${angle} ${tileWidth / 2} ${tileHeight / 2})">
    <text x="-${tileWidth * 0.05}" y="${tileHeight * 0.55}"
      font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="700"
      fill="rgba(255,255,255,0.18)" stroke="rgba(0,0,0,0.12)" stroke-width="1">
      ${safeText}
    </text>
    <text x="${tileWidth * 0.45}" y="${tileHeight * 0.95}"
      font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="700"
      fill="rgba(255,255,255,0.18)" stroke="rgba(0,0,0,0.12)" stroke-width="1">
      ${safeText}
    </text>
  </g>
</svg>`;
}

export default function MapWatermarkOverlay({
  text = "Not Official For Reference Purposes Only",
  zIndex = 450,
}) {
  const map = useMap();

  const dataUri = useMemo(() => {
    const svg = buildWatermarkSvg({ text });
    // Important: encode SVG so it’s safe inside a CSS url().
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  }, [text]);

  useEffect(() => {
    if (!map) return;

    const container = map.getContainer();
    const el = L.DomUtil.create("div", "map-watermark-overlay");

    el.style.position = "absolute";
    el.style.inset = "0";
    el.style.pointerEvents = "none";
    el.style.zIndex = String(zIndex);
    el.style.backgroundImage = `url("${dataUri}")`;
    el.style.backgroundRepeat = "repeat";
    el.style.backgroundSize = "260px 140px";

    container.appendChild(el);

    return () => {
      try {
        container.removeChild(el);
      } catch {
        // ignore if already removed
      }
    };
  }, [map, dataUri, zIndex]);

  return null;
}
