import '../styles/mapViewPage.css';
import { MapContainer, TileLayer, GeoJSON, useMapEvents, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.pattern";
import L from 'leaflet';
import { useState, useEffect, useRef } from 'react';
import ZoningLegend from "../components/ZoningLegend.jsx";
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js'
import legendData from "../data/legendData";

const worldBounds = [
  [-90, -180], // South-West
  [90, 180],   // North-East
];

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

function PatternsSetup({ onPatternsReady }) {
  const map = useMapEvents({});

  useEffect(() => {
    if (!map) return;

    const diagonalBlack = new L.StripePattern({
      color: "#000000",
      weight: 3,
      spaceWeight: 5,
      angle: -45,
      opacity: 0.9,
    });

    const blackGreenSingle = new L.Pattern({
      width: 20, // polygon width in pixels
      height: 20, // polygon height
      patternUnits: 'userSpaceOnUse'
    });

    new L.PatternRect({
      x: 0,
      y: 0,
      width: 20,
      height: 20,
      fill: true,
      color: "#016601",
      fillOpacity: .5,
      stroke: false
    }).addTo(blackGreenSingle);
    
    new L.PatternPath({
      d: "M-10 10 L10 -10", // diagonal across entire pattern
      color: "#000000",
      opacity: .6,
      weight: 5
    }).addTo(blackGreenSingle);

    new L.PatternPath({
      d: "M20 0 L0 20", // diagonal across entire pattern
      color: "#000000",
      opacity: .6,
      weight: 5
    }).addTo(blackGreenSingle);

    new L.PatternPath({
      d: "M16 24 L24 16", // diagonal across entire pattern
      color: "#000000",
      opacity: .6,
      weight: 5
    }).addTo(blackGreenSingle);

    blackGreenSingle.addTo(map);
    
    const diagonalBlack2 = new L.StripePattern({
      color: "#000000",
      weight: 3,
      spaceWeight: 5,
      angle: -70,
      opacity: 0.9,
    });

    const blueBlackSingle = new L.Pattern({
      width: 60, // polygon width in pixels
      height: 60, // polygon height
      patternUnits: 'userSpaceOnUse'
    });

    new L.PatternRect({
      x: 0,
      y: 0,
      width: 60,
      height: 60,
      fill: true,
      color: "#000000",
      fillOpacity: .5,
      stroke: false
    }).addTo(blueBlackSingle);

    new L.PatternPath({
      d: "M-10 21 L5 -10", // diagonal across entire pattern
      color: "#aec8e1",
      opacity: .5,
      weight: 25  
    }).addTo(blueBlackSingle);

    new L.PatternPath({
      d: "M0 60 L35 -10", // diagonal across entire pattern
      color: "#aec8e1",
      opacity: .5,
      weight: 25
    }).addTo(blueBlackSingle);
    
    new L.PatternPath({
      d: "M20 80 L60 0", // diagonal across entire pattern
      color: "#aec8e1",
      opacity: .5,
      weight: 25
    }).addTo(blueBlackSingle);
    

    new L.PatternPath({
      d: "M55 70 L75 30", // diagonal across entire pattern
      color: "#aec8e1",
      opacity: .5,
      weight: 25
    }).addTo(blueBlackSingle);

    blueBlackSingle.addTo(map);
    
    const diagonalGray = new L.StripePattern({
      color: "#828281",
      weight: 5,
      spaceWeight: 5,
      angle: -45,
      opacity: 0.9,
    });
    
    const grayGreenSingle = new L.Pattern({
      width: 20, // polygon width in pixels
      height: 20, // polygon height
      patternUnits: 'userSpaceOnUse'
    });

    new L.PatternRect({
      x: 0,
      y: 0,
      width: 20,
      height: 20,
      fill: true,
      color: "#15ff00ff",
      fillOpacity: .8,
      stroke: false
    }).addTo(grayGreenSingle);
    
    new L.PatternPath({
      d: "M-4 4 L4 -4",
      color: "#828281",
      opacity: .8,
      weight: 6
    }).addTo(grayGreenSingle);

    new L.PatternPath({
      d: "M20 0 L0 20",
      color: "#828281",
      opacity: .8,
      weight: 6
    }).addTo(grayGreenSingle);

    new L.PatternPath({
      d: "M18 22 L22 18",
      color: "#828281",
      opacity: .8,
      weight: 6
    }).addTo(grayGreenSingle);

    grayGreenSingle.addTo(map);
    
    const diagonalGray1 = new L.StripePattern({
      color: "#bfbfbf",
      weight: 4,
      spaceWeight: 5,
      angle: -45,
      opacity: 0.9,
    });

    const grayWhiteSingle = new L.Pattern({
      width: 40, // polygon width in pixels
      height: 40, // polygon height
      patternUnits: 'userSpaceOnUse'
    });

    new L.PatternRect({
      x: 0,
      y: 0,
      width: 40,
      height: 40,
      fill: true,
      color: "#bebebe",
      fillOpacity: .7,
      stroke: false
    }).addTo(grayWhiteSingle);

    new L.PatternPath({
      d: "M40 0 L0 40", // diagonal across entire pattern
      color: "#fff",
      opacity: .7,
      weight: 12
    }).addTo(grayWhiteSingle);
    
    new L.PatternPath({
      d: "M40 -40 L-40 40", // diagonal across entire pattern
      color: "#fff",
      opacity: .7,
      weight: 12
    }).addTo(grayWhiteSingle);
    
    new L.PatternPath({
      d: "M-40 120 L120 -40", // diagonal across entire pattern
      color: "#fff",
      opacity: .7,
      weight: 12
    }).addTo(grayWhiteSingle);

    grayWhiteSingle.addTo(map);
    
    const diagonalGray2 = new L.StripePattern({
      color: "#828282",
      weight: 4,
      spaceWeight: 5,
      angle: 0,
      opacity: 0.9,
    });

    const yellowGrayHorizontal = new L.Pattern({
      width: 20, // polygon width in pixels
      height: 20, // polygon height
      patternUnits: 'userSpaceOnUse'
    });

    new L.PatternRect({
      x: 0,
      y: 0,
      width: 20,
      height: 20,
      fill: true,
      color: "#ffff00",
      fillOpacity: .7,
      stroke: false
    }).addTo(yellowGrayHorizontal);

    new L.PatternPath({
      d: "M0 10 L20 10",
      color: "#828282",
      opacity: .7,
      weight: 5
    }).addTo(yellowGrayHorizontal);
  
    yellowGrayHorizontal.addTo(map);

    const diagonalBrown = new L.StripePattern({
      color: "#535423",
      weight: 4,
      spaceWeight: 5,
      angle: -45,
      opacity: 0.9,
    });

    const brownYellowSingle = new L.Pattern({
      width: 40, // polygon width in pixels
      height: 40, // polygon height
      patternUnits: 'userSpaceOnUse'
    });

    new L.PatternRect({
      x: 0,
      y: 0,
      width: 40,
      height: 40,
      fill: true,
      color: "#535423",
      fillOpacity: .5,
      stroke: false
    }).addTo(brownYellowSingle);

    new L.PatternPath({
      d: "M40 0 L0 40",
      color: "#ffff00",
      opacity: .5,
      weight: 25
    }).addTo(brownYellowSingle);
    
    new L.PatternPath({
      d: "M40 -40 L-40 40",
      color: "#ffff00",
      opacity: .5,
      weight: 25
    }).addTo(brownYellowSingle);
    
    new L.PatternPath({
      d: "M-40 120 L120 -40",
      color: "#ffff00",
      opacity: .5,
      weight: 25
    }).addTo(brownYellowSingle);

    brownYellowSingle.addTo(map);
    
    const diagonalPink = new L.StripePattern({
      color: "#840051",
      weight: 5,
      spaceWeight: 100,
      angle: 45,
      opacity: .5,
    });

    const pinkGrayDiagonal = new L.Pattern({
      width: 50, // polygon width in pixels
      height: 50, // polygon height
      patternUnits: 'userSpaceOnUse'
    });

    new L.PatternRect({
      x: 0,
      y: 0,
      width: 50,
      height: 50,
      fill: true,
      color: "#e1e1e1",
      fillOpacity: .5,
      stroke: false
    }).addTo(pinkGrayDiagonal)

    new L.PatternPath({
      d: "M-10 40 L10 60",
      color: "#840053",
      opacity: .8,
      weight: 6
    }).addTo(pinkGrayDiagonal)

    new L.PatternPath({
      d: "M70 70 L-10 -10",
      color: "#840053",
      opacity: .8,
      weight: 6
    }).addTo(pinkGrayDiagonal)

    new L.PatternPath({
      d: "M40 -10 L60 10",
      color: "#840053",
      opacity: .8,
      weight: 6
    }).addTo(pinkGrayDiagonal)

    pinkGrayDiagonal.addTo(map);

    // Red diagonal (for SEDZ, Special Economic Zones)
    const diagonalPurple = new L.StripePattern({
      color: "#df72ff",
      weight: 5,
      spaceWeight: 10,
      angle: -45,
      opacity: .5,
    });

    const purpleGraySingle = new L.Pattern({
      width: 40, // polygon width in pixels
      height: 40, // polygon height
      patternUnits: 'userSpaceOnUse'
    });

    new L.PatternRect({
      x: 0,
      y: 0,
      width: 40,
      height: 40,
      fill: true,
      color: "#e1e1e1",
      fillOpacity: .8,
      stroke: false
    }).addTo(purpleGraySingle);

    new L.PatternPath({
      d: "M40 0 L0 40", // diagonal across entire pattern
      color: "#df72ff",
      opacity: .5,
      weight: 8
    }).addTo(purpleGraySingle);
    
    new L.PatternPath({
      d: "M40 -40 L-40 40", // diagonal across entire pattern
      color: "#df72ff",
      opacity: .5,
      weight: 8
    }).addTo(purpleGraySingle);
    
    new L.PatternPath({
      d: "M-40 120 L120 -40", // diagonal across entire pattern
      color: "#df72ff",
      opacity: .5,
      weight: 8
    }).addTo(purpleGraySingle);

    purpleGraySingle.addTo(map);
    
    const diagonalYellow = new L.StripePattern({
      color: "#d0ff73",
      weight: 3,
      spaceWeight: 10,
      angle: -45,
      opacity: .5,
    });

    const dashedVerticalYellow = new L.Pattern({
      width: 40,
      height: 40,
      patternUnits: 'userSpaceOnUse'
    });

    new L.PatternRect({
      x: 0,
      y: 0,
      width: 40,
      height: 40,
      fill: true,
      color: "#ffffff",
      fillOpacity: .7,
      stroke: false
    }).addTo(dashedVerticalYellow);

    new L.PatternPath({
      d: 'M20,0 L20,25',
      stroke: true,
      color: '#e2c720',
      weight: 10,
      opacity: 0.7,
      lineCap: 'butt'
    }).addTo(dashedVerticalYellow);

    dashedVerticalYellow.addTo(map);
    
    const diagonalBlue = new L.StripePattern({
      color: "#aec8e1",
      weight: 7,
      spaceWeight: 10,
      angle: -45,
      opacity: .5,
    });

    const blueBlackSingle2 = new L.Pattern({
      width: 40, // polygon width in pixels
      height: 40, // polygon height
      patternUnits: 'userSpaceOnUse'
    });

    new L.PatternRect({
      x: 0,
      y: 0,
      width: 40,
      height: 40,
      fill: true,
      color: "#000000",
      fillOpacity: .5,
      stroke: false
    }).addTo(blueBlackSingle2);

    new L.PatternPath({
      d: "M40 0 L0 40", // diagonal across entire pattern
      color: "#aec8e1",
      opacity: .5,
      weight: 26
    }).addTo(blueBlackSingle2);
    
    new L.PatternPath({
      d: "M40 -40 L-40 40", // diagonal across entire pattern
      color: "#aec8e1",
      opacity: .5,
      weight: 26
    }).addTo(blueBlackSingle2);
    
    new L.PatternPath({
      d: "M-40 120 L120 -40", // diagonal across entire pattern
      color: "#aec8e1",
      opacity: .5,
      weight: 26
    }).addTo(blueBlackSingle2);

    blueBlackSingle2.addTo(map);

    // Horizontal lines (for easements, buffers)
    const horizontal = new L.StripePattern({
      color: "#000000",
      weight: 2,
      spaceWeight: 6,
      angle: 0,
      opacity: 0.8,
    });

    const greenYellowSingle = new L.Pattern({
      width: 40, // polygon width in pixels
      height: 40, // polygon height
      patternUnits: 'userSpaceOnUse'
    });

    new L.PatternRect({
      x: 0,
      y: 0,
      width: 40,
      height: 40,
      fill: true,
      color: "#4de600",
      fillOpacity: .5,
      stroke: false
    }).addTo(greenYellowSingle);

    new L.PatternPath({
      d: "M40 0 L0 40", // diagonal across entire pattern
      color: "#d0ff73",
      opacity: .5,
      weight: 15
    }).addTo(greenYellowSingle);
    
    new L.PatternPath({
      d: "M40 -40 L-40 40", // diagonal across entire pattern
      color: "#d0ff73",
      opacity: .5,
      weight: 15
    }).addTo(greenYellowSingle);
    
    new L.PatternPath({
      d: "M-40 120 L120 -40", // diagonal across entire pattern
      color: "#d0ff73",
      opacity: .5,
      weight: 15
    }).addTo(greenYellowSingle);

    greenYellowSingle.addTo(map);

    // Add all to map
    [diagonalBlack, blackGreenSingle, diagonalBlack2, blueBlackSingle, diagonalGray, grayGreenSingle, grayWhiteSingle, diagonalGray1, diagonalGray2, yellowGrayHorizontal, diagonalBrown, brownYellowSingle, diagonalPink, pinkGrayDiagonal, diagonalPurple, purpleGraySingle, diagonalYellow, dashedVerticalYellow, diagonalBlue, blueBlackSingle2, horizontal].forEach(p => p.addTo(map));

    // Pass all patterns up
    onPatternsReady({
      diagonalBlack,
      blackGreenSingle,
      diagonalBlack2,
      blueBlackSingle,
      diagonalGray,
      grayGreenSingle,
      grayWhiteSingle,
      diagonalGray1,
      diagonalGray2,
      yellowGrayHorizontal,
      diagonalBrown,
      brownYellowSingle,
      diagonalPink,
      pinkGrayDiagonal,
      diagonalPurple,
      purpleGraySingle,
      diagonalYellow,
      dashedVerticalYellow,
      diagonalBlue,
      blueBlackSingle2,
      horizontal,
      greenYellowSingle,
    });

    return () => {
      map.removeLayer(diagonalBlack);
      map.removeLayer(blackGreenSingle);
      map.removeLayer(diagonalBlack2);
      map.removeLayer(blueBlackSingle);
      map.removeLayer(diagonalGray);
      map.removeLayer(grayGreenSingle);
      map.removeLayer(grayWhiteSingle);
      map.removeLayer(diagonalGray1);
      map.removeLayer(diagonalGray2);
      map.removeLayer(yellowGrayHorizontal);
      map.removeLayer(diagonalBrown);
      map.removeLayer(brownYellowSingle);
      map.removeLayer(diagonalPink);
      map.removeLayer(pinkGrayDiagonal);
      map.removeLayer(diagonalPurple);
      map.removeLayer(purpleGraySingle);
      map.removeLayer(diagonalYellow);
      map.removeLayer(dashedVerticalYellow);
      map.removeLayer(diagonalBlue);
      map.removeLayer(blueBlackSingle2);
      map.removeLayer(horizontal);
      map.removeLayer(greenYellowSingle);
    };
  }, [map, onPatternsReady]);

  return null;
}

function MapViewPage() {
  const [gj, setGj] = useState(null);
  const [patterns, setPatterns] = useState(null);
  const [visibleZones, setVisibleZones] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [markerPos, setMarkerPos] = useState(null);
  const [locationName, setLocationName] = useState('');
  const geoJsonRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    fetch("/data/CLUP_landuse1.geojson")
      .then(res => res.json())
      .then(data => {
        setGj(data);
        const initialVisibility = {};
        data.features.forEach(feature => {
          const hlurb = feature.properties.HLURB;
          if (!(hlurb in initialVisibility)) {
            initialVisibility[hlurb] = true; // default to visible
          }
        });
        setVisibleZones(initialVisibility);
      });
  }, []);

  const zoningStyle = (feature) => {
    const hlurb = feature.properties.HLURB;

    if (visibleZones[hlurb] === false) {
      return { fillOpacity: 0, opacity: 0, fillColor: "transparent" };
    }

    if (hlurb === "AGZ") {
      return {
        color: "#828282",
        fillColor: "#009600",
        fillOpacity: .7,
        opacity: 1
      };
    }

    if (hlurb === "C/MP-Z") {
      return {
        color: "#828282",
        fillColor: "#64e164",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    if (hlurb === "C1-Z") {
      return {
        color: "#828282",
        fillColor: "#ff0000",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    if (hlurb === "GI-Z") {
      return {
        color: "#828282",
        fillColor: "#0000ff",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    if (hlurb === "I1-Z") {
      return {
        color: "#828282",
        fillColor: "#9600c8",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    if (hlurb === "I2-Z") {
      return {
        color: "#828282",
        fillColor: "#9d00c8",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    //Hatch Lines no fill
    if (hlurb === "LF-SZ") {
      return {
        fillPattern: patterns.grayWhiteSingle,
        color: "#828282",
        fillOpacity: 1,
        opacity: 1
      };
    }
    
    if (hlurb === "MU1-A") {
      return {
        color: "#828282",
        fillColor: "#ffbee8",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    if (hlurb === "MU1-B") {
      return {
        color: "#828282",
        fillColor: "#ff73de",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    if (hlurb === "MU1-C") {
      return {
        color: "#828282",
        fillColor: "#ff01c4",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    if (hlurb === "MU1-D") {
      return {
        color: "#828282",
        fillColor: "#a70084",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    if (hlurb === "MU2-A") {
      return {
        color: "#828282",
        fillColor: "#ffa77f",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    if (hlurb === "MU2-B") {
      return {
        color: "#828282",
        fillColor: "#ff7e7e",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    if (hlurb === "MU3") {
      return {
        color: "#828282",
        fillColor: "#d69e9d",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    if (hlurb === "MU4-B") {
      return {
        color: "#828282",
        fillColor: "#cd6798",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    if (hlurb === "PR-Z") {
      return {
        color: "#828282",
        fillColor: "#64e164",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    //Hatch
    if (hlurb === "PUD") {
      return {
        fillPattern: patterns.pinkGrayDiagonal,
        fillOpacity: 1,
        color: "#828282",
        opacity: 1
      };
    }
    
    if (hlurb === "Q-SZ") {
      return {
        color: "#828282",
        fillColor: "#993300",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    if (hlurb === "R1-Z") {
      return {
        color: "#828282",
        fillColor: "#ffff00",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    //Hatch
    if (hlurb === "R2-Z") {
      return {
        fillPattern: patterns.brownYellowSingle,
        fillOpacity: 1,
        color: "#828282",
        opacity: 1
      }
    }
    
    //Hatch
    if (hlurb === "SH-Z") {
      return {
        fillPattern: patterns.yellowGrayHorizontal,
        fillOpacity: 1,
        color: "#828282",
        opacity: 1
      };
    }
    
    //Hatch
    if (hlurb === "SEDZ") {
      return {
        fillPattern: patterns.purpleGraySingle,
        fillOpacity: 1,
        color: "#828282",
        opacity: 1
      };
    }
    
    //Hatch
    if (hlurb === "SEDZ-1 (Logisti*") {
      return {
        fillPattern: patterns.purpleGraySingle,
        fillOpacity: 1,
        color: "#828282",
        opacity: 1
      };
    }
    
    //Hatch
    if (hlurb === "SEDZ-1 (Port Ar*") {
      return {
        fillPattern: patterns.purpleGraySingle,
        fillOpacity: 1,
        color: "#828282",
        opacity: 1
      };
    }
    
    //Hatch
    if (hlurb === "SEDZ 2A") {
      return {
        fillPattern: patterns.purpleGraySingle,
        fillOpacity: 1,
        color: "#828282",
        opacity: 1
      };
    }
    
    //Hatch
    if (hlurb === "SEDZ-2B") {
      return {
        fillPattern: patterns.purpleGraySingle,
        fillOpacity: 1,
        color: "#828282",
        opacity: 1
      };
    }
    
    //Hatch
    if (hlurb === "SEDZ 3") {
      return {
        fillPattern: patterns.purpleGraySingle,
        fillOpacity: 1,
        color: "#828282",
        opacity: 1
      };
    }
    
    if (hlurb === "UTS-Z") {
      return {
        color: "",
        fillColor: "#bebebe",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    if (hlurb === "Water") {
      return {
        color: "",
        fillColor: "#00c5ff",
        fillOpacity: 0.8,
        opacity: 1
      };
    }
    
    if (hlurb === "FZ-Prod") {
      return {
        color: "",
        fillColor: "#006400",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    //Hatch no fill
    if (hlurb === "FZ-Prod (A&D)") {
      return {
        fillPattern: patterns.greenYellowSingle,
        fillOpacity: 1,
        color: "#000000",
        weight: 1.5,
        opacity: 1
      };
    }
    
    //Hatch no fill
    if (hlurb === "FZ-Prot") {
      return {
        fillPattern: patterns.blackGreenSingle,
        fillOpacity: 1,
        color: "#828282",
        weight: 4,
        opacity: 1
      };
    }
    
    //Hatch no fill
    if (hlurb === "MUZ") {
      return {
        fillPattern: patterns.grayGreenSingle,
        fillOpacity: 1,
        color: "#828282",
        opacity: 1
      };
    }
    
    if (hlurb === "SPZ") {
      return {
        color: "#a5a5a5",
        fillColor: "#00734c",
        fillOpacity: 0.7,
        opacity: 1
      };
    }
    
    //Hatch no fill
    if (hlurb === "FRS-SZ") {
      return {
        color: "#6e6e6e",
        fillPattern: patterns.blueBlackSingle,
        fillOpacity: 1,
        weight: 2,
        opacity: 1
      };
    }
    
    if (hlurb === "MZP-SZ") {
      return {
        color: "#005ce6",
        fillColor: "#afc8e1",
        fillOpacity: 0.5,
        weight: 4,
        opacity: 1
      };
    }
    
    if (hlurb === "WZ-Prod") {
      return {
        color: "",
        fillColor: "#afc8e1",
        fillOpacity: 0.5,
        opacity: 1
      };
    }
    
    //Hatch no fill
    if (hlurb === "Mn-SZ") {
      return {
        fillPattern: patterns.blueBlackSingle2,
        fillOpacity: 1,
        color: "#000000",
        weight: 1.5,
        opacity: 1
      };
    }
    
    //Fill with Hatch
    if (hlurb === "NBZ") {
      return {
        fillPattern: patterns.dashedVerticalYellow,
        fillOpacity: 1,
        color: "#828282", 
        opacity: 1
      };
    }
    
    if (hlurb === "T-Z") {
      return {
        color: "",
        fillColor: "#ff9900",
        fillOpacity: 0.5,
        opacity: 1
      };
    }

    return { color: "#000", weight: 1 };
  };

  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.HLURB) {
      layer.bindPopup(`<strong>Landuse:</strong> ${feature.properties.LandUse}<br/><strong>HLURB:</strong> ${feature.properties.HLURB}`);
    }
  };

  const toggleAllZones = (visible) => {
    // Force ALL base legend codes to the same visibility
    const updatedVisibility = {};
    legendData.forEach(item => {
      updatedVisibility[item.code] = visible;

      if (item.code.startsWith("SEDZ") || item.code === "SEDZ") {
        // List all known SEDZ variants (add more if needed)
        const sedzVariants = [
          "SEDZ",
          "SEDZ-1 (Logisti*",
          "SEDZ-1 (Port Ar*",
          "SEDZ 2A",
          "SEDZ-2B",
          "SEDZ 3",
        ];

        sedzVariants.forEach(variant => {
          updatedVisibility[variant] = visible;
        });
      } else {
        // Normal zones
        updatedVisibility[item.code] = visible;
      }
    });

    setVisibleZones(updatedVisibility);

    // Apply uniformly to all layers
    if (geoJsonRef.current) {
      geoJsonRef.current.eachLayer(layer => {
        const hlurb = layer.feature.properties.HLURB;

        let show = visible;

        // SEDZ variants follow the "SEDZ" entry
        if (hlurb?.startsWith("SEDZ")) {
          show = visible; // since we just set "SEDZ" to `visible`
        }

        layer.setStyle(
          show
            ? zoningStyle(layer.feature)
            : { fillOpacity: 0, opacity: 0, fillColor: "transparent" }
        );
      });
    }
  };

  const toggleZoneVisibility = (code, visible) => {
    setVisibleZones(prev => {
      const newVisibility = { ...prev };

      // Special handling for SEDZ: treat all variants as one group
      if (code.startsWith("SEDZ") || code === "SEDZ") {
        // List all known SEDZ variants (add more if needed)
        const sedzVariants = [
          "SEDZ",
          "SEDZ-1 (Logisti*",
          "SEDZ-1 (Port Ar*",
          "SEDZ 2A",
          "SEDZ-2B",
          "SEDZ 3",
        ];

        sedzVariants.forEach(variant => {
          newVisibility[variant] = visible;
        });
      } else {
        // Normal zones
        newVisibility[code] = visible;
      }

      return newVisibility;
    });

    if (geoJsonRef.current) {
      geoJsonRef.current.eachLayer(layer => {
        const hlurb = layer.feature.properties.HLURB;

        let shouldBeVisible = visibleZones[hlurb] !== false;

        if (code === "SEDZ" || code.startsWith("SEDZ")) {
          const isSedzVariant = hlurb && hlurb.startsWith("SEDZ");
          shouldBeVisible = visible && isSedzVariant ? true : !isSedzVariant ? shouldBeVisible : visible;
        } else if (hlurb === code) {
          shouldBeVisible = visible;
        };

        if (shouldBeVisible) {
          layer.setStyle(zoningStyle(layer.feature));
        } else {
          layer.setStyle({ fillOpacity: 0, opacity: 0, fillColor: "transparent" });
        }

        // if (layer.feature.properties.HLURB === code) {
        //   if (visible) {
        //     layer.setStyle(zoningStyle(layer.feature));
        //   } else {
        //     layer.setStyle({ fillOpacity: 0, opacity: 0, fillColor: "transparent" });
        //   }
        // }

      });
    }
  };

  const handleSearch = async () => {
    if (!searchTerm) return;

    const query = `${searchTerm}, Butuan City`;
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        const displayName = data[0].display_name;
        // console.log(`Found location: ${displayName} at (${lat}, ${lon})`);
        const position = [parseFloat(lat), parseFloat(lon)];
        setMarkerPos(position);
        setLocationName(displayName);

        if (mapRef.current) {
          mapRef.current.flyTo(position, 15);
        }
      } else {
        alert('Location not found');
        setMarkerPos(null);
        setLocationName('');
      }
    } catch (e) {
      console.error(e);
      alert('Error searching for barangay');
    }
  };

  return (
    <div className='mapView'>
      <div className='searchBar'>
        <input 
          type="text" 
          placeholder="Search barangay..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        <Icon 
          path={mdiMagnify} 
          size={1} 
          onClick={handleSearch}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <MapContainer 
        ref={mapRef}
        center={[8.9475, 125.5406]}
        zoom={13}
        minZoom={2}
        maxBounds={worldBounds}
        maxBoundsViscosity={1.0}
        style={{ height: "100vh", width: "100%" }}
      >
        {/* Satellite Base Map */}
        <TileLayer
          url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles © Esri"
          noWrap={true}
        />

        <PatternsSetup onPatternsReady={setPatterns} />

        {/* Your GeoJSON Layer */}
        {gj && <GeoJSON ref={geoJsonRef} data={gj} style={zoningStyle} onEachFeature={onEachFeature} />}
        {markerPos && (
          <Marker position={markerPos}>
            <Popup>{locationName}</Popup>
          </Marker>
        )}
        {patterns && gj && (
          <ZoningLegend 
            patterns={patterns}
            visibleZones={visibleZones}
            toggleZoneVisibility={toggleZoneVisibility}
            toggleAllZones={toggleAllZones}
         />
        )}

      </MapContainer>
    </div>
  );
}

export default MapViewPage;