/*
Komponenten ska ha en kryssruta och ett textfält.
Man ska bara kunna skriva i textfältet om kryssrutan är kryssad.
*/

import React, { Component } from 'react';

class LockedTextfield extends Component {
  render() {
    return (
      <div className="LockedTextfield">
        <h3>Låst textfält</h3>

      </div>
    );
  }
}

export default LockedTextfield;
