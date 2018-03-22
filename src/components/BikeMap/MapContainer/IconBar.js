import React from 'react';
import {Row,Col} from 'react-flexbox-grid';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaUser from 'react-icons/lib/fa/user';
import FaExclamation from 'react-icons/lib/fa/exclamation';
import MdDirectionsBike from 'react-icons/lib/md/directions-bike';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

const IconBar = () => {
  const styleIcon = {
    backgroundColor: 'orange',
  }
    return (
      <div className="bar-icons">
        <Tabs style={styleIcon}>
          <Tab className="tab-icon" icon={<FaHeartO/>}/>
          <Tab className="tab-icon" icon={<FaUser/>} />
          <Tab className="tab-icon" icon={<FaExclamation/>} />
        </Tabs>
      </div>
  );
}


export default IconBar;