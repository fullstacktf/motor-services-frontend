import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import appointmentData from '../../utils/data/appointments.json'
import CardAppointment from './CardAppointments.js'



export default function AppointmentContainer(){
    const [appointments, setAppointment] = useState([])

    const getAppointments = async() => {
        setAppointment(appointmentData)
    }
    console.log(appointments);
    useEffect(() => {
        getAppointments()
    }, [])

    return(



        <Grid container xs={12}>
            {
                !appointments.length ? <h1>No hay vehiculos</h1> : appointments.map((appointment) => {
                    return <CardAppointment appointment={appointment}></CardAppointment>
                })
            }
        </Grid>
    )
}
