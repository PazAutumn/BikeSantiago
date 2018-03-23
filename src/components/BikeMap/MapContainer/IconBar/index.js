import React, {Component} from 'react';
import {Row,Col} from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import FaUser from 'react-icons/lib/fa/user';
import FaExclamation from 'react-icons/lib/fa/exclamation';
import MdDirectionsBike from 'react-icons/lib/md/directions-bike';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import BikeRouteTrigger from './../BikeRouteTrigger';
import BikeInfo from './../BikeInfo';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import Favorites from './TabA';
import User from './TabC';
import Report from './TabD';

  const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class IconBar extends Component {

    constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

handleChange = (value) => {
    this.setState({
      value: value,
    })
  }

  render(){

    const style = {
      backgroundColor: 'orange',
    }

    return (
      <div className="bar-icons">
        <MuiThemeProvider>
          <Tabs value={this.state.value} onChange={this.handleChange}>
            <Tab style={style} icon={<FaMapMarker/>} value="a">
              <Row middle="xs">
                <Col xs={12}>
                  <BikeRouteTrigger/>
                </Col>
              </Row>
              <Row center='xs'>
                <Col xs={12}>
                  <BikeInfo/>
                </Col>
              </Row>
            </Tab>
            <Tab style={style} icon={<FaHeartO/>} value="b">
              <div>
                <Favorites/>
              </div>
            </Tab>
            <Tab style={style} icon={<FaUser/>} value="c">
              <div>
                <User/>
              </div>
            </Tab>
            <Tab style={style} icon={<FaExclamation/>} value="d">
              <div>
                <Report/>
              </div>
            </Tab>
          </Tabs>
        </MuiThemeProvider>
      </div>
    );
  }
}


export default IconBar;
