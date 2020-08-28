//Dependencies
import React from 'react';
import {NavLink} from 'react-router-dom';
//Internals
import './index.css';

const Header = () => (
  <div className="header">
    <h1 id="header-title">Worship Services</h1>
    <div className="links-header">
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/campo">Culto do Campo</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/Ufadpa">UFADPA</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/Domingo">Culto da Matriz Domingo</NavLink></p>
      <p><NavLink activeClassName="selected" className="nav-link-header" to="/Quarta">Culto da Matriz Quarta feira</NavLink></p>
    </div>
  </div>
)

export default Header;
