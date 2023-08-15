import React from 'react'
import './App.css'

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Reviews from './components/Reviews';
import TwoWheelers from './components/TwoWheelers';
import FourWheeler from './components/FourWheeler';
import VehicleDetails from './components/VehicleDetails';
import VehicleDetails2 from './components/VehicleDetails2';
import Blogs from './components/Blogs';
import BlogDetails from './components/BlogDetails';

function App() {
  

  return (
    <>
    
    <BrowserRouter>
      <Navbar  title="NB Rider" />

      <Routes>
      <Route path='/' element={<Home />}/>
      <Route exact path="/about" element={<About />}/> 
      <Route exact path="/reviews" element={<Reviews />}/>
      <Route exact path="/twowheeler" element={<TwoWheelers />}/>
      <Route exact path="/fourwheeler" element={<FourWheeler />}/>
      <Route exact path="/vehicledetails/:id" element={<VehicleDetails />}/>
      <Route exact path="/vehicledetails2/:id" element={<VehicleDetails2 />}/>
      </Routes>
      
      
    <Routes>
      <Route exact path='/blogs' element={<Blogs />} />
      <Route exact path="/blogdetails/:id" element={<BlogDetails />} />
    </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
