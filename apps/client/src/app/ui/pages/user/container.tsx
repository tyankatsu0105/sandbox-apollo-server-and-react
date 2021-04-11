import * as React from 'react';
import * as ReactRouter from 'react-router';

import * as RoutesEntity from '~client/app/application/businesses/routes/entity';
import * as SharedTypes from '~client/app/ui/shared/types';

import * as Presentational from './presentational';
import { usePage } from './usePage';

// ------------------------------------
// Props
// ------------------------------------
type Props = {
  routeMatch: ReactRouter.match<
    SharedTypes.Routes.GetParams<typeof RoutesEntity.URI.user>
  >;
};

// ------------------------------------
// Component
// ------------------------------------

export const Component = (props: Props) => {
  const { books, movies, musics, user } = usePage({
    userID: props.routeMatch.params.userID,
  });

  return (
    <Presentational.Component
      books={books}
      movies={movies}
      musics={musics}
      routeMatch={props.routeMatch}
      user={user}
    />
  );
};
