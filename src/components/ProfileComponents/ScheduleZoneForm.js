import { Button, Grid, Paper } from "@material-ui/core";
import { Container, Typography } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax



export default function ScheduleZoneForm(){

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
            const marker = new mapboxgl.Marker()
            .setLngLat([lng, lat])
            .addTo(map.current);
        })
    }, [])
    
    const [value, setValue] = React.useState(new Date('2014-08-18T12:00:00'));

    const handleChange = (newValue) => {
      setValue(newValue);
    };


    return(
        <Container>
            <Grid item xs={12} sm={6} md={12}>
                <Paper>
                <Grid item>
                <div className="sidebar" style={{margin: '12px',borderRadius: '4px', backgroundColor: 'rgba(35, 55, 75, 0.9)',color: '#fff',padding: '6px 12px'}}>
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
                <div ref={mapContainer} style={{height:'600px'}} />
                </Grid>
             
                <Grid container style={{margin: '1.5rem'}} xs={12}>
                    <Grid item xs={12} style={{marginBottom: '1.5rem'}}>
                        <Typography variant="h5">Horario de Trabajo</Typography>
                    </Grid>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Grid item xs={12} sm={6}>
                            <TimePicker
                            label="Hora Inicio"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}/>
                        </Grid>
                        <Grid item>
                            <TimePicker
                            label="Hora Fin"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}/>
                        </Grid>
                    </LocalizationProvider>
                    <Grid container style={{display: 'flex', alignItems: 'center',alignContent: 'center'}}>
                        <Button variant="outlined">Guardar Modificacion</Button>
                    </Grid>
                </Grid>
                </Paper>
            </Grid>
        </Container>

    )
}