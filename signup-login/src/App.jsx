import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Header from './Component/Header';

function App() {
  return(
    <BrowserRouter>
      <Header/>
      
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;