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

function App() {
  

  return (
    <>
    
    <BrowserRouter>
      <Navbar  title="NB Rider" />

      <Routes>
      <Route path='/' element={<Home />}/>
      <Route exact path="/about" element={<About />}/> 
      <Route exact path="/reviews" element={<Reviews />}/>
      </Routes>
      
      
    <div className="container my-3">
    <Routes>
    </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
