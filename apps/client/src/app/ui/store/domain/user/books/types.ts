import * as Entity from '~client/app/application/businesses/user/entity';
import * as UtilityTypes from '~client/app/application/shared/utility-types';
import * as Connection from '~client/app/application/types/connection';
import * as Status from '~client/app/ui/store/status';

// ==================================================
// State
// ==================================================

export type State = UtilityTypes.Entities<Entity.Book> & {
  pageInfo: Connection.PageInfo;
  status: Status.Status;
};

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {};
  operation: {
    fetchBooks: Entity.Books | null;
  };
};
