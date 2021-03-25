import * as UtilityTypes from '~client/app/application/shared/utility-types';

import * as Scalars from './scalars';

export type Favorites = {
  readonly books: UtilityTypes.Nullable<
    UtilityTypes.PossibleNull<Scalars.TypeScalarID>[]
  >;
  readonly movies: UtilityTypes.Nullable<
    UtilityTypes.PossibleNull<Scalars.TypeScalarID>[]
  >;
  readonly musics: UtilityTypes.Nullable<
    UtilityTypes.PossibleNull<Scalars.TypeScalarID>[]
  >;
};
