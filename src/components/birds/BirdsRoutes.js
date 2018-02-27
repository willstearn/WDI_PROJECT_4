import React from 'react';
import { Switch, Route } from 'react-router-dom';

// 27. import ProtectedRoutes

import BirdsIndex from './BirdsIndex';
// import BirdsShow from  './FoodsShow';
// import BirdsNew from './FoodsNew';
// import BirdsEdit from './FoodsEdit';

const BirdsRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={BirdsIndex} />

    </Switch>
  );
};

export default BirdsRoutes;
