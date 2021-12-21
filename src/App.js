import  React , {useEffect, useState}  from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';

//Views
import LoginView from './views/LoginView'
import RegisterForm from './components/RegisterComponents/RegisterFrom';
import AppBarResponsive from './components/AppBar';
import Vehicles from './views/Vehicles';
import Services from './views/Services';
import Main from './views/Main';
import Settings from './views/Settings';
import Notifications from './views/Notifications';
import Appointment from './views/Appointments';
import VehicleForm from './views/VehicleForm';
import Profile from './views/Profile'
import Register from './views/Register';
import Footer from './components/Footer';
import DataFetching from './components/DataFetching'

function App() {
  
  //Cambiar a useState
  const [userLogin, setUserLogin] = useState(false);
  const [userRegister, setUserRegister] = useState(false);

  const handleLogout = (userLogout) => {
    setUserLogin(userLogout);
  }


  const handleRegister = (userState) => {
    setUserRegister(userState);
  }

  

  if(!userLogin && userRegister) {
    return <Register />
  }

  if (!userLogin){
    return <LoginView userRegisterState={userLogin} onChangeRegister={handleRegister} onChange={handleLogout}/>
  }

  
  return (
  
    <div>
    <AppBarResponsive userState={userLogin} onChange={handleLogout}></AppBarResponsive>
    <Footer></Footer>
    </div>
  );
}

export default App;
