
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import TodayIcon from '@mui/icons-material/Today';

export const menuItems = [
    {
      text: "Inicio",
      link:'/',
      icon: <HomeIcon />,
    },
    {
      text: "Perfil",
      link:'/profile',
      icon: <PersonIcon />,
    },
    {
      text: "Notificaciones",
      link:'/notifications',
      icon: <NotificationsIcon />,
    },
    {
      text: "Citas",
      link:'/appointments',
      icon: <TodayIcon />,
    },
    {
      text: "Ajustes",
      link:'/settings',
      icon: <SettingsIcon />,
    }
  ];