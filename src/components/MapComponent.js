
// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import Geocoder from "@mapbox/mapbox-gl-geocoder";
// import 'mapbox-gl/dist/mapbox-gl.css';
// // import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css' 
// import { display } from '@mui/system';

// export default function MapComponent(){

//     mapboxgl.accessToken = 'pk.eyJ1IjoicmljbWliZXI5NiIsImEiOiJja3g0ajM3d3YyYW9kMnhsYXN1djhvcHNmIn0.w5WWlA5Q2D5f6zYKDbfSYA';
//     const mapContainer = useRef(null);
//     const map = useRef(null);
//     const [lng, setLng] = useState(-3.713);
//     const [lat, setLat] = useState(40.2085);
//     const [zoom, setZoom] = useState(7);

//     useEffect(() => {
//         // if (map.current) return; // initialize map only once
//         if (map.current) return; // initialize map only once
//         map.current = new mapboxgl.Map({
//         container: mapContainer.current,
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [lng, lat],
//         zoom: zoom
//         });

//         const geocoder = new Geocoder({
//             accessToken: mapboxgl.accessToken,
//             mapboxgl: mapboxgl,
//             marker: {
//                 color: 'blue'
//             },
//            placeholder: 'Buscar una localizacion',
//             mapboxgl: mapboxgl
//         });

//         map.addControl(geocoder);

//         map.current.on('move', () => {
//             setLng(map.current.getCenter().lng.toFixed(4));
//             setLat(map.current.getCenter().lat.toFixed(4));
//             setZoom(map.current.getZoom().toFixed(2));
//             });

//         map.current.on('click',(e)=>{
//             const lat = Math.round(e.lngLat.lat *100) / 100;
//             const lng =  Math.round(e.lngLat.lng * 100) / 100;
//             console.log({lat,lng})
//             const marker = new mapboxgl.Marker()
//             .setLngLat([lng, lat])
//             .addTo(map.current);
//         })

       
//     }, [])

//     return(
//         <div style={{width:'100%',padding: '.5rem', display: 'flex', flexDirection:'column'}}>
//             <div ref={mapContainer} style={{height:'600px'}} />
//         </div>
//     )
// }


import React, { useState, useRef, useCallback } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; 
import { display } from '@mui/system';
// import Geocoder from "@mapbox/mapbox-gl-geocoder";

import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

export default function MapComponent({dataMap, getData}){

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
 
    // useEffect(() => {
    //     // if (map.current) return; // initialize map only once
    //     // map.current = new mapboxgl.Map({
    //     // container: mapContainer.current,
    //     // style: 'mapbox://styles/mapbox/streets-v11',
    //     // center: [lng, lat],
    //     // zoom: zoom
    //     // });

    //     // const geocoder = new Geocoder({
    //     //                 accessToken: mapboxgl.accessToken,
    //     //                 mapboxgl: mapboxgl,
    //     //                 marker: {
    //     //                     color: 'blue'
    //     //                 },
    //     //                placeholder: 'Buscar una localizacion',
    //     //                 mapboxgl: mapboxgl
    //     //     });
            
    //     // map.addControl(geocoder);

    //     map.current.on('move', () => {
    //         setLng(map.current.getCenter().lng.toFixed(4));
    //         setLat(map.current.getCenter().lat.toFixed(4));
    //         setZoom(map.current.getZoom().toFixed(2));
    //         });

    //     map.current.on('click',(e)=>{
    //         const lat = Math.round(e.lngLat.lat *100) / 100;
    //         const lng =  Math.round(e.lngLat.lng * 100) / 100;
    //         console.log({lat,lng})
    //         const marker = new mapboxgl.Marker()
    //         .setLngLat([lng, lat])
    //         .addTo(map.current);
    //     })
    // }, [])

    return(
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