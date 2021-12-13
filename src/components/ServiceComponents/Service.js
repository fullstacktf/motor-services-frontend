/*import ServiceTitle from './ServiceTitle';
import ServiceInformation from './ServiceInformation';
import ServiceButton from './ServiceButton';
import '../../styles/Service.css';

export default function Service(props) {
    return (
        <div className = 'padre'>
            <ServiceTitle className= 'hijo'></ServiceTitle>
            <ServiceInformation className='hijo'></ServiceInformation>
            <ServiceButton className ='hijo'></ServiceButton>
        </div>
    );
    }

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          CardActions Example
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          CardActions are just a flexbox component that wraps the children in
          8px of padding and 8px horizontal padding between children.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Button size="small" color="primary">
          Primary
        </Button>
        <Button size="small" color="secondary">
          Secondary
        </Button>
      </CardActions>
    </Card>
  );
}*/
import ServiceTitle from './ServiceTitle';
import ServiceInformation from './ServiceInformation';
import ServiceButton from './ServiceButton';
import { Grid } from "@mui/material";


export default function Service(service) {

    return (
        <Grid container sx={{ alignItems: 'center' }} p={2} direction={"column"} spacing={1} style={{ border: "solid 1px", height: "100%", width:'40%', margin:'auto'}}>
            <Grid item>
                <ServiceTitle service = {service}></ServiceTitle>

            </Grid>
            <Grid item>
                <ServiceInformation></ServiceInformation>

            </Grid>
            <Grid item>
                <ServiceButton></ServiceButton>

            </Grid>
        </Grid>
    )
}
