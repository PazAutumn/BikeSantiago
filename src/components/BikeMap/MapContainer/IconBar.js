import React from 'react';
import {Row,Col} from 'react-flexbox-grid';
import FaHeartO  from 'react-icons/lib/fa/heart-o';
import FaUser from 'react-icons/lib/fa/user';
import FaExclamation from 'react-icons/lib/fa/exclamation';
import MdDirectionsBike from 'react-icons/lib/md/directions-bike';

const IconBar = () => {
    return (

        <Row bottom="xs">
            <Col className='bar-icons' xs={12}>
            <ul>
                <li><FaHeartO/></li>
                <li><MdDirectionsBike/></li>
                <li><FaUser/></li>
                <li><FaExclamation/></li>
            </ul>
            </Col>
        </Row>
    );

};


    






export default IconBar;
