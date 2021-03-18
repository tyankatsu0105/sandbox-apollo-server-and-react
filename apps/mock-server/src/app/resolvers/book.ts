import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['book'] = (_, args) => {
  return Book.applyArgs(Mocks.books, args);
};

class Book {
  public static applyArgs(
    data: GraphQLTypes.Book[],
    args: GraphQLTypes.QueryBookArgs
  ): GraphQLTypes.Book {
    return this.applyId(data, args.id);
  }

  public static applyId(
    data: GraphQLTypes.Book[],
    id: GraphQLTypes.QueryBookArgs['id']
  ): GraphQLTypes.Book {
    return data.find((item) => item.id === id);
  }
}
