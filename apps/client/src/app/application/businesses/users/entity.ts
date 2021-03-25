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

export type Data = {
  readonly edges: Edge[];
  readonly totalCount: number;
};

export class Entity {
  constructor(public data: Data) {}
}
