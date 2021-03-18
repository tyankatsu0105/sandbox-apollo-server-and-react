import * as GraphQLTypes from '../../types/gen/api';
import * as Mocks from '../../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['user'] = (_, args) => {
  return User.applyArgs(Mocks.users, args);
};

class User {
  public static applyArgs(
    data: GraphQLTypes.User[],
    args: GraphQLTypes.QueryUserArgs
  ): GraphQLTypes.User {
    return this.applyId(data, args.id);
  }

  public static applyId(
    data: GraphQLTypes.User[],
    id: GraphQLTypes.QueryUserArgs['id']
  ): GraphQLTypes.User {
    return data.find((item) => item.id === id);
  }
}
