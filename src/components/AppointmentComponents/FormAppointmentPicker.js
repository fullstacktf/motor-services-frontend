import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { Grid } from "@material-ui/core";

const states = [
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



export default function AppointmentFormOwner() {
    const [state, setState] = React.useState('Vehículo 1'); //<--- Esto hay que cambiarlo
    const handleVehicle = (event) => {
        setState(event.target.value);
    };

    return (
        <Grid container sx={{ alignItems: 'center' }} p={2} direction={"column"} spacing={1} style={{ height: "100%", width: '40%', margin: 'auto' }}>
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
                        label="Estado de la cita"
                        value={state}
                        onChange={handleVehicle}
                        SelectProps={{
                            native: true,
                        }}
                    >
                        {states.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </div>

            </Box>
            <TextField
                mt={2}
                id="outlined-multiline-static"
                label="Notas del picker"
                multiline
                rows={4}
            />
        </Grid>
    );
}