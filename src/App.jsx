import React from 'react';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import './App.css';

import Header from './components/Header';
import Us from './components/Us';
import Skills from './components/Skills';
import Clients from './components/Clients';
import Contact from './components/Contact';

const config = {
  google: {
    families: ['Montserrat:300,400,700', 'sans-serif'],
  },
};

const App = () => (

  <React.Fragment>
    <WebfontLoader config={config}>
      <Header />
      <Us />
      <Skills />
      <Clients />
      <Contact />
    </WebfontLoader>
  </React.Fragment>
);

export default App;
