import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './layout/header';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} /> 
        <Route path="/home" element={<Home />} /> 
      </Routes>
    </div>
  );
}

export default App;
