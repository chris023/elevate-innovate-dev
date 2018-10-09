import React, { Component } from 'react';
import hamburgerico from '../assets/icons/hamburger.svg';
import { Trail, config, animated } from 'react-spring'

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
    let links = ['Us', 'Work', 'Develop', 'Deliver', 'Innovation', 'Contact'];

    return (
      <div className={`nav-container ${this.state.expanded ? 'nav-container-expand' : 'nav-container-collapse'}`}>
        <ul className={`nav-links ${this.state.expanded ? '' : 'hide'}`}>
          <Trail
            native
            from={{
              opacity: 0,
              x: 100
            }}
            to={{
              opacity: this.state.expanded ? 1 : 0.25,
              x: this.state.expanded ? 0 : -100
            }}
            keys={links}>
            {links.map(link => ({ x, opacity }) => (
              <animated.li
                className="nav-link"
                // onClick={this.toggleNavMenu}
                style={{
                  opacity,
                  transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
                }}
              >{link}</animated.li>
            ))}
          </Trail>
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