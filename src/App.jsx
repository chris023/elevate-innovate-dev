import React from 'react';
import './App.css';

import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Us from './components/Us';
import Design from './components/Design';
import Clients from './components/Clients';
import Contact from './components/Contact';
import SiteBackground from './components/SiteBackground';

const App = () => (

  <ParallaxProvider>
    <SiteBackground />
    <Header />
    <Us />
    <Design />
    <Clients />
    <Contact />
  </ParallaxProvider>
);

export default App;
