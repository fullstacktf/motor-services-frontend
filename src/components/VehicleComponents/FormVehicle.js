import { Container, TextField, Button, Card, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, Box } from "@mui/material";


//icons
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import vehiclesBrands from '../../utils/data/vehiclesBrands.json'

import * as React from 'react';
import PropTypes from 'prop-types';

//Styles
import {useStyles} from '../../styles/FormsStyle'

export default function FormVehicle() {

    const [brands, setBrandsArray] = useState([])
    const [brandForm, setBrandForm] = useState('')

    const classes = useStyles()

    const handleChange = (e) => {
        setBrandForm(e.target.value)
    }

    const getBrands = async () => {
        setBrandsArray(vehiclesBrands.items)
    }

    useEffect(() => {
        getBrands()
    }, [])



    return (
        <Container spacing={2} xs={12}>
            <div className={classes.root}>
            <h1>Añadir vehículo</h1>
            <Grid container md={6} xs={12}>
                <FormControl fullWidth>
                    <InputLabel>Marca</InputLabel>
                    <Select
                        label="Marca"
                        value={brandForm}
                        onChange={handleChange}>
                        {
                            brands.map((element) => (
                                <MenuItem value={element.id}>{element.label}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                </Grid>
                <Grid container md={6} xs={12}>
                <FormControl fullWidth>
                    <InputLabel>Modelo</InputLabel>
                    <Select
                        label="Modelo"
                        value={brandForm}
                        onChange={handleChange}>
                        <MenuItem value="1">Tesla Model S</MenuItem>
                        <MenuItem value="2">Ford Fiesta</MenuItem>
                        <MenuItem value="3">Ford Focus</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid container md={6} xs={12}>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Año"
                            multiline
                            maxRows={4}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Matricula"
                            multiline
                            maxRows={4}
                            onChange={handleChange}
                        />
                    </Grid> 
                </Grid>
                <Grid container xs={12} md={6}>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Potencia"
                            multiline
                            maxRows={4}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Kilómetros"
                            multiline
                            maxRows={4}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <Grid container md={6} xs={12}>
                    <FormControl fullWidth>
                        <InputLabel>Combustible</InputLabel>
                        <Select
                            label="Combustible"
                            value={brandForm}
                            onChange={handleChange}>
                            <MenuItem value="1">Gasolina</MenuItem>
                            <MenuItem value="2">Diésel</MenuItem>
                            <MenuItem value="3">Eléctrico</MenuItem>
                            <MenuItem value="3">Híbrido</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid container md={6} xs={12}>
                    <TextField
                        mt={2}
                        className={classes.formElement}
                        id="outlined-multiline-static"
                        label="Descripcion"
                        multiline
                        rows={4}
                        fullWidth
                    />
                </Grid>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                    }}
                >
                    <input
                        accept="image/*"
                        className={classes.input}
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        multiple
                        type="file"
                    />
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" component="span" className={classes.button}>
                            Subir Imagen
                        </Button>
                    </label>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        bgcolor: 'background.paper',
                    }}
                >
                    <Button variant="contained">Añadir</Button>
                    <Button variant="contained">Cancelar</Button>
                </Box>
            </div>
        </Container>
    )
}
