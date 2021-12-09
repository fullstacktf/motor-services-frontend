import { Card, Grid } from "@material-ui/core";
import { CardContent, CardMedia,Typography } from "@mui/material";
import { Box } from "@mui/system";


export default function CardService({service}){

    return(
        <Grid item sm={4}>
            <Box mr={2} mb={3}>
                <Card style={{textAlign:'center'}}>
                    <div style={{backgroundColor:'#F00', display: 'flex', alignItems: 'center', alignContent:'center'}}>
                        <span>
                         {service.icon}
                        </span>
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {service.name}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    )

}