import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';


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

export default function AppointmentForm() {
    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const [value, setValue] = React.useState(new Date());




    return (
        <div>
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
                        id="outlined-select-currency-native"
                        select
                        label="Vehículo"
                        value={currency}
                        onChange={handleChange}
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
                        id="outlined-select-currency-native"
                        select
                        label="Servicio"
                        value={currency}
                        onChange={handleChange}
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
                    id="outlined-select-currency-native"
                    select
                    label="Picker"
                    value={currency}
                    onChange={handleChange}
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
                    onChange={handleChange}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} />}
                        label="Fecha y hora de recogida"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
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
                    onChange={handleChange}
                />
            </Box>
            <Box>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Taller"
                    multiline
                    maxRows={4}
                    onChange={handleChange}
                /></Box>
            <TextField
                mt={2}
                id="outlined-multiline-static"
                label="Notas del usuario"
                multiline
                rows={4}
            />
        </div>
    );
}