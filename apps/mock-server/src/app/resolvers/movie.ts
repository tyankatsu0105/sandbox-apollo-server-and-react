import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['movie'] = (_, args) => {
  return Movie.applyArgs(Mocks.movies, args);
};

class Movie {
  public static applyArgs(
    data: GraphQLTypes.Movie[],
    args: GraphQLTypes.QueryMovieArgs
  ): GraphQLTypes.Movie {
    return this.applyId(data, args.id);
  }

  public static applyId(
    data: GraphQLTypes.Movie[],
    id: GraphQLTypes.QueryMovieArgs['id']
  ): GraphQLTypes.Movie {
    return data.find((item) => item.id === id);
  }
}
