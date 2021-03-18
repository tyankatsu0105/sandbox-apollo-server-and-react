import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['music'] = (_, args) => {
  return Mocks.musics.find((music) => music.id === args.id);
};
