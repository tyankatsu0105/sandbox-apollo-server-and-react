import * as GraphQLTypes from '../../types/gen/api';
import * as Mocks from '../../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['music'] = (_, args) => {
  return Music.applyArgs(Mocks.musics, args);
};

class Music {
  public static applyArgs(
    data: GraphQLTypes.Music[],
    args: GraphQLTypes.QueryMusicArgs
  ): GraphQLTypes.Music {
    return this.applyId(data, args.id);
  }

  public static applyId(
    data: GraphQLTypes.Music[],
    id: GraphQLTypes.QueryMusicArgs['id']
  ): GraphQLTypes.Music {
    return data.find((item) => item.id === id);
  }
}
