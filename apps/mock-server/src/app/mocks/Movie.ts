import Faker from '../shared/modules/faker';
import * as Utilities from '../shared/utilities';
import * as GraphQLTypes from '../types/gen/api';

const countries = Utilities.createArray(
  Faker.random.number({ max: 100, min: 10 })
).map(() => Faker.address.country());

const movie = (): GraphQLTypes.Movie => ({
  __typename: 'Movie',
  createdAt: Faker.date.past(2).toISOString(),
  director: `${Faker.name.firstName()} ${Faker.name.middleName()} ${Faker.name.lastName()}`,
  id: Faker.random.uuid(),
  name: Faker.name.title(),
  releaseAt: Faker.date.past(1000).toISOString(),
  releaseCountry: Faker.random.arrayElements(
    countries,
    Faker.random.number(countries.length)
  ),
  updatedAt: Faker.date.past(1).toISOString(),
});

export const movies: GraphQLTypes.Movie[] = Utilities.createArray(
  Faker.random.number({ max: 1000, min: 200 })
).map(() => movie());
