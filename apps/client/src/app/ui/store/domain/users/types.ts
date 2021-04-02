import * as Entity from '~client/app/application/businesses/users/entity';
import * as UtilityTypes from '~client/app/application/shared/utility-types';
import * as Connection from '~client/app/application/types/connection';
import * as Status from '~client/app/ui/store/status';

// ==================================================
// State
// ==================================================

export type State = {
  entities: UtilityTypes.Entities<Entity.User>['entities'];
  ids: UtilityTypes.Entities<Entity.User>['ids'];
  status: Status.Status;
  totalCount: Connection.TotalCount;
};

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {};
  operation: {
    fetchUsers: Entity.User[] | null;
  };
};
