import * as GraphQLTypes from '../types/gen/api';
import * as Mocks from '../mocks';

const implementedNodeList = [
  ...Mocks.users,
  ...Mocks.books,
  ...Mocks.movies,
  ...Mocks.musics,
];

type ImplementedNodeList = typeof implementedNodeList;

export const resolver: GraphQLTypes.Resolvers['Query']['nodes'] = (_, args) =>
  Nodes.applyArgs(implementedNodeList, args);

class Nodes {
  public static applyArgs(
    data: ImplementedNodeList,
    args: GraphQLTypes.QueryNodesArgs
  ): ImplementedNodeList {
    return this.applyIds(data, args.ids);
  }

  public static applyIds(
    data: ImplementedNodeList,
    ids: GraphQLTypes.QueryNodesArgs['ids']
  ): ImplementedNodeList {
    return ids.map((id) => data.find((item) => item.id === id));
  }
}
