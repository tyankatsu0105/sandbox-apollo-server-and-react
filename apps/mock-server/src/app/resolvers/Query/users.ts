import * as Mocks from '../../mocks';
import { applyPagination } from '../../shared/modules/relay';
import * as Utilities from '../../shared/utilities';
import * as GraphQLTypes from '../../types/gen/api';

export const resolver: GraphQLTypes.QueryResolvers['users'] = (_, args) => {
  return applyPagination(Users.applyArgs(Mocks.users, args), args.page);
};

class Users {
  public static applyArgs(
    data: GraphQLTypes.User[],
    args: GraphQLTypes.RequireFields<GraphQLTypes.QueryUsersArgs, 'page'>
  ): GraphQLTypes.User[] {
    return this.applyIds(data, args.ids);
  }
  public static applyIds(
    data: GraphQLTypes.User[],
    ids?: GraphQLTypes.QueryUsersArgs['ids']
  ): GraphQLTypes.User[] {
    if (!ids) return data;

    const result = ids.map((id) => data.find((item) => item.id === id));
    return Utilities.toNonNullableArray(result);
  }
}
