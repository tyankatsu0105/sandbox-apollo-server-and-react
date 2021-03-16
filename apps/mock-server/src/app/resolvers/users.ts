import { connectionFromArray } from 'graphql-relay';

import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['users'] = (_, args) => {
  return {
    nodes: connectionFromArray(Mocks.users, args.page).edges.map(
      (edge) => edge.node
    ),
    ...connectionFromArray(Mocks.users, args.page),
    totalCount: Mocks.users.length,
  };
};
