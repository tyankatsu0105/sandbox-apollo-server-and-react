import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as ReactRouterDom from 'react-router-dom';
import * as ApolloClient from '@apollo/client';

import * as App from './app/app';
import * as Apollo from './apollo';

import { createStore } from './app/ui/store';
const store = createStore();

ReactDom.render(
  <React.StrictMode>
    <ApolloClient.ApolloProvider client={Apollo.client}>
      <ReactRouterDom.BrowserRouter>
        <ReactRedux.Provider store={store}>
          <App.Component />
        </ReactRedux.Provider>
      </ReactRouterDom.BrowserRouter>
    </ApolloClient.ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
