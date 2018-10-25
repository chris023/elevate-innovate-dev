import React from 'react';

import '../styles/Develop.css';

import ScrollAnimation from 'react-animate-on-scroll';
import imgSmall from '../assets/images/Skills/Hennessy_Bar_VS_motion_2.jpg';
import imgBig from '../assets/images/Skills/dusse-displays_2014.jpg';

const Develop = () => {
  const FadeInContent = () => (
    <ScrollAnimation
      animateIn="fadeIn"
      delay={75}
      offset={600}
      duration={2}
    >
      <h2 className="develop-h2">Develop</h2>
      <p className="develop-body">BRINGING THE IDEA TO LIFE</p>
    </ScrollAnimation>
  );

  return (
    <div className="Develop">
      <div className="develop-grid">
        <div className="big-img-container center">
          <img className="big-develop-img round-ds" src={imgBig} alt="" />
        </div>
        <div className="design-text-content">
          {FadeInContent()}
        </div>
        <div className="small-img-container center">
          <img className="small-develop-img round-ds" src={imgSmall} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Develop;
