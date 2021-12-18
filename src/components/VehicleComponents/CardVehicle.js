import { CardActions } from "@material-ui/core";
import { Card, CardContent, CardMedia, Grid, Box, Typography, IconButton } from "@mui/material";

//Icons
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import axios from 'axios'

export default function CardVehicle({vehicle}){

    const handleDelete = async(vehicleID) => {

        await axios.delete(`http://localhost:3001/vehicles/${vehicleID}`)

    }


    return(
        <Grid item sm={6} xs={12} md={4}>
            <Box mr={2} mb={3}>
                <Card>
                    <CardMedia
                    component="img"
                    src={vehicle.vehicle_image}
                    alt="image of vehicle"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {vehicle.brand, vehicle.model}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {vehicle.vehicle_description}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {vehicle.kilometers}km
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton><Link to={"/vehicle/edit/"+vehicle.plate_number}><EditIcon/></Link></IconButton>
                        <IconButton onClick={()=>{handleDelete(vehicle.plate_number)}}><DeleteIcon/></IconButton>
                    </CardActions>
                </Card>
            </Box>
        </Grid>
    )
}