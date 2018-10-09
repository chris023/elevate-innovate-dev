import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import promoVid from '../assets/media/promovid.mp4';
import PlayButton from './PlayButton';
import NavList from './NavList';

import '../styles/BackgroundVideo.css';

class BackgroundVideo extends Component {

  render() {

    return (
      <div>
        <div className='player-wrapper'>
          <ReactPlayer
            url={promoVid}

            className='react-player'

            loop={true}
            muted={true}
            playing={true}
            width='100%'
            height='100%'
          />
        </div>
        <div className='overlay'>
          <NavList />
          <PlayButton />
        </div>
        
      </div>
    );
  }
}

export default BackgroundVideo;
