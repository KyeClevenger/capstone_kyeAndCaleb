import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Courses from './components/Courses';
import Info from './components/Info';
function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Info/>
      <Courses/>
    </div>
  );
}

export default App;
