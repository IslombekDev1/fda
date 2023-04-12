import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Auth from './auth/Auth';
import Product from './product/Product';
import Search from './search/Search';
import Like from './like/Like';
import Basket from './basket/Basket';

const Routes = () => {
  return (
    <Switch>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/like">
        <Like />
      </Route>

      <Route path="/basket">
        <Basket/>
      </Route>

      <Route path="/auth">
        <Auth />
      </Route>

      <Route path="/search/:productName">
        <Search />
      </Route>

      <Route path="/product/:id">
        <Product />
      </Route>

    </Switch>
  );
}

export default Routes;
