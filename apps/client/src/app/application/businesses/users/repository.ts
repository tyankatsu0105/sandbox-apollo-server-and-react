import * as GraphQLTypes from '~client/app/application/types/gen/api';
import * as Scalars from '~client/app/application/types/scalars';

import * as Entity from './entity';
import * as Interface from './interface';

export class UsersRepository implements Interface.UsersRepository {
  constructor(public data: GraphQLTypes.UsersQuery) {}

  get toEntityUsers(): Entity.User[] | null {
    if (this.data.users.edges == null) return null;

    return this.data.users.edges.map((edge) => {
      return {
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
      };
    });
  }
}
