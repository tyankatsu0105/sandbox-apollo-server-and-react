import * as TypesUser from '~client/app/application/types/user';

export type User = {
  readonly birthDay: TypesUser.User['birthDay'];
  readonly createdAt: TypesUser.User['createdAt'];
  readonly favorites: TypesUser.User['favorites'];
  readonly id: TypesUser.User['id'];
  readonly name: TypesUser.User['name'];
};
