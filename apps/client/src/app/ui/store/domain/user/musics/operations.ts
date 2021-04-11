import { createAsyncThunk } from '@reduxjs/toolkit';

import * as Entity from '~client/app/application/businesses/user/entity';
import * as Repository from '~client/app/application/businesses/user/repository';
import * as GraphQLTypes from '~client/app/application/types/gen/api';
import { AsyncThunkConfig } from '~client/app/ui/store';

import * as Constants from './constants';
import * as Types from './types';

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

export const fetchMusics = createAsyncThunk<
  Types.Payload['operation']['fetchMusics'],
  {
    ids: Entity.Music['id'][];
  },
  AsyncThunkConfig<{ message: string }>
>(`${name}/fetchMusics`, async (args, thunkAPI) => {
  try {
    const { data } = await thunkAPI.extra.api.query<
      GraphQLTypes.UserFavoriteMusicsQuery,
      GraphQLTypes.UserFavoriteMusicsQueryVariables
    >({
      query: GraphQLTypes.UserFavoriteMusicsDocument,
      variables: { ids: args.ids, page: { first: args.ids.length } },
    });

    return new Repository.UserFavoriteMusicsRepository(data)
      .toEntityUserFavoriteMusics;
  } catch (error) {
    return thunkAPI.rejectWithValue({ message: error.message });
  }
});
