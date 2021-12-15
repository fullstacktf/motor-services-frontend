import {React, useState} from 'react';
import {TextField,Box,FormLabel,Button} from '@mui/material/'
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

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
import { Link } from 'react-router-dom';

export default function RegisterForm(){
    const [date, setDate] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState("")

    const handleClickShowPassword = () =>{

        if (showPassword == false) {
            setShowPassword(true)
        }
        setShowPassword(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return(
            // <Box className="container">

            //     <FormLabel>Nombre</FormLabel><br></br>
            //     <TextField label="Nombre" variant="outlined"></TextField>

            //     <FormLabel>Apellidos</FormLabel><br></br>
            //     <TextField label="Apellidos" variant="outlined"></TextField>
            
            //     <FormLabel>Dni</FormLabel><br></br>
            //     <TextField label="Dni" variant="outlined"></TextField>

            //     <FormLabel>Email</FormLabel><br></br>
            //     <TextField type="email" label="Email" variant="outlined"></TextField>

            //     <FormLabel>Password</FormLabel><br></br>
            //     <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
            //     <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            //     <OutlinedInput
            //         id="outlined-adornment-password"
            //         type={showPassword ? 'text' : 'password'}
            //         value={password}
            //         endAdornment={
            //         <InputAdornment position="end">
            //             <IconButton
            //             aria-label="toggle password visibility"
            //             onClick={handleClickShowPassword}
            //             edge="end"
            //             >
            //             {showPassword ? <VisibilityOff /> : <Visibility />}
            //             </IconButton>
            //         </InputAdornment>
            //         }
            //         label="Password"
            //     />
            //     </FormControl>

            //     <FormLabel>Fecha de Nacimiento</FormLabel><br></br>

            //     <LocalizationProvider dateAdapter={AdapterDateFns}>

            //     <DesktopDatePicker
            //     label="Fecha de Nacimiento"
            //     value={date}
            //     minDate={new Date('1960-01-01')}
            //     onChange={(newValue) => {
            //         setDate(newValue);
            //     }}
            //     renderInput={(params) => <TextField {...params} />}
            //     />

            //     </LocalizationProvider>

            //     <FormLabel>Telefono</FormLabel>
            //     <TextField type="number">Telefono</TextField>

            //     <FormLabel>Localizacion</FormLabel>
            //     <TextField type="text" variant="outlined">
            //         <LocationOnIcon/>
            //     </TextField>

            //     <br></br>
            //     <label htmlFor="upload-photo">
            //     <input
            //         style={{ display: 'none' }}
            //         id="upload-photo"
            //         name="upload-photo"
            //         type="file"
            //     />

            //     <FormLabel>Subir Imagen Perfil:</FormLabel>
            //     <Button color="secondary" variant="contained" component="span">
            //        <AddIcon /> Upload button
            //     </Button>
            //     </label>

            //     <FormGroup>
            //         <FormControlLabel control={<Checkbox/>} label="He leido y acepto los terminos y condiciones y la politica de privacidad"></FormControlLabel>
            //     </FormGroup>


            //     <br></br>
            //     <Button variant="contained">Registrarse</Button>
            // </Box>
            <Grid container xs={12}  justifyContent="center" style={{height:'100vh' ,backgroundImage: `url(${RegisterImage})`, display: 'flex', alignItems: 'center', alignContent: 'center'}}>
                 <CssBaseline />
                <Grid item className="patata"  maxWidth="xs" sm={6} style={{backdropFilter:'blur(5px)' , backgroundColor:'#f2f3f55e', borderRadius: '7px', margin:'1.5rem'}}>
                <Grid container justifyContent="center" xs={12}>
                    <img src={IconRegister} width="40%"/>
                </Grid>
                <Box component="form" onSubmit={handleSubmit} style={{ margin:'2rem'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="Nombre"
                                autoFocus
                                />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Apellidos"
                                name="lastName"
                                autoComplete="family-name"
                                />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="DNI"
                                name="lastName"
                                autoComplete="family-name"
                                />
                        </Grid>
                        <Grid item xs={12}>
                            {/* DATE PICKER  */}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            type="password"
                            label="Contraseña"
                            name="password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                            required
                            fullWidth
                            type="password"
                            label="Repetir Contraseña"
                            name="password"
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
                            {/* <Link to="/">¿Tienes una cuenta? Inicia Sesión</Link> */}
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}