import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Header from './Component/Header';
import Home from './Pages/Home'; 

function App() {
  return(
    <BrowserRouter>
      <Header/>
      
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} /> {/* Add the route for All Doctors */}
      </Routes> 
    </BrowserRouter>
  );
}

export default App;