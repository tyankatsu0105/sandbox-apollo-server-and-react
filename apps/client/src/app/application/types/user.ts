import * as Favorites from './favorites';
import * as Scalars from './scalars';

export type User = {
  readonly birthDay: Scalars.TypeScalarDate;
  readonly createdAt: Scalars.TypeScalarDateTime;
  readonly favorites: Favorites.Favorites;
  readonly id: Scalars.TypeScalarID;
  readonly name: string;
};
