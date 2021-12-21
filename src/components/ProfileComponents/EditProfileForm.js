import { Grid,Form,Box, TextField,InputAdornment, Button, Container,Paper,CssBaseline, FormControl, Select } from "@mui/material";
import ProfileAvatar from "./ProfileAvatar";

import {useStyles} from '../../styles/FormsStyle'
import CreateIcon from '@mui/icons-material/Create';
import { Link } from "react-router-dom";

import { makeStyles, useTheme,ThemeProvider,createMuiTheme } from '@material-ui/core/styles';

//Icons
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";
import axios from "axios";
import { InputLabel, MenuItem } from "@material-ui/core";
import cities from  '../../utils/data/cities.json'


const initialUser = {
    id_rol: 0,
    password_key: "",
    email: "",
    city: "",
    first_name: "",
    last_name: "",
    phone_number: 0,
    birth_date: "",
    profile_image: ""
}

export default function EditProfileForm ({userId,userEdit = initialUser}){
    
    const classes = useStyles()

    const [user, setUser] = useState(userEdit)

    const [city, setCity] = useState(cities[0])

    const getUser = () =>{
        axios.get('http://localhost:3001/users/11223300')
            .then(res=> setUser(res.data[0]))
            .catch(err=> console.log(err))
    }

    const updateUser = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:3001/users/${userId}`,user)
            .then(res=>console.log(res.data))
            .catch(err=> console.log(err))
    }

    let handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        user[name] = value
        if(name === "city"){setCity(user[name])}
        setUser(user)
    }

    useEffect(() =>{
        console.log(userId);
       setUser(userEdit)
    },[])


    return(
        <Container spacing={2} xs={12}>
            <form id="form" onSubmit={updateUser}>
          <div className={classes.root}>
            <ProfileAvatar imgUrl={user.profile_image} width={150} height={150}></ProfileAvatar>
                     <Grid item xs={12} mt={2}>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Nombre"
                        defaultValue={user.first_name}
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <CreateIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="outlined"/>
                 </Grid>
                 <Grid item xs={12}>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Email"
                        defaultValue={user.email}
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
                    <TextField
                        id="input-with-icon-textfield"
                        label="Telefono"
                        type="phone"
                        defaultValue={user.phone_number}
                        InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                            <CreateIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="outlined"
                    />
               <Grid item xs={12}>
                    <FormControl size="large">
                        <InputLabel>Ciudad</InputLabel>
                        <Select
                            required
                            label="Ciudad"
                            name="city"
                            defaultValue={user.city}
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
               {/* <Grid item>
                    <Button component={Link} to="/user/schedule" variant="contained" startIcon={<EditIcon/>}>Modificar Zona y Horario</Button>
                </Grid> */}
                <Grid item>
                    <Button variant="contained" type="submit"  startIcon={<SaveIcon />}>Aplicar Cambios</Button>
                </Grid>
                </div>
                </form>
            </Container>
    )

}