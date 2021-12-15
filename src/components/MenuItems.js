//ICONS
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import TodayIcon from '@mui/icons-material/Today';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildIcon from '@mui/icons-material/Build';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';

export const menuItems = [
    {
      text: "Inicio",
      link:'/',
      icon: <HomeIcon />,
      nestedItems: []
    },
    {
      text: "Perfil",
      link:'/profile',
      id: "profile",
      icon: <PersonIcon />,
      nestedItems:[
        {
          text: "Mis Vehiculos",
          link:'/vehicles',
          icon: <DirectionsCarIcon />
        },
        {
          text:"Mis Servicios",
          link:'/services',
          icon: <BuildIcon />
        }
      ]
    },
    {
      text: "Notificaciones",
      link:'/notifications',
      icon: <NotificationsIcon />,
      nestedItems: []
    },
    {
      text: "Citas",
      link:'/appointments',
      id:'appointment',
      icon: <TodayIcon />,
      nestedItems: [
        {
          text:"Solicitar Cita",
          link:'/vehicles',
          icon: <CalendarTodayIcon />
        },
        {
          text:"Citas en Curso",
          link:'/vehicles',
          icon: <EventIcon />  
        },
        {
          text:"Citas Anteriores",
          link:'/vehicles',
          icon: <EventNoteIcon />
        },
        {
          text:"Proximas Citas",
          link:'/vehicles',
          icon: <DateRangeIcon />
        }
      ]
    },
    {
      text: "Ajustes",
      link:'/settings',
      icon: <SettingsIcon />,
      nestedItems: []
    },
    {
      text:"Salir",
      link:"/",
      icon: <LogoutIcon />,
      nestedItems: []
    }
  ];