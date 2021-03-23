import * as GraphQLTypes from '../types/gen/api';
import * as Node from './Node/node';
import * as Nodes from './Node/nodes';
import * as Book from './Query/book';
import * as Books from './Query/books';
import * as Movie from './Query/movie';
import * as Movies from './Query/movies';
import * as Music from './Query/music';
import * as Musics from './Query/musics';
import * as User from './Query/user';
import * as Users from './Query/users';

export const resolvers: GraphQLTypes.Resolvers = {
  Edge: {
    __resolveType(parent) {
      switch (parent.__typename) {
        case 'BookConnectionEdge':
          return 'BookConnectionEdge';
        case 'MovieConnectionEdge':
          return 'MovieConnectionEdge';
        case 'MusicConnectionEdge':
          return 'MusicConnectionEdge';
        case 'UserConnectionEdge':
          return 'UserConnectionEdge';

        default:
          return null;
      }
    },
  },
  Node: {
    __resolveType(parent) {
      switch (parent.__typename) {
        case 'User':
          return 'User';
        case 'Book':
          return 'Book';
        case 'Movie':
          return 'Movie';
        case 'Music':
          return 'Music';
        default:
          return null;
      }
    },
  },
  Query: {
    book: Book.resolver,
    books: Books.resolver,

    movie: Movie.resolver,
    movies: Movies.resolver,

    music: Music.resolver,
    musics: Musics.resolver,

    node: Node.resolver,
    nodes: Nodes.resolver,

    user: User.resolver,
    users: Users.resolver,
  },
};
