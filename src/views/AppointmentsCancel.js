import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import AppointmentContainer from "../components/AppointmentComponents/ContainerCardAppointments.js";
import FilterList from "../components/AppointmentComponents/filterToolbar.js";
import StatusButtons from "../components/AppointmentComponents/StatusButtons.js";
import ContainerCardAppointment from '../components/AppointmentComponents/ContainerCardAppointments.js';

export default function AppointmentsCancel() {
    const dateNow = new Date().toISOString().split('T')[0];
    const appointmentFilter = { 
        request:'Cancelada'
    }

    return (

        <div>
            <ContainerCardAppointment appointmentFilter={appointmentFilter}></ContainerCardAppointment></div>
    )
}
