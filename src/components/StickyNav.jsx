import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/brand/elevate_logo.png';

import '../styles/StickyNav.css';

const StickyNav = (props) => {
  const { currentSection } = props;
  let content;

  if (currentSection === 'header') {
    content = <img className="elevate-logo" src={logo} alt="Elevate" />;
  } else {
    content = <h2 className={`sticky-nav-${currentSection}`}>{currentSection}</h2>;
  }

  return (
    <div className="sticky-nav-wrapper">
      <div className="center">
        {content}
      </div>
    </div>
  );
};

StickyNav.propTypes = {
  currentSection: PropTypes.string.isRequired,
};

export default StickyNav;
