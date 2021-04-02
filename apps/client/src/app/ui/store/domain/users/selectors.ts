import * as Entity from '~client/app/application/businesses/users/entity';
import * as Store from '~client/app/ui/store';

import * as Slice from './slice';

const featureStateSelector = (state: Store.RootState) => state.domain.users;

const adapterSelector = Slice.adapter.getSelectors(featureStateSelector);

export const idsSelector = adapterSelector.selectIds;
export const entitiesSelector = adapterSelector.selectEntities;
export const allSelector = adapterSelector.selectAll;
export const totalSelector = adapterSelector.selectTotal;

export const entityByIDSelector = (
  state: Store.RootState,
  id: Entity.User['id']
) => {
  const entityByID = adapterSelector.selectById(state, id);

  return entityByID;
};
