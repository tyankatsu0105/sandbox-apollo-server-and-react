import * as GraphQLTypes from '../types/gen/api';

import * as Utilities from '../shared/utilities';

import * as Nodes from './nodes';
import * as Node from './node';

import * as Users from './users';
import * as User from './user';

import * as Books from './books';
import * as Book from './book';

import * as Movies from './movies';
import * as Movie from './movie';

import * as Musics from './musics';
import * as Music from './music';

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
