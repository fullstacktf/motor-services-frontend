import { Card, Grid } from "@material-ui/core";
import { CardContent, CardActionArea, Typography  } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from 'react-router-dom';


export default function CardService({ service }) {

    return (
        <Grid item sm={4}>
            <Box mb={3} mr={6}>
                <Card style={{ textAlign: 'center', height: '200px', width: '100%', margin: 'auto'}}>
                    <CardActionArea href="">
                        <div style={{ backgroundColor: '#02B5E6', display: 'flex', alignItems: 'center', alignContent: 'center'}}>
                            <span> 
                                {service.icon}
                            </span>
                        </div>
                        <CardContent style={{height: '100%', lineHeight: '100px' , textAlign: 'center'}}>
                            <Typography gutterBottom variant="h5" component="div" component={Link} to='/services/serviceID' style={{textDecoration: 'none'}}>
                                {service.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Grid>
    )

}