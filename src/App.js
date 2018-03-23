import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { geolocated } from 'react-geolocated';
import PropTypes from 'prop-types';
import BikeMap from './components/BikeMap';
import IconBar from './components/BikeMap/MapContainer/IconBar';
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


