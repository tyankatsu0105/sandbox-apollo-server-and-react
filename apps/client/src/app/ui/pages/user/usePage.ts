import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Entity from '~client/app/application/businesses/user/entity';
import * as Presenter from '~client/app/application/businesses/user/presenter';
import * as StoreUser from '~client/app/ui/store/domain/user';
import * as StoreUserBooks from '~client/app/ui/store/domain/user/books';

// ------------------------------------
// usePage
// ------------------------------------

type UserPageProps = {
  userID: Entity.User['id'];
};
export const usePage = (props: UserPageProps) => {
  const dispatch = ReactRedux.useDispatch();
  const user = ReactRedux.useSelector(StoreUser.userSelector);
  const books = ReactRedux.useSelector(StoreUserBooks.allSelector);

  React.useEffect(() => {
    dispatch(StoreUser.fetchUser({ id: props.userID }));

    if (
      user.favorites?.books &&
      Presenter.isNonNullableBooks(user.favorites.books)
    )
      dispatch(StoreUserBooks.fetchBooks({ ids: user.favorites.books }));
  }, [dispatch, props.userID, user.favorites?.books]);

  return { books, user };
};
