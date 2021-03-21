import * as GraphQLTypes from '../types/gen/api';
import Faker from '../shared/modules/faker';
import * as Utilities from '../shared/utilities';

import { books } from './Book';
import { movies } from './Movie';
import { musics } from './Music';

const user = (): GraphQLTypes.User => ({
  __typename: 'User',
  id: Faker.random.uuid(),
  name: Faker.name.firstName(),
  country: Faker.address.country(),
  birthDay: Faker.date.past(100).toISOString(),
  createdAt: Faker.date.past(2).toISOString(),
  updatedAt: Faker.date.past(1).toISOString(),
  age: Faker.random.number(120),
  blood: Faker.random.arrayElement([
    GraphQLTypes.Blood.A,
    GraphQLTypes.Blood.B,
    GraphQLTypes.Blood.O,
    GraphQLTypes.Blood.Ab,
  ]),
  favorites: {
    __typename: 'Favorites',
    books: Faker.random.arrayElements(books, 10).map(({ id }) => id),
    movies: Faker.random.arrayElements(movies, 10).map(({ id }) => id),
    musics: Faker.random.arrayElements(musics, 10).map(({ id }) => id),
  },
});

export const users: GraphQLTypes.User[] = Utilities.createArray(
  Faker.random.number({ min: 200, max: 1000 })
).map(() => user());
