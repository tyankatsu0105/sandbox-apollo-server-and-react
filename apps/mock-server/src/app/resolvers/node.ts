import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

const implementedNodeList = [
  ...Mocks.users,
  ...Mocks.books,
  ...Mocks.movies,
  ...Mocks.musics,
];

type ImplementedNodeList = typeof implementedNodeList;

export const resolver: GraphQLTypes.Resolvers['Query']['node'] = (_, args) =>
  Node.applyArgs(implementedNodeList, args);

class Node {
  public static applyArgs(
    data: ImplementedNodeList,
    args: GraphQLTypes.QueryNodeArgs
  ): ImplementedNodeList[number] {
    return this.applyId(data, args.id);
  }

  public static applyId(
    data: ImplementedNodeList,
    id: GraphQLTypes.QueryNodeArgs['id']
  ): ImplementedNodeList[number] {
    return data.find((item) => item.id === id);
  }
}
