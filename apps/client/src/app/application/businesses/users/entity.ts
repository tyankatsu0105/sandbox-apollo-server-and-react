import * as UtilityTypes from '~client/app/application/shared/utility-types';
import * as TypesUser from '~client/app/application/types/user';

export type User = {
  readonly birthDay: TypesUser.User['birthDay'];
  readonly createdAt: TypesUser.User['createdAt'];
  readonly favorites: TypesUser.User['favorites'];
  readonly id: TypesUser.User['id'];
  readonly name: TypesUser.User['name'];
};

export type Edge = UtilityTypes.PossibleNull<{
  readonly cursor: string;
  readonly node: User;
}>;

export type PageInfo = {
  endCursor: UtilityTypes.Nullable<string>;
  hasNextPage: UtilityTypes.Nullable<boolean>;
  hasPreviousPage: UtilityTypes.Nullable<boolean>;
  startCursor: UtilityTypes.Nullable<string>;
};

export type Data = {
  readonly edges: Edge[];
  readonly pageInfo: PageInfo;
  readonly totalCount: number;
};

export class Entity {
  constructor(public data: Data) {}

  get nodes() {
    return this.data.edges.map((edge) => edge?.node);
  }
}
