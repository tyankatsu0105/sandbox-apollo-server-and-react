import * as React from 'react';
import { Route, Switch } from 'react-router';

import * as Home from './ui/pages/Home';

export const Component = () => (
  <React.Suspense fallback={<div>loading...</div>}>
    <Switch>
      <Route exact path="/" component={Home.Component} />
    </Switch>
  </React.Suspense>
);
