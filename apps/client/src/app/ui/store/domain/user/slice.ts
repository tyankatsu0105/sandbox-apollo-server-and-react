import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Status from '~client/app/ui/store/status';

import * as Books from './books';
import * as Constants from './constants';
import * as Movies from './movies';
import * as Musics from './musics';
import * as Operations from './operations';
import * as Types from './types';

// ==================================================
// Setups
// ==================================================

export const initialState: Types.FeatureState = {
  birthDay: '',
  createdAt: '',
  favorites: {
    books: [],
    movies: [],
    musics: [],
  },
  id: '',
  name: '',
  status: Status.status.PRISTINE,
};

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

// ==================================================
// Slice
// ==================================================

const slice = ReduxToolkit.createSlice({
  extraReducers: (builder) => {
    builder
      .addCase(Operations.fetchUser.pending, (state, action) => {
        state.status = Status.status.SUBMITTING;
      })
      .addCase(Operations.fetchUser.fulfilled, (state, action) => {
        state.status = Status.status.SUCCESS;
        if (!action.payload) return;

        state.id = action.payload.id;
        state.name = action.payload.name;
        state.birthDay = action.payload.birthDay;
        state.createdAt = action.payload.createdAt;
        state.favorites = action.payload.favorites;
      })
      .addCase(Operations.fetchUser.rejected, (state, action) => {
        state.status = Status.status.INVALID;
        if (action.payload) alert(action.payload.message);
      });
  },
  initialState: initialState as Types.FeatureState,
  name,
  reducers: {},
});

export const { actions } = slice;

export const reducer = ReduxToolkit.combineReducers({
  books: Books.reducer,
  info: slice.reducer,
  movies: Movies.reducer,
  musics: Musics.reducer,
});
