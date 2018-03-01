import React             from 'react';
import { Route, Switch } from 'react-router-dom';

import Login    from '../auth/Login';
import Register from '../auth/Register';

import BirdsIndex from '../birds/BirdsIndex';
import BirdsShow  from  '../birds/BirdsShow';

import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/" component={BirdsIndex} />
      <ProtectedRoute path="/birds/:id" component={BirdsShow} />
    </Switch>
  );
};

export default Routes;
