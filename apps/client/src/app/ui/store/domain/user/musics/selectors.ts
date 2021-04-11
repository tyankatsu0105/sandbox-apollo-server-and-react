import { createSelector } from '@reduxjs/toolkit';

import * as Store from '~client/app/ui/store';

import * as Slice from './slice';

const featureStateSelector = (state: Store.RootState) =>
  state.domain.user.musics;

const adapterSelector = Slice.adapter.getSelectors(featureStateSelector);
export const allSelector = adapterSelector.selectAll;

export const statusSelector = createSelector(
  featureStateSelector,
  (state) => state.status
);
