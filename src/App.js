import React from 'react';
// import logo from './logo.svg';
import './App.css';

///////////////// Pages /////////////////

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

////////////////////////////////////////

function App() {
  return (
    <div className='root'>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
