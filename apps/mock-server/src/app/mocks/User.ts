import * as GraphQLTypes from '../types/gen/api';
import Faker from '../shared/modules/faker';
import * as Utilities from '../shared/utilities';

export const user = (): GraphQLTypes.User => ({
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
});

export const users: GraphQLTypes.User[] = Utilities.createArray(100).map(() =>
  user()
);
