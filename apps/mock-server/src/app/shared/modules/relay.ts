import { connectionFromArray } from 'graphql-relay';

import * as GraphQLTypes from '../../types/gen/api';

type Edge<Node extends unknown> = {
  cursor: string;
  node: Node;
};

type Connection<Node extends unknown> = {
  edges: Edge<Node>[];
  nodes: Node[];
  pageInfo: GraphQLTypes.PageInfo;
  totalCount: number;
};

export const applyPagination = <Node extends unknown>(
  data: Node[],
  page: GraphQLTypes.PaginationInput
): Connection<Node> => {
  return {
    nodes: connectionFromArray(data, page).edges.map((edge) => edge.node),
    ...connectionFromArray(data, page),
    totalCount: data.length,
  };
};
