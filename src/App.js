import React, { Component } from 'react';
import BikeMap from './components/BikeMap';
import MapContainer from './components/BikeMap/MapContainer';
import './App.css';

class App extends Component {

 render() {

 	
    return(
      <div>
        <BikeMap/>
        <MapContainer/>
      </div>
    )
  }
}
 
export default App;
