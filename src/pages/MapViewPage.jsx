import '../styles/mapViewPage.css';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.pattern";
import L from 'leaflet';
import { useState, useEffect, useRef } from 'react';
import ZoningLegend from "../components/ZoningLegend.jsx";
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js'
import legendData from "../data/legendData";
import PatternsSetup from '../map/PatternSetup.jsx';

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