import * as Entity from '~client/app/application/businesses/users/entity';
import * as GraphQLTypes from '~client/app/application/types/gen/api';
import * as Scalars from '~client/app/application/types/scalars';

export class Users {
  public static toEntityData(data: GraphQLTypes.UsersQuery): Entity.Data {
    const totalCount = data.users.totalCount;

    return {
      edges: data.users.edges.map(this.toEntityDataEdge),
      pageInfo: {
        endCursor: data.users.pageInfo.endCursor,
        hasNextPage: data.users.pageInfo.hasNextPage,
        hasPreviousPage: data.users.pageInfo.hasPreviousPage,
        startCursor: data.users.pageInfo.startCursor,
      },
      totalCount,
    };
  }
  public static toEntityDataEdge(
    edge: GraphQLTypes.UsersQuery['users']['edges'][number]
  ): Entity.Edge {
    if (edge == null) return null;
    return {
      cursor: edge.cursor,
      node: {
        birthDay:
          edge.node.birthDay != null
            ? new Scalars.ScalarDate(edge.node.birthDay).getFormattedValue(
                'yyyy-MM-dd'
              )
            : null,
        createdAt: new Scalars.ScalarDateTime(
          edge.node.createdAt
        ).getFormattedValue('yyyy-MM-dd HH:mm'),
        favorites: {
          books: edge.node.favorites?.books,
          movies: edge.node.favorites?.movies,
          musics: edge.node.favorites?.musics,
        },
        id: new Scalars.ScalarID(edge.node.id).id,
        name: edge.node.name,
      },
    };
  }
}
