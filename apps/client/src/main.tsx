import 'minireset.css';

import * as ApolloClient from '@apollo/client';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as ReactRouterDom from 'react-router-dom';

import * as App from './app/app';
import { createStore } from './app/ui/store';
import { ErrorBoundary } from './ErrorBoundary';
import * as Modules from './modules';
const store = createStore();

ReactDom.render(
  <ErrorBoundary>
    <React.StrictMode>
      <ApolloClient.ApolloProvider client={Modules.Apollo.client}>
        <ReactRouterDom.BrowserRouter>
          <ReactRedux.Provider store={store}>
            <App.Component />
          </ReactRedux.Provider>
        </ReactRouterDom.BrowserRouter>
      </ApolloClient.ApolloProvider>
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById('root')
);
