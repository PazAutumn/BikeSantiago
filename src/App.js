import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BikeMap from './components/BikeMap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Grid>
            <Row>
              <Col xs={12}>
                <BikeMap/>
              </Col>
            </Row>
          </Grid>
        </MuiThemeProvider>
      </div>
      
    );
  }
}

export default App;


