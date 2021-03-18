import * as GraphQLTypes from '../types/gen/api';
import Faker from '../shared/modules/faker';
import * as Utilities from '../shared/utilities';

const music = (): GraphQLTypes.Music => ({
  __typename: 'Music',
  id: Faker.random.uuid(),
  name: Faker.name.title(),
  createdAt: Faker.date.past(2).toISOString(),
  updatedAt: Faker.date.past(1).toISOString(),
  artist: Faker.name.findName(),
  releaseAt: Faker.date.past(1000).toISOString(),
});

export const musics: GraphQLTypes.Music[] = Utilities.createArray(
  Faker.random.number({ min: 200 })
).map(() => music());
