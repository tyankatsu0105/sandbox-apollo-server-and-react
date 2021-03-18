import { applyPagination } from '../shared/modules/relay';

import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['nodes'] = (
  parent,
  args,
  context
) => {
  console.log('parent', parent);
  console.log('args', args);
  console.log('context', context);

  return [];
};
