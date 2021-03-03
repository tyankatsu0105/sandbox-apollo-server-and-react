import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Users from './users';

export type State = {
  [Users.featureKey]: Users.State;
};

export const reducer = ReduxToolkit.combineReducers<State>({
  [Users.featureKey]: Users.reducer,
});
