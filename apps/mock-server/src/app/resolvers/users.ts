import { applyPagination } from '../shared/modules/relay';

import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['users'] = (_, args) => {
  return applyPagination(User.applyArgs(Mocks.users, args), args.page);
};

class User {
  public static applyArgs(
    data: GraphQLTypes.User[],
    args: GraphQLTypes.QueryUsersArgs
  ): GraphQLTypes.User[] {
    return this.applyIds(data, args.ids);
  }
  public static applyIds(
    data: GraphQLTypes.User[],
    ids: GraphQLTypes.QueryUsersArgs['ids']
  ): GraphQLTypes.User[] {
    if (!ids) return data;

    return ids.map((id) => data.find((user) => user.id === id));
  }
}
