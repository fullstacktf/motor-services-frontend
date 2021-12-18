import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import AppointmentContainer from "../components/AppointmentComponents/ContainerCardAppointments.js";
import FilterList from "../components/AppointmentComponents/filterToolbar.js";
import StatusButtons from "../components/AppointmentComponents/StatusButtons.js";
import ContainerCardAppointmentsFuture from '../components/AppointmentComponents/ContainerCardAppointmentsFuture.js';

export default function AppointmentsFuture() {
    const dateNow = new Date().toISOString().split('T')[0];
    const appointmentFilter = { //status= No recogido
        request: 'Aceptada'
    }
    return (
        <div>
            <ContainerCardAppointmentsFuture appointmentFilter={appointmentFilter}></ContainerCardAppointmentsFuture></div>
    )
}