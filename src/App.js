import React, { Component } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import Us from './components/Us'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className='app-grid-container'>
          <BackgroundVideo />
        </div>
          <Us />
      </div>
    );
  }
}

export default App;
