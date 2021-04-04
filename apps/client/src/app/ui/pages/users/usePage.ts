import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as StoreUsers from '~client/app/ui/store/domain/users';

// ------------------------------------
// usePage
// ------------------------------------

export const usePage = () => {
  const dispatch = ReactRedux.useDispatch();
  const users = ReactRedux.useSelector(StoreUsers.allSelector);

  React.useEffect(() => {
    dispatch(StoreUsers.fetchUsers());
  }, [dispatch]);

  return { users };
};
