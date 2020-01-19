import { PayloadAction } from '@reduxjs/toolkit';
import produce from 'immer';

import { RequestingState } from './models';

const initialState: RequestingState = {};

const reducer = (state: RequestingState = initialState, action: PayloadAction): RequestingState =>
  produce(state, (draft) => {
    const matches = /(.*)(Request|Success|Failure)/.exec(action.type);

    if (!matches) return;

    const [, actionName, actionStatus] = matches;

    draft[actionName] = actionStatus === 'Request';
  });

export { initialState };

export default reducer;
