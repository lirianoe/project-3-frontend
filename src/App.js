
import './App.css';
import { Route, Routes } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Build from './pages/Build';
import BuildEdit from './pages/BuildEdit';
import AllVehicles from './pages/AllVehicles';
import Favorites from './pages/Favorites';


// components
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import IsPrivate from './components/isPrivate';





function App() {
  return (
    <div className="App">
     <Navbar/>
     


 

     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/favorites' element={
        <IsPrivate>
          <Favorites/> 
        </IsPrivate>
     
      
      }/>
      <Route path='/vehicles' element={<AllVehicles/>}/>
      
      <Route path='/build' element={
        <IsPrivate>
          <Build/>
        </IsPrivate>
      
      }/>
      <Route path='/build/:favoriteId' element={<BuildEdit />}/>
     </Routes>
    </div>
  );
}

export default App;
