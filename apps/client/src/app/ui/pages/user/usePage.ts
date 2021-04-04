import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Entity from '~client/app/application/businesses/user/entity';
import * as StoreUser from '~client/app/ui/store/domain/user';

// ------------------------------------
// usePage
// ------------------------------------

type UserPageProps = {
  userID: Entity.User['id'];
};
export const usePage = (props: UserPageProps) => {
  const dispatch = ReactRedux.useDispatch();
  const user = ReactRedux.useSelector(StoreUser.userSelector);

  React.useEffect(() => {
    dispatch(StoreUser.fetchUser({ id: props.userID }));
  }, [dispatch, props.userID]);

  return { user };
};
