import * as Entity from '~client/app/application/businesses/user/entity';
import * as Status from '~client/app/ui/store/status';

// ==================================================
// State
// ==================================================

export type State = {
  birthDay: Entity.User['birthDay'];
  createdAt: Entity.User['createdAt'];
  favorites: Entity.User['favorites'];
  id: Entity.User['id'];
  name: Entity.User['name'];

  status: Status.Status;
};

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {};
  operation: {
    fetchUser: Entity.User | null;
  };
};
