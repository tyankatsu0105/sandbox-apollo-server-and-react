import * as GraphQLTypes from '../types/gen/api';

import * as Utilities from '../shared/utilities';

import * as Nodes from './Node/nodes';
import * as Node from './Node/node';

import * as Users from './Query/users';
import * as User from './Query/user';

import * as Books from './Query/books';
import * as Book from './Query/book';

import * as Movies from './Query/movies';
import * as Movie from './Query/movie';

import * as Musics from './Query/musics';
import * as Music from './Query/music';

export const resolvers: GraphQLTypes.Resolvers = {
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
          return Utilities.assertData(parent, () => null);
      }
    },
  } as GraphQLTypes.Resolvers['Node'],
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
          return Utilities.assertData(parent, () => null);
      }
    },
  } as GraphQLTypes.Resolvers['Edge'],
  Query: {
    node: Node.resolver,
    nodes: Nodes.resolver,

    users: Users.resolver,
    user: User.resolver,

    books: Books.resolver,
    book: Book.resolver,

    movies: Movies.resolver,
    movie: Movie.resolver,

    musics: Musics.resolver,
    music: Music.resolver,
  },
};
