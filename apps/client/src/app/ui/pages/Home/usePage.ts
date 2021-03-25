import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Operations from '~client/app/ui/store/domain/users/operations';

export const usePage = () => {
  const dispatch = ReactRedux.useDispatch();

  React.useEffect(() => {
    dispatch(Operations.fetchUsers());
  }, [dispatch]);
};
