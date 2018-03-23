import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import BikeRouteTrigger from './BikeRouteTrigger';
import IconBar from './IconBar';
import BikeInfo from './BikeInfo';



class MapContainer extends Component {

  render() {
    return (
      <div className="map-container">
        <Row>
          <Col xs={12}>
            <IconBar/>
          </Col>
        </Row>
      </div>
    );
  }
}



export default MapContainer;