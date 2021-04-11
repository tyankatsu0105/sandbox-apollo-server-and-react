import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Entity from '~client/app/application/businesses/user/entity';
import * as Status from '~client/app/ui/store/status';

import * as Constants from './constants';
import * as Operations from './operations';
import * as Types from './types';

// ==================================================
// Setups
// ==================================================

export const adapter = ReduxToolkit.createEntityAdapter<Entity.Movie>({
  selectId: (movie) => movie.id,
});

export const initialState = adapter.getInitialState<
  Omit<Types.State, 'entities' | 'ids'>
>({
  pageInfo: {},
  status: Status.status.PRISTINE,
});

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

// ==================================================
// Slice
// ==================================================

const slice = ReduxToolkit.createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(Operations.fetchMovies.pending, (state) => {
        state.status = Status.status.SUBMITTING;
      })
      .addCase(Operations.fetchMovies.fulfilled, (state, action) => {
        state.status = Status.status.SUCCESS;
        if (!action.payload) return;

        state.pageInfo = action.payload.pageInfo;
        adapter.addMany(state, action.payload.nodes);
      })
      .addCase(Operations.fetchMovies.rejected, (state, action) => {
        state.status = Status.status.INVALID;
        if (action.payload) alert(action.payload.message);
      });
  },
  initialState,
  name,
  reducers: {},
});

export const { actions, reducer } = slice;
