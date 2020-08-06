import React from 'react';
// import logo from './logo.svg';
//import './App.css';
// import {makeStyles} from '@material-ui/core'

///////////////// Pages /////////////////

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import Navbar from './components/Navbar'
import Footer from './components/Footer'

////////////////////////////////////////

function App() {
  return (
    <div style={{height: '240rem'}}>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
