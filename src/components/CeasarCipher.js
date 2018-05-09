/*
Komponenten ska ha ett textfält där man kan skriva in text,
men varje gång man trycker på en bokstavstangent så ska istället den efterföljande bokstaven läggas till i textfältet.
Z ersätts med A. Exempel: användaren skriver "aqz", textfältet innehåller "bra".
*/

import React, { Component } from 'react';

import '../css/CeasarCipher.css';

class CeasarCipher extends Component {
  constructor() {
    super();
    this.state = {
      str: '',
      newStr: '',
      strArray: [],
    }
  }

  changeValue = (event) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let currentLetter = event.key.toLowerCase();
    let charIndex = alphabet.indexOf(currentLetter);
    let newChar;

    if( currentLetter == 'enter' ) {
      newChar = "\n";
    } else if ( currentLetter.length > 1 ) {
      event.preventDefault();
      return;
    } else if( charIndex === -1 ) {
      newChar = currentLetter;
    } else {
      charIndex = (charIndex + 1) % alphabet.length;
      newChar = alphabet[charIndex];
    }
    this.setState({ str: this.state.str + newChar });
  }


  render() {
    return (
      <div className="CeasarCipher">
        <form>
          <textarea value={this.state.str} onKeyDown={this.changeValue} />
      </form>
      <div>
        <span>{this.state.str}</span>
      </div>
      </div>
    );
  }
}

export default CeasarCipher;
