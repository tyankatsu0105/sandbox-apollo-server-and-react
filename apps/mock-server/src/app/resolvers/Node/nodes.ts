import * as GraphQLTypes from '../../types/gen/api';
import * as Mocks from '../../mocks';

export const resolver: GraphQLTypes.Resolvers['Query']['nodes'] = (_, args) =>
  Nodes.applyArgs(Mocks.implementedNodeList, args);

class Nodes {
  public static applyArgs(
    data: Mocks.ImplementedNodeList,
    args: GraphQLTypes.QueryNodesArgs
  ): Mocks.ImplementedNodeList {
    return this.applyIds(data, args.ids);
  }

  public static applyIds(
    data: Mocks.ImplementedNodeList,
    ids: GraphQLTypes.QueryNodesArgs['ids']
  ): Mocks.ImplementedNodeList {
    return ids.map((id) => data.find((item) => item.id === id));
  }
}
