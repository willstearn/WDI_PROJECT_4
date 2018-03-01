import React             from 'react';
import { Route, Switch } from 'react-router-dom';

import Login    from '../auth/Login';
import Register from '../auth/Register';

import BirdsIndex from '../birds/BirdsIndex';
import BirdsShow  from  '../birds/BirdsShow';
import SpotsNew  from  '../spots/SpotsNew';
import SpotsNewIndex  from  '../spots/SpotsNewIndex';


// import SpotsShow  from  '../birds/SpotsShow';

// import ProtectedRoute from './ProtectedRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/" component={BirdsIndex} />
      <Route path="/birds/:id" component={BirdsShow} />
      <Route path="/spots/new/index" component={SpotsNewIndex} />
      <Route path="/spots/new" component={SpotsNew} />

    </Switch>
  );
};

export default Routes;
