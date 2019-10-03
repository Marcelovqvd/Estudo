import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Home from './components/Home';
import Create from './components/Create';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Main} />
        <Route path="/post" component={Create} />
      </Switch>
    </BrowserRouter>
  );
}