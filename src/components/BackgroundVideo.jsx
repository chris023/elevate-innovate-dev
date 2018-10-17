import React from 'react';
import ReactPlayer from 'react-player';
import promoVid from '../assets/media/promovid.mp4';
import '../styles/BackgroundVideo.css';

const BackgroundVideo = () => (
  <div className="player-wrapper">
    <ReactPlayer
      url={promoVid}
      className="react-player"
      loop
      muted
      playing
      width="100%"
      height="100%"
    />
  </div>
);

export default BackgroundVideo;
