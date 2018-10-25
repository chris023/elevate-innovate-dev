import React from 'react';

import '../styles/Design.css';
import ScrollAnimation from 'react-animate-on-scroll';
import designSmall from '../assets/images/Skills/sketches.png';
import designBig from '../assets/images/Skills/dusse_cabinet.png';
import StickyNav from './StickyNav';

const Design = () => {
  const FadeInContent = () => (
    <ScrollAnimation
      animateIn="fadeIn"
      delay={75}
      offset={600}
      duration={2}
    >
      <h2>Design</h2>
      <p>IT ALL STARTS WITH AN IDEA</p>
    </ScrollAnimation>
  );

  return (
    <div className="Design">
      <div className="design-grid">
        {FadeInContent()}
        <div className="center grey-goose">
          <img className="design-img-big round-ds" src={designBig} alt="" />
        </div>
        <div className="center monte">
          <img className="design-img-small round-ds" src={designSmall} alt="" />
        </div>
        
      </div>
    </div>
  );
};

export default Design;
