import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import LoginView from './views/LoginView'
import RegisterForm from './components/RegisterFrom';
import AppBarResponsive from './components/AppBar';

function App() {
  return (
    // <Router>
    //   <Link to="/">Login</Link>
    //   <Link to="/registro">Registro</Link>
    //   <Routes>
        
    //     <Route path="/register" element={<RegisterForm/>}/>
    //     <Route path="/" element={<LoginView/>}/>

    //     {/* <div className="App">
    //       <LoginView></LoginView>
    //   </div> */}
    //   </Routes>
    // </Router>
  
      <AppBarResponsive></AppBarResponsive>
   

  );
}

export default App;
