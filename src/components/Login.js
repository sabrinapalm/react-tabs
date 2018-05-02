/*
Komponenten ska ha ett button-element med texten "login".
Om man klickar på den ska texten ändras, för att visa att användaren blivit inloggad.
Man ska kunna logga ut genom att klicka igen.
*/

import React, { Component } from 'react';

//CSS
const styles = {
  button: {
    backgroundColor: '#58D5D3',
    color: '#FFF',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
    marginTop: '100px',
    fontFamily: 'arial',
    fontSize: '1em'
  }
}

//BUTTON COMPONENT
class Login extends Component {
  constructor() {
    super();
    this.state = {clicked: true}
  }


  render() {
    return (
        <button
        style={styles.button}
        onClick={() => this.setState({clicked: !this.state.clicked})}> {
          this.state.clicked ? 'LOGGA IN' : 'LOGGA UT'
        }
        </button>
    );
  }
}

export default Login;
