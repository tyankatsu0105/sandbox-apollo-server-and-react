import * as Mocks from '../../mocks';
import * as Utilities from '../../shared/utilities';
import * as GraphQLTypes from '../../types/gen/api';

export const resolver: GraphQLTypes.QueryResolvers['nodes'] = (_, args) =>
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
    if (!ids) return data;

    const result = ids.map((id) => data.find((item) => item.id === id));
    return Utilities.toNonNullableArray(result);
  }
}
