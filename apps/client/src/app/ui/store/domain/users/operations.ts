import { createAsyncThunk } from '@reduxjs/toolkit';

import * as GraphQLTypes from '~client/app/application/types/gen/api';
import { AsyncThunkConfig } from '~client/app/ui/store';

import * as Constants from './constants';
import * as DTO from './dto';
import * as Types from './types';

const name = `${Constants.parentsKey}/${Constants.featureKey}`;

export const fetchUsers = createAsyncThunk<
  Types.Payload['operation']['fetchUsers'],
  void,
  AsyncThunkConfig<{ message: string }>
>(`${name}/fetchUsers`, async (_, thunkAPI) => {
  try {
    const { data } = await thunkAPI.extra.api.query<
      GraphQLTypes.UsersQuery,
      GraphQLTypes.UsersQueryVariables
    >({
      query: GraphQLTypes.UsersDocument,
      variables: { page: { first: 5 } },
    });
    return DTO.Users.toEntityData(data);
  } catch (error) {
    return thunkAPI.rejectWithValue({ message: error.message });
  }
});
