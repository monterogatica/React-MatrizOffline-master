//Dependencies
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import find from 'lodash/find';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
//Internals
import PRODUCTS from '../Data';
import './index.css';
import ResponsivePlayer from './ResponsivePlayer';

class ShowProduct extends Component {
  render () {
    const product = find(PRODUCTS, ['id', parseInt(this.props.match.params.id)]);
    const currentProduct = product;
    return (
      <div className="show-product">
        <div className="item-wrapper">
      
          
          <div className="item-name">
           
            <div className="product-bio">
              <p id="product-description">{currentProduct.price}</p>
              <ResponsivePlayer  url={currentProduct.type}/>     
              <p id="product-price">Data:{currentProduct.price}</p>
              <Icon small id="add-icon">add_shopping_cart</Icon>
            </div>
           
          </div>
        </div>
       
      </div>
    );
  }
}

export default ShowProduct;
