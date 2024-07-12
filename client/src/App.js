import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Courses from './components/Courses';

function App() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Courses/>
    </div>
  );
}

export default App;
