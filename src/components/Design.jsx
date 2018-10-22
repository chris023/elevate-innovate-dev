import React from 'react';

import '../styles/Design.css';
import designSmall from '../assets/images/sketches.png';
import designBig from '../assets/images/dusse_cabinet.png';
import StickyNav from './StickyNav';

const Design = () => (
  <div className="Design">
    <StickyNav currentSection="Skills" />
    <div className="design-grid">
      <div className="center monte">
        <img className="design-img-small" src={designSmall} alt="" />
      </div>
      <div className="center grey-goose">
        <img className="design-img-big" src={designBig} alt="" />
      </div>
      <h2 style={{ textAlign: 'center' }}>Design</h2>
      <p style={{ textAlign: 'center' }}>IT ALL STARTS WITH AN IDEA</p>
    </div>
  </div>
);

export default Design;
