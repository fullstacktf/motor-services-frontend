import  React , {useState}  from 'react';
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
  const [userLogin, setUserLogin] = useState(true);
  const [userRegister, setUserRegister] = useState(true);
  // const userLogin = true;
  // const registerMode = true;

  if(!userLogin && userRegister) {
    return <Register/>
  }

  if (!userLogin){
    return <LoginView/>
  }

  return (
  
    <div>
    <AppBarResponsive></AppBarResponsive>
    {/* <Router>
       <Routes>
              <Route path="/" element={<Main/>}></Route>
              <Route path="/" element={<LoginView/>}></Route>
              <Route path="/register" element={<Register/>}></Route>
              <Route path="/profile" element={<Profile/>}></Route>
              <Route path="/vehicles" element={<Vehicles/>}></Route>
              <Route path="/vehicles/add" element={<VehicleForm/>}></Route>
              <Route path="/notifications" element={<Notifications/>}></Route>
              <Route path="/appointments" element={<Appointment/>}></Route>
              <Route path="/services" element={<Services/>}></Route>
              <Route path="/settings" element={<Settings/>}></Route>
        </Routes>
    </Router> */}
    <Footer></Footer>
    </div>
  );
}

export default App;
