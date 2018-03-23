import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/lib/Button';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';




class BikeMap extends Component {

  constructor(props) {
      super(props);

      this.state = {
        zoom: 16,
        lat: -33.4720,
        lng: -70.6470
      }
    }

    render() {
      const style = {
        width: '100%',
        height: '100vh',
        display: 'none'
      }
      if (!this.props.loaded) {
        return <div>Cargando...</div>
      }
      return (
        <div className="App">
          <Map google={this.props.google} zoom={this.state.zoom} width="100%" style={style}
            initialCenter={{lat: this.state.lat, lng: this.state.lng}}>
          </Map>
        </div>
      );
    }
  }

      Map.propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object
  }

export default GoogleApiWrapper({
   apiKey: ('AIzaSyBnaDcE_KFlkhqBOoKXfiDhoka59nVx5Ws'),
}) (BikeMap);
