import * as Mocks from '../../mocks';
import * as Utilities from '../../shared/utilities';
import * as GraphQLTypes from '../../types/gen/api';

export const resolver: GraphQLTypes.QueryResolvers['music'] = (_, args) => {
  return Music.applyArgs(Mocks.musics, args);
};

class Music {
  public static applyArgs(
    data: GraphQLTypes.Music[],
    args: GraphQLTypes.QueryMusicArgs
  ): Utilities.Maybe<GraphQLTypes.Music> {
    return this.applyId(data, args.id);
  }

  public static applyId(
    data: GraphQLTypes.Music[],
    id: GraphQLTypes.QueryMusicArgs['id']
  ): Utilities.Maybe<GraphQLTypes.Music> {
    const result = data.find((item) => item.id === id);
    if (!result) return null;
    return result;
  }
}
