/*
Komponenten ska ha ett textfält där man kan skriva in text,
men varje gång man trycker på en bokstavstangent så ska istället den efterföljande bokstaven läggas till i textfältet.
Z ersätts med A. Exempel: användaren skriver "aqz", textfältet innehåller "bra".
*/

import React, { Component } from 'react';

class CeasarCipher extends Component {
  render() {
    return (
      <div className="CeasarCipher">
        <h3>Kryptering - Caesar cipher</h3>
      </div>
    );
  }
}

export default CeasarCipher;
