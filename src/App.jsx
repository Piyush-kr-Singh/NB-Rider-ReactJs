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

function App() {
  

  return (
    <>
    
    <BrowserRouter>
      <Navbar  title="NB Rider" />

      <Routes>
      <Route path='/' element={<Home />}/>
      <Route exact path="/about" element={<About />}/> 
      </Routes>
      
      
    <div className="container my-3">
    <Routes>
    
      
      {/* <Route path='/exchanges' element={<Exchanges mode={bg} text={color}/>}/>
      <Route path='/coins' element={<Coins mode={bg} text={color}/>}/>
      <Route path="/coin/:id" element={<CoinDetails />} /> */}
    </Routes>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
