import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Typography,Rating,TextField, Button } from '@mui/material';

export default function FormReview(reviewData) {
    console.log("DAtos que llegan", reviewData)
    const [review, setReview] = useState({
        rating: 0,
        notes: ''
    })

    const handleInputChange = (e) => {
        setReview({
            ...review,
            [e.target.name] : e.target.value
        })
    }

    const sendReview = (e) => {
        e.preventDefault()
        //console.log("This is me trying",);
        axios.put(`http://localhost:3001/reviews/${reviewData.review.id_owner}/appointment/${reviewData.review.id_review}`, review)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
    }

    // const getReviews = async () => {
    //     axios.get('http://localhost:3001/reviews/owner/12345671')
    //         .then(res=> { setReviews(res.data) })
    //         .catch(err => console.log(err))
    // console.log(review)

    return (
        <form id="form" onSubmit={sendReview}>
            {console.log(reviewData.notes)}
        <Grid>
            <Typography component="legend">Valoración</Typography>
            <Grid>
            <Rating
                name="rating"
                defaultValue={reviewData.review.rating}
                //value={value}
                onChange={handleInputChange}
            />
            </Grid>
            <Grid>
            <TextField
                id="standard-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue={reviewData.review.notes}
                variant="standard"
                name="notes"
                onChange={handleInputChange}
            />
            </Grid>
            <Button type="submit" variant="contained" sx={{mt: 3, mb: 2, backgroundColor:'#03045E', color:'#48CAE4'}}>
                Enviar valoración
            </Button>

        </Grid>
        </form>
    )
}