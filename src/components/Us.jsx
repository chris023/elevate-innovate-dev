import React from 'react';

import '../styles/Us.css';
import { Parallax } from 'react-scroll-parallax';
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

  return (
    <React.Fragment>
      <div className="Us">
        <StickyNav currentSection="Us" />
        <div className="flex-center us-wrapper">
          { ParallaxContent() }
        </div>
      </div>
    </React.Fragment>
  );
};

export default Us;
