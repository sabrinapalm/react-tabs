/*
Komponenten ska ha ett button-element med texten "login".
Om man klickar på den ska texten ändras, för att visa att användaren blivit inloggad.
Man ska kunna logga ut genom att klicka igen.
*/

import React, { Component } from 'react';

//CSS
const styles = {
  button: {
    backgroundColor: '#333',
    color: '#FFF',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
    fontFamily: 'arial',
    fontSize: '1em',
    outline: 'none',
    width: '180px',
  }
}

//BUTTON COMPONENT
class Login extends Component {
  constructor() {
    super();
    this.state = {
      clicked: true
    }
  }


  render() {
    return (
      <div>
        <h3>Login</h3>
        <button
        style={styles.button}
        onClick={() => this.setState({clicked: !this.state.clicked})}> {
          this.state.clicked ? 'LOG IN' : 'LOG OUT'
        }
        </button>
        </div>
    );
  }
}

export default Login;
