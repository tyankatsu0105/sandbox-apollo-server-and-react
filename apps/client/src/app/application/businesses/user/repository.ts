import * as GraphQLTypes from '~client/app/application/types/gen/api';
import * as Scalars from '~client/app/application/types/scalars';

import * as Entity from './entity';
import * as Interface from './interface';

export class UserRepository implements Interface.UserRepository {
  constructor(public data: GraphQLTypes.UserQuery) {}

  get toEntityUser(): Entity.User | null {
    if (this.data.node == null) return null;

    return {
      birthDay:
        this.data.node.birthDay != null
          ? new Scalars.ScalarDate(this.data.node.birthDay).getFormattedValue(
              'yyyy-MM-dd'
            )
          : null,
      createdAt: new Scalars.ScalarDateTime(
        this.data.node.createdAt
      ).getFormattedValue('yyyy-MM-dd HH:mm'),
      favorites: {
        books: this.data.node.favorites?.books,
        movies: this.data.node.favorites?.movies,
        musics: this.data.node.favorites?.musics,
      },
      id: new Scalars.ScalarID(this.data.node.id).id,
      name: this.data.node.name,
    };
  }
}

export class UserFavoriteBooksRepository
  implements Interface.UserFavoriteBooksRepository {
  constructor(public data: GraphQLTypes.UserFavoriteBooksQuery) {}

  get toEntityUserFavoriteBooks() {
    if (this.data.books.edges == null) return null;

    return {
      nodes: this.data.books.edges.map((edge) => edge.node),
      pageInfo: this.data.books.pageInfo,
    };
  }
}

export class UserFavoriteMoviesRepository
  implements Interface.UserFavoriteMoviesRepository {
  constructor(public data: GraphQLTypes.UserFavoriteMoviesQuery) {}

  get toEntityUserFavoriteMovies() {
    if (this.data.movies.edges == null) return null;

    return {
      nodes: this.data.movies.edges.map((edge) => edge.node),
      pageInfo: this.data.movies.pageInfo,
    };
  }
}

export class UserFavoriteMusicsRepository
  implements Interface.UserFavoriteMusicsRepository {
  constructor(public data: GraphQLTypes.UserFavoriteMusicsQuery) {}

  get toEntityUserFavoriteMusics() {
    if (this.data.musics.edges == null) return null;

    return {
      nodes: this.data.musics.edges.map((edge) => edge.node),
      pageInfo: this.data.musics.pageInfo,
    };
  }
}
