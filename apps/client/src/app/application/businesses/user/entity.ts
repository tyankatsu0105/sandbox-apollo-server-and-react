import * as TypesBook from '~client/app/application/types/book';
import * as Connection from '~client/app/application/types/connection';
import * as TypesMovie from '~client/app/application/types/movie';
import * as TypesMusic from '~client/app/application/types/music';
import * as TypesUser from '~client/app/application/types/user';

export type User = {
  readonly birthDay: TypesUser.User['birthDay'];
  readonly createdAt: TypesUser.User['createdAt'];
  readonly favorites: TypesUser.User['favorites'];
  readonly id: TypesUser.User['id'];
  readonly name: TypesUser.User['name'];
};

export type Book = {
  readonly id: TypesBook.Book['id'];
  readonly name: TypesBook.Book['name'];
};

export type Music = {
  readonly id: TypesMusic.Music['id'];
  readonly name: TypesMusic.Music['name'];
};

export type Movie = {
  readonly id: TypesMovie.Movie['id'];
  readonly name: TypesMovie.Movie['name'];
};

export type Books = {
  nodes: Connection.Nodes<Book>;
  pageInfo: Connection.PageInfo;
};

export type Musics = {
  nodes: Connection.Nodes<Music>;
  pageInfo: Connection.PageInfo;
};

export type Movies = {
  nodes: Connection.Nodes<Movie>;
  pageInfo: Connection.PageInfo;
};
