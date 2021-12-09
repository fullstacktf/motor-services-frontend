import { Grid,Form,Box, TextField,InputAdornment, Button  } from "@mui/material";
import ProfileAvatar from "./ProfileAvatar";

import {useStyles} from '../../styles/FormsStyle'
import CreateIcon from '@mui/icons-material/Create';

export default function ProfileForm (){
    
    const classes = useStyles()

    return(
        <Grid container sx={{alignItems:'center'}} mt={2} direction={"column"} spacing={5}>
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
                        <Button>Cancelar</Button>
                        <Button>Aplicar Cambios</Button>
                </Grid>
            </Grid>
    )

}