
import './App.css';
import { Route, Routes } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Build from './pages/Build';
import AllVehicles from './pages/AllVehicles';
import Favorites from './pages/Favorites';
import MeetChallenger from './pages/MeetChallenger';
import MeetBmw from './pages/MeetBmw';
import MeetDurango from './pages/MeetDurango';

// components
import Navbar from './components/Navbar';





function App() {
  return (
    <div className="App">
     
     


 

     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/vehicles' element={<AllVehicles/>}/>
      <Route path='/meet-durango' element={<MeetDurango/>}/>
      <Route path='/meet-bmw' element={<MeetBmw/>}/>
      <Route path='/meet-challenger'element={<MeetChallenger/>}/>
      <Route path='/build' element={<Build/>}/>
     </Routes>
    </div>
  );
}

export default App;
