import React, { useState, useRef, useCallback } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { display } from '@mui/system';
// import Geocoder from "@mapbox/mapbox-gl-geocoder";

import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

export default function MapComponent({ dataMap, getData }) {

  const MAPBOX_TOKEN = 'pk.eyJ1IjoicmljbWliZXI5NiIsImEiOiJja3g0ajM3d3YyYW9kMnhsYXN1djhvcHNmIn0.w5WWlA5Q2D5f6zYKDbfSYA';
  const mapContainer = useRef(null);

  const map = useRef(null);
  const [lng, setLng] = useState(-3.50);
  const [lat, setLat] = useState(37.62);
  const [zoom, setZoom] = useState(4);
  const [style, setStyle] = useState('mapbox://styles/mapbox/streets-v11')

  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };

      //   console.log(newViewport)
      getData(newViewport)
      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });

    },
    [handleViewportChange]
  );


  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lng,
    zoom: zoom
  });


  return (
    <div style={{ height: "50vh" }}>
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
      </MapGL>
    </div>
  )
}