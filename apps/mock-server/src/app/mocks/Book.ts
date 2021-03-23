import Faker from '../shared/modules/faker';
import * as Utilities from '../shared/utilities';
import * as GraphQLTypes from '../types/gen/api';

const book = (): GraphQLTypes.Book => ({
  __typename: 'Book',
  author: `${Faker.name.firstName()} ${Faker.name.middleName()} ${Faker.name.lastName()}`,
  createdAt: Faker.date.past(2).toISOString(),
  id: Faker.random.uuid(),
  name: Faker.name.title(),
  price: {
    __typename: 'Price',
    amount: Number(Faker.finance.amount()),
    symbol: Faker.finance.currencySymbol(),
  },
  releaseAt: Faker.date.past(1000).toISOString(),
  updatedAt: Faker.date.past(1).toISOString(),
});

export const books: GraphQLTypes.Book[] = Utilities.createArray(
  Faker.random.number({ max: 1000, min: 200 })
).map(() => book());
