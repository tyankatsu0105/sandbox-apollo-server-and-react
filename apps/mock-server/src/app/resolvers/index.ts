import * as GraphQLTypes from '../types/gen/api';

import * as Users from './users';
import * as User from './user';

import * as Books from './books';
import * as Book from './book';

import * as Movies from './movies';
import * as Movie from './movie';

export const resolvers: GraphQLTypes.Resolvers = {
  Query: {
    users: Users.resolver,
    user: User.resolver,

    books: Books.resolver,
    book: Book.resolver,

    movies: Movies.resolver,
    movie: Movie.resolver,
  },
};
