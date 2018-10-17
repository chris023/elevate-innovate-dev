import React from 'react';

import '../styles/Skills.css';
import deliverImg from '../assets/images/skills-deliver.jpg';
import designImg from '../assets/images/skills-design.jpg';
import developImg from '../assets/images/skills-develop.png';

const Skills = () => (
  <React.Fragment>
    <div className="skills-grid">
      <div className="col">
        <img className="image" src={deliverImg} alt="Deliver" />
        <h3>DESIGN</h3>
        <p>IT ALL STARTS WITH AN IDEA</p>
        <ul>
          <li>Research & Strategy</li>
          <li>Product & Architectural Design</li>
          <li>Display & Store Fixtures</li>
          <li>Technology Design</li>
        </ul>
      </div>
      <div className="col">
        <img className="image" src={designImg} alt="Deliver" />
        <h3>DEVELOP</h3>
        <p>BRINGING THE IDEA TO LIFE</p>
        <ul>
          <li>Innovative Products</li>
          <li>Prototype Fabrication</li>
          <li>Custom Molding</li>
          <li>Manufacturing</li>
        </ul>
      </div>
      <div className="col">
        <img className="image" src={developImg} alt="Deliver" />
        <h3>DELIVER</h3>
        <p>DELIVER VALUE & EFFICIENCY</p>
        <ul>
          <li>Quality Control</li>
          <li>Maximum Efficiencies</li>
          <li>Cost Savings</li>
          <li>Consolidation, Warehousing & Logistics</li>
        </ul>
      </div>
    </div>
  </React.Fragment>
);

export default Skills;
