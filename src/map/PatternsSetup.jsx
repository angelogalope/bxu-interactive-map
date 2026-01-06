import { useEffect } from "react";
import { useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet.pattern";

const PatternsSetup = ({ onPatternsReady }) => {
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

export default PatternsSetup;