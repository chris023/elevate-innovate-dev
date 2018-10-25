import React from 'react';

// import { Controller, Scene } from 'react-scrollmagic';

import '../styles/Skills.css';

import Design from './Design';
import Develop from './Develop';
import Deliver from './Deliver';

const Skills = () => (
  <React.Fragment>

    <div className="Skills">
      <Design />
      <Develop />
      <Deliver />

      {/* <Controller>
        <Scene
          duration={2000}
          pin
          offset={800}
          triggerHook=".5"
        >
          <div className="rect-wrapper">
            <img className="rect" src={rect} alt="background" />
          </div>
        </Scene>
      </Controller> */}
    </div>
  </React.Fragment>
);

export default Skills;


{/* <Controller>
  <Scene
    duration={2000}
    // pin={true}
    triggerHook="0.5"
  >
    
  </Scene>
</Controller>
{
  images.map((image) => {
    const name = Object.keys(image)[0];
    return (
      <img className={name} src={image[name]} alt={name} />
    );
  })
}  */}
