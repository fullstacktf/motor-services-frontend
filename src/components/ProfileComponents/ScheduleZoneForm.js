import React, { useRef, useEffect, useState } from 'react';
import { Button, Grid, Paper } from "@material-ui/core";
import { Container, Typography } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from '@mui/material/TextField';
import MapComponent from "../MapComponent";
// eslint-disable-line import/no-webpack-loader-syntax



export default function ScheduleZoneForm(){

    
    const [value, setValue] = React.useState(new Date('2014-08-18T12:00:00'));

    const handleChange = (newValue) => {
      setValue(newValue);
    };


    return(

        // <>
        // <div className="sidebar" style={{margin: '12px',borderRadius: '4px', backgroundColor: 'rgba(35, 55, 75, 0.9)',color: '#fff',padding: '6px 12px'}}>
        // Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        // </div>
        // <div ref={mapContainer} style={{height:'600px', position:'absolute', top: '0', bottom: '0'}} />
        // </>
        <Container>
            <Grid container>
                <Paper>
                <MapComponent/>
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
        // <div>
        // // <div className="sidebar" style={{margin: '12px',borderRadius: '4px', backgroundColor: 'rgba(35, 55, 75, 0.9)',color: '#fff',padding: '6px 12px'}}>
        // // Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        // // </div>
        // // <div ref={mapContainer} style={{height:'600px'}} />
        // // </div>


    )
}