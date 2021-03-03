import * as ReduxToolkit from '@reduxjs/toolkit';

import * as Store from '~client/app/ui/store';

const featureStateSelector = (state: Store.RootState) => state.domain.users;
