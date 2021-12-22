import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { ButtonGroup, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



export default function RequestCard(appointment) {
  console.log("Parametros", appointment)
  const [appointment_request, setRequest] = React.useState({})
  const [route, setRoute] = React.useState("")
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const options = ['No recogido','Camino al taller','En el taller','Camino al punto de entrega','Entregado'];
  
  const acceptRequest = (status, appointment) => {
    setRequest({appointment_status:status.option})
    //console.log("Estado:",request);
    setRoute(`http://localhost:3001/appointments/${appointment.appointment.id_picker}/picker/${appointment.appointment.id_appointment}/status`)
    //console.log("La ruta se crea como", route)
    setSelectedIndex(status.option);
    setOpen(false);
    return route
  }

  const sendRequest = (e) => {
    e.preventDefault()
    console.log("ruta",route)
    console.log("request", appointment_request)
    axios.put(route, appointment_request)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  }

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      {/* {console.log("datos",appointment)} */}
      <CardContent>
        <Typography variant="h5" component="div">
          Cita pendiente
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Fecha de la cita: {appointment.appointment.pick_up_date.split("T")[0]}<br/>
          Hora de la cita: {appointment.appointment.pick_up_time}<br/>
          Tipo de servicio: {appointment.appointment.service_type}
        </Typography>
      </CardContent>
      <CardActions>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button">
        <Button onClick={sendRequest}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      //disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => acceptRequest({option}, appointment)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      </CardActions>
    </Card>
  );
}