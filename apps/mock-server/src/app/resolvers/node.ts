import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

const nodes = [
  ...Mocks.users,
  ...Mocks.books,
  ...Mocks.movies,
  ...Mocks.musics,
];

export const resolver: GraphQLTypes.Resolvers['Query']['node'] = (_, args) => {
  console.log(args);

  return nodes.find((node) => node.id === args.id);
};
