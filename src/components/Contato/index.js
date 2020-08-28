//Dependencies
import React from 'react';
//Internals
import MenItems from './MenItems';
import './index.css';

const Contato = () => (
  <div className="Contacts-details">
    <div className="contato-title">
      <h4>Assembly of God</h4>
  
       <div className="card-image waves-effect waves-block waves-light">
         <img className="activator" src="/cultomatriz5.png?w=1260&h=750&auto=compress&cs=tinysrgb"></img>
       </div>
       <div className="card-content">
         <span className="card-title activator grey-text text-darken-4">Email<i className="material-icons right">more_vert</i></span>
         <p><a href="#">Email:x@church.com.br</a></p>
       </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4"> Telefone<i className="material-icons right">close</i></span>
        <p><a href="#">+55 xx xxxx-xxxx</a></p>
      </div>
    </div>              
    
   </div>
);


export default Contato;
