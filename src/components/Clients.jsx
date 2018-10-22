import React from 'react';
import '../styles/Clients.css';
import 'animate.css/animate.min.css';

import ScrollAnimation from 'react-animate-on-scroll';

import citiLogo from '../assets/logos/citi.svg';
import bremboLogo from '../assets/logos/brembo.svg';
import hublotLogo from '../assets/logos/Hublot.svg';
import harrodsLogo from '../assets/logos/Harrods.svg';
import rollsRoyceLogo from '../assets/logos/rolls-royce.svg';
import ferarriLogo from '../assets/logos/ferrari.svg';
import redBullLogo from '../assets/logos/red-bull.svg';
import nikeLogo from '../assets/logos/nike.svg';
import greyGooseLogo from '../assets/logos/grey-goose.svg';
import StickyNav from './StickyNav';

const Clients = () => {
  const logos = [
    citiLogo,
    bremboLogo,
    hublotLogo,
    harrodsLogo,
    rollsRoyceLogo,
    ferarriLogo,
    redBullLogo,
    nikeLogo,
    greyGooseLogo,
  ];

  const FadeInContent = (content, delay) => (
    <ScrollAnimation
      animateIn="fadeIn"
      delay={delay}
      offset={100}
      duration={2}
    >
      {content}
    </ScrollAnimation>
  );

  return (
    <div className="Clients">
      {/* <h2 className="clients-title">Clients</h2> */}
      <StickyNav currentSection="Clients" />
      <div className="clients-grid">

        {logos.map((logo, i) => (
          FadeInContent((
            <div key={logo} className="logo-container">
              <img className="logo" src={logo} alt="" />
            </div>
          ), 75 * ((i % 3) + 1))
        ))}

      </div>
    </div>
  );
};

export default Clients;
