import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './layout/header';
import styles from "./assets/styles/main.scss"
import Category from './pages/category';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/category" element={<Category />} /> 
      </Routes>
    </div>
  );
}

export default App;
