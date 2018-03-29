import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import IconBar from './IconBar';




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