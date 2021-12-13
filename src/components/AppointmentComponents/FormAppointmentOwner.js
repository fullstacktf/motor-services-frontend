import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { Grid } from "@material-ui/core";

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



export default function AppointmentFormOwner() {
    const [vehicle, setVehicle] = React.useState('Vehículo 1'); //<--- Esto hay que cambiarlo
    const handleVehicle = (event) => {
        setVehicle(event.target.value);
    };
    const [service, setService] = React.useState('Servicio 1');
    const handleService = (event) => {
        setService(event.target.value);
    };
    const [picker, setPicker] = React.useState('Picker 1');
    const handlePicker = (event) => {
        setPicker(event.target.value);
    };
    const [date, setDate] = React.useState(new Date());
    const handleDate = (event) => {
        setPicker(event.target.value);
    };
    const [text, setText] = React.useState('');
    const handleText = (e) => {
        setText(e.target.value)
    }

    return (
        <Grid container sx={{ alignItems: 'center' }} p={2} direction={"column"} spacing={1} style={{ height: "100%", width: '40%', margin: 'auto' }}>
            <h1>Solicitar cita</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="outlined-select-vehicle-native"
                        select
                        label="Vehículo"
                        value={vehicle}
                        onChange={handleVehicle}
                        SelectProps={{
                            native: true,
                        }}
                    >
                        {vehicles.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select-service-native"
                        select
                        label="Servicio"
                        value={service}
                        onChange={handleService}
                        SelectProps={{
                            native: true,
                        }}
                    >
                        {services.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </div>

            </Box>
            <Box>
                <TextField
                    id="outlined-select-picker-native"
                    select
                    label="Picker"
                    value={picker}
                    onChange={handlePicker}
                    SelectProps={{
                        native: true,
                    }}
                >
                    {pickers.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </Box>
            <Box>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Sitio de recogida"
                    multiline
                    maxRows={4}
                    onChange={handleDate}
                />
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
            </Box>
            <Box>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Sitio de entrega"
                    multiline
                    maxRows={4}
                    onChange={handleText}
                />
            </Box>
            <Box>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Taller"
                    multiline
                    maxRows={4}
                    onChange={handleText}
                /></Box>
            <TextField
                mt={2}
                id="outlined-multiline-static"
                label="Notas del usuario"
                multiline
                rows={4}
            />
        </Grid>
    );
}