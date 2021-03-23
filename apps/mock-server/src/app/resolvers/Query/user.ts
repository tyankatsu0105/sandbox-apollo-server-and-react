import * as Mocks from '../../mocks';
import * as Utilities from '../../shared/utilities';
import * as GraphQLTypes from '../../types/gen/api';

export const resolver: GraphQLTypes.QueryResolvers['user'] = (_, args) => {
  return User.applyArgs(Mocks.users, args);
};

class User {
  public static applyArgs(
    data: GraphQLTypes.User[],
    args: GraphQLTypes.QueryUserArgs
  ): Utilities.Maybe<GraphQLTypes.User> {
    return this.applyId(data, args.id);
  }

  public static applyId(
    data: GraphQLTypes.User[],
    id: GraphQLTypes.QueryUserArgs['id']
  ): Utilities.Maybe<GraphQLTypes.User> {
    const result = data.find((item) => item.id === id);
    if (!result) return null;
    return result;
  }
}
