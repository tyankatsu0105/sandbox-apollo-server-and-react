import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Constants from './constants';
import * as Types from './types';

// ==================================================
// Helpers
// ==================================================

// ==================================================
// Setups
// ==================================================

export const initialState: Types.State = {};

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

// ==================================================
// Slice
// ==================================================

const slice = ReduxToolkit.createSlice({
  name,
  initialState: initialState as Types.State,
  reducers: {},
});

export const { actions, reducer } = slice;
