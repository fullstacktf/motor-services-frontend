import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(1),
  },
}));

export default function StatusFilter() {

    const appointmentStatus = ['No recogido', 'Camino al taller', 'En el taller', 'Camino al punto de entrega', 'Entregado'];

    const classes = useStyles();

    return(
      <div className={classes.root}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="matricula"
            //defaultValue="female"
            name="radio-buttons-group"
          >
            {
                appointmentStatus.map((status) =>{
                    return <FormControlLabel value={status} control={<Radio />} label={status} />
                })
            }

          </RadioGroup>
        </FormControl>
      </div>
    );
};