import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import BikeRouteTrigger from './MapContainer/BikeRouteTrigger';
import IconBar from '.../MapContainer/IconBar';
import BikeInfo from './MapContainer/BikeInfo';
import './index.css';


export class BikeMap extends Component {

  render() {
    return (
      <div className="map-container">
        <Row bottom="xs">
          <Col className="map-container" xs={12}>
            <IconBar/>
          </Col>
        </Row>
        <Row bottom="xs">
          <Col className="map-container" xs={12}>
            <BikeRouteTrigger/>
            <BikeInfo/>
          </Col>
        </Row>
      </div>
    );
  }
}



export default BikeMap