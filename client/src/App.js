import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Info from './components/Info';
import Courses from './components/Courses';
import CoursesPage from './components/CoursesPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      </Routes>
    </Router>
  );
}

export default App;

