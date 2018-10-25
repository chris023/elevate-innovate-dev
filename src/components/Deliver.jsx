import React from 'react';

import '../styles/Deliver.css';

import ScrollAnimation from 'react-animate-on-scroll';
import imgSmall from '../assets/images/Skills/liquor_display.jpg';
import imgBig from '../assets/images/Skills/cap_morgan.jpeg';

const Deliver = () => {
  const FadeInContent = () => (
    <ScrollAnimation
      animateIn="fadeIn"
      delay={75}
      offset={600}
      duration={2}
    >
      <h2 className="deliver-h2">Deliver</h2>
      <p className="deliver-body">DELIVER VALUE AND EFFICIENCY</p>
    </ScrollAnimation>
  );

  return (
    <div className="Deliver">
      <div className="deliver-grid">

        <div className="small-img-container center">
          <img className="small-deliver-img round-ds" src={imgSmall} alt="" />
        </div>

        <div className="deliver-text-content">
          {FadeInContent()}
        </div>

        <div className="big-img-container center">
          <img className="big-deliver-img round-ds" src={imgBig} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Deliver;