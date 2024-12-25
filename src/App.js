import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './layout/header';
import styles from "./assets/styles/main.scss"
import Category from './pages/category';
import CarDetails from './components/carDetails';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/category" element={<Category />} /> 
        <Route path="/cars/:id" element={<CarDetails />} /> 
      </Routes>
    </div>
  );
}

export default App;
