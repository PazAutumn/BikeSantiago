import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import FaMapMarker from 'react-icons/lib/fa/map-marker';

const Favorites = () =>

<div className="favoritos">
	<MuiThemeProvider>
		<Grid>
			<Row>
				<Col xs={5}>
					<img alt="República" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Bikesantiago_Teatro_Municipal.jpg/200px-Bikesantiago_Teatro_Municipal.jpg"/>
	    	</Col>
	    	<Col xs={7}>
	    		<Row>
	    			<Col xs={12}>
	    				<p> Metro Republica </p>
	    			</Col>
	    		</Row>
	    		<Row end='xs'>
	    			<Col xs={12}>
	    				<FaMapMarker/>
	    			</Col>
	    		</Row>
	    	</Col>
	    </Row>
	    <Divider />
	    	<Row>
				<Col xs={5}>
					<img alt="Salvador" src="http://cdn.plataformaurbana.cl/wp-content/uploads/2015/09/estacion-salvador-bikesantiago-via-facebook-1000x750.jpg"/>
	    	</Col>
	    	<Col xs={7}>
	    		<Row>
	    			<Col xs={12}>
	    				<p> Metro Salvador </p>
	    			</Col>
	    		</Row>
	    		<Row end='xs'>
	    			<Col xs={12}>
	    				<FaMapMarker/>
	    			</Col>
	    		</Row>
	    	</Col>
	    </Row>
	    <Divider />
	    	<Row>
				<Col xs={5}>
					<img alt="Ñuñoa" src="https://lavozdemaipu.cl/wp-content/uploads/2013/10/bikesantiago2.jpg"/>
	    	</Col>
	    	<Col xs={7}>
	    		<Row>
	    			<Col xs={12}>
	    				<p> Plaza Ñuñoa </p>
	    			</Col>
	    		</Row>
	    		<Row end='xs'>
	    			<Col xs={12}>
	    				<FaMapMarker/>
	    			</Col>
	    		</Row>
	    	</Col>
	    </Row>
	    <Divider />
	    	<Row>
				<Col xs={5}>
					<img alt="Maipú" src="https://www.rockandpop.cl/wp-content/uploads/2017/12/BIKESANTIAGO-726x400.jpg"/>
	    	</Col>
	    	<Col xs={7}>
	    		<Row>
	    			<Col xs={12}>
	    				<p> Plaza Maipú </p>
	    			</Col>
	    		</Row>
	    		<Row end='xs'>
	    			<Col xs={12}>
	    				<FaMapMarker/>
	    			</Col>
	    		</Row>
	    	</Col>
	    </Row>
	    <Divider/>
		</Grid>
	</MuiThemeProvider>
</div>

export default Favorites;