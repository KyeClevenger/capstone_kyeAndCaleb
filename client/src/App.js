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
import English_Class from './components/Classes/English_Class';
import Animation_Class from './components/Classes/Animation_Class';
import Vet_Class from './components/Classes/Vet_Class';
import Nursing_Class from './components/Classes/Nursing_Class';
import Math_Class from './components/Classes/Math_Class';
import Engineering_Class from './components/Classes/Engineering_Class';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Landing />
            <Info />
            <h1 className="text-center p-8 text-5xl font-semibold bg-gray-400 text-white underline underline-offset-8">Popular Courses</h1>
            <Courses />
          </>
        } />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="cs_class" element={<CS_Class/>} />
        <Route path="science_class" element={<Science_Class/>} />
        <Route path="english_class" element={<English_Class/>} />
        <Route path="animation_class" element={<Animation_Class/>} />
        <Route path="veterinary_class" element={<Vet_Class/>} />
        <Route path="nursing_class" element={<Nursing_Class/>} />
        <Route path="math_class" element={<Math_Class/>} />
        <Route path="engineering_class" element={<Engineering_Class/>} />
        <Route path="profile" element={<ProfilePage/>} />
      </Routes>
    </Router>
  );
}

export default App;

