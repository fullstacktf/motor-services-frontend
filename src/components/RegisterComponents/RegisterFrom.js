import {React, useState} from 'react';
import {TextField,Box,FormLabel,Button, MenuItem,Select} from '@mui/material/'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';

//Icons
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconRegister from '../../assets/images/icon_register.png';
import RegisterImage from '../../assets/images/register_image.jpg'

import '../../styles/RegisterForm.css'
import { Grid } from '@material-ui/core';
import Link from '@mui/material/Link';
import axios from 'axios';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { format } from 'date-fns';
import cities from  '../../utils/data/cities.json'

export default function RegisterForm(){

    const [date, setDate] = useState(new Date());
    const [dateFormat, setDateFormat] = useState(new Date());
    const [idRol, setIdRol] = useState (1)
    const [city, setCity] = useState(cities[0])
  
    const [user, setUser] = useState({
        DNI: 0,
        id_rol: 0,
        password_key: "",
        email: "",
        city: "",
        first_name: "",
        last_name: "",
        phone_number: 0,
        birth_date: "",
        profile_image: ""
    })

    let handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        user[name] = value
        // console.log('====================================');
        // console.log(name,'Nombre',user[name],'Valor' ,value);
        // console.log('====================================');
        if(name === "city"){setCity(user[name])}
        user["birth_date"] = dateFormat
        user["profile_image"]= 'https://randomuser.me/api/portraits/men/11.jpg'
        setUser(user)
    }


    const formatDate = (date) => {
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        setDateFormat([year, month, day].join('-').toString())
    }

    const sendUser = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/users/',user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            
        setUser({
            DNI: 0,
            id_rol: 0,
            password_key: "",
            email: "",
            city: "",
            first_name: "",
            last_name: "",
            phone_number: 0,
            birth_date: "",
            profile_image: ""
        })
    }

    return(
            <Grid container xs={12}  justifyContent="center" style={{height:'100vh' ,backgroundImage: `url(${RegisterImage})`, display: 'flex', alignItems: 'center', alignContent: 'center'}}>
                <Grid item maxWidth="xs" sm={6} style={{backdropFilter:'blur(5px)' , backgroundColor:'#f2f3f594', borderRadius: '7px', margin:'1.5rem',marginTop: '1.5rem'}}>
                <Grid container justifyContent="center" xs={12}>
                    <img src={IconRegister} width="40%"/>
                </Grid>
                <form id="form" onSubmit={sendUser}>
                <Box style={{ margin:'2rem'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="first_name"
                                required
                                fullWidth
                                id="firstName"
                                label="Nombre"
                                autoFocus
                                onChange={handleChange}
                                />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Apellidos"
                                name="last_name"
                                autoComplete="family-name"
                                onChange={handleChange}
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="DNI"
                                label="DNI"
                                name="DNI"
                                autoComplete="family-name"
                                onChange={handleChange}
                                />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            name="email"
                            type="email"
                            fullWidth
                            onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            id="outlined-required"
                            label="Telefono"
                            name="phone_number"
                            type="phone"
                            fullWidth
                            onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                            disableFuture
                            name="birth_date"
                            label="Fecha de Nacimiento"
                            openTo="year"
                            views={['year', 'month', 'day']}
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                                formatDate(newValue); 
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Tipo de Usuario</InputLabel>
                                <Select
                                    label="Tipo de Usuario"
                                    name="id_rol"
                                    value={idRol}
                                    onChange={handleChange}
                                    defaultValue={1}>
                                    <MenuItem value="1">Cliente</MenuItem>
                                    <MenuItem value="2">Picker</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel>Ciudad</InputLabel>
                                <Select
                                    required
                                    label="Ciudad"
                                    name="city"
                                    value={city}
                                    onChange={handleChange}>
                                        {
                                            cities.map((element)=>(
                                                <MenuItem value={element.city}>{element.city}</MenuItem>
                                            ))
                                        }
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            type="password"
                            label="Contraseña"
                            name="password_key"
                            onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                            required
                            fullWidth
                            type="password"
                            label="Repetir Contraseña"
                            // onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                        <FormControlLabel
                            required
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="He leído y acepto los términos y condiciones y la política de privacidad"
                            />
                        </Grid>
                        <Grid item xs={12} justifyContent="center">
                            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, backgroundColor:'#03045E', color:'#48CAE4'}}>
                                Registrarse
                            </Button>
                        </Grid>
                       
                        <Grid item>
                            <Link variant="body2" href="/">¿Tienes una cuenta? Inicia Sesión</Link>
                        </Grid>
                    </Grid>
                </Box>
                </form>
            </Grid>
        </Grid>
    )
}