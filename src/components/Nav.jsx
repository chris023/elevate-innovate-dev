import React from 'react';
import brandLogo from '../assets/brand/ElevateManagement_Logo.svg';

import '../styles/Nav.css';

const Nav = () => (
  <div className="nav-wrapper">
    <img className="logo" src={brandLogo} alt="Elevate Innovation" />
  </div>
);

export default Nav;
