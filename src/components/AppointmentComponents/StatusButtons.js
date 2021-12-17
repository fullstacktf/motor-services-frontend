import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function StatusButtons() {
  
  return (
      <Grid container spacing={2}>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Grid item xs={5}>
          <Item>
            <Button>Aceptadas</Button>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Button>Pendientes</Button>
          </Item>
        </Grid>
        <Grid item xs={5}>
          <Item>
            <Button>Rechazadas</Button>
          </Item>
        </Grid>
    </ButtonGroup>
      </Grid>
  );
}