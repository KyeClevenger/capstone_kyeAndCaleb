import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/landing';
import Info from './components/Info';
import Courses from './components/Courses';
import CoursesPage from './components/CoursesPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CS_Class from './components/Classes/CS_Class';
import Science_Class from './components/Classes/Science_Class';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Landing />
            <Info />
            <Courses />
          </>
        } />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="cs_class" element={<CS_Class/>} />
        <Route path="science_class" element={<Science_Class/>} />
      </Routes>
    </Router>
  );
}

export default App;

