import * as ReduxToolkit from '@reduxjs/toolkit';

import * as User from './user';
import * as Users from './users';

export type State = {
  [User.featureKey]: User.State;
  [Users.featureKey]: Users.State;
};

export const reducer = ReduxToolkit.combineReducers<State>({
  [User.featureKey]: User.reducer,
  [Users.featureKey]: Users.reducer,
});
