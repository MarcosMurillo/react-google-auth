import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './privateRoute';
import Login from '../pages/login';
import Main from '../pages/main';
import GoogleAthenticator from '../pages/googleAuthenticator';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={props =>
        localStorage.secondFactor && localStorage.secondFactor === 'true' ? (
          <Redirect
            to={{ pathname: '/main', state: { from: props.location } }}
          />
        ) : (
          <Login {...props} />
        )
      }
    />
    <Route
      exact
      path="/2fa"
      render={props =>
        localStorage.secondFactor && localStorage.secondFactor === 'true' ? (
          <Redirect
            to={{ pathname: '/main', state: { from: props.location } }}
          />
        ) : (
          <GoogleAthenticator {...props} />
        )
      }
    />

    {/* <Route path="/2fa" component={} /> */}
    <PrivateRoute path="/main" component={Main} />
  </Switch>
);

export default Routes;
