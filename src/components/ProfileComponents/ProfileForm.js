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
import { useEffect, useState } from "react";
import ButtonSend from "../VehicleComponents/ButtonSendVehicle";

export default function ProfileForm (){
    
    const classes = useStyles()
    const [user, setUser] = useState([])

    const getUser = async() =>{
        await axios.get('http://localhost:3001/users/11223300')
            .then(res=> setUser(res.data[0]))
            .catch(err=> console.log(err))
    }

    useEffect(() =>{
        getUser()
    },[])

    return(
        <Container>
          <div className={classes.root}>
                    <ProfileAvatar imgUrl={""} width={150} height={150}></ProfileAvatar>
                    <Typography variant="h3">{user.first_name != "" ? user.first_name : "Username" }</Typography>  
                    <div style={{display: 'flex'}}>
                        <LocationOnIcon/>
                        <Typography variant="h6">{user.city != "" ? user.city : "Localizacion"}</Typography>
                    </div>

                    <div style={{display: 'flex'}}>
                        <LocalPhoneIcon/>
                        <Typography variant="h6">{user.phone_number != "" ? user.phone_number:"Phone"}</Typography>
                    </div>

                    <div style={{display: 'flex'}}>
                        <EmailIcon/>
                        <Typography variant="h6">{user.email != "" ? user.email: "Mail"}</Typography>
                    </div>
                    <ButtonSend text="Editar Perfil" icon={true} link={"/edit/"+user.DNI}></ButtonSend>
            </div>
        </Container>
    )

}