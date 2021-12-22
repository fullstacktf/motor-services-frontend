import * as React from 'react';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import FormReview from './formReview';


export default function CardReview({review}){
  console.log(review)
    const handleDelete = async(reviewID) => {
      const route = `http://localhost:3001/reviews/12345671/appointment/${reviewID}`
      console.log("Borrando", route)
      await axios.delete(route)//Pasar id de cookie
    }

  //   const sendReview = (e, userID, reviewID) => {
  //     e.preventDefault()
  //     axios.put(`/${userID}/appointment/${reviewID}`)
  //         .then(res=>console.log(res.data))
  //         .catch(err=>console.log(err))
  // }

    // const handleUpdate = async(userID, reviewID) => {
    //   await axios.put(`/${userID}/appointment/${reviewID}`)
    // }


    return(
      <Grid item >
        <Card sx={{ maxWidth: 345 }} style={{margin:'5px'}}>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={review.service_type}
              subheader={review.id_vehicle}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Vehículo: {review.brand} {review.model}<br/>
                Fecha de la cita: {review.pick_up_date.split("T")[0]}<br/>
                Hora de la cita: {review.pick_up_time} <br/>
                Su picker fue: {review.first_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Valoración de la cita:
              </Typography>
              <FormReview review={review}></FormReview>
            </CardContent>
            <CardActions>
              <IconButton onClick={()=>{handleDelete(review.id_review)}}><DeleteIcon/></IconButton>
            </CardActions>
        </Card>
      </Grid>
    )
}