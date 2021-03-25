import { ApolloClient, InMemoryCache } from '@apollo/client';
import * as ReduxToolkit from '@reduxjs/toolkit';

import { environment } from '~client/environments/environment';

const cache = new InMemoryCache({});
const client = new ApolloClient({
  cache: cache,
  uri: environment.apiEndpoint,
});

export type ExtraArgument = {
  api: {
    mutate: typeof client.mutate;
    query: typeof client.query;
  };
};

const extraArgument: ExtraArgument = {
  api: {
    mutate: client.mutate,
    query: client.query,
  },
};

export const createMiddleware = () => {
  const middleware = ReduxToolkit.getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: {
      extraArgument,
    },
  });
  return { middleware };
};
