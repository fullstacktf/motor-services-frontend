import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import StatusCard from './StatusCard'


export default function RequestContainer() {
    const [appointments, setAppointments] = useState([])

    const getAppointments = async () => {
        axios.get('http://localhost:3001/appointments/12345674/picker/Aceptada')
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
                    <StatusCard appointment={appointment}></StatusCard>
                ))
            }
        </Grid>
    )
}