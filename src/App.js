import React, { Component } from 'react';
import BikeMap from './components/BikeMap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BikeMap>
          <div><h1>hola</h1></div>
        </BikeMap>
      </div>
    );
  }
}

export default App;
