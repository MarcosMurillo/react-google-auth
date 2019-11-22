import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import Login from '../pages/login';
import Main from '../pages/main';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    {/* <Route path="/main" component={Main} /> */}
    <PrivateRoute path="/main" component={Main} />
  </Switch>
);

export default Routes;
