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

const formatTime = (time) => {
    console.log("formatTImeeeee", time);
    var t = new Date(time);
    var hours = ''+ t.getHours();
    var minutes =''+ t.getMinutes();
    if (hours.length < 2) hours = '0' + hours;
    if (minutes.length < 2) minutes = '0' + minutes;
    console.log(hours);
    console.log(minutes);
    return [hours, minutes].join(':')
    //setTime(time)
}


export default function AppointmentFormOwner() {



    const [appointment, setAppointment] = useState({
        id_service: 0,
        id_picker: 0,
        pick_up_latitude: 0,
        pick_up_longitude: 0,
        pick_up_city: "",
        pick_up_date: "",
        pick_up_time: "",
        owner_notes: "",
        delivery_latitude: 0,
        delivery_longitude: 0,
        delivery_city: "",
        garage: ""
    })

    const sendAppointment = (e) => {
        console.log("Hola Mundo")
        e.preventDefault()
        const data = { ...appointment };
        data.pick_up_time = formatTime(appointment.pick_up_time)
        console.log(data);
        axios.post('http://localhost:3001/appointments/vehicle/1134abd', data) //esta id como se la cambio
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setAppointment({
            id_service: 0,
            id_picker: 0,
            pick_up_latitude: 0,
            pick_up_longitude: 0,
            pick_up_city: "",
            pick_up_date: "",
            pick_up_time: "",
            owner_notes: "",
            delivery_latitude: 0,
            delivery_longitude: 0,
            delivery_city: "",
            garage: ""
        })
    }


    // const [vehicleEdit, setVehicleEdit] = useState([])

    let handleChange = (e) => {
        console.log("handlechangeee", time);
        let name = e.target.name
        let value = e.target.value
        appointment[name] = value
        appointment["pick_up_date"] = date
        appointment["pick_up_time"] = time
        appointment["pick_up_latitude"] = latitude
        appointment["pick_up_longitude"] = longitude
        appointment["delivery_latitude"] = latitude
        appointment["delivery_longitude"] = longitude
        /*
        if (name === "pick_up_date") {
            appointment["pick_up_date"] = date
        }
        if (name === "pick_up_time") {
            appointment["pick_up_time"] = time
        }*/
        //vehicle["id_owner"] = 12345671
        //name === "brand"  ?   setBrandForm(vehicle[name]) :  name === "model" ? setModel(vehicle[name]) : setFuel(vehicle[name])
        setAppointment(appointment)
        console.log("apppointmentttyeeeeeeeeeeeeeeeeka", appointment)
    }

    const [services, setServices] = useState([])
    const getServices = async () => {
        axios.get(`http://localhost:3001/services`)
            .then(res => { setServices(res.data) })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getServices()
        getPickers()
        getVehicles()
    }, [])


    const [pickers, setPickers] = useState([])
    const getPickers = async () => {
        axios.get(`http://localhost:3001/appointments/availablepickers`)
            .then(res => { setPickers(res.data) })
            .catch(err => console.log(err))
    }



    const [vehicles, setVehicles] = useState([])
    const getVehicles = async () => {
        axios.get(`http://localhost:3001/vehicles/user/12345671`)
            .then(res => { setVehicles(res.data) })
            .catch(err => console.log(err))
    }


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



    const [date, setDate] = React.useState(new Date('2021-12-22T17:00:00'));
    const [time, setTime] = React.useState(new Date().setHours(0,0,0,0));

    const handleValue = (newValue) => {
        setTime(newValue);
    };
    const formatDate = (date) => {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        setDate([year, month, day].join('-').toString())
    }


    return (
        <Grid className={classes.root} container spacing={2} xs={12}>
            <form id="form" onSubmit={sendAppointment}>
                <Box m={2} sm={6} xs={12}>
                    <h1>Solicitar cita</h1>
                    <Box mb={1}>
                        <FormControl fullWidth>
                            <InputLabel>Picker</InputLabel>
                            <Select
                                required
                                id="id_picker"
                                name="id_picker"
                                label="Picker"
                                value={pickers[0]}
                                onChange={handleChange}>
                                {pickers.map((option) => (
                                    <MenuItem key={option.id_picker} value={option.id_picker}>
                                        {`${option.first_name} ${option.last_name}`}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box mb={1}>
                        <FormControl fullWidth>
                            <InputLabel>Vehículo</InputLabel>
                            <Select
                                required
                                id="id_vehicle"
                                name="id_vehicle"
                                label="Vehículo"
                                value={vehicles[0]}
                                onChange={handleChange}
                            >
                                {vehicles.map((option) => (<MenuItem key={option.plate_number} value={option.plate_number}>
                                    {`${option.brand} ${option.model}`}
                                </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Grid item sm={12} xs={12} mb={1}>
                    <Box mb={1}>
                        <TextField
                            mt={2}
                            className={classes.formElement}
                            id="garage"
                            name="garage"
                            label="Taller"
                            onChange={handleChange}
                            multiline
                            rows={1}
                            fullWidth
                        /></Box>
                    </Grid>
                    <Grid item xs={12} mb={1}>
                        <FormControl fullWidth>
                            <InputLabel>Provincia de Recogida</InputLabel>
                            <Select
                                required
                                label="Provincia de recogida"
                                id="pick_up_city"
                                name="pick_up_city"
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
                    <Grid container sm={12} xs={12} mb={1}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <Grid item sm={6} xs={6} >
                                <DesktopDatePicker
                                    label="Fecha de recogida"
                                    id="pick_up_date"
                                    name="pick_up_date"
                                    inputFormat="yyyy/MM/dd"
                                    value={date}
                                    onChange={(newValue) => {
                                        setDate(newValue);
                                        formatDate(newValue);
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Grid>
                            <Grid item sm={6} xs={6}>
                                <TimePicker
                                    label="Hora de recogida"
                                    ampm={false}
                                    value={time}
                                    onChange={(newValue) => {
                                        setTime(newValue)
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </Grid>
                        </LocalizationProvider>
                    </Grid>

                    <h4>Busque en el mapa la calle y el numero de recogida y de entrega</h4>

                    <Grid container xs={12}>
                        <Grid item sm={12} xs={12} mb={1}>
                            <MapComponent getData={getDataMap}></MapComponent>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} mb={1}>
                        <FormControl fullWidth>
                            <InputLabel>Provincia de Entrega</InputLabel>
                            <Select
                                required
                                label="Provincia de entrega"
                                id="delivery_city"
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
                    <Box mb={1}>
                        <FormControl fullWidth>
                            <InputLabel>Servicio</InputLabel>
                            <Select
                                select
                                id="id_service"
                                name="id_service"
                                label="Servicio"
                                value={services[0]}
                                onChange={handleChange}
                            >
                                {services.map((option) => (
                                    <MenuItem key={option.id_service} value={option.id_service}>
                                        {option.service_type}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box mb={1}>
                        <TextField
                            mt={2}
                            className={classes.formElement}
                            id="owner_notes"
                            name="owner_notes"
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
                        <Button type="submit" variant="contained">Añadir Cita</Button>
                    </Box>
                </Box>
            </form>
        </Grid >
    )
}