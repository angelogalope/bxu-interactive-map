// src/ZoningLegend.jsx
import L from "leaflet";
import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import legendData from "../data/legendData.js";
import { getPatternSvg } from "../utils/patternUtils.js";  

const ZoningLegend = ({ patterns, visibleZones, toggleZoneVisibility, toggleAllZones, zoneOpacity = 0.7, onOpacityChange, onSliderDrag }) => {
  const map = useMap();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleLegend = () => {
    setIsCollapsed(prev => !prev);
  };

  useEffect(() => {
    if (!map) return;

    const legend = L.control({ position: "bottomright" });

    legend.onAdd = function () {
      const div = L.DomUtil.create("div", "info legend zoning-legend");

      const header = L.DomUtil.create("div", "zoning-legend-header", div);
      header.onclick = toggleLegend;

      header.innerHTML = `
        <div class="zoning-legend-header-inner">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="black"
               class="zoning-legend-chevron"
               style="transform: ${isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)'};">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 9.999l-6 6-6-6 1.41-1.41z"/>
          </svg>
          <span>Zoning Legend</span>
        </div>
      `;

      const allToggleRow = L.DomUtil.create("div", "zoning-legend-all-row", div);

      allToggleRow.innerHTML = `
        <div class="zoning-legend-group">
          <label class="toggle-switch">
            <input type="checkbox" id="toggleAll" />
            <span class="slider"></span>
          </label>
          <span class="zoning-legend-all-label"><strong>All</strong></span>
          <div class="zoning-legend-group">
            <span class="zoning-legend-opacity-label">Opacity</span>
            <input type="range" id="opacitySlider" min="0" max="1" step="any"
              value="${zoneOpacity}"
              class="zoning-legend-slider" />
            <span id="opacityValue" class="zoning-legend-opacity-value">${Math.round(zoneOpacity * 100)}%</span>
          </div>
        </div>
      `;

      const masterCheckbox = allToggleRow.querySelector('#toggleAll');
      const allBaseCodes = legendData.map(item => item.code);
      const allVisible = allBaseCodes.every(code => visibleZones[code] !== false);
      masterCheckbox.checked = allVisible;

      masterCheckbox.addEventListener('change', (e) => {
        toggleAllZones(e.target.checked);
      });

      const opacitySlider = allToggleRow.querySelector('#opacitySlider');
      const opacityValue = allToggleRow.querySelector('#opacityValue');

      const updateSliderTrack = (slider, val) => {
        const pct = Math.round(val * 100);
        slider.style.background =
          `linear-gradient(to right, #2196F3 0%, #2196F3 ${pct}%, #cbd5e1 ${pct}%, #cbd5e1 100%)`;
      };
      updateSliderTrack(opacitySlider, zoneOpacity);

      opacitySlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        opacityValue.textContent = `${Math.round(val * 100)}%`;
        updateSliderTrack(e.target, val);
        if (onSliderDrag) onSliderDrag(val);
      });
      opacitySlider.addEventListener('change', (e) => {
        const val = parseFloat(e.target.value);
        onOpacityChange(val);
      });

      // Content container (collapsible)
      const content = L.DomUtil.create("div", "zoning-legend-content", div);
      content.style.transition = "max-height 0.3s ease, opacity 0.2s ease";
      content.style.maxHeight = isCollapsed ? "0" : "1000px";
      content.style.opacity = isCollapsed ? "0" : "1";

      // Populate individual zone items
      legendData.forEach((item, index) => {
        const code = item.code;
        const toggleId = `zone-toggle-${item.code.replace(/[^a-zA-Z0-9]/g, '-')}-${index}`;
        const isVisible = visibleZones[code] !== false;

        const row = L.DomUtil.create("div", "zoning-legend-item-row", content);

        // Toggle switch
        const toggleWrapper = L.DomUtil.create("div", "zoning-legend-toggle-wrap", row);
        toggleWrapper.innerHTML = `
          <label class="toggle-switch" for="${toggleId}">
            <input type="checkbox" id="${toggleId}" ${isVisible ? 'checked' : ''} />
            <span class="slider"></span>
          </label>
        `;

        const checkbox = toggleWrapper.querySelector(`#${toggleId}`);
        checkbox.addEventListener("change", (e) => {
          toggleZoneVisibility(code, e.target.checked);
        }); 

        // Swatch
        const swatch = L.DomUtil.create("i", "zoning-legend-swatch", row);

        if (item.code === "MZP-SZ") {
          swatch.style.border = "2px solid #005ce6";
          swatch.style.backgroundColor = item.color || "#fff";
        } else if (item.color) {
          swatch.style.backgroundColor = item.color;
        } else if (item.pattern) {
          swatch.style.backgroundImage = `url("${getPatternSvg(item.pattern)}")`;
        } else {
          swatch.style.background = "#ddd";
          swatch.innerHTML = "<span class='zoning-legend-swatch-fallback'>?</span>";
        }

        // Label
        const label = L.DomUtil.create("span", "zoning-legend-item-label", row);
        label.innerHTML = `<strong>${item.code}</strong><span> — ${item.label}</span>`;
      });

      L.DomEvent.disableClickPropagation(div);
      L.DomEvent.disableScrollPropagation(div);

      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map, patterns, visibleZones, toggleZoneVisibility, toggleAllZones, isCollapsed, onOpacityChange]);

  return null;
};

export default ZoningLegend;