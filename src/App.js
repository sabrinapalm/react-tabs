import React, { Component } from 'react';
import './css/App.css';

import Tabs from './components/Tabs.js'
import Login from './components/Login.js'
import LockedTextfield from './components/LockedTextfield.js'
import CeasarCipher from './components/CeasarCipher.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: 'login'
    }
  }
  render() {
    const content = {
      login: <Login />,
      ltf: <LockedTextfield />,
      cc: <CeasarCipher />
    };
    return (
      <div className="App">
        <Tabs
          active={this.state.active}
          onChange={active => this.setState({active})}
        >
        <div key="login">Login</div>
        <div key="ltf">Locked Textfield</div>
        <div key="cc">Ceasar Cipher</div>
        </Tabs>
        <br />
        {content[this.state.active]}
      </div>
    );
  }
}

export default App;
