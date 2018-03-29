import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';




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
          <Map google={this.props.google} zoom={this.state.zoom} style={style}
            initialCenter={{lat: this.state.lat, lng: this.state.lng}}>
            <Marker onClick={this.onMarkerClick} name={'Current location'} />
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
