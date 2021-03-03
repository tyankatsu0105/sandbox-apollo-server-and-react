import * as ReactRedux from 'react-redux';
import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Reducer from './reducer';
import * as Middleware from './middleware';

export const createStore = () => {
  const { reducer } = Reducer.createReducer();
  const { middleware } = Middleware.createMiddleware();

  return ReduxToolkit.configureStore({
    reducer,
    middleware,
  });
};

// ==================================================
// types
// ==================================================

export type RootState = ReturnType<ReturnType<typeof createStore>['getState']>;

/**
 * Override type AsyncThunkConfig of ReduxToolkit
 * @see https://github.com/reduxjs/redux-toolkit/blob/de1282c1ec7eb8db1590a60c55f0ec21004b8675/src/createAsyncThunk.ts#L65-L70
 */
export type AsyncThunkConfig<RejectValue = unknown> = {
  state: RootState;
  dispatch: ReturnType<typeof createStore>['dispatch'];
  extra: Middleware.ExtraArgument;
  rejectValue: RejectValue;
};

// ==================================================
// hooks override
// ==================================================
export const useSelector: ReactRedux.TypedUseSelectorHook<RootState> =
  ReactRedux.useSelector;
