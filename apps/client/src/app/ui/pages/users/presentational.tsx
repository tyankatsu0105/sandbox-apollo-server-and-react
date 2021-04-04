import * as React from 'react';
import * as ReactRouter from 'react-router';

import * as RoutesEntity from '~client/app/application/businesses/routes/entity';
import * as Entity from '~client/app/application/businesses/users/entity';
import * as Design from '~client/app/ui/design';
import * as SharedTypes from '~client/app/ui/shared/types';
// ------------------------------------
// Props
// ------------------------------------

type Props = {
  routeMatch: ReactRouter.match<
    SharedTypes.Routes.GetParams<typeof RoutesEntity.URI.users>
  >;
  users: Entity.User[];
};

// ------------------------------------
// Component
// ------------------------------------

export const Component = (props: Props) => (
  <>
    <Design.Layouts.Header.Component />
    <p>{JSON.stringify(props.routeMatch, null, 2)}</p>
    <Design.Recipies.UserList.Component users={props.users} />
  </>
);
