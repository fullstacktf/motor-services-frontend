import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import AppointmentContainer from "../components/AppointmentComponents/ContainerCardAppointments.js";
import FilterList from "../components/AppointmentComponents/filterToolbar.js";
import StatusButtons from "../components/AppointmentComponents/StatusButtons.js";
import ContainerCardAppointmentsPast from '../components/AppointmentComponents/ContainerCardAppointmentsPast.js';


export default function AppointmentsPast() {
    const dateNow = new Date().toISOString().split('T')[0];

    const appointmentFilter = { //status=entregado
        request:'Aceptada'
    }

    return (

        <div>
            <ContainerCardAppointmentsPast appointmentFilter={appointmentFilter}></ContainerCardAppointmentsPast></div>
    )
}