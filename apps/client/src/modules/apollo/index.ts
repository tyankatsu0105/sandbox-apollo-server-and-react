import * as ApolloClient from '@apollo/client';

import { link } from './link';

const cache = new ApolloClient.InMemoryCache();

const defaultOptions: ApolloClient.DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
};

export const client = new ApolloClient.ApolloClient({
  cache,
  link,
  defaultOptions,
});
