import * as GraphQLTypes from '../../types/gen/api';
import * as Mocks from '../../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['node'] = (_, args) =>
  Node.applyArgs(Mocks.implementedNodeList, args);

class Node {
  public static applyArgs(
    data: Mocks.ImplementedNodeList,
    args: GraphQLTypes.QueryNodeArgs
  ): Mocks.ImplementedNodeList[number] {
    return this.applyId(data, args.id);
  }

  public static applyId(
    data: Mocks.ImplementedNodeList,
    id: GraphQLTypes.QueryNodeArgs['id']
  ): Mocks.ImplementedNodeList[number] {
    return data.find((item) => item.id === id);
  }
}
