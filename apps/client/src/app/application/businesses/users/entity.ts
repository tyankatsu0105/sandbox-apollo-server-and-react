import * as User from '~client/app/application/types/user';

type User = {
  readonly birthDay: User.User['birthDay'];
  readonly createdAt: User.User['createdAt'];
  readonly favorites: User.User['favorites'];
  readonly id: User.User['id'];
  readonly name: User.User['name'];
};

type Data = {
  readonly edges: {
    readonly cursor: string;
    readonly node: User;
  };
  readonly totalCount: number;
};

export class Users {
  constructor(public data: Data) {}
}
