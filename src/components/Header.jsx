import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import Nav from './Nav';

import '../styles/Header.css';

const Header = () => (
  <React.Fragment>
    <div className="header-wrapper">
      <BackgroundVideo />
      <Nav />
    </div>
  </React.Fragment>
);

export default Header;
