import * as React from 'react';

import * as Entity from '~client/app/application/businesses/user/entity';

import * as Components from '../../components';

// ------------------------------------
// Props
// ------------------------------------
type Props = {
  user: Entity.User;
};

// ------------------------------------
// Component
// ------------------------------------

export const Component = (props: Props) => (
  <Components.Card.Component>{props.user.createdAt}</Components.Card.Component>
);
