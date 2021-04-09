import * as Entity from '../entity';

export interface UserRepository {
  toEntityUser: Entity.User | null;
}

export interface UserFavoriteBooksRepository {
  toEntityUserFavoriteBooks: Entity.Books | null;
}

export interface UserFavoriteMoviesRepository {
  toEntityUserFavoriteMovies: Entity.Movies | null;
}

export interface UserFavoriteMusicsRepository {
  toEntityUserFavoriteMusics: Entity.Musics | null;
}
