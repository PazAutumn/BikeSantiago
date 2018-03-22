import React, { Component } from 'react';
import logo from './logo.svg';
import IconBar from './components/BikeMap/MapContainer/IconBar';
import BikeInfo from './components/BikeMap/MapContainer/BikeInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <BikeInfo/>
        <IconBar/>

      </div>
    );
  }
}

export default App;
