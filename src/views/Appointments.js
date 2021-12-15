import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import AppointmentContainer from "../components/AppointmentComponents/ContainerCardAppointments.js";
import FilterList from "../components/AppointmentComponents/filterToolbar.js";
import StatusButtons from "../components/AppointmentComponents/StatusButtons.js";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

export default function Appointment(){

    return(
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Item>
                        <FilterList></FilterList>
                    </Item>

                </Grid>
                <Grid item xs={8}>
                    <Item>
                  <StatusButtons></StatusButtons>
                  <AppointmentContainer></AppointmentContainer>
                    </Item>
                </Grid>

            </Grid>
        </Box>
    )
}