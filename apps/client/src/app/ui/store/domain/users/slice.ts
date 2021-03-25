import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Entity from '~client/app/application/businesses/users/entity';
import * as Status from '~client/app/ui/store/status';

import * as Constants from './constants';
import * as Operations from './operations';
import * as Types from './types';

// ==================================================
// Setups
// ==================================================

export const initialState: Types.State = {
  data: {
    edges: [],
    totalCount: 0,
  },
  status: Status.status.PRISTINE,
};

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

// ==================================================
// Slice
// ==================================================

const slice = ReduxToolkit.createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(Operations.fetchUsers.pending, (state, action) => {
        state.status = Status.status.SUBMITTING;
      })
      .addCase(Operations.fetchUsers.fulfilled, (state, action) => {
        state.status = Status.status.SUCCESS;
        state.data = action.payload;
      })
      .addCase(Operations.fetchUsers.rejected, (state, action) => {
        state.status = Status.status.INVALID;
        if (action.payload) alert(action.payload.message);
      });
  },
  initialState: initialState as Types.State,
  name,
  reducers: {},
});

export const { actions, reducer } = slice;
