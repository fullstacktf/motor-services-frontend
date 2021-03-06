import { Container, TextField, Button, Card, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, Box } from "@mui/material";


//icons
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import vehiclesBrands from '../../utils/data/vehiclesBrands.json'
import { useParams } from 'react-router-dom';

import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

//Styles
import {useStyles} from '../../styles/FormsStyle'
import ButtonSend from "./ButtonSendVehicle";
import { Snackbar } from "@material-ui/core";

const intialVehicle = {
    brand: "",
    fuel: "",
    id_owner: 0,
    kilometers: 0,
    model: "",
    plate_number: "",
    powered: 0,
    vehicle_description: "",
    vehicle_image: "",
}

export default function FormVehicle({edit, vehicleEdit = intialVehicle }) {

    const [title, setTitle] = useState("")
    const [iconButton, setIconButton] = useState()
    const [brands, setBrandsArray] = useState([])
    const [brandForm, setBrandForm] = useState('')

    const [models, setModels] = useState([])
    const [model, setModel] = useState('')

    const [fuel, setFuel] = useState('')
    const classes = useStyles()

    const[open, setOpen] = useState(false)

    const [vehicle, setVehicle] = useState(vehicleEdit)
    // const [vehicleEdit, setVehicleEdit] = useState([])

    let handleChange = (e) => {

        let name = e.target.name
        let value = e.target.value
        vehicle[name] = value
        vehicle["id_owner"] = 12345671
        name === "brand"  ?   setBrandForm(vehicle[name]) :  name === "model" ? setModel(vehicle[name]) : setFuel(vehicle[name])
        setVehicle(vehicle)
    }

    const sendVehicle = (e) => {
        e.preventDefault();
        axios.put('http://localhost:3001/vehicles/', vehicle)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
        setVehicle()
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
      };


    const getBrands = async () => {
        setBrandsArray(vehiclesBrands.items)
    }

    

    useEffect(() => {
        console.log("Edit",vehicleEdit);
        if (edit){
            setTitle("Editar Vehiculo")
            // setVehicleUpdate(vehicleEdit)
            setIconButton(true)
            setVehicle(vehicleEdit)

        }else{
            setTitle("A??adir Vehiculo")
        }
        getBrands()
    }, [vehicleEdit])


    return (
        <Container spacing={2} xs={12}>
            <form id="form" onSubmit={sendVehicle}>
            <div className={classes.root}>
            <h1>{title}</h1>
            <Grid container md={6} xs={12}>
                <FormControl fullWidth>
                    <InputLabel>Marca</InputLabel>
                    <Select
                        label="Marca"
                        name="brand"
                        value={brandForm}
                        onChange={handleChange}
                        defaultValue={vehicleEdit.brand}>
                        {
                            brands.map((element) => (
                                <MenuItem value={element.label}>{element.label}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                </Grid>
                <Grid container md={6} xs={12}>

                <TextField
                    label="Modelo"
                    name="model"
                    onChange={handleChange}
                    defaultValue={vehicleEdit.model}
                    margin="dense"
                    variant="outlined"
                    type="text"
                    fullWidth
                />
                </Grid>
                <Grid container md={6} xs={12}>
                    <Grid item sm={12} xs={12}>
                    <TextField
                            label="Matricula"
                            name="plate_number"
                            onChange={handleChange}
                            defaultValue={vehicleEdit.plate_number}
                            margin="dense"
                            id="plate_number"
                            variant="outlined"
                            type="text"
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid container xs={12} md={6} style={{display: 'flex', flexDirection: 'flex', justifyContent: 'space-between'}}>
                    <Grid item sm={5} xs={12}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Potencia"
                            name="powered"
                            onChange={handleChange}
                            defaultValue={vehicleEdit.powered}
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={5} xs={12}>
                        <TextField
                            name="kilometers"
                            onChange={handleChange}
                            defaultValue={vehicleEdit.kilometers}
                            id="outlined-multiline-flexible"
                            label="Kil??metros"
                            name="kilometers"
                            onChange={handleChange}
                            fullWidth
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
                            onChange={handleChange}
                            defaultValue={vehicleEdit.fuel}>
                            <MenuItem value="Gasolina">Gasolina</MenuItem>
                            <MenuItem value="Diesel">Di??sel</MenuItem>
                            <MenuItem value="Electrico">El??ctrico</MenuItem>
                            <MenuItem value="Hibrido">H??brido</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid container md={6} xs={12}>
                    <TextField
                        mt={2}
                        className={classes.formElement}
                        defaultValue={vehicle.vehicle_description}
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
                  
                    <ButtonSend text={title} onClick={sendVehicle} icon={iconButton}></ButtonSend>
                </Box>
            </div>
            </form>
            <Snackbar
                severity="info"
                anchorOrigin={"bottom","center"}
                open={open}
                onClose={handleClose}
                message="Vehiculo a??adido"
                key={"bottom","center"}
            />
        </Container>
    )
}
