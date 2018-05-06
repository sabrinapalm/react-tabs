/*
Komponenten ska ha ett textfält där man kan skriva in text,
men varje gång man trycker på en bokstavstangent så ska istället den efterföljande bokstaven läggas till i textfältet.
Z ersätts med A. Exempel: användaren skriver "aqz", textfältet innehåller "bra".
*/

import React, { Component } from 'react';

import '../CeasarCipher.css';

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
    let alphabet = 'abcdefghijklmnopqrstuvwxyzåöä'.split('');
    let currentLetter = event.target.value;

      for (let i = 0; i < alphabet.length; i++) {
        if (currentLetter === alphabet[i]) {
          this.state.strArray.push(alphabet[i + 1]);

          this.state.str = this.state.strArray.join('');
          console.log(this.state.str);
        }
      }
    }


  render() {
    return (
      <div className="CeasarCipher">
        <h3>Kryptering - Caesar cipher</h3>
        <form>
          <textarea value={this.state.str} onChange={this.changeValue} />
      </form>
      <div>
        <span>{this.state.str}</span>
      </div>
      </div>
    );
  }
}

export default CeasarCipher;
