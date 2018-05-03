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
      alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'Å', 'Ä', 'Ö'],
      decodedArr: [],
      value: '',
      encrypted: '',

    }
  }

  changeValue = (event) => {
    console.log(event.key)
    //Set to uppercase
    this.setState({value: event.key.toUpperCase()})
    console.log(this.state.value);


    //make value to array

    /*loop trough makeArr compare with alphabet array
    for (let i = 0; i < codeArr.length; i++) {
      if (this.state.alphabet.indexOf(codeArr[i]) === -1) {
        this.state.decodedArr.push(codeArr[i]);
      } else {
        //if alphabet array matched with codeArr letters, push into new array
        for (var j = 0; j < this.state.alphabet.length; j++) {
          if (codeArr[i] === this.state.alphabet[j]) {
            this.state.decodedArr.push(this.state.alphabet[j + 1]);
          }
        }
      }
    }
    this.state.encrypted = this.state.decodedArr.join('')*/
  }

  render() {
    return (
      <div className="CeasarCipher">
        <h3>Kryptering - Caesar cipher</h3>
        <form>
          <textarea value={this.state.value} onKeyPress={this.changeValue.bind(this)} />
      </form>
      </div>
    );
  }
}

export default CeasarCipher;
