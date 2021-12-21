import { Grid,Form,Box, TextField,InputAdornment, Button, Container,Paper,CssBaseline } from "@mui/material";
import ProfileAvatar from "./ProfileAvatar";

import {useStyles} from '../../styles/FormsStyle'
import CreateIcon from '@mui/icons-material/Create';
import { Link } from "react-router-dom";

import { makeStyles, useTheme,ThemeProvider,createMuiTheme } from '@material-ui/core/styles';

//Icons
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';

export default function EditProfileForm (){
    
    const classes = useStyles()

    return(
        <Container>
          <div className={classes.root}>
            <ProfileAvatar imgUrl="https://live.staticflickr.com/6233/6214553422_86068b52e0_b.jpg"></ProfileAvatar>
                <ThemeProvider>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Nombre"
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <CreateIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="outlined"/>
            

                    <TextField
                        id="input-with-icon-textfield"
                        label="Email"
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <CreateIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="outlined"
                    />
            
          
                    <TextField
                        id="input-with-icon-textfield"
                        label="Telefono"
                        type="phone"
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <CreateIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="outlined"
                    />
           
                    <TextField
                        id="input-with-icon-textfield"
                        label="Localidad"
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <CreateIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="outlined"
                    />
             
                    <TextField
                        id="input-with-icon-textfield"
                        label="Contraseña"
                        type="password"
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <CreateIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="outlined"
                    />
                </ThemeProvider>
               <Grid item>
                    <Button component={Link} to="/user/schedule" variant="contained" startIcon={<EditIcon/>}>Modificar Zona y Horario</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained"  startIcon={<SaveIcon />}>Aplicar Cambios</Button>
                </Grid>
                </div>
            </Container>
    )

}