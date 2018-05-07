/*
Komponenten ska ha en kryssruta och ett textfält.
Man ska bara kunna skriva i textfältet om kryssrutan är kryssad.
*/

import React, { Component } from 'react';

class LockedTextfield extends Component {
  constructor(){
    super();
    this.state = {
      disabled: true
    }
  }

  makeEdit = (event) => {
    if (event.target.checked === true) {
      this.setState({disabled: false})
    } else {
      this.setState({disabled: true})
    }
  }

  render() {
    return (
      <div className="LockedTextfield">
        <input type="checkbox" onChange={this.makeEdit} />
        <label htmlFor="name">Name</label>
        <form>
          <input type="text" name="name" disabled={this.state.disabled} />
        </form>
      </div>
    );
  }
}

export default LockedTextfield;
