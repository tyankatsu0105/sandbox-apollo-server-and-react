import { createSelector } from '@reduxjs/toolkit';

import * as Store from '~client/app/ui/store';

const featureStateSelector = (state: Store.RootState) => state.domain.user.info;

export const statusSelector = createSelector(
  featureStateSelector,
  (state) => state.status
);

export const userSelector = createSelector(featureStateSelector, (state) => {
  const { status, ...restProps } = state;
  return restProps;
});
