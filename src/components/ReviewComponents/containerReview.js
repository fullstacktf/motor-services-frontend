import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CardReview from './cardReview'

export default function ContainerReview() {
    const [reviews, setReviews] = useState([])

    const getReviews = async () => {
        axios.get('http://localhost:3001/reviews/owner/12345671')
            .then(res=> { setReviews(res.data) })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        getReviews()
    }, [])

    return (
        <Grid container xs={12} style={{ height: '100vh'}}>
            {
                !reviews.length ? <h1>No hay valoraciones aun</h1> : reviews.map((review) => (
                    <CardReview review={review}></CardReview>
                ))
            }
        </Grid>
    )
}