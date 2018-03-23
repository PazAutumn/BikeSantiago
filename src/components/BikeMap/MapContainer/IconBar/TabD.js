import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import {orange500, blue500, white} from 'material-ui/styles/colors';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    fontWeight: 400,
    textAlign: 'center',
    marginTop: 0,
  },
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: orange500,
  },
  floatingLabelStyle: {
    color: orange500,
  },
  floatingLabelFocusStyle: {
    color: blue500,
  },
  bg: {
    backgroundColor: 'white',
    textAlign: 'center',
    width: '100%',
    minHeight: '100vh'
  },
  customWidth: {
    width: 15,
  },
  alingn: {
    textAlign: 'center',
  }
};

export class SelectFieldExampleSimple extends Component {
  state = {
    value: 1,
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Tipo de problema"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Otro" />
          <MenuItem value={2} primaryText="Bicicleta en mal estado" />
          <MenuItem value={3} primaryText="Problemas con la app" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </SelectField>
      </div>
    );
  }
}


const Report = () => (

<div className="report" style={styles.bg}>
  <h2 style={styles.headline}>Reportar un problema</h2>
  <div>
    <SelectFieldExampleSimple/>
    <TextField
      hintText="Styled Hint Text"
      hintStyle={styles.errorStyle}
    /><br />
    <TextField
      hintText="Custom Underline Color"
      underlineStyle={styles.underlineStyle}
    /><br />
    <TextField
      hintText="Custom Underline Focus Color"
      underlineFocusStyle={styles.underlineStyle}
    /><br />
    <TextField
      floatingLabelText="Agregue un comentario"
      floatingLabelStyle={styles.floatingLabelStyle}
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      multiLine={true}
      rows={6}
    /><br/>
  </div>
</div>
);

export default Report;