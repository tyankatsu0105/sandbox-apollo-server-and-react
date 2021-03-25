import * as Entity from '~client/app/application/businesses/users/entity';
import * as Status from '~client/app/ui/store/status';

// ==================================================
// State
// ==================================================

export type State = {
  data: Entity.Data;
  status: Status.Status;
};

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {};
  operation: {
    fetchUsers: Entity.Data;
  };
};
