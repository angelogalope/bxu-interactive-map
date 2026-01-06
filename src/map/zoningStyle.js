// src/map/zoningStyle.js

export const createZoningStyle = ({ patterns, visibleZones }) => {
  return (feature) => {
    const hlurb = feature.properties?.HLURB;

    // Invisible
    if (visibleZones?.[hlurb] === false) {
      return { fillOpacity: 0, opacity: 0, fillColor: "transparent" };
    }

    // Solid fills
    const SOLID = {
      AGZ: { fillColor: "#009600" },
      "C/MP-Z": { fillColor: "#64e164" },
      "C1-Z": { fillColor: "#ff0000" },
      "GI-Z": { fillColor: "#0000ff" },
      "I1-Z": { fillColor: "#9600c8" },
      "I2-Z": { fillColor: "#9d00c8" },
      "PR-Z": { fillColor: "#64e164" },
      "R1-Z": { fillColor: "#ffff00" },
      "MU1-A": { fillColor: "#ffbee8" },
      "MU1-B": { fillColor: "#ff73de" },
      "MU1-C": { fillColor: "#ff01c4" },
      "MU1-D": { fillColor: "#a70084" },
      "MU2-A": { fillColor: "#ffa77f" },
      "MU2-B": { fillColor: "#ff7e7e" },
      MU3: { fillColor: "#d69e9d" },
      "MU4-B": { fillColor: "#cd6798" },
      "Q-SZ": { fillColor: "#993300" },
      "UTS-Z": { fillColor: "#bebebe" },
      Water: { fillColor: "#00c5ff", fillOpacity: 0.8 },
      "FZ-Prod": { fillColor: "#006400" },
      "SPZ": { fillColor: "#00734c", fillOpacity: 0.7 },
      "T-Z": { fillColor: "#ff9900" },
      "WZ-Prod": { fillColor: "#afc8e1" },
    };

    if (SOLID[hlurb]) {
      return {
        color: "#828282",
        fillOpacity: 0.5,
        opacity: 1,
        ...SOLID[hlurb],
      };
    }

    // Pattern fills
    const PATTERN = {
      "LF-SZ": patterns.grayWhiteSingle,
      PUD: patterns.pinkGrayDiagonal,
      "R2-Z": patterns.brownYellowSingle,
      "SH-Z": patterns.yellowGrayHorizontal,
      SEDZ: patterns.purpleGraySingle,
      "FZ-Prod (A&D)": patterns.greenYellowSingle,
      "FZ-Prot": patterns.blackGreenSingle,
      MUZ: patterns.grayGreenSingle,
      "FRS-SZ": patterns.blueBlackSingle,
      "Mn-SZ": patterns.blueBlackSingle2,
      NBZ: patterns.dashedVerticalYellow,
    };

    if (PATTERN[hlurb]) {
      return {
        fillPattern: PATTERN[hlurb],
        fillOpacity: 1,
        color: "#828282",
        opacity: 1,
      };
    }

    // SEDZ variants
    if (hlurb?.startsWith("SEDZ")) {
      return {
        fillPattern: patterns.purpleGraySingle,
        fillOpacity: 1,
        color: "#828282",
        opacity: 1,
      };
    }

    // Special cases
    if (hlurb === "MZP-SZ") {
      return {
        color: "#005ce6",
        fillColor: "#afc8e1",
        fillOpacity: 0.5,
        weight: 4,
        opacity: 1,
      };
    }

    return { color: "#000", weight: 1 };
  };
};
