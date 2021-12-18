import { Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import appointmentData from '../../utils/data/appointments.json'
import CardAppointment from './CardAppointments.js'
import axios from 'axios'

//se le pasaría owner, status, from y to
export default function AppointmentContainer(appointmentFilter) {
    const [appointments, setAppointment] = useState([])
    const getAppointments = async () => {
        axios.get(`http://localhost:3001/appointments/owner/12345671?request=${appointmentFilter.appointmentFilter.request}`)
            .then(res => { setAppointment(res.data) })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAppointments()
    }, [])

    return (



        <Grid container xs={12}>
            {
                !appointments.length ? <h1>No hay citas</h1> : appointments
                    .filter(appointment => appointment.appointment_status !== 'No recogido' && appointment.appointment_status !== 'Entregado' )
                    .map((appointment) => <CardAppointment appointment={appointment}></CardAppointment>)
            }
        </Grid>
    )
}