import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import Login from '../pages/login';
import Main from '../pages/main';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute path="/trailers" component={Main} />
  </Switch>
);

export default Routes;