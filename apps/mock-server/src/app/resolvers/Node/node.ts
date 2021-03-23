import * as Mocks from '../../mocks';
import * as Utilities from '../../shared/utilities';
import * as GraphQLTypes from '../../types/gen/api';

export const resolver: GraphQLTypes.QueryResolvers['node'] = (_, args) =>
  Node.applyArgs(Mocks.implementedNodeList, args);

class Node {
  public static applyArgs(
    data: Mocks.ImplementedNodeList,
    args: GraphQLTypes.QueryNodeArgs
  ): Utilities.Maybe<Mocks.ImplementedNodeList[number]> {
    return this.applyId(data, args.id);
  }

  public static applyId(
    data: Mocks.ImplementedNodeList,
    id: GraphQLTypes.QueryNodeArgs['id']
  ): Utilities.Maybe<Mocks.ImplementedNodeList[number]> {
    const result = data.find((item) => item.id === id);
    if (!result) return null;
    return result;
  }
}
