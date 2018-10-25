import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import Nav from './Nav';

import '../styles/Header.css';
import StickyNav from './StickyNav';

const Header = () => (
  <div className="Header">
    {/* <StickyNav currentSection="header" /> */}
    <BackgroundVideo />
  </div>
);

export default Header;
