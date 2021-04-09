import * as Entity from '~client/app/application/businesses/user/entity';
import * as Status from '~client/app/ui/store/status';

import * as Books from './books';

// ==================================================
// State
// ==================================================

export type FeatureState = {
  birthDay: Entity.User['birthDay'];
  createdAt: Entity.User['createdAt'];
  favorites: Entity.User['favorites'];
  id: Entity.User['id'];
  name: Entity.User['name'];

  status: Status.Status;
};

export type State = {
  info: FeatureState;

  [Books.featureKey]: Books.State;
};

// ==================================================
// Payload
// ==================================================

export type Payload = {
  action: {};
  operation: {
    fetchBooks: Entity.Books | null;
    fetchMovies: Entity.Movie[] | null;
    fetchMusics: Entity.Music[] | null;
    fetchUser: Entity.User | null;
  };
};
