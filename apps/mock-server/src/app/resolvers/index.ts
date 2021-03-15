import * as GraphQLTypes from '../types/gen/api';
import * as Users from './users';

export const resolvers: GraphQLTypes.Resolvers = {
  Query: {
    users: Users.resolver,
  },
};
