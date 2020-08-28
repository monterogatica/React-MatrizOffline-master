//Dependencies
import React, { Component } from 'react';
//Internals
import './styles.css';
import QuartaItems from './QuartaItems';

class Quarta extends Component {
  render() {
    return(
      <div className="quarta">
        <div className="quarta-title">
          <h4>Culto da Matriz Quarta-Feira</h4>
        </div>
        <QuartaItems />
      </div>
    );
  }
}

export default Quarta;
