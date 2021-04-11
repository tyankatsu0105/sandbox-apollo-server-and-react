import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Entity from '~client/app/application/businesses/user/entity';
import * as StoreUser from '~client/app/ui/store/domain/user';
import * as StoreUserBooks from '~client/app/ui/store/domain/user/books';
import * as StoreUserMovies from '~client/app/ui/store/domain/user/movies';
import * as StoreUserMusics from '~client/app/ui/store/domain/user/musics';

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
  const musics = ReactRedux.useSelector(StoreUserMusics.allSelector);
  const movies = ReactRedux.useSelector(StoreUserMovies.allSelector);

  React.useEffect(() => {
    dispatch(StoreUser.fetchUser({ id: props.userID }));
  }, [dispatch, props.userID]);

  React.useEffect(() => {
    if (user.favorites.books)
      dispatch(StoreUserBooks.fetchBooks({ ids: user.favorites.books }));
  }, [dispatch, user.favorites.books]);

  React.useEffect(() => {
    if (user.favorites.movies)
      dispatch(StoreUserMovies.fetchMovies({ ids: user.favorites.movies }));
  }, [dispatch, user.favorites.movies]);

  React.useEffect(() => {
    if (user.favorites.musics)
      dispatch(StoreUserMusics.fetchMusics({ ids: user.favorites.musics }));
  }, [dispatch, user.favorites.musics]);

  return { books, movies, musics, user };
};
