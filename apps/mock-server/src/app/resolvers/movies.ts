import { applyPagination } from '../shared/modules/relay';

import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['movies'] = (
  _,
  args
) => {
  return applyPagination(Movies.applyArgs(Mocks.movies, args), args.page);
};

class Movies {
  public static applyArgs(
    data: GraphQLTypes.Movie[],
    args: GraphQLTypes.QueryMoviesArgs
  ): GraphQLTypes.Movie[] {
    return this.applyIds(data, args.ids);
  }
  public static applyIds(
    data: GraphQLTypes.Movie[],
    ids: GraphQLTypes.QueryMoviesArgs['ids']
  ): GraphQLTypes.Movie[] {
    if (!ids) return data;

    return ids.map((id) => data.find((item) => item.id === id));
  }
}
