import * as React from 'react';
import * as ReactRouter from 'react-router';

import * as RoutesEntity from '~client/app/application/businesses/routes/entity';
import * as SharedTypes from '~client/app/ui/shared/types';

import * as Container from './container';

// ------------------------------------
// Component
// ------------------------------------

const Component = () => {
  const routeMatch = ReactRouter.useRouteMatch<
    SharedTypes.Routes.GetParams<typeof RoutesEntity.URI.users>
  >();

  return <Container.Component routeMatch={routeMatch} />;
};

export default Component;
