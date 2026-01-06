import '../styles/mapViewPage.css';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.pattern";
import L from 'leaflet';
import { useState, useEffect, useRef, useMemo } from 'react';
import ZoningLegend from "../components/ZoningLegend.jsx";
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js'
import legendData from "../data/legendData";
import PatternsSetup from '../map/PatternsSetup.jsx';
import { createZoningStyle } from "../map/zoningStyle";

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

  const zoningStyle = useMemo(
    () => createZoningStyle({ patterns, visibleZones }),
    [patterns, visibleZones]
  );

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