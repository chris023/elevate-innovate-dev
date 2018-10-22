import React from 'react';

import '../styles/Contact.css';
import 'animate.css/animate.min.css';
import { Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import StickyNav from './StickyNav';

const Contact = () => {
  const content = (
    <div className="contact-wrapper">
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
      offsetYMax={40}
      offsetYMin={-40}
    >
      {content}
    </Parallax>
  );

  const FadeInContent = () => (
    <ScrollAnimation
      animateIn="fadeIn"
      delay={200}
      offset={600}
      duration={2}
    >
      {ParallaxContent()}
    </ScrollAnimation>
  );

  return (
    <div className="Contact">
      <StickyNav currentSection="Contact" />
      {FadeInContent()}
    </div>
  );
};

export default Contact;
