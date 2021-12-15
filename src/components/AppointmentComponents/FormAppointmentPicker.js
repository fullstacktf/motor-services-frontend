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
import { useStyles } from '../../styles/VehicleFormStyle'

const states = [
    {
        value: 'No recogido',
        label: 'No recogido',
    },
    {
        value: 'Camino al taller',
        label: 'Camino al taller',
    },
    {
        value: 'En el taller',
        label: 'En el taller',
    },
    {
        value: 'Camino al punto de entrega',
        label: 'Camino al punto de entrega',
    },
    {
        value: 'Entregado',
        label: 'Entregado',
    },
];

export default function AppointmentFormPicker() {


    const classes = useStyles()

    const [state, setState] = React.useState('Picker 1');
    const handleState = (event) => {
        setState(event.target.value);
    };

    return (
        <Grid className={classes.root} spacing={2} xs={4}>
            <Box>
                <h1>Actualizar cita</h1>
                <Box mb={1}>
                    <FormControl fullWidth>
                        <InputLabel>Picker</InputLabel>
                        <Select
                            label="Estado"
                            value={state}
                            onChange={handleState}>
                            {states.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box mb={1}>
                    <TextField
                        mt={2}
                        className={classes.formElement}
                        id="outlined-multiline-static"
                        label="Notas del Picker"
                        multiline
                        rows={4}
                        fullWidth
                    /></Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        bgcolor: 'background.paper',
                    }}
                >
                        <Button variant="contained">Aceptar</Button>
                        <Button variant="contained">Cancelar</Button>
                </Box>
            </Box>
        </Grid>
    )
}
