import * as Mocks from '../../mocks';
import * as Utilities from '../../shared/utilities';
import * as GraphQLTypes from '../../types/gen/api';

export const resolver: GraphQLTypes.QueryResolvers['movie'] = (_, args) => {
  return Movie.applyArgs(Mocks.movies, args);
};

class Movie {
  public static applyArgs(
    data: GraphQLTypes.Movie[],
    args: GraphQLTypes.QueryMovieArgs
  ): Utilities.Maybe<GraphQLTypes.Movie> {
    return this.applyId(data, args.id);
  }

  public static applyId(
    data: GraphQLTypes.Movie[],
    id: GraphQLTypes.QueryMovieArgs['id']
  ): Utilities.Maybe<GraphQLTypes.Movie> {
    const result = data.find((item) => item.id === id);
    if (!result) return null;
    return result;
  }
}
