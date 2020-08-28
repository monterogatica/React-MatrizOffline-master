//Dependencies
import React, { Component } from 'react';
//Internals
import './styles.css';
import UfadpaItems from './UfadpaItems';

class Ufadpa extends Component {
  render() {
    return(
      <div className="ufadpa">
        <div className="ufadpa-title">
          <h4>UFADPA</h4>
        </div>
        <UfadpaItems />
      </div>
    );
  }
}

export default Ufadpa;
