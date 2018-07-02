import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './Home';

export default () => (
  <Switch>
    <Route path="/" exact component={Home} />
  </Switch>
);
