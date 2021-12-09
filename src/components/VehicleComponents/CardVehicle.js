import { Card, CardContent, CardMedia, Grid, Box, Typography } from "@mui/material";


export default function CardVehicle({vehicle}){

    return(
        <Grid item sm={4}>
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
                </Card>
            </Box>
        </Grid>
    )
}