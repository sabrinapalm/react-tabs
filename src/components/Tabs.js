/*
Den första komponenten ska vara en "tab component",
alltså en komponent som visar olika innehåll beroende på vilken flik som är vald.
De andra komponenterna ska finnas i olika flikar.
*/

import React, { Component } from 'react';

import Login from './Login.js'
import LockedTextfield from './LockedTextfield.js'
import CeasarCipher from './CeasarCipher.js'

class Tabs extends Component {
  render() {
    return (
      <div className="Tabs">
        <Login />
        <LockedTextfield />
        <CeasarCipher />
      </div>
    );
  }
}

export default Tabs;
