import React, { Component } from 'react';
import hamburgerico from '../assets/icons/hamburger.svg';
import { Trail, Transition, Spring, animated } from 'react-spring'

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
    const links = ['Us', 'Work', 'Develop', 'Deliver', 'Innovation', 'Contact'];

    return (
        <Spring
        to={{ top: this.state.expanded ? '200px' : '-400px' }}
        config={{ tension: 40, friction: 26 }}
        >
          {({ top, bottom }) => (

            <div
              style={{
                top,
                bottom
            }}
            className='nav-container'
          >
        
        <ul className={`nav-links ${this.state.expanded ? '' : 'hide'}`}>

          <Trail
            native
            from={{
              opacity: 0,
              x: 100,
            }}
            to={{
              opacity: this.state.expanded ? 1 : 0.25,
              x: this.state.expanded ? 0 : -100,
            }}
            keys={links}>
            {links.map(link => ({ x, opacity }) => (
              <animated.li
                className="nav-link"
                style={{
                  opacity,
                  transform: x.interpolate(x => `translate3d(${x}%,0,0)`)
                }}
              >{link}</animated.li>
            ))}
          </Trail>

        </ul>

        <div onClick={this.toggleNavMenu} className='company-title'>
          <img className='hamburger-ico' src={hamburgerico} alt=''></img>
          <p className='company-title'>Elevate Innovation</p>
        </div>
        
          </div>
        )}
      </Spring>
    );
  }


}
  
export default NavList;


/* <div onClick={this.toggleNavMenu}>
          <img className='hamburger-ico' src={hamburgerico} alt=''></img>
          <p className='company-title'>Elevate Innovation</p>
        </div> */

/* <Spring
          from={{
            width: 100,
            padding: 0,
            background: 'linear-gradient(to right, #30e8bf, #ff8235)',
            transform:
              'perspective(600px) translate3d(400px,0,0) scale(2) rotateX(90deg)',
            boxShadow: '0px 100px 150px -10px #2D3747',
            borderBottom: '0px solid white',
            shape: 'M20,380 L380,380 L380,380 L200,20 L20,380 Z',
            textShadow: '0px 5px 0px white',
          }}
          to={{
            width: 'auto',
            padding: 20,
            background: 'linear-gradient(to right, #009fff, #ec2f4b)',
            transform:
              'perspective(600px) translate3d(0px,0,0) scale(1) rotateX(0deg)',
            boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)',
            borderBottom: '10px solid #2D3747',
            shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
            textShadow: '0px 5px 15px rgba(255,255,255,0.5)',
          }}
          config={{ tension: 10, friction: 50 }}
        >
          {({
            width,
            padding,
            background,
            transform,
            boxShadow,
            borderBottom,
            textShadow,
            shape,
          }) => (
              <div
                style={{
                  display: 'inline-block',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  fontSize: '4em',
                  fontWeight: 800,
                  width,
                  padding,
                  background,
                  transform,
                  boxShadow,
                  textShadow,
                }}
              >
                <svg style={{ display: 'inline', width: 50 }} viewBox="0 0 400 400">
                  <path d={shape} fill="#2D3747" />
                </svg>
                <span style={{ borderBottom }}>😅</span>
              </div>
            )}
        </Spring> */

{/* <Spring
  from={{ top: '2vw' }}
  to={{ top: '46vw' }}
  config={{ tension: 10, friction: 50 }}
>
  {({ top, bottom }) => (

    <div
      style={{
        top,
        bottom
      }}
      onClick={this.toggleNavMenu}
      className=''
    >
      <img className='hamburger-ico' src={hamburgerico} alt=''></img>
      <p className='company-title'>Elevate Innovation</p>
    </div>
  )}
</Spring> */}