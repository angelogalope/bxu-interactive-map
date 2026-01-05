// src/ZoningLegend.jsx
import L from "leaflet";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import legendData from "../data/legendData";

// Helper: Convert pattern key → SVG data URL
const getPatternSvg = (key) => {
  const svgs = {
    diagonalBlack: `<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" fill="green"/><path d="M12 -4 L-4 12" stroke="black" stroke-width="3"/><path d="M16 0 L0 16" stroke="black" stroke-width="3"/><path d="M20 4 L4 20" stroke="black" stroke-width="3"/><path d="M24 8 L8 24" stroke="black" stroke-width="3"/></svg>`,
    diagonalYellow: `<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" fill="green"/><path d="M12 -4 L-4 12" stroke="#d0ff73" stroke-width="3"/><path d="M16 0 L0 16" stroke="#d0ff73" stroke-width="3"/><path d="M20 4 L4 20" stroke="#d0ff73" stroke-width="3"/><path d="M24 8 L8 24" stroke="#d0ff73" stroke-width="3"/></svg>`,
    diagonalGray: `<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" fill="#55ff00"/><path d="M12 -4 L-4 12" stroke="#828282" stroke-width="3"/><path d="M16 0 L0 16" stroke="#828282" stroke-width="3"/><path d="M20 4 L4 20" stroke="#828282" stroke-width="3"/><path d="M24 8 L8 24" stroke="#828282" stroke-width="3"/></svg>`,
    diagonalGray1: `<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" fill="white"/><path d="M12 -4 L-4 12" stroke="#828282" stroke-width="3"/><path d="M16 0 L0 16" stroke="#828282" stroke-width="3"/><path d="M20 4 L4 20" stroke="#828282" stroke-width="3"/><path d="M24 8 L8 24" stroke="#828282" stroke-width="3"/></svg>`,
    diagonalGray2: `<svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><rect width="12" height="12" fill="yellow"/><path d="M0 2 L12 2" stroke="#777" stroke-width="2.5"/><path d="M0 6 L12 6" stroke="#777" stroke-width="2.5"/><path d="M0 10 L12 10" stroke="#777" stroke-width="2.5"/></svg>`,
    diagonalPurple: `<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" fill="#e1e1e1"/><path d="M12 -4 L-4 12" stroke="#df72ff" stroke-width="3"/><path d="M16 0 L0 16" stroke="#df72ff" stroke-width="3"/><path d="M20 4 L4 20" stroke="#df72ff" stroke-width="3"/><path d="M24 8 L8 24" stroke="#df72ff" stroke-width="3"/></svg>`,
    diagonalPink: `<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" fill="#e1e1e1"/><path d="M20 6 L8 -4" stroke="#840053" stroke-width="3"/><path d="M0 -4 L24 18" stroke="#840053" stroke-width="3"/><path d="M0 4 L24 26" stroke="#840053" stroke-width="3"/><path d="M0 12 L12 24" stroke="#840053" stroke-width="3"/></svg>`,
    diagonalBrown: `<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" fill="#ffff00"/><path d="M12 -4 L-4 12" stroke="#535423" stroke-width="1.5"/><path d="M16 0 L0 16" stroke="#535423" stroke-width="1.5"/><path d="M20 4 L4 20" stroke="#535423" stroke-width="1.5"/><path d="M24 8 L8 24" stroke="#535423" stroke-width="1.5"/></svg>`,
    diagonalBlack2: `<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" fill="#aec8e1"/><path d="M26 -38 L-8 26" stroke="black" stroke-width="1"/><path d="M26 -19 L-1 26" stroke="black" stroke-width="1"/><path d="M26 -8 L8 26" stroke="black" stroke-width="1"/></svg>`,
    diagonalBlue: `<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" fill="black"/><path d="M12 -4 L-4 12" stroke="#aec8e1" stroke-width="5"/><path d="M16 0 L0 16" stroke="#aec8e1" stroke-width="5"/><path d="M20 4 L4 20" stroke="#aec8e1" stroke-width="5"/><path d="M24 8 L8 24" stroke="#aec8e1" stroke-width="5"/></svg>`,
    dashedVerticalYellow: `<svg width='14' height='24' xmlns='http://www.w3.org/2000/svg'><rect width='14' height='24' fill='white'/><path d='M7,0 L7,24' stroke='#e2c720' stroke-width='5' stroke-dasharray='8,8'/></svg>`,
  };

  const svg = svgs[key] || svgs.diagonalBlack;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const ZoningLegend = ({ patterns, visibleZones, toggleZoneVisibility, toggleAllZones }) => {
  const map = useMap();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleLegend = () => {
    setIsCollapsed(prev => !prev);
  };

  useEffect(() => {
    if (!map) return;

    const legend = L.control({ position: "bottomright" });

    legend.onAdd = function () {
      const div = L.DomUtil.create("div", "info legend");
      div.style.background = "rgba(255,255,255,0.95)";
      div.style.padding = "10px";
      div.style.borderRadius = "8px";
      div.style.boxShadow = "0 0 15px rgba(0,0,0,0.5)";
      div.style.maxHeight = "92vh";
      div.style.overflowY = "auto";
      div.style.fontFamily = "Arial, sans-serif";
      div.style.fontSize = "11px";
      div.style.lineHeight = "1.4";

      // Header (always visible)
      const header = L.DomUtil.create("div", "", div);
      header.style.display = "flex";
      header.style.alignItems = "center";
      header.style.justifyContent = "space-between";
      header.style.fontWeight = "bold";
      // header.style.marginBottom = "8px";
      header.style.fontSize = "13px";
      header.style.cursor = "pointer";
      header.onclick = toggleLegend;

      header.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="black"
               style="transition: transform 0.2s; transform: ${isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)'};">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 9.999l-6 6-6-6 1.41-1.41z"/>
          </svg>
          <span>Zoning Legend</span>
        </div>
      `;

      const allToggleRow = L.DomUtil.create("div", "", div);
      allToggleRow.style.display = "flex";
      allToggleRow.style.alignItems = "center";
      // allToggleRow.style.justifyContent = "space-between";
      allToggleRow.style.gap = "8px";
      allToggleRow.style.padding = "6px 0";
      // allToggleRow.style.borderBottom = "1px solid #eee";
      // allToggleRow.style.marginBottom = "8px";
      allToggleRow.style.fontSize = "12px";
      allToggleRow.style.color = "#000";

      allToggleRow.innerHTML = `
      <label class="toggle-switch" style="cursor:pointer; margin:0;">
        <input type="checkbox" id="toggleAll" />
        <span class="slider"></span>
      </label>
      <span><strong>All</strong></span>
      `;

      const masterCheckbox = allToggleRow.querySelector('#toggleAll');
      const allBaseCodes = legendData.map(item => item.code);
      const allVisible = allBaseCodes.every(code => visibleZones[code] !== false);
      masterCheckbox.checked = allVisible;

      masterCheckbox.addEventListener('change', (e) => {
        toggleAllZones(e.target.checked);
      });

      // Content container (collapsible)
      const content = L.DomUtil.create("div", "", div);
      content.style.transition = "max-height 0.3s ease, opacity 0.2s ease";
      content.style.maxHeight = isCollapsed ? "0" : "1000px";
      content.style.opacity = isCollapsed ? "0" : "1";
      content.style.overflow = "hidden";

      // Populate individual zone items
      legendData.forEach((item, index) => {
        const code = item.code;
        const toggleId = `zone-toggle-${item.code.replace(/[^a-zA-Z0-9]/g, '-')}-${index}`;
        const isVisible = visibleZones[code] !== false;

        const row = L.DomUtil.create("div", "", content);
        row.style.display = "flex";
        row.style.alignItems = "center";
        row.style.marginBottom = "3px";
        row.style.gap = "8px";

        // Toggle switch
        const toggleWrapper = L.DomUtil.create("div", "", row);
        toggleWrapper.innerHTML = `
          <label class="toggle-switch" for="${toggleId}" style="cursor:pointer; margin:0;">
            <input type="checkbox" id="${toggleId}" ${isVisible ? 'checked' : ''} />
            <span class="slider"></span>
          </label>
        `;

        const checkbox = toggleWrapper.querySelector(`#${toggleId}`);
        checkbox.addEventListener("change", (e) => {
          toggleZoneVisibility(code, e.target.checked);
        }); 

        // Swatch
        const swatch = L.DomUtil.create("i", "", row);
        swatch.style.width = "18px";
        swatch.style.height = "18px";
        swatch.style.border = "1px solid #666";
        swatch.style.display = "inline-block";
        swatch.style.flexShrink = "0";
        swatch.style.backgroundSize = "cover";
        swatch.style.backgroundRepeat = "no-repeat";

        if (item.code === "MZP-SZ") {
          swatch.style.border = "2px solid #005ce6";
          swatch.style.backgroundColor = item.color || "#fff";
        } else if (item.color) {
          swatch.style.backgroundColor = item.color;
        } else if (item.pattern) {
          swatch.style.backgroundImage = `url("${getPatternSvg(item.pattern)}")`;
        } else {
          swatch.style.background = "#ddd";
          swatch.innerHTML = "<span style='font-size:10px; line-height:18px; display:block; text-align:center;'>?</span>";
        }

        // Label
        const label = L.DomUtil.create("span", "", row);
        label.innerHTML = `<strong>${item.code}</strong> — ${item.label}`;
      });

      L.DomEvent.disableClickPropagation(div);
      L.DomEvent.disableScrollPropagation(div);

      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map, patterns, visibleZones, toggleZoneVisibility, toggleAllZones, isCollapsed]);

  return null;
};

export default ZoningLegend;