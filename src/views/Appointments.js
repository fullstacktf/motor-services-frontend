import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AppointmentsFuture from './AppointmentsFuture.js';
import AppointmentsPast from './AppointmentsPast.js';
import AppointmentsPresent from './AppointmentsPresent.js';
import AppointmentsPending from './AppointmentsPending.js';
import AppointmentsCancel from './AppointmentsCancel.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Appointment() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Citas En Curso" {...a11yProps(0)} />
          <Tab label="Citas Pasadas" {...a11yProps(1)} />
          <Tab label="Citas Futuras" {...a11yProps(2)} />
          <Tab label="Citas Pendientes" {...a11yProps(3)} style={{marginLeft:'600px'}}/>
          <Tab label="Citas Canceladas" {...a11yProps(3)}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AppointmentsPresent></AppointmentsPresent>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <AppointmentsPast></AppointmentsPast>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <AppointmentsFuture></AppointmentsFuture>
      </TabPanel>
      <TabPanel value={value} index={3}>
    <AppointmentsPending></AppointmentsPending>
      </TabPanel>
      <TabPanel value={value} index={4}>
    <AppointmentsCancel></AppointmentsCancel>
      </TabPanel>
    </Box>
  );
}
