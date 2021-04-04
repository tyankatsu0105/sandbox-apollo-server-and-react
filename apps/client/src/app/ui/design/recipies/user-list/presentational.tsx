import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

import * as RoutesEntity from '~client/app/application/businesses/routes/entity';
import * as Entity from '~client/app/application/businesses/users/entity';
import * as SharedUtilities from '~client/app/ui/shared/utilities';

import * as Components from '../../components';

// ------------------------------------
// Props
// ------------------------------------
type Props = {
  users: Entity.User[];
};

// ------------------------------------
// Component
// ------------------------------------

export const Component = (props: Props) => (
  <>
    {props.users.map((user) => (
      <ReactRouterDOM.Link
        key={user.id}
        to={SharedUtilities.Routes.replaceParams(RoutesEntity.URI.user, {
          userID: user.id,
        })}
      >
        <Components.List.Component>{user.name}</Components.List.Component>
      </ReactRouterDOM.Link>
    ))}
  </>
);
