import { format } from 'date-fns';

import Faker from '../shared/modules/faker';
import * as Utilities from '../shared/utilities';
import * as GraphQLTypes from '../types/gen/api';
import { books } from './Book';
import { movies } from './Movie';
import { musics } from './Music';

const user = (): GraphQLTypes.User => ({
  __typename: 'User',
  age: Faker.random.number(120),
  birthDay: format(Faker.date.past(100), 'yyyy-MM-dd'),
  blood: Faker.random.arrayElement([
    GraphQLTypes.Blood.A,
    GraphQLTypes.Blood.B,
    GraphQLTypes.Blood.O,
    GraphQLTypes.Blood.Ab,
  ]),
  country: Faker.address.country(),
  createdAt: Faker.date.past(2).toISOString(),
  favorites: {
    __typename: 'Favorites',
    books: Faker.random.arrayElements(books, 10).map(({ id }) => id),
    movies: Faker.random.arrayElements(movies, 10).map(({ id }) => id),
    musics: Faker.random.arrayElements(musics, 10).map(({ id }) => id),
  },
  id: Faker.random.uuid(),
  name: Faker.name.firstName(),
  updatedAt: Faker.date.past(1).toISOString(),
});

export const users: GraphQLTypes.User[] = Utilities.createArray(
  Faker.random.number({ max: 1000, min: 200 })
).map(() => user());
