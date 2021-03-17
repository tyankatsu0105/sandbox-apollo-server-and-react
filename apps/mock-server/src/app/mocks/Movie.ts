import * as GraphQLTypes from '../types/gen/api';
import Faker from '../shared/modules/faker';
import * as Utilities from '../shared/utilities';

const countries = Utilities.createArray(
  Faker.random.number({ min: 10, max: 100 })
).map(() => Faker.address.country());

const movie = (): GraphQLTypes.Movie => ({
  __typename: 'Movie',
  id: Faker.random.uuid(),
  name: Faker.name.title(),
  createdAt: Faker.date.past(2).toISOString(),
  updatedAt: Faker.date.past(1).toISOString(),
  director: `${Faker.name.firstName()} ${Faker.name.middleName()} ${Faker.name.lastName()}`,
  releaseCountry: Faker.random.arrayElements(
    countries,
    Faker.random.number(countries.length)
  ),
  releaseAt: Faker.date.past(1000).toISOString(),
});

export const movies: GraphQLTypes.Movie[] = Utilities.createArray(
  Faker.random.number({ min: 200 })
).map(() => movie());
