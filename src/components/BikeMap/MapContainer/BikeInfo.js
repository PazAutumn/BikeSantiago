import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FaBicycle from 'react-icons/lib/fa/bicycle';
import MdPanoramaVertical from 'react-icons/lib/md/panorama-vertical';
import MdGpsFixed from 'react-icons/lib/md/gps-fixed';

const BikeInfo = () => {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row bottom="xs">
            <Col className='info-icons' xsOffset={8} xs={4}>
              <ul>
                <li><FaBicycle/></li>
                <li><MdPanoramaVertical/></li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }

export default BikeInfo;