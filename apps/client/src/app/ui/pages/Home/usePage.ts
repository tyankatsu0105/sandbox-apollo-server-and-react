import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as StoreUsers from '~client/app/ui/store/domain/users';

export const usePage = () => {
  const dispatch = ReactRedux.useDispatch();
  const hoge = ReactRedux.useSelector(StoreUsers.entitiesSelector);
  console.log(hoge);

  React.useEffect(() => {
    dispatch(StoreUsers.fetchUsers());
  }, [dispatch]);
};
