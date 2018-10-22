import React from 'react';

import '../styles/Design.css';
import greyGoose from '../assets/images/greygoose.jpg';
import monte from '../assets/images/monte.jpeg';
import StickyNav from './StickyNav';

const Design = () => (
  <div className="Design">
    <StickyNav currentSection="Skills" />
    <div className="design-grid">
      <div className="center monte">
        <img className="monte-img" src={monte} alt="" />
      </div>
      <div className="center grey-goose">
        <img className="grey-goose" src={greyGoose} alt="" />
      </div>
      <h2 style={{ textAlign: 'center' }}>Design</h2>
      <p style={{ textAlign: 'center' }}>IT ALL STARTS WITH AN IDEA</p>
    </div>
  </div>
);

export default Design;
