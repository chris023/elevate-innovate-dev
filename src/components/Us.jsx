import React from 'react';

import '../styles/Us.css';
import 'animate.css/animate.min.css';
import { Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import StickyNav from './StickyNav';

const Us = () => {
  const content = `
    Our mission is to design, develop, and 
    deliver innovative products and solutions using
    the latest technology while providing cost saving
    across a managed global supply network`;

  const ParallaxContent = () => (
    <Parallax
      className="parallax-content"
      offsetYMax={320}
      offsetYMin={-320}
      // slowerScrollRate
      // tag="figure"
    >
      <h2>We are a design, production, and logistics company</h2>
      <p>{ content }</p>
    </Parallax>
  );

  const FadeInContent = () => (
    <ScrollAnimation
      animateIn="fadeIn"
      delay={75}
      offset={600}
      duration={2}
    >
      {ParallaxContent()}
    </ScrollAnimation>
  );

  return (
    <React.Fragment>
      <div className="Us">
        {/* <StickyNav currentSection="Us" /> */}
        <div className="align-left">
          <div className="us-wrapper flex-center">
            { FadeInContent() }
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Us;
