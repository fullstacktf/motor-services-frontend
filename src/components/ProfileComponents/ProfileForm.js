import { Grid,Form,Box, TextField,InputAdornment, Button, Container  } from "@mui/material";
import ProfileAvatar from "./ProfileAvatar";

import {useStyles} from '../../styles/FormsStyle'
import CreateIcon from '@mui/icons-material/Create';
import { Link } from "react-router-dom";

export default function ProfileForm (){
    
    const classes = useStyles()

    return(
        <Container container sx={{alignItems:'center'}} mt={2} direction={"column"} spacing={5}>
            <ProfileAvatar></ProfileAvatar>
                <Grid item>
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
                        variant="outlined"
                    />
               </Grid>
                <Grid item>
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
               </Grid>
                <Grid item>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Telfono"
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <CreateIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="outlined"
                    />
               </Grid>
                <Grid item>
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
               </Grid>
               <Grid item>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Contraseña"
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <CreateIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="outlined"
                    />
               </Grid>
               <Grid item>
                   <Button component={Link} to="/schedule">Modificar Zona y Horario</Button>
               </Grid>
                <Grid item>
                        <Button>Aplicar Cambios</Button>
                </Grid>
            </Container>
    )

}