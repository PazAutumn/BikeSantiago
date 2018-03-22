import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PropTypes from 'prop-types';
import BikeMap from './components/BikeMap';
import IconBar from './components/BikeMap/MapContainer/IconBar';
import './App.css';

class App extends Component {

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
        <MuiThemeProvider>
          <Grid>
            <Row>
              <Col xs={12}>
                <Map google={this.props.google} zoom={this.state.zoom} width="100%" style={style}
                initialCenter={{lat: this.state.lat, lng: this.state.lng}}/>
                <BikeMap/>
              </Col>
            </Row>
          </Grid>
        </MuiThemeProvider>
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
}) (App);


