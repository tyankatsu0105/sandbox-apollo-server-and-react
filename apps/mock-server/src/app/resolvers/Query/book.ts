import * as Mocks from '../../mocks';
import * as Utilities from '../../shared/utilities';
import * as GraphQLTypes from '../../types/gen/api';

export const resolver: GraphQLTypes.QueryResolvers['book'] = (_, args) => {
  return Book.applyArgs(Mocks.books, args);
};

class Book {
  public static applyArgs(
    data: GraphQLTypes.Book[],
    args: GraphQLTypes.QueryBookArgs
  ): Utilities.Maybe<GraphQLTypes.Book> {
    return this.applyId(data, args.id);
  }

  public static applyId(
    data: GraphQLTypes.Book[],
    id: GraphQLTypes.QueryBookArgs['id']
  ): Utilities.Maybe<GraphQLTypes.Book> {
    const result = data.find((item) => item.id === id);
    if (!result) return null;
    return result;
  }
}
