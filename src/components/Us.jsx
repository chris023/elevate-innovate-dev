import React from 'react';

import '../styles/Us.css';

const Us = () => {
  const content = `
    Our mission is to design, develop, and 
    deliver innovative products and solutions using
    the latest technology while providing cost saving
    across a managed global supply network`;

  return (
    <React.Fragment>
      <div className="Us">
        <div className="us-filter">
          <div className="flex-center us-wrapper">
            <h2>We are a design, production, and logistics company</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Us;
