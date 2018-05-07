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
    //turn alphabet string to array
    let alphabet = 'abcdefghijklmnopqrstuvwxyzåöä'.split('');
    let currentLetter = event.key;

      for (let i = 0; i < alphabet.length; i++) {
        //check spacebutton
        if (currentLetter === ' ') {
          this.state.strArray.push(' ')
        }

        //if it's a letter, compare with alphabet array, add 1 if so
        if (currentLetter === alphabet[i]) {
          this.state.strArray.push(alphabet[i + 1]);

          //turn array to string
          this.state.str = this.state.strArray.join('');

          //store the value, then setstate
          const value = this.state.str;
          this.setState({str: value})

        }
      }
    }


  render() {
    return (
      <div className="CeasarCipher">
        <form>
          <textarea value={this.state.str} onKeyPress={this.changeValue} />
      </form>
      <div>
        <span>{this.state.str}</span>
      </div>
      </div>
    );
  }
}

export default CeasarCipher;
