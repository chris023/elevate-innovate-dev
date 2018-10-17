import React from 'react';
import '../styles/Clients.css';

import citiLogo from '../assets/logos/citi.svg';
import bremboLogo from '../assets/logos/brembo.svg';
import hublotLogo from '../assets/logos/Hublot.svg';
import harrodsLogo from '../assets/logos/Harrods.svg';
import rollsRoyceLogo from '../assets/logos/rolls-royce.svg';
import ferarriLogo from '../assets/logos/ferrari.svg';
import redBullLogo from '../assets/logos/red-bull.svg';
import nikeLogo from '../assets/logos/nike.svg';
import greyGooseLogo from '../assets/logos/grey-goose.svg';

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

  return (
    <React.Fragment>
      {/* <h2 className="clients-title">Clients</h2> */}
      <div className="clients-grid">

        {logos.map(logo => (
          <div key={logo} className="logo-container">
            <img className="logo" src={logo} alt="" />
          </div>
        ))}

      </div>
    </React.Fragment>
  );
};

export default Clients;
