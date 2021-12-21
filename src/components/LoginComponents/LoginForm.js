import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import iconLogo from '../../assets/images/pickauto_logo.png';
import '../../styles/LoginForm.css'
import { Avatar, getImageListItemBarUtilityClass } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@material-ui/core';
import Link from '@mui/material/Link';
import LoginImage from '../../assets/images/login_image2.jpg'
import {useStyles} from '../../styles/LoginFormStyle'
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function LoginForm({onChangeRegister,onChange}){

  const classes = useStyles()
  const [user, setUser] = useState({
    email: '',
    password_key: '',
  })
  const [cookie, setCookie] = useState()

  const getUser = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/auth',user)
      .then(res=>console.log(res.headers.authorization))
      .catch(err=>console.log(err))
  }

  const handleChange = (e) =>{
    let name = e.target.name
    let value = e.target.value

    user[name] = value
    setUser(user)

    console.log(user);
  }

 return (

      <Grid container xs={12}>
        <Grid className={classes.root} item xs={6} sm={9}  sx={{ display: { sm: 'none'}}} style={{height:'100vh', backgroundSize: '100% 100%', backgroundImage:`url(${LoginImage})`}}>
          {/* <img src={LoginImage} width="100%" height='auto'/> */}
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
            <Grid style={{display: 'flex',flexDirection: 'column', margin: '1rem', marginTop:'3rem'}}>
              <img src={iconLogo} />
            <Box component="form" onSubmit={getUser} noValidate sx={{ mt: 3 }}>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  autoFocus
                />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password_key"
                label="Contraseña"
                type="password"
                onChange={handleChange}
                id="password"
                autoComplete="current-password"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{backgroundColor:'#03045E', color:'#48CAE4', marginTop:'.7rem'}}
                component={Link}
                to="/"
                onClick={()=> onChange(true)}
              >

                Iniciar Sesion
              </Button>
              <Grid container xs={12}>
                  <Grid item xs>
                    <Link variant="body2"  href="/register" onClick={()=> onChangeRegister(true)}>
                      Registrate si aun no tienes cuenta
                    </Link>
                  </Grid>
              </Grid>
            </Box>
            </Grid>
        </Grid>
      </Grid>
  )
}