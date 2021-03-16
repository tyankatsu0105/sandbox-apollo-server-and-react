import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['users'] = (_, args) => {
  return edgeFromArray(Mocks.users, args.page);
};

const edgeFromArray = <Data extends unknown>(
  data: Data[],
  args?: {
    offset?: number;
    limit?: number;
  }
) => {
  const offset = args?.offset || 0;
  const limit = args?.limit || data.length;

  return data.slice(offset, offset + limit);
};
