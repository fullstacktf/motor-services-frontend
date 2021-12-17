import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import iconLogo from '../../assets/images/pickauto_logo.png';
import '../../styles/LoginForm.css'
import { Avatar, getImageListItemBarUtilityClass } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Box, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@material-ui/core';
import Link from '@mui/material/Link';
import LoginImage from '../../assets/images/login_image2.jpg'

export default function LoginForm(){

  const handleSubmit = (e) => {
      e.preventDefault();
  }

  return (

      <Grid container xs={12}>
        <Grid item xs={6} sm={9}  sx={{ display: { sm: 'none'}}} style={{height:'100vh', backgroundSize: '100% 100%', backgroundImage:`url(${LoginImage})`}}>
          {/* <img src={LoginImage} width="100%" height='auto'/> */}
        </Grid>
        <Grid item xs={12} sm={3}>
            <Grid style={{display: 'flex',flexDirection: 'column', margin: '1rem', marginTop:'3rem'}}>
              <img src={iconLogo} />
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                to="/main"
                variant="contained"
                sx={{backgroundColor:'#03045E', color:'#48CAE4', marginTop:'.7rem'}}
              >
                Iniciar Sesion
              </Button>
              <Grid container xs={12}>
                  <Grid item xs>
                    <Link variant="body2"  href="/register" variant="body2">
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