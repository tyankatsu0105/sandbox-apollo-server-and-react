import * as GraphQLTypes from './types/gen/api';
import * as Mocks from './mocks';

export const resolvers = {
  Query: {
    users: () => Mocks.users,
    user: (_, args) => Mocks.users.find((user) => user.id === args.id),
  } as GraphQLTypes.Resolvers['Query'],
};
