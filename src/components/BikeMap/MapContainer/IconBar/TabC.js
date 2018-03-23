import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    textAlign: 'center',
    marginTop: 0,
  },
  bg: {
    backgroundColor: 'white',
    textAlign: 'center',
    width: '100%',
    minHeight: '100vh'
  }
};

export const TextFieldExampleSimple = () => (
  <div>
    <TextField
      id="text-field-default"
      defaultValue="Juan Pérez"
      floatingLabelText="Nombre"
    /><br />
    <TextField
      defaultValue="juanperez@gmail.com"
      floatingLabelText="Email"
    /><br />
    <TextField
      defaultValue="1234567"
      floatingLabelText="Contraseña"
      type="password"
    /><br />
  </div>
);

export const FlatButtonExampleSimple = () => (
  <div>
    <FlatButton label="Guardar cambios" />
  </div>
);

const User = () =>

<div className="user" style={styles.bg}>
  <h2 style={styles.headline}>Mi perfil</h2>
  <TextFieldExampleSimple/>
  <FlatButtonExampleSimple/>
</div>

export default User;
