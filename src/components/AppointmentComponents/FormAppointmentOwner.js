import { TextField, Button, Card, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, Box } from "@mui/material";
import { CssBaseline } from "@material-ui/core";

//icons
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import vehiclesBrands from '../../utils/data/vehiclesBrands.json'

import * as React from 'react';
import PropTypes from 'prop-types';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
//Styles
import {useStyles} from '../../styles/VehicleFormStyle'
import MapComponent from "../MapComponent";
import ButtonSend from "../VehicleComponents/ButtonSendVehicle";

const pickers = [
    {
        value: 'Picker 1',
        label: 'Picker 1',
    },
    {
        value: 'Picker 2',
        label: 'Picker 2',
    },
    {
        value: 'Picker 3',
        label: 'Picker 3',
    },
    {
        value: 'Picker 4',
        label: 'Picker 4',
    },
];

const vehicles = [
    {
        value: 'Vehículo 1',
        label: 'Vehículo 1',
    },
    {
        value: 'Vehículo 2',
        label: 'Vehículo 2',
    },
    {
        value: 'Vehículo 3',
        label: 'Vehículo 3',
    },
    {
        value: 'Vehículo 4',
        label: 'Vehículo 4',
    },
];

const services = [
    {
        value: 'Servicio 1',
        label: 'Servicio 1',
    },
    {
        value: 'Servicio 2',
        label: 'Servicio 2',
    },
    {
        value: 'Servicio 3',
        label: 'Servicio 3',
    },
    {
        value: 'Servicio 4',
        label: 'Servicio 4',
    },
];

export default function AppointmentFormOwner() {

    const classes = useStyles()
    
    const [picker, setPicker] = React.useState('Picker 1');
    const handlePicker = (event) => {
        setPicker(event.target.value);
    };

    const [dataMap, setDataMap] = useState()
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    const getDataMap = (dataMap) => {

        setDataMap(dataMap);
        setLatitude(dataMap.latitude)
        setLongitude(dataMap.longitude);
    }

    const [vehicle, setVehicle] = React.useState('Vehículo 1'); //<--- Esto hay que cambiarlo
    const handleVehicle = (event) => {
        setVehicle(event.target.value);
    };

    const [service, setService] = React.useState('Servicio 1');
    const handleService = (event) => {
        setService(event.target.value);
    };

    const [text, setText] = React.useState('');
    const handleText = (e) => {
        setText(e.target.value)
    }

    const [date, setDate] = React.useState(new Date());
    const handleDate = (event) => {
        setPicker(event.target.value);
    };


    return (
        <Grid className={classes.root} container spacing={2} xs={12}>
            <Box m={2} sm={6} xs={12}>
                <h1>Solicitar cita</h1>
                <Box mb={1}>
                    <TextField fullWidth
                        select
                        label="Picker"
                        value={picker}
                        onChange={handlePicker}
                    >
                        {pickers.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                <Box mb={1}>
                    <FormControl fullWidth>
                        <TextField fullWidth
                            select
                            label="Vehículo"
                            value={vehicle}
                            onChange={handleVehicle}
                        >
                            {vehicles.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                </Box>
                <Grid container xs={12}>
                    <Grid item sm={6} xs={12} mb={1}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Sitio de recogida"
                            multiline
                            maxRows={4}
                            onChange={handleText}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                renderInput={(props) => <TextField {...props} />}
                                label="Fecha y hora de recogida"
                                value={date}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
                <Grid container xs={12}>
                    <Grid item sm={12} xs={12} mb={1}>
                        <MapComponent getData={getDataMap}></MapComponent>
                    </Grid>
                </Grid>
                <Box mb={1}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Sitio de entrega"
                        multiline
                        maxRows={4}
                        fullWidth
                    /></Box>
                <Box mb={1}>
                    <FormControl fullWidth>
                        <TextField fullWidth
                            select
                            label="Servicio"
                            value={service}
                            onChange={handleService}
                        >
                            {services.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                </Box>
                <Box mb={1}>
                    <TextField
                        mt={2}
                        className={classes.formElement}
                        id="outlined-multiline-static"
                        label="Notas del usuario"
                        multiline
                        rows={4}
                        fullWidth
                    /></Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <ButtonSend text="Añadir Cita"></ButtonSend>
                </Box>
            </Box>
        </Grid >
    )
}