import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { Grid } from "@material-ui/core";



const requestCard = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h5" component="div">
                El usuario ha solicitado una cita
            </Typography>
        </CardContent>
        <CardActions >
            <Button variant="contained" color="success">
                Aceptar
            </Button>
            <Button variant="contained" color="error">
                Rechazar
            </Button>
            <InfoIcon color="primary" ></InfoIcon>
        </CardActions>
    </React.Fragment>
);

const card = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h5" component="div">
                El picker ha aceptado su cita
            </Typography>
        </CardContent>
        <CardActions >
            <Button
                style={{
                    borderRadius: 5,
                    backgroundColor: "#607d8b"
                }}
                variant="contained"
            >
                Ver más
            </Button>
        </CardActions>
    </React.Fragment>
);

export default function NotificationCard() {
    return (

        <Grid container sx={{ alignItems: 'center' }} p={2} direction={"column"} spacing={1} style={{ height: "100%", width: '40%', margin: 'auto' }}>
            <Grid item mb={1} >
                <Card style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column"
                }} variant="outlined" >{card}</Card>
            </Grid>
            <Grid item mb={1} >
                <Card style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column"
                }} variant="outlined" >{requestCard}</Card>
            </Grid>


        </Grid >

    );
}
