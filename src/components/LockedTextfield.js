/*
Komponenten ska ha en kryssruta och ett textfält.
Man ska bara kunna skriva i textfältet om kryssrutan är kryssad.
*/

import React, { Component } from 'react';

class LockedTextfield extends Component {
  render() {
    return (
      <div className="LockedTextfield">
        <p>Låst textfält</p>
      </div>
    );
  }
}

export default LockedTextfield;
