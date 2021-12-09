import { TextField, Button, Card, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select,Box} from "@mui/material";
import { CssBaseline } from "@material-ui/core";

//icons
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react";
import vehiclesBrands from '../../utils/data/vehiclesBrands.json'

//Styles
import {useStyles} from '../../styles/VehicleFormStyle'

export default function FormVehicle(){

    const [brands,setBrandsArray] = useState([])
    const [brandForm,setBrandForm] = useState('')

    const classes = useStyles()

    const handleChange = (e) =>{
        setBrandForm(e.target.value)
    }

    const getBrands = async() =>{
        console.log(vehiclesBrands.items);
        setBrandsArray(vehiclesBrands.items)
        console.log(brands);
    }

    useEffect(() => {
       getBrands()
    }, [])

    return(
        <Grid className={classes.root} container spacing={2}  xs={12}>
            <Box m={2} sm={4} xs={12}>
            <FormControl fullWidth>
            {/* <label htmlFor="upload-photo">
                <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                />
                <FormLabel>Subir Imagen Perfil:</FormLabel>
                <Button color="secondary" variant="contained" component="span">
                   <AddIcon /> Upload button
                </Button>
                </label> */}

                <InputLabel>Marca</InputLabel>
                <Select 
                    label="Marca" 
                    value={brandForm}
                    onChange={handleChange}>
                    {
                        brands.map((element)=>(
                            <MenuItem value={element.label}>{element.label}</MenuItem>
                        ))
                    }
                </Select>
                </FormControl>
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
                <Grid container xs={12}>
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
                <TextField
                mt={2}
                className={classes.formElement}
                id="outlined-multiline-static"
                label="Descripcion"
                multiline
                rows={4}
                fullWidth
                />
                <Grid container xs={12}>
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained">Cancelar</Button>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <Button variant="contained">Aceptar</Button>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    )
}