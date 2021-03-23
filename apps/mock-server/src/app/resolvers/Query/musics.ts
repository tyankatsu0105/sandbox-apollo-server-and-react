import * as Mocks from '../../mocks';
import { applyPagination } from '../../shared/modules/relay';
import * as Utilities from '../../shared/utilities';
import * as GraphQLTypes from '../../types/gen/api';

export const resolver: GraphQLTypes.QueryResolvers['musics'] = (_, args) => {
  return applyPagination(Musics.applyArgs(Mocks.musics, args), args.page);
};

class Musics {
  public static applyArgs(
    data: GraphQLTypes.Music[],
    args: GraphQLTypes.RequireFields<GraphQLTypes.QueryMusicsArgs, 'page'>
  ): GraphQLTypes.Music[] {
    return this.applyIds(data, args.ids);
  }
  public static applyIds(
    data: GraphQLTypes.Music[],
    ids?: GraphQLTypes.QueryMusicsArgs['ids']
  ): GraphQLTypes.Music[] {
    if (!ids) return data;

    const result = ids.map((id) => data.find((item) => item.id === id));
    return Utilities.toNonNullableArray(result);
  }
}
