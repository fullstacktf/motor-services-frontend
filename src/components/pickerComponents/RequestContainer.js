import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import RequestCard from './RequestCard'


export default function RequestContainer() {
    const [appointments, setAppointments] = useState([])

    const getAppointments = async () => {
        axios.get('http://localhost:3001/appointments/12345674/picker/Pendiente')
            .then(res=> { setAppointments(res.data) })
            .catch(err => console.log(err))
    }
    
    useEffect(() => {
        getAppointments()
    }, [])
    
    return (
        <Grid container xs={12} style={{ height: '100vh'}}>
            {
                !appointments.length ? <h1>No hay peticiones pendientes</h1> : appointments.map((appointment) => (
                    <RequestCard appointment={appointment}></RequestCard>
                ))
            }
        </Grid>
    )
}