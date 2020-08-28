import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import Cart from './components/Cart';
import BaseLayout from './components/BaseLayout';
import Campo from './components/Campo';
import Contato from './components/Contato';
import Quarta from './components/Quarta';
import Ufadpa from './components/Ufadpa';
import Domingo from './components/Domingo';
import ShowProduct from './components/ShowProduct';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/cart" component={Cart} />
        <Route path="/campo" component={Campo}  />
        <Route path="/contato" component={Contato} />
        <Route path="/quarta" component={Quarta}  />
        <Route path="/ufadpa" component={Ufadpa}  />
        <Route path="/domingo" component={Domingo} />
        <Route exact path="/products/:id" component={ShowProduct} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
