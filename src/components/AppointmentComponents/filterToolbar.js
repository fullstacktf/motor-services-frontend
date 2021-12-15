import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import VehicleSelection from './VehicleSelection';
import StatusFilter from './StatusFilter';
import CalendarFilter from './CalendarFilter';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import FilterBox from './FilterBox';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 270,
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(1, 2),
  },
  filters: {
    diplay: 'flex',
    flexDirection: 'column',
  },
}));


export default function FilterList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const classes = useStyles()

  return (
    <Paper className={classes.root} elevation={3}>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >

        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Vehículo" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <VehicleSelection></VehicleSelection>
        </Collapse>

        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Fecha" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CalendarFilter></CalendarFilter>
        </Collapse>

        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Estado de la cita" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <StatusFilter></StatusFilter>
        </Collapse>

      </List>
    </Paper>
  );
}