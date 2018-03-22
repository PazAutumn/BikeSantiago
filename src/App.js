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
<<<<<<< HEAD
                <BikeMap />
=======
                <BikeMap/>
>>>>>>> 54405e35129edf05f57ed9261d3a08e6ae348b9e
              </Col>
            </Row>
          </Grid>
        </MuiThemeProvider>
      </div>
    );
  }
}

<<<<<<< HEAD
export default App;
=======
export default App;


>>>>>>> 54405e35129edf05f57ed9261d3a08e6ae348b9e
