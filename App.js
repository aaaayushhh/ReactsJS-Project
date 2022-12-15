import './App.css';
import Login from './Login';
import Registeration from './Registeration';
import Home from './Home';
import ContactUs from './ContactUs';
import FAQ from './FAQ';
import Doctor from './Doctor';
import Consultations from './Consultations';
import Profile from './Profile';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Registeration' element={<Registeration />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/FAQ' element={<FAQ />} />
          <Route path='/Doctor' element={<Doctor />} />
          <Route path='/Consultations' element={<Consultations />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
