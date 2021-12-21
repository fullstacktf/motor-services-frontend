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
import TimePicker from '@mui/lab/TimePicker';

import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Stack from '@mui/material/Stack';
//Styles
import { useStyles } from '../../styles/VehicleFormStyle'
import MapComponent from "../MapComponent";
import ButtonSend from "../VehicleComponents/ButtonSendVehicle";
import axios from 'axios';
import cities from '../../utils/data/cities.json';


export default function AppointmentFormOwner() {

    const [appointment, setAppointment] = useState({
       id_vehicle: "",
       id_serviced: 0,
       id_picker: 0,
       pick_up_latitude: 0,
       pick_up_longitude: 0,
       pick_up_city: "",
       pick_up_date: "",
       pick_up_time: "",
       appointment_status: "",
       appointment_request: "",
       owner_notes: "",
       picker_notes: "",
       delivery_latitude: 0,
       delivery_longitude: 0,
       delivery_city: "",
       garage: ""
    })
    // const [vehicleEdit, setVehicleEdit] = useState([])

    let handleChange = (e) => {

        let name = e.target.name
        let value = e.target.value
        appointment[name] = value


        //vehicle["id_owner"] = 12345671
        //name === "brand"  ?   setBrandForm(vehicle[name]) :  name === "model" ? setModel(vehicle[name]) : setFuel(vehicle[name])
        setAppointment(appointment)
        console.log(appointment);
    }

    const [services, setServices] = useState([''])
    const getServices = async () => {
        axios.get(`http://localhost:3001/services`)
            .then(res => { setServices(res.data) })
            .catch(err => console.log(err))
    }
  
    const [service, setService] = React.useState('Servicio 1'); //este service debería de quitarlo, quiero coger solo services en plural
    const handleService = (event) => {
        setService(event.target.value);
    };

    const [pickers, setPickers] = useState([''])
    const getPickers = async () => {
        axios.get(`http://localhost:3001/appointments/availablepickers`)
            .then(res => { setPickers(res.data) })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getServices()
        getPickers()
        getVehicles()
    }, [])

    const [picker, setPicker] = React.useState('Picker 1');
    const handlePicker = (event) => {
        setPicker(event.target.value);
    };

    const [vehicles, setVehicles] = useState([])
    const getVehicles = async () => {
        axios.get(`http://localhost:3001/vehicles/user/12345671`)
            .then(res => { setVehicles(res.data) })
            .catch(err => console.log(err))
    }

    const [vehicle, setVehicle] = React.useState('Vehículo 1');
    const handleVehicles = (event) => {
        setVehicle(event.target.value);
    };

    const [city, setCity] = useState()
    const handleCity = (event) => {
        setCity(event.target.value);
    };

    const classes = useStyles()

    const [dataMap, setDataMap] = useState()
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()

    const getDataMap = (dataMap) => {

        setDataMap(dataMap);
        setLatitude(dataMap.latitude)
        setLongitude(dataMap.longitude);
    }



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
                <Grid item xs={12} mb={1}>
                    <FormControl fullWidth>
                        <InputLabel>Provincia de Recogida</InputLabel>
                        <Select
                            required
                            label="Provincia de recogida"
                            name="delivery_city"
                            value={city}
                            onChange={handleChange}>
                            {
                                cities.map((element) => (
                                    <MenuItem value={element.city}>{element.city}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item sm={6} xs={12} mb={1}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack spacing={3}>
                            <TimePicker
                                label="Time"
                                value={date}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <DesktopDatePicker
                                label="Date desktop"
                                inputFormat="MM/dd/yyyy"
                                value={date}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </Stack>
                    </LocalizationProvider>
                </Grid>
                <Box mb={1}>
                    <TextField fullWidth
                        select
                        label="Picker"
                        value={picker}
                        onChange={handleChange}
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
                            value={vehicles[0]}
                            onChange={handleChange}
                        >
                            {vehicles.map((option) => (<MenuItem key={option.plate_number} value={option.plate_number}>
                                {`${option.brand} ${option.model}`}
                            </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                </Box>
                <Grid container xs={12}>
                    <Grid item sm={6} xs={12} mb={1}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Calle y número de recogida"
                            multiline
                            maxRows={4}
                            onChange={handleChange}
                        />
                    </Grid>

                </Grid>
                <Box mb={1}>
                    {/*<Button variant="contained" color="success">
                    Siguiente
                            </Button>*/}</Box>

                <Grid container xs={12}>
                    <Grid item sm={12} xs={12} mb={1}>
                        <MapComponent getData={getDataMap}></MapComponent>
                    </Grid>
                </Grid>
                <Grid item xs={12} mb={1}>
                    <FormControl fullWidth>
                        <InputLabel>Provincia de entrega</InputLabel>
                        <Select
                            required
                            label="Provincia de entrega"
                            name="city"
                            value={city}
                            onChange={handleChange}>
                            {
                                cities.map((element) => (
                                    <MenuItem value={element.city}>{element.city}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Box mb={1}>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Calle y número de entrega"
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
                            onChange={handleChange}
                        >
                            {services.map((option) => (
                                <MenuItem key={option.id_service} value={option.service_type}>
                                    {option.service_type}
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
                        onChange={handleChange}
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