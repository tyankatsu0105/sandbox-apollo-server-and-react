import * as Favorites from './favorites';
import * as Scalars from './scalars';

export type User = {
  readonly birthDay: Scalars.Date;
  readonly createdAt: Scalars.DateTime;
  readonly favorites: Favorites.Favorites;
  readonly id: Scalars.ID;
  readonly name: string;
};
