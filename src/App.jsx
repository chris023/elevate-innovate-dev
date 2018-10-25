import React from 'react';
import './App.css';

import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Us from './components/Us';
import Skills from './components/Skills';
import Clients from './components/Clients';
import Contact from './components/Contact';
import SiteBackground from './components/SiteBackground';
import logo from './assets/brand/elevate_logo.png';

const App = () => (
  <React.Fragment>
    <div className="App">
      <div className="elevate-logo-container">
        <img className="logo" src={logo} alt="Elevate Innovation" />
      </div>
      <ParallaxProvider>
        <SiteBackground />
        <Header />
        <Us />
        <Skills />
        <Clients />
        <Contact />
      </ParallaxProvider>
    </div>
  </React.Fragment>
);

export default App;
