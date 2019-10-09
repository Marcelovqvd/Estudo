import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Main from './components/Main';
import Create from './components/Create';
import Update from './components/Update';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Main} />
        <Route path="/post" component={Create} />
        <Route path="/update/:id" component={Update} />
      </Switch>
    </BrowserRouter>
  );
}