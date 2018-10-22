import React from 'react';

import '../styles/Contact.css';
import { Parallax } from 'react-scroll-parallax';
import StickyNav from './StickyNav';


const Contact = () => {
  const content = (
    <div className="Contact">
      <div className="contact-address">
        <p>1415 SW 21st Avenue</p>
        <p>Fort Lauderdale, FL  33312</p>
        <p>+1 364 ELEVATE</p>
        <p>+1 364 353 8283</p>
      </div>
      <p>inquiries@elevateinnovation.com</p>
      <div className="contact-links">
        <a href="https://twitter.com">Twitter</a>
        <a href="https://instagram.com">Instagram</a>
        <a href="https://linkedin.com">LinkedIn</a>
        <a href="https://google.com">Subscribe</a>
      </div>
    </div>
  );

  const ParallaxContent = () => (
    <Parallax
      className="parallax-content"
      offsetYMax={80}
      offsetYMin={-80}
    >
      {content}
    </Parallax>
  );

  return (
    <React.Fragment>
      <StickyNav currentSection="Contact" />
      {ParallaxContent()}
    </React.Fragment>
  );
};

export default Contact;
