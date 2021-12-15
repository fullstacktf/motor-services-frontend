import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function CardAppointment({appointment}){

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(

      <Grid item xs={4}>
        <Item>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Cita"
              subheader={appointment.service_type}
              />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Fecha de la cita: {appointment.pick_up_date.split("T")[0]}<br/>
                Hora de la cita: {appointment.pick_up_time} <br/>
                Cita del vehículo {appointment.brand} {appointment.model} con matrícula {appointment.id_vehicle}

              </Typography>
              <Typography variant="body2" color="text.secondary">

              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
                >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Datos de la cita:</Typography>
                <Typography paragraph>
                    Su picker será: {appointment.first_name} <br/>
                    Lugar de recogida: {appointment.pick_up_city} <br/>
                    Lugar de entrega: {appointment.delivery_city} <br/>
                    Descripción del servicio: {appointment.owner_notes}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Item>
      </Grid>
          



    )
}