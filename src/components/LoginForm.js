import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import iconLogo from '../assets/pickauto_logo.png';
import '../styles/LoginForm.css'

export default function LoginForm(){
return (
    <div className="container">
         <img height= "250px" width="250px" src={iconLogo} alt="Hola mundo"></img>
         <br></br>
        <label>E-mail</label><br></br>
        <TextField id="outlined-basic" label="User" variant="outlined" />
        <br></br>
        <label>Contraseña</label><br></br>
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        /><br></br>
        <Button variant="contained">Iniciar Sesion</Button><br></br>
        <a href="/register">Regístrate si aún no tienes cuenta</a>
    </div>
)
}