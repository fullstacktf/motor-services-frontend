import {React,useState} from 'react'
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, Grid, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, MenuItem, Toolbar, Typography } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';

import Profile from '../views/Profile'

//ICONS
// import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox'
import PoolIcon from '@material-ui/icons/Pool';
// import HomeIcon from '@material-ui/icons/Home';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import TodayIcon from '@material-ui/icons/Today';
import LogoutIcon from '@mui/icons-material/Logout';



import {menuItems} from './MenuItems.js'

//menu nested
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


import Logo from '../assets/images/pickauto_logo.png'
// import menuItems from '../utils/ResponsiveDrawerIcons.json'
import Vehicles from '../views/Vehicles';
import Services from '../views/Services';
import Main from '../views/Main';
import Settings from '../views/Settings';
import Notifications from '../views/Notifications';
import Appointment from '../views/Appointments';
import AppointmentForm from '../views/AppointmentForm';
import AppointmentsFuture from '../views/AppointmentsFuture.js';
import AppointmentsPresent from '../views/AppointmentsPresent.js';
import AppointmentsPast from '../views/AppointmentsPast.js';
import VehicleForm from '../views/VehicleForm';
import ScheduleZoneForm from './ProfileComponents/ScheduleZoneForm';
import Service from './ServiceComponents/Service';
import IconLogo from './IconLogo';
import EditProfile from '../views/EditProfile';
import ProfileAvatar from './ProfileComponents/ProfileAvatar';
import Register from '../views/Register';
import EditVehicle from '../views/EditVehicle';
import AddVehicle from '../views/AddVehicle';
import Error404 from '../views/Error404.JS';

const DRAWER_WIDTH = 240
const useStyles = makeStyles((theme)=>({

    root:{
        display:'flex',
    },
    drawer:{
        [theme.breakpoints.up('sm')]: {
            width: 0,
            flexShrink: 0,
        },
    },
    logo:{
        maxHeight:'80px',
        verticalAlign:'middle',
        margin:'.5em',
        [theme.breakpoints.down('xs')]:{
          verticalAlign: 'middle',
          display: 'inline-block',       
        }
    },
    link:{
        color:'#FFF',
        textDecoration:'none',
        marginRight:'15px',
        '&:hover':{
            color:'#48CAE4',
            textDecoration:'none'
        },
        [theme.breakpoints.down('xs')]:{
            display:'none',
        }
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
          width: '100%',
          marginLeft: DRAWER_WIDTH,
        },
        backgroundColor:'#03045E',
      },
      menuButton: {
        marginRight: theme.spacing(2),
        fontSize:90,
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      drawerPaper: {
        width: DRAWER_WIDTH,
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
      content: {
        marginTop:'1.5rem',
        [theme.breakpoints.up('sm')]: {
          width: '100%',
         
        },
        padding: theme.spacing(3),
      },
}))

export default function AppBarResponsive({userState,onChange}){

    const classes = useStyles();
    const theme = useTheme();

    const [mobileOpen, setMobileOpen] = useState(false);
    const container = window !== undefined ? ()=>window.document.body : undefined
    const [anchor,setAnchor] = useState(null)
    const [anchor2,setAnchor2] = useState(null)

    const handleMobile = () =>{
        setMobileOpen(!mobileOpen)
    }

    const handleClick = (e)=>{
      setAnchor(e.currentTarget)
    }

    const handleClose = () =>{
        setAnchor(null)
    }

    const handleClick2 = (e)=>{
        setAnchor2(e.currentTarget)
    }
  
    const handleClose2 = () =>{
      setAnchor2(null)
    }

    // const handleLogout = () => {
    //     console.log("click");
    //     userState.onChange(false)
    //     console.log(userState);
    // }

    const [opened, setOpened] = useState();

    const openMenu = (item) => () =>{
        if (opened == item.id){
            setOpened()
        } else {
            setOpened(item.id)
        }
    }
   
    const nestedMenuItem = (item) =>{
   
       return <>
            <ListItemButton onClick={openMenu(item)}>
                    <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} />
                {item.id == opened ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={item.id == opened} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            {
          
            item.nestedItems.map((menutItem)=>(
            <ListItemButton sx={{ pl: 4 }} component={Link} to={menutItem.link}>
                <ListItemIcon>
                {menutItem.icon}
                </ListItemIcon>
                <ListItemText primary={menutItem.text} />
            </ListItemButton>
            ))

            }
            </List>
            </Collapse>
  
        </>
    }

    const drawerMenu = (
        <div>
            <div className={classes.toolbar}>
                <Divider/>
                <Grid item xs={12}>
                    <ProfileAvatar/>
                    <Typography variant="h7">Username</Typography>
                </Grid>
                
                <List>
                    {
                        menuItems.map((item,i)=>{
                            return item.nestedItems.length > 0 ? 
                            nestedMenuItem(item)
                            :
                            <ListItem component={Link} to={item.link} button key={item.text}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem> 
                        })
                    }
                </List>
            </div>
        </div>
    )

    return(
        <div>
            <Router>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleMobile}
                            className={classes.menuButton}
                            >
                            <MenuIcon />
                        </IconButton>
                        <Link to="/">
                            <IconLogo/>
                        </Link>
                        <Box xs={12} style={{position:'absolute',display:'flex',right:'0', marginRight:'1.5rem'}}>
                            <Typography variant="h7">
                                <Link className={classes.link} onClick={handleClick} to="/profile">
                                    Mi perfil
                                </Link>
                                <Menu
                                keepMounted anchorEl={anchor} 
                                open={Boolean(anchor)} 
                                onClose={handleClose}
                                getContentAnchorEl={null}
                                variant="menu"
                                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                transformOrigin={{ vertical: "top", horizontal: "center" }}>
                                    <MenuItem variant="h7" component={Link} to="/vehicles" onClick={handleClose}><Typography variant="h7">Mis Vehiculos</Typography></MenuItem>
                                    <MenuItem variant="h7" component={Link} to="/services" onClick={handleClose}><Typography variant="h7">Mis Servicios</Typography></MenuItem>
                                </Menu>
                            </Typography>
                            <Typography variant="h7"><Link className={classes.link} to="/notifications">Notificaciones</Link></Typography>
                            <Typography variant="h7">
                                <Link className={classes.link} onClick={handleClick2} to="/appointments">
                                    Citas
                                </Link>
                                <Menu
                                keepMounted anchorEl={anchor2} 
                                open={Boolean(anchor2)} 
                                onClose={handleClose2}
                                getContentAnchorEl={null}
                                variant="menu"
                                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                                transformOrigin={{ vertical: "top", horizontal: "center" }}>
                                    <MenuItem variant="h7" component={Link} to="/appointments/appointmentForm" onClick={handleClose2}><Typography variant="h7">Solicitar Cita</Typography></MenuItem>
                                </Menu>
                            </Typography>
                            <Typography variant="h7">
                                <Link className={classes.link} to="/settings">Configuracion</Link>
                            </Typography>
                            <Typography variant="h7">
                                <Link className={classes.link} to="/" onClick={()=>onChange(false)}><LogoutIcon/></Link>
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>

            <nav className={classes.drawer}>
                <Hidden smUp implementation="css">
                    <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={mobileOpen}
                    onClose={handleMobile}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    >
                    {drawerMenu}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                    >
                    {drawerMenu}
                    </Drawer>
                </Hidden>

            </nav>
            <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes>
              <Route exact path="/" element={<Main/>}>
              </Route>
              {/* <Route path="/register" element={<Register/>}>
              </Route> */}
              <Route  path="/profile" element={<Profile/>}>
              </Route>
              <Route  path="/editProfile" element={<EditProfile/>}>
              </Route>
              <Route  path="/vehicles" element={<Vehicles/>}>
              </Route>
              <Route  path="/vehicles/add" element={<AddVehicle/>}>
              </Route>
              <Route path="/vehicle/edit/:idVehicle" element={<EditVehicle/>}>
              </Route>
              <Route path="/vehicle/edit/:idVehicle" element={<VehicleForm/>}>
              </Route>
              <Route path="/notifications" element={<Notifications/>}>
              </Route>
              <Route path="/appointments" element={<Appointment/>}>
              </Route>
              <Route path="/appointmentsPresent" element={<AppointmentsPresent/>}>
              </Route>
              <Route path="/appointmentsPast" element={<AppointmentsPast/>}>
              </Route>
              <Route path="/appointmentsFuture" element={<AppointmentsFuture/>}>
              </Route>
              <Route path="/appointments/appointmentForm" element={<AppointmentForm/>}>
              </Route>
              <Route path="/services" element={<Services/>}>
              </Route>
              <Route path="/services/serviceID" element={<Service/>}>
              </Route>
              <Route path="/settings" element={<Settings/>}>
              </Route>
              <Route path="/user/schedule" element={<ScheduleZoneForm/>}>
              </Route>
              <Route path="*" element={<Error404/>}>
              </Route>
              {/* <Route path="*">
                <Redirect to="/404" />
              </Route> */}
          </Routes>

        </main>
      </Router>
      </div>
    )
}


AppBarResponsive.propTypes = {
    window: PropTypes.func,
  };