import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['users'] = () => {
  return {
    __typename: 'UserConnection',
    nodes: Mocks.users,
  };
};
