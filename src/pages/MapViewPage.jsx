import '../styles/mapViewPage.css';
import { MapContainer, TileLayer, GeoJSON, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.pattern";
import L from 'leaflet';
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import ZoningLegend from "../../../../components/interactive-zoning-map-system/ZoningLegend.jsx";
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js'
import legendData from "../data/legendData.js"
import PatternsSetup from '../map/PatternsSetup.jsx';
import { createZoningStyle } from "../map/zoningStyle";
import MapWatermarkOverlay from "../../../../components/interactive-zoning-map-system/MapWatermarkOverlay.jsx";
import FaqModal from "../../../../components/interactive-zoning-map-system/FaqModal.jsx";
import allowableUsesData from "../data/allowableUsesData";
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// const worldBounds = [
//   [-90, -180], // South-West
//   [90, 180],   // North-East
// ];


const barangays = [
  'Agao',
  'Agusan Pequeño',
  'Ambago',
  'Ampayon',
  'Amparo',
  'Anticala',
  'Antongalon',
  'Aupagan',
  'Baan Km. 3',
  'Baan Riverside',
  'Babag',
  'Bading',
  'Baobaoan',
  'Bancasi',
  'Banza',
  'Basag',
  'Bayanihan',
  'Bilay',
  'Bitan-agan',
  'Bit-os',
  'Bobon',
  'Bonbon',
  'Bugsukan',
  'Buhangin',
  'Cabcabon',
  'Camayahan',
  'Dagohoy',
  'Dankias',
  'Datu Silongan',
  'De Oro',
  'Diego Silang',
  'Doongan',
  'Don Francisco',
  'Dulag',
  'Dumalagan',
  'Florida',
  'Fort Poyohon (New Asia)',
  'Golden Ribbon',
  'Holy Redeemer',
  'Humabon',
  'Imadejas',
  'Jose Rizal',
  'Kinamlutan',
  'Lapu-Lapu',
  'Lemon',
  'Leon Kilat',
  'Libertad',
  'Limaha',
  'Los Angeles',
  'Lumbocan',
  'Maguinda',
  'Mahay',
  'Mahogany',
  'Maibu',
  'Mandamo',
  'Manila de Bugabus',
  'Maon',
  'Masao',
  'Maug',
  'New Society Village',
  'Nongnong',
  'Obrero',
  'Ong Yiu',
  'Pagatpatan',
  'Pangabugan',
  'Pianing',
  'Pigdaulan',
  'Pinamanculan',
  'Rajah Soliman',
  'Salvacion',
  'San Ignacio',
  'San Mateo',
  'Santo Niño',
  'San Vicente',
  'Sikatuna',
  'Sumile',
  'Sumilihon',
  'Tagabaca',
  'Taguibo',
  'Taligaman',
  'Tandang Sora',
  'Tiniwisan',
  'Tungao',
  'Urduja',
  'Villa Kananga',
];

const uniqueBarangays = Array.from(new Set(barangays));

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
  const [selectedBarangay, setSelectedBarangay] = useState('');
  const [markerPos, setMarkerPos] = useState(null);
  // const [locationName, setLocationName] = useState('');
  const [popupContent, setPopupContent] = useState('');
  const [isAllowableModalOpen, setIsAllowableModalOpen] = useState(false);
  const [selectedHlurb, setSelectedHlurb] = useState('');
  // const [selectedLandUse, setSelectedLandUse] = useState('');
  const [searchMode, setSearchMode] = useState('barangay');
  const [barangayFilter, setBarangayFilter] = useState('');
  const [coordLat, setCoordLat] = useState('');
  const [coordLng, setCoordLng] = useState('');
  const [showBarangayDropdown, setShowBarangayDropdown] = useState(false);
  const [zoneOpacity, setZoneOpacity] = useState(0.7);
  const [showFooterNote, setShowFooterNote] = useState(true);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [osmResults, setOsmResults] = useState([]);
  const geoJsonRef = useRef();

  const filteredBarangays = useMemo(
    () => uniqueBarangays.filter(b =>
      b.toLowerCase().includes(barangayFilter.toLowerCase())
    ),
    [barangayFilter]
  );

  const mapRef = useRef();
  const markerRef = useRef(null);
  const popupHandlerRef = useRef(null);
  const popupDataRef = useRef({ hlurb: '', landUse: '', featureProps: null });
  const searchTimerRef = useRef(null);
  const searchAbortRef = useRef(null);

  useEffect(() => {
    if (!barangayFilter.trim()) {
      setOsmResults([]);
      return;
    }
    clearTimeout(searchTimerRef.current);
    searchTimerRef.current = setTimeout(() => {
      if (searchAbortRef.current) searchAbortRef.current.abort();
      const controller = new AbortController();
      searchAbortRef.current = controller;
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(barangayFilter)}&format=json&limit=10&bounded=1&viewbox=125.30,8.70,125.80,9.10&countrycodes=ph`;
      fetch(url, { signal: controller.signal })
        .then(res => res.json())
        .then(data => setOsmResults(data.filter(r => r.display_name?.toLowerCase().includes('butuan'))))
        .catch(e => { if (e.name !== 'AbortError') console.error(e); });
    }, 400);
    return () => clearTimeout(searchTimerRef.current);
  }, [barangayFilter]);

  const pointInRing = (point, ring) => {
    const [x, y] = point;
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [xi, yi] = ring[i];
      const [xj, yj] = ring[j];
      if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) {
        inside = !inside;
      }
    }
    return inside;
  };

  const findZoningAtPoint = (latlng) => {
    if (!gj) return null;
    const pt = [latlng[1], latlng[0]];
    for (const feature of gj.features) {
      const coords = feature.geometry.type === 'Polygon'
        ? [feature.geometry.coordinates]
        : feature.geometry.coordinates || [];
      for (const poly of coords) {
        if (!pointInRing(pt, poly[0])) continue;
        let inHole = false;
        for (let h = 1; h < poly.length; h++) {
          if (pointInRing(pt, poly[h])) { inHole = true; break; }
        }
        if (!inHole) return feature.properties;
      }
    }
    return null;
  };

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
    () => createZoningStyle({ patterns, visibleZones, opacity: zoneOpacity }),
    [patterns, visibleZones, zoneOpacity]
  );

  const handleSliderDrag = useCallback((val) => {
    if (geoJsonRef.current) {
      geoJsonRef.current.eachLayer(layer => {
        const hlurb = layer.feature?.properties?.HLURB;
        if (hlurb && visibleZones[hlurb] !== false) {
          layer.setStyle({ fillOpacity: val });
        }
      });
    }
  }, [visibleZones]);

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

      layer.on('click', (e) => {
        const latlng = [e.latlng.lat, e.latlng.lng];
        popupDataRef.current = { hlurb, landUse, featureProps: feature.properties };
        setPopupContent(
          `<strong>Landuse:</strong> ${landUse}<br/>` +
          `<strong>HLURB:</strong> ${hlurb}<br/>` +
          `<button type="button" class="allowable-uses-btn">View Allowable Uses</button>`
        );
        setMarkerPos(latlng);
        // setLocationName('');
      });
    }
  };

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.closePopup();
      if (popupHandlerRef.current) {
        markerRef.current.off('popupopen', popupHandlerRef.current);
        popupHandlerRef.current = null;
      }
      markerRef.current.unbindPopup();
    }
    if (markerPos && markerRef.current && popupContent) {
      const handler = () => {
        const popupEl = markerRef.current?.getPopup()?.getElement();
        const btn = popupEl?.querySelector('.allowable-uses-btn');
        if (btn) {
          const { hlurb, landUse, featureProps } = popupDataRef.current;
          btn.onclick = () => openAllowableUsesModal(hlurb, landUse, featureProps);
        }
      };
      popupHandlerRef.current = handler;
      markerRef.current.bindPopup(popupContent);
      markerRef.current.on('popupopen', handler);
      requestAnimationFrame(() => {
        markerRef.current?.openPopup();
      });
    }
    return () => {
      if (markerRef.current) {
        markerRef.current.closePopup();
        if (popupHandlerRef.current) {
          markerRef.current.off('popupopen', popupHandlerRef.current);
          popupHandlerRef.current = null;
        }
        markerRef.current.unbindPopup();
      }
    };
  }, [markerPos, popupContent]);

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

  const handleCoordinateSearch = () => {
    const lat = parseFloat(coordLat);
    const lng = parseFloat(coordLng);

    if (isNaN(lat) || isNaN(lng)) {
      alert('Please enter valid latitude and longitude values.');
      return;
    }

    if (lat < 8.70 || lat > 9.10 || lng < 125.30 || lng > 125.80) {
      alert('Coordinates are outside Butuan City bounds.');
      return;
    }

    setMarkerPos([lat, lng]);
    // setLocationName(`${lat}, ${lng}`);

    const zoning = findZoningAtPoint([lat, lng]);
    if (zoning) {
      popupDataRef.current = { hlurb: zoning.HLURB, landUse: zoning.LandUse, featureProps: zoning };
      setPopupContent(
        `<strong style="font-size:13px;">${lat}, ${lng}</strong><br/><br/>` +
        `<strong>Landuse:</strong> ${zoning.LandUse}<br/>` +
        `<strong>HLURB:</strong> ${zoning.HLURB}<br/>` +
        `<button type="button" class="allowable-uses-btn">View Allowable Uses</button>`
      );
    } else {
      setPopupContent(`<strong style="font-size:13px;">${lat}, ${lng}</strong>`);
    }

    if (mapRef.current) {
      mapRef.current.flyTo([lat, lng], 15);
    }
  };

  const handleBarangaySelect = async (barangay) => {
    if (!barangay) return;

    const query = `${barangay}, Butuan City`;
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        const displayName = data[0].display_name;
        const position = [parseFloat(lat), parseFloat(lon)];
        setMarkerPos(position);
        // setLocationName(displayName);

        const zoning = findZoningAtPoint(position);
        if (zoning) {
          popupDataRef.current = { hlurb: zoning.HLURB, landUse: zoning.LandUse, featureProps: zoning };
          setPopupContent(
            `<strong style="font-size:13px;">${barangay}</strong><br/>` +
            `<span style="font-size:11px; color:#666;">${displayName}</span><br/>` +
            `<span style="font-size:11px; color:#666;">${lat}, ${lon}</span><br/><br/>` +
            `<strong>Landuse:</strong> ${zoning.LandUse}<br/>` +
            `<strong>HLURB:</strong> ${zoning.HLURB}<br/>` +
            `<button type="button" class="allowable-uses-btn">View Allowable Uses</button>`
          );
        } else {
          setPopupContent(
            `<strong style="font-size:13px;">${barangay}</strong><br/>` +
            `<span style="font-size:11px; color:#666;">${displayName}</span><br/>` +
            `<span style="font-size:11px; color:#666;">${lat}, ${lon}</span>`
          );
        }

        if (mapRef.current) {
          mapRef.current.flyTo(position, 15);
        }
      } else {
        alert('Location not found');
        setMarkerPos(null);
        // setLocationName('');
      }
    } catch (e) {
      console.error(e);
      alert('Error searching for location');
    }
  };

  const handleSearchSelect = async (item) => {
    if (!item || !item.lat) return;

    const position = [parseFloat(item.lat), parseFloat(item.lon)];
    setMarkerPos(position);
    // setLocationName(item.display_name);

    const zoning = findZoningAtPoint(position);
    if (zoning) {
      popupDataRef.current = { hlurb: zoning.HLURB, landUse: zoning.LandUse, featureProps: zoning };
      setPopupContent(
        `<strong style="font-size:13px;">${item.display_name}</strong><br/><br/>` +
        `<strong>Landuse:</strong> ${zoning.LandUse}<br/>` +
        `<strong>HLURB:</strong> ${zoning.HLURB}<br/>` +
        `<button type="button" class="allowable-uses-btn">View Allowable Uses</button>`
      );
    } else {
      setPopupContent(`<strong style="font-size:13px;">${item.display_name}</strong>`);
    }

    if (mapRef.current) {
      mapRef.current.flyTo(position, 16);
    }
  };

  return (
    <div className='mapView'>
      <div className="mapHeader">
        <h1 className="mapTitle">Butuan City Comprehensive Land Use Plan 2019-2028</h1>
      </div>
      <div className='searchBar'>
        <div className='searchModeToggle'>
          <button
            type="button"
            className={searchMode === 'barangay' ? 'active' : ''}
            onClick={() => setSearchMode('barangay')}
          >
            Location
          </button>
          <button
            type="button"
            className={searchMode === 'coordinates' ? 'active' : ''}
            onClick={() => setSearchMode('coordinates')}
          >
            Coordinates
          </button>
        </div>
        <div className='searchInputRow'>
          {searchMode === 'barangay' ? (
            <div className="barangayAutocomplete">
              <input
                type="text"
                className="barangayAutocompleteInput"
                placeholder="Search location..."
                value={barangayFilter}
                onChange={(e) => {
                  setBarangayFilter(e.target.value);
                  setSelectedBarangay('');
                  setShowBarangayDropdown(true);
                }}
                onFocus={() => setShowBarangayDropdown(true)}
                onBlur={() => setTimeout(() => setShowBarangayDropdown(false), 200)}
              />
              <span className="barangayAutocompleteArrow">▾</span>
              {showBarangayDropdown && (filteredBarangays.length > 0 || osmResults.length > 0) && (
                <div className="barangayAutocompleteDropdown">
                  {filteredBarangays.map((b) => (
                    <div
                      key={b}
                      className="barangayAutocompleteOption"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setSelectedBarangay(b);
                        setBarangayFilter(b);
                        setShowBarangayDropdown(false);
                        handleBarangaySelect(b);
                      }}
                    >
                      <span>{b}</span>
                      <span className="searchItemBadge">Barangay</span>
                    </div>
                  ))}
                  {filteredBarangays.length > 0 && osmResults.length > 0 && (
                    <div className="barangayAutocompleteDivider" />
                  )}
                  {osmResults.map((item, i) => (
                    <div
                      key={'osm-' + i}
                      className="barangayAutocompleteOption"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setSelectedBarangay(item.display_name);
                        setBarangayFilter(item.display_name);
                        setShowBarangayDropdown(false);
                        handleSearchSelect(item);
                      }}
                    >
                      <span>{item.display_name}</span>
                      <span className="searchItemBadge">{item.type}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className='coordInputs'>
              <label className="coordInput">
                <span>Lat</span>
                <input
                  type="number"
                  step="any"
                  value={coordLat}
                  onChange={(e) => setCoordLat(e.target.value)}
                  placeholder="8.9475"
                />
              </label>
              <label className="coordInput">
                <span>Lng</span>
                <input
                  type="number"
                  step="any"
                  value={coordLng}
                  onChange={(e) => setCoordLng(e.target.value)}
                  placeholder="125.5406"
                />
              </label>
            </div>
          )}
          <button
            type="button"
            className="barangaySearchButton"
            onClick={() => {
              if (searchMode === 'barangay') {
                const foundOsm = osmResults.find(r => r.display_name === selectedBarangay);
                if (foundOsm) {
                  handleSearchSelect(foundOsm);
                } else if (uniqueBarangays.includes(selectedBarangay)) {
                  handleBarangaySelect(selectedBarangay);
                } else if (selectedBarangay) {
                  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(selectedBarangay)}&format=json&limit=1&bounded=1&viewbox=125.30,8.70,125.80,9.10`;
                  fetch(url).then(r => r.json()).then(data => {
                    if (data.length > 0) handleSearchSelect(data[0]);
                    else alert('Location not found');
                  });
                }
              } else {
                handleCoordinateSearch();
              }
            }}
            disabled={
              searchMode === 'barangay' ? !selectedBarangay : !coordLat || !coordLng
            }
          >
            <Icon path={mdiMagnify} size={0.9} />
            Find
          </button>
        </div>
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
          attribution={`Basemap: Esri Satellite Imagery (${new Date().getFullYear()})`}
          noWrap={true}
        />

        <MapWatermarkOverlay text="Not Official, For Reference Only" />

        <PatternsSetup onPatternsReady={setPatterns} />

        {/* Your GeoJSON Layer */}
        {gj && <GeoJSON ref={geoJsonRef} data={gj} style={zoningStyle} onEachFeature={onEachFeature} />}
        {markerPos && (
          <Marker ref={markerRef} position={markerPos} />
        )}
        {patterns && gj && (
          <ZoningLegend 
            patterns={patterns}
            visibleZones={visibleZones}
            toggleZoneVisibility={toggleZoneVisibility}
            toggleAllZones={toggleAllZones}
            zoneOpacity={zoneOpacity}
            onOpacityChange={setZoneOpacity}
            onSliderDrag={handleSliderDrag}
         />
        )}

      </MapContainer>

      <button
        type="button"
        className="mapInfoBtn"
        onClick={() => setShowFooterNote(true)}
        title="Show disclaimer"
        aria-label="Show disclaimer"
      >
        i
      </button>

      <button
        type="button"
        className="mapFaqBtn"
        onClick={() => setIsFaqOpen(true)}
        title="Frequently Asked Questions"
        aria-label="Open frequently asked questions"
      >
        FAQs
      </button>

      {showFooterNote && (
        <div className="mapFooterNote">
          <button
            type="button"
            className="mapFooterNoteClose"
            onClick={() => setShowFooterNote(false)}
            aria-label="Close disclaimer"
          >
            ×
          </button>
          This map is for reference and planning purposes only and does not serve as an official document. For official certification, please visit the CPDD (City Planning and Development Department) office.
        </div>
      )}

      {isAllowableModalOpen && (() => {
        // const normalizedHlurb = selectedHlurb?.startsWith("SEDZ") ? "SEDZ" : selectedHlurb;
        const allowableUses = allowableUsesData[selectedHlurb] || [];

        return (
          <div className="allowable-modal-backdrop" role="dialog" aria-modal="true" onClick={closeAllowableUsesModal}>
            <div className="allowable-modal" onClick={(e) => e.stopPropagation()}>
              <div className="allowable-modal-header">
                <h3 style={{color: "black"}}>
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

      <FaqModal isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
    </div>
  );
}

export default MapViewPage;
