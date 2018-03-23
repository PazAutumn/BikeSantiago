import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import BikeRouteTrigger from './BikeRouteTrigger';
import IconBar from './IconBar';
import BikeInfo from './BikeInfo';



class MapContainer extends Component {

  render() {
    return (
      <div className="map-container">
        <Row bottom="xs">
          <Col xs={12}>
            <IconBar/>
            <BikeRouteTrigger/>
          </Col>
        </Row>
      </div>
    );
  }
}



export default MapContainer;