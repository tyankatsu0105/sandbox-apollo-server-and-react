import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['book'] = (_, args) => {
  return Mocks.books.find((user) => user.id === args.id);
};
