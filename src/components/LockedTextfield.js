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
        <input id="name" type="checkbox" onChange={this.makeEdit} />
        <label htmlFor="name">Name</label>

          <input type="text" disabled={this.state.disabled} />

      </div>
    );
  }
}

export default LockedTextfield;
