import React from 'react';
import { Route, Routes } from "react-router-dom"
import './App.css';

import Home from './Home.jsx';

import Course from './Course.jsx'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course/:courseName" element={<Course />} />
    </Routes>
  );
}

export default App;