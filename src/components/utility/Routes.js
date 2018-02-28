import React             from 'react';
import { Route, Switch } from 'react-router-dom';

import BirdsIndex from '../birds/BirdsIndex';
import BirdsShow  from  '../birds/BirdsShow';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={BirdsIndex} />
      <Route path="/birds/:id" component={BirdsShow} />
    </Switch>
  );
};

export default Routes;
