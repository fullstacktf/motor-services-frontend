import { Card, Grid } from "@material-ui/core";
import { CardContent, CardActionArea, Typography } from "@mui/material";
import {handleClick} from 'react'
import { Box } from "@mui/system";
import { Link } from 'react-router-dom';


export default function CardService({ service }) {

    return (
        <Grid item sm={4}>
            <Box mb={3} mr={6}>
                <Card style={{ textAlign: 'center', width: '100%', margin: 'auto', borderRadius: '20px' }} component={Link} to='/services/serviceID'>
                    <CardActionArea href="" style={{ borderRadius: '3px', border: '1px solid #03045E' }}>
                        <div style={{ backgroundColor: '#023E8A', color: 'white', fontSize: '15px' }}>
                            <span>
                                {service.name}
                            </span>
                        </div>
                        <CardContent style={{ height: '100%', lineHeight: '100px', textAlign: 'center', color: 'black' }}>
                            <Typography gutterBottom variant="h5" component="div" style={{ textDecoration: 'none' }}>
                                {service.icon}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Grid>
    )

}