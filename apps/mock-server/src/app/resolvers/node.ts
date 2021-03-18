import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

const nodes = [
  ...Mocks.users,
  ...Mocks.books,
  ...Mocks.movies,
  ...Mocks.musics,
];

type Nodes = typeof nodes;

export const resolver: GraphQLTypes.Resolvers['Query']['node'] = (_, args) =>
  Node.applyArgs(nodes, args);

class Node {
  public static applyArgs(
    data: Nodes,
    args: GraphQLTypes.QueryNodeArgs
  ): Nodes[number] {
    return this.applyId(data, args.id);
  }

  public static applyId(
    data: Nodes,
    id: GraphQLTypes.QueryNodeArgs['id']
  ): Nodes[number] {
    return data.find((item) => item.id === id);
  }
}
