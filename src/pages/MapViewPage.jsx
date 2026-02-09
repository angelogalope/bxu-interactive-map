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
import MapWatermarkOverlay from "../components/MapWatermarkOverlay.jsx";
import allowableUsesData from "../data/allowableUsesData";
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// const worldBounds = [
//   [-90, -180], // South-West
//   [90, 180],   // North-East
// ];

const butuanCityBounds = [
  [8.70, 125.30],
  [9.10, 125.80],
];

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

function MapViewPage() {
  const [gj, setGj] = useState(null);
  const [patterns, setPatterns] = useState(null);
  const [visibleZones, setVisibleZones] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [markerPos, setMarkerPos] = useState(null);
  const [locationName, setLocationName] = useState('');
  const [isAllowableModalOpen, setIsAllowableModalOpen] = useState(false);
  const [selectedHlurb, setSelectedHlurb] = useState('');
  // const [selectedLandUse, setSelectedLandUse] = useState('');
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

  const openAllowableUsesModal = (hlurb, landUse, featureProps) => {
    let resolvedKey = hlurb || '';

    // Special-case: differentiate multiple PUD polygons by OBJECTID
    if (resolvedKey === 'PUD' && featureProps && featureProps.OBJECTID) {
      const oid = featureProps.OBJECTID;
      // Map known OBJECTIDs to specific PUD variants defined in allowableUsesData
      // OBJECTID 209 -> PLANNED UNIT DEVELOPMENT (PUD) ZONE – UNIVERSITY TOWN
      // OBJECTID 210 -> PLANNED UNIT DEVELOPMENT (PUD) 1 – UPTOWN BANCASI AIRPORT
      // OBJECTID 211 -> PLANNED UNIT DEVELOPMENT (PUD) 3 – HIGHLANDS ZONE
      if (oid === 209) resolvedKey = 'PUD';
      else if (oid === 211) resolvedKey = 'PUD 1';
      else if (oid === 210) resolvedKey = 'PUD 3';
    }

    setSelectedHlurb(resolvedKey);
    // setSelectedLandUse(landUse || '');
    setIsAllowableModalOpen(true);
  };

  const closeAllowableUsesModal = () => {
    setIsAllowableModalOpen(false);
  };

  useEffect(() => {
    if (!isAllowableModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeAllowableUsesModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAllowableModalOpen]);

  const formatAllowableUse = (item) => {
    if (typeof item === 'object' && item !== null && !Array.isArray(item)) {
      return item.content || item.text || '';
    }
    
    if (Array.isArray(item)) {
      return item.map(entry => String(entry ?? '')).join('<br/>');
    }

    return String(item ?? '').replace(/\n/g, '<br/>');
  };

  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.HLURB) {
      const hlurb = feature.properties.HLURB;
      const landUse = feature.properties.LandUse;

      layer.bindPopup(
        `<strong>Landuse:</strong> ${landUse}<br/>` +
        `<strong>HLURB:</strong> ${hlurb}<br/>` +
        `<button type="button" class="allowable-uses-btn">View Allowable Uses</button>`
      );

      layer.on('popupopen', (e) => {
        const popupEl = e.popup.getElement();
        if (!popupEl) return;

        const button = popupEl.querySelector('.allowable-uses-btn');
        if (button) {
          // pass the feature properties so the modal can resolve PUD variants
          button.onclick = () => openAllowableUsesModal(hlurb, landUse, feature.properties);
        }
      });
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
        minZoom={10}
        maxZoom={18}
        maxBounds={butuanCityBounds}
        maxBoundsViscosity={1.0}
        style={{ height: "100vh", width: "100%" }}
      >
        {/* Satellite Base Map */}
        <TileLayer
          url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles © Esri"
          noWrap={true}
        />

        <MapWatermarkOverlay text="Not Official, For Reference Only" />

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

      {isAllowableModalOpen && (() => {
        // const normalizedHlurb = selectedHlurb?.startsWith("SEDZ") ? "SEDZ" : selectedHlurb;
        const allowableUses = allowableUsesData[selectedHlurb] || [];

        return (
          <div className="allowable-modal-backdrop" role="dialog" aria-modal="true" onClick={closeAllowableUsesModal}>
            <div className="allowable-modal" onClick={(e) => e.stopPropagation()}>
              <div className="allowable-modal-header">
                <h3>
                  Allowable Uses for {allowableUses?.map((item, index) => (
                      item.title && index === 0 ? item.title : null
                    ))}:
                </h3>
                <button type="button" className="allowable-modal-close" onClick={closeAllowableUsesModal} aria-label="Close">×</button>
              </div>
              <div className="allowable-modal-body">
                {(() => {
                  const filteredUses = allowableUses?.filter(item => 
                    !(typeof item === 'object' && item !== null && !Array.isArray(item) && item.title)
                  );
                  
                  return filteredUses.length > 0 ? (
                    <ul className="allowable-modal-list">
                      {filteredUses.map((item, index) => (
                        <li key={`${item}-${index}`} className="allowable-modal-item">
                          <span dangerouslySetInnerHTML={{ __html: formatAllowableUse(item) }} />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="allowable-modal-empty">No allowable uses listed for this zone.</div>
                  );
                })()}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

export default MapViewPage;