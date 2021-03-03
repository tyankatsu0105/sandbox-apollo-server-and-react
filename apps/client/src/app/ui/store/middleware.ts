import * as ReduxToolkit from '@reduxjs/toolkit';

export type ExtraArgument = {};

const extraArgument: ExtraArgument = {};

export const createMiddleware = () => {
  const middleware = ReduxToolkit.getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: {
      extraArgument,
    },
  });
  return { middleware };
};
