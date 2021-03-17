import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['user'] = (_, args) => {
  return Mocks.users.find((user) => user.id === args.id);
};
