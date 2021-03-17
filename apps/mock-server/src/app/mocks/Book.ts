import * as GraphQLTypes from '../types/gen/api';
import Faker from '../shared/modules/faker';
import * as Utilities from '../shared/utilities';

const book = (): GraphQLTypes.Book => ({
  __typename: 'Book',
  id: Faker.random.uuid(),
  name: Faker.name.title(),
  createdAt: Faker.date.past(2).toISOString(),
  updatedAt: Faker.date.past(1).toISOString(),
  price: {
    __typename: 'Price',
    amount: Number(Faker.finance.amount()),
    symbol: Faker.finance.currencySymbol(),
  },
  author: `${Faker.name.firstName()} ${Faker.name.middleName()} ${Faker.name.lastName()}`,
  releaseAt: Faker.date.past(1000).toISOString(),
});

export const books: GraphQLTypes.Book[] = Utilities.createArray(
  Faker.random.number({ min: 200 })
).map(() => book());
