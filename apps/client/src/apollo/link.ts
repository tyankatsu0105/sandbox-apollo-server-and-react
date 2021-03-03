import { ApolloLink, HttpLink } from '@apollo/client';
import { onError } from '@apollo/link-error';

import { environment } from '../environments/environment';

const httpLink = new HttpLink({ uri: environment.apiEndpoint });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
    },
  }));

  return forward(operation);
});

// @see https://www.apollographql.com/docs/link/links/error/#callback
const errorLink = onError(({ operation, graphQLErrors, networkError }) => {
  if (graphQLErrors) {
  }

  if (networkError) {
  }
});

export const link = ApolloLink.from([authMiddleware, errorLink, httpLink]);
// concat(authMiddleware, httpLink),
