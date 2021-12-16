import { Container, TextField, Button, Card, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, Box } from "@mui/material";


//icons
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import vehiclesBrands from '../../utils/data/vehiclesBrands.json'

import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

//Styles
import {useStyles} from '../../styles/FormsStyle'

export default function FormVehicle() {

    const [brands, setBrandsArray] = useState([])
    const [brandForm, setBrandForm] = useState('')
    
    const [models, setModels] = useState([])
    const [model, setModel] = useState('')

    const [fuel, setFuel] = useState('')

    const classes = useStyles()

    const [vehicle, setVehicle] = useState({
        plate_number: "",
        id_owner: 0,
        brand: "",
        model: "",
        powered: 0,
        kilometers: 0,
        fuel: "",
        vehicle_description: "",
        vehicle_image: ""
    })

    let handleChange = (e) => {

        let name = e.target.name
        let value = e.target.value
        vehicle[name] = value
        vehicle["id_owner"] = 12345671
        name === "brand"  ?   setBrandForm(vehicle[name]) :  name === "model" ? setModel(vehicle[name]) : setFuel(vehicle[name])
        setVehicle(vehicle)
        console.log(vehicle);
        getModels()
        
    }

    const sendVehicle = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3001/vehicles/', vehicle)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
        console.log(vehicle);
    } 

    // const handleChange = (e) => {

    //     setBrandForm(e.target.value)
    //     console.log('====================================');
    //     console.log(e.target.value);
    //     console.log('====================================');
    //     getModels(e.target.value)

    // }

    const getModels = async(idBrand) =>{

        await axios.get(`https://ms-mt--api-web.spain.advgo.net/vehicle-specs/v1/models?section1Id=2500&makeId=39&includeManual=true`,{
            headers: {
                "connection": "keep-alive",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.183 Safari/537.36",
                // "origin": "https://www.coches.net",
                'access-control-allow-credentials': true,
                'access-control-allow-origin':'https://www.coches.net',
                'x-adevinta-channel': 'web-desktop',
                'x-schibsted-tenant': 'coches'
            }
          })
            .then(res=>setModels(res))
            .catch(err=>console.log(err))
            console.log(models);
    }

    const getBrands = async () => {
        setBrandsArray(vehiclesBrands.items)
    }

    useEffect(() => {
        getBrands()
    }, [])



    return (
        <Container spacing={2} xs={12}>
            <form id="form" onSubmit={sendVehicle}>
            <div className={classes.root}>
            <h1>Añadir vehículo</h1>
            <Grid container md={6} xs={12}>
                <FormControl fullWidth>
                    <InputLabel>Marca</InputLabel>
                    <Select
                        label="Marca"
                        name="brand"
                        value={brandForm}
                        onChange={handleChange}>
                        {
                            brands.map((element) => (
                                <MenuItem value={element.label}>{element.label}</MenuItem>
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
                        name="model"
                        value={model}
                        onChange={handleChange}>
                        <MenuItem value="Tesla Model S">Tesla Model S</MenuItem>
                        <MenuItem value="Ford Fiesta">Ford Fiesta</MenuItem>
                        <MenuItem value="Ford Focus">Ford Focus</MenuItem>
                    </Select>
                </FormControl>
                </Grid>
                <Grid container md={6} xs={12}>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Año"
                            multiline
                            name="age"
                            maxRows={4}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Matricula"
                            name="plate_number"
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
                            name="powered"
                            multiline
                            maxRows={4}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Kilómetros"
                            name="kilometers"
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
                            name="fuel"
                            value={fuel}
                            onChange={handleChange}>
                            <MenuItem value="Gasolina">Gasolina</MenuItem>
                            <MenuItem value="Diesel">Diésel</MenuItem>
                            <MenuItem value="Electrico">Eléctrico</MenuItem>
                            <MenuItem value="Hibrido">Híbrido</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid container md={6} xs={12}>
                    <TextField
                        mt={2}
                        className={classes.formElement}
                        name="vehicle_description"
                        onChange={handleChange}
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
                    <Button type="submit" variant="contained">Añadir</Button>
                    <Button variant="contained">Cancelar</Button>
                </Box>
            </div>
            </form>
        </Container>
    )
}
