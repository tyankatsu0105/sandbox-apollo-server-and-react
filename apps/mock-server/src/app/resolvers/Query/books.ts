import { applyPagination } from '../../shared/modules/relay';

import * as GraphQLTypes from '../../types/gen/api';
import * as Mocks from '../../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['books'] = (_, args) => {
  return applyPagination(Books.applyArgs(Mocks.books, args), args.page);
};

class Books {
  public static applyArgs(
    data: GraphQLTypes.Book[],
    args: GraphQLTypes.QueryBooksArgs
  ): GraphQLTypes.Book[] {
    return this.applyIds(data, args.ids);
  }
  public static applyIds(
    data: GraphQLTypes.Book[],
    ids: GraphQLTypes.QueryBooksArgs['ids']
  ): GraphQLTypes.Book[] {
    if (!ids) return data;

    return ids.map((id) => data.find((item) => item.id === id));
  }
}