import * as Mocks from '../../mocks';
import { applyPagination } from '../../shared/modules/relay';
import * as Utilities from '../../shared/utilities';
import * as GraphQLTypes from '../../types/gen/api';

export const resolver: GraphQLTypes.QueryResolvers['movies'] = (_, args) => {
  return applyPagination(Movies.applyArgs(Mocks.movies, args), args.page);
};

class Movies {
  public static applyArgs(
    data: GraphQLTypes.Movie[],
    args: GraphQLTypes.RequireFields<GraphQLTypes.QueryMoviesArgs, 'page'>
  ): GraphQLTypes.Movie[] {
    return this.applyIds(data, args.ids);
  }
  public static applyIds(
    data: GraphQLTypes.Movie[],
    ids?: GraphQLTypes.QueryMoviesArgs['ids']
  ): GraphQLTypes.Movie[] {
    if (!ids) return data;

    const result = ids.map((id) => data.find((item) => item.id === id));
    return Utilities.toNonNullableArray(result);
  }
}
