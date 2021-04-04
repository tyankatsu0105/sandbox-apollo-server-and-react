import * as React from 'react';
import { Route, Switch } from 'react-router';

import * as RoutesEntity from '~client/app/application/businesses/routes/entity';

import * as Home from './ui/pages/home';
import * as Users from './ui/pages/users';

export const Component = () => (
  <React.Suspense fallback={<div>loading...</div>}>
    <Switch>
      <Route exact component={Home.Component} path={RoutesEntity.URI.home} />
      <Route exact component={Users.Component} path={RoutesEntity.URI.users} />
    </Switch>
  </React.Suspense>
);
