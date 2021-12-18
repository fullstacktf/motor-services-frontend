import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import AppointmentContainer from "../components/AppointmentComponents/ContainerCardAppointments.js";
import FilterList from "../components/AppointmentComponents/filterToolbar.js";
import StatusButtons from "../components/AppointmentComponents/StatusButtons.js";
import ContainerCardAppointmentsPresent from '../components/AppointmentComponents/ContainerCardAppointmentsPresent.js';
import FilterBarPresent from '../components/AppointmentComponents/FilterBarPresent.js';

const dateNow = new Date().toISOString().split('T')[0];
const appointmentFilter = { //status!= no recogido && status != entregado
  request: 'Aceptada'
}

export default function AppointmentsPresent() {

  return (
    <div>
    <ContainerCardAppointmentsPresent appointmentFilter={appointmentFilter}></ContainerCardAppointmentsPresent></div>
  )
}