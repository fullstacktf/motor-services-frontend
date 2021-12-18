import { Grid,Form,Box, TextField,InputAdornment, Button, Container,Paper,CssBaseline } from "@mui/material";
import ProfileAvatar from "./ProfileAvatar";

import {useStyles} from '../../styles/FormsStyle'
import CreateIcon from '@mui/icons-material/Create';
import { Link } from "react-router-dom";

import { makeStyles, useTheme,ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";

//ICONS
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import { useEffect } from "react";

export default function ProfileForm (){
    
    const classes = useStyles()

    const getUser = async() =>{
        await axios.get('')

    }

    useEffect(() =>{

    },[])

    return(
        <Container>
          <div className={classes.root}>
                    <ProfileAvatar></ProfileAvatar>
                    <Typography variant="h3">Username</Typography>  
                    <div style={{display: 'flex'}}>
                        <LocationOnIcon/>
                        <Typography variant="h6">Localizacion</Typography>
                    </div>

                    <div style={{display: 'flex'}}>
                        <LocalPhoneIcon/>
                        <Typography variant="h6">Phone</Typography>
                    </div>

                    <div style={{display: 'flex'}}>
                        <EmailIcon/>
                        <Typography variant="h6">Mail</Typography>
                    </div>
                    
                    <Button variant="contained" component={Link} to="/editProfile"  startIcon={<EditIcon />}>Editar Perfil</Button>
            </div>
        </Container>
    )

}