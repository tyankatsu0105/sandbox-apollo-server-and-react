import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['movie'] = (_, args) => {
  return Mocks.movies.find((movie) => movie.id === args.id);
};
