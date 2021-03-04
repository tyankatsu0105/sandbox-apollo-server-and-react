import * as GraphQLTypes from '../types/gen/api';
import Faker from '../util/faker';

export const users: GraphQLTypes.User[] = Array.from(new Array(1000)).map(
  () => ({
    __typename: 'User',
    name: Faker.name.firstName(),
    Country: Faker.address.country(),
    age: Faker.random.number(120),
    blood: Faker.random.arrayElement([
      GraphQLTypes.Blood.A,
      GraphQLTypes.Blood.B,
      GraphQLTypes.Blood.O,
      GraphQLTypes.Blood.Ab,
    ]),
    id: Faker.random.uuid(),
  })
);
