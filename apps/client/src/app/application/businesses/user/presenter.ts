import * as Entity from './entity';

export const isNonNullableBooks = (
  books: NonNullable<NonNullable<Entity.User['favorites']>['books']>
): books is string[] => books.every((v) => v !== null);

export const isNonNullableMovies = (
  movies: NonNullable<NonNullable<Entity.User['favorites']>['movies']>
): movies is string[] => movies.every((v) => v !== null);

export const isNonNullableMusics = (
  musics: NonNullable<NonNullable<Entity.User['favorites']>['musics']>
): musics is string[] => musics.every((v) => v !== null);
