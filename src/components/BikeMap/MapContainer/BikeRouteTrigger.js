import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faBicycle } from '@fortawesome/fontawesome-free-solid';
import './style.css';

class BikeRouteTrigger extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	open: false
    }
	}


  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});


	render() {
		return(
			<MuiThemeProvider>
				<Grid>
					<Row bottom="xs">
						<Col className="trigger" xs={4}>
						<RaisedButton backgroundColor='orange' border-radius='100%' label="" onClick={this.handleToggle}>
							<FontAwesomeIcon color='white' fontSize='20px' icon={faBicycle}/>
						</RaisedButton>
						</Col>
					</Row>
					<Row className="ruta">
						<Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
							<Col xs={12}>
								<h4>¡Traza tu ruta!</h4>
							</Col>
							<MenuItem>
								<p className="text">Origen</p>
								<input type="text" placeholder="Ingresa punto de partida"/>
							</MenuItem>
							<MenuItem>
								<p className="text">Destino</p>
								<input type="text" placeholder="Ingresa punto de destino"/>
							</MenuItem>
							<Col xs={12}>
								<button className="ruta-btn" onClick={this.handleClose}>Trazar ruta</button>
							</Col>
						</Drawer>
					</Row>
				</Grid>
			</MuiThemeProvider>
		)
	}
}


export default BikeRouteTrigger;