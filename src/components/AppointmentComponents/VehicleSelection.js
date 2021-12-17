import * as React from 'react';
import { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import VehiclesData from '../../utils/data/vehicles.json';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(1),
  },
}));

export default function VehicleSelection() {
  const classes = useStyles();

  const [vehicles, setVehicles] = useState([])

  const getVehicles = async() => {
   setVehicles(VehiclesData)
  }

  useEffect(() => {
      getVehicles()
  }, [])
  
  return (
    <div className={classes.root}>
    <FormControl component="fieldset">
      <FormLabel component="legend">Matrícula</FormLabel>
      <RadioGroup
        aria-label="matricula"
        //defaultValue="female"
        name="radio-buttons-group"
        >
        {
          vehicles.map((vehicle) =>{
            return <FormControlLabel value={vehicle.plate_number} control={<Radio />} label={vehicle.plate_number} />
          })
        }
      </RadioGroup>
    </FormControl>
        </div>
  );
}