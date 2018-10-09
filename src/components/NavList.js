import React, { Component } from 'react';
import hamburgerico from '../assets/icons/hamburger.svg';

import '../styles/NavList.css';

class NavList extends Component {

  constructor() {
    super();
    this.state = {
      expanded: false
    };

  }

  toggleNavMenu = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return (
      <div className={`nav-container ${this.state.expanded ? 'nav-container-expand' : 'nav-container-collapse'}`}>
        <ul className={`nav-links ${this.state.expanded ? '' : 'hide'}`}>
          <li className='nav-link nav-us'>Us</li>
          <li className='nav-link nav-work'>Work</li>
          <li className='nav-link nav-develop'>Develop</li>
          <li className='nav-link nav-deliver'>Deliver</li>
          <li className='nav-link nav-innovation'>Innovation</li>
          <li className='nav-link nav-contact'>Contact</li>
        </ul>
        <div className='nav-title'>
          <img className='hamburger-ico' onClick={this.toggleNavMenu} src={hamburgerico} alt=''></img>
          <p className='company-title' onClick={this.toggleNavMenu}>Elevate Innovation</p>
        </div>
      </div>
    );
  }


}
  
export default NavList;