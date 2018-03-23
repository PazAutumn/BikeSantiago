import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PropTypes from 'prop-types';
import BikeRouteTrigger from './MapContainer/BikeRouteTrigger';
import './index.css';

export class BikeMap extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      zoom: 16,
      lat: -33.4720,
      lng: -70.6470
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
    );
  }

  // componentWillReceiveProps(next_props) {
  //   this.setState({
  //     lat: next_props.lat,
  //     lng: next_props.lng
  //   });
  // }

  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
    if (!this.props.loaded) {
      return <div>Cargando...</div>
    }
    return (
      <Map google={this.props.google} zoom={this.state.zoom} style={style}
      initialCenter={{lat: this.state.lat, lng: this.state.lng}}>
        <BikeRouteTrigger/>
      </Map>
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
}) (BikeMap)
