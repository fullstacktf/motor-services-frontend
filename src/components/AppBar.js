import {React,useState} from 'react'
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Box, CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, MenuItem, Toolbar, Typography } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
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

import {menuItems} from './MenuItems.js'


import Logo from '../assets/pickauto_logo.png'
// import menuItems from '../utils/ResponsiveDrawerIcons.json'
import Vehicles from '../views/Vehicles';
import Services from '../views/Services';
import Main from '../views/Main';
import Settings from '../views/Settings';
import Notifications from '../views/Notifications';
import Appointment from '../views/Appointments';
import VehicleForm from '../views/VehicleForm';

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

export default function AppBarResponsive(){

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


    const drawerMenu = (
        <div>
            <div className={classes.toolbar}>
                <Divider/>
                <List>
                    {
                        menuItems.map((item,i)=>(
                            <ListItem component={Link} to={item.link} button key={item.text}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))
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
                            <img className={classes.logo} src={Logo}/>
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
                                    <MenuItem variant="h7" component={Link} to="/appointment" onClick={handleClose2}><Typography variant="h7">Citas en Curso</Typography></MenuItem>
                                    <MenuItem variant="h7" component={Link} to="/appointment" onClick={handleClose2}><Typography variant="h7">Citas Anteriores</Typography></MenuItem>
                                    <MenuItem variant="h7" component={Link} to="/appointment" onClick={handleClose2}><Typography variant="h7">Proximas Citas</Typography></MenuItem>
                                </Menu>
                            </Typography>
                            <Typography variant="h7">
                                <Link className={classes.link} to="/settings">Configuracion</Link>
                            </Typography>
                            <Typography variant="h7"></Typography>
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
              <Route path="/" element={<Main/>}>
              </Route>
              <Route path="/profile" element={<Profile/>}>
              </Route>
              <Route path="/vehicles" element={<Vehicles/>}>
              </Route>
              <Route path="/vehicles/add" element={<VehicleForm/>}>
              </Route>
              <Route path="/notifications" element={<Notifications/>}>
              </Route>
              <Route path="/appointments" element={<Appointment/>}>
              </Route>
              <Route path="/services" element={<Services/>}>
              </Route>
              <Route path="/settings" element={<Settings/>}>
              </Route>
          </Routes>

        </main>
      </Router>
      </div>
    )
}


AppBarResponsive.propTypes = {
    window: PropTypes.func,
  };