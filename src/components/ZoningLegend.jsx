// src/ZoningLegend.jsx
import L from "leaflet";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import legendData from "../data/legendData";
import { getPatternSvg } from "../utils/patternUtils";  

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