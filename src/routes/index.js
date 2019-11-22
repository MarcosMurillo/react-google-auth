import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import Login from '../pages/login';
import Main from '../pages/main';
import GoogleAthenticator from '../pages/googleAuthenticator';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute path="/2fa" component={GoogleAthenticator} />
    <PrivateRoute path="/main" component={Main} />
  </Switch>
);

export default Routes;
