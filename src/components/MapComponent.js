
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; 
import { display } from '@mui/system';

export default function MapComponent(){

    mapboxgl.accessToken = 'pk.eyJ1IjoicmljbWliZXI5NiIsImEiOiJja3g0ajM3d3YyYW9kMnhsYXN1djhvcHNmIn0.w5WWlA5Q2D5f6zYKDbfSYA';
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-3.50);
    const [lat, setLat] = useState(37.62);
    const [zoom, setZoom] = useState(4);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
            });

        map.current.on('click',(e)=>{
            const lat = Math.round(e.lngLat.lat *100) / 100;
            const lng =  Math.round(e.lngLat.lng * 100) / 100;
            console.log({lat,lng})
            const marker = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .addTo(map.current);
        })
    }, [])

    return(
        <div style={{width:'100%',padding: '.5rem', display: 'flex', flexDirection:'column'}}>
            {/* <div className="sidebar" style={{margin: '12px',borderRadius: '4px', backgroundColor: 'rgba(35, 55, 75, 0.9)',color: '#fff',padding: '6px 12px'}}>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div> */}
            <div ref={mapContainer} style={{height:'600px'}} />
        </div>
    )
}