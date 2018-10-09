import React, { Component } from 'react';
import playico from '../assets/icons/play-button.svg';
import '../styles/PlayButton.css';

class PlayButton extends Component {

  render() {

    return (
      <img className='play-button' src={ playico } alt='Play' />
    );

  }
}

export default PlayButton;