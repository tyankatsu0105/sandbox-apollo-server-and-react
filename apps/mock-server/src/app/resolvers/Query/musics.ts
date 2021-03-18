import { applyPagination } from '../../shared/modules/relay';

import * as GraphQLTypes from '../../types/gen/api';
import * as Mocks from '../../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['musics'] = (
  _,
  args
) => {
  return applyPagination(Musics.applyArgs(Mocks.musics, args), args.page);
};

class Musics {
  public static applyArgs(
    data: GraphQLTypes.Music[],
    args: GraphQLTypes.QueryMusicsArgs
  ): GraphQLTypes.Music[] {
    return this.applyIds(data, args.ids);
  }
  public static applyIds(
    data: GraphQLTypes.Music[],
    ids: GraphQLTypes.QueryMusicsArgs['ids']
  ): GraphQLTypes.Music[] {
    if (!ids) return data;

    return ids.map((id) => data.find((item) => item.id === id));
  }
}
