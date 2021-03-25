import * as UtilityTypes from '~client/app/application/shared/utility-types';

import * as Favorites from './favorites';
import * as Scalars from './scalars';

export type User = {
  readonly birthDay: UtilityTypes.Nullable<Scalars.TypeScalarDate>;
  readonly createdAt: Scalars.TypeScalarDateTime;
  readonly favorites: UtilityTypes.Nullable<Favorites.Favorites>;
  readonly id: Scalars.TypeScalarID;
  readonly name: string;
};
