import { PayloadAction } from '@reduxjs/toolkit';

import Error from '@/models/Error';

import { ErrorState } from './models';

const initialState: ErrorState = {};

const reducer = (state: ErrorState = initialState, action: PayloadAction<Error>): ErrorState => {
  const matches = /(.*)(Request|Failure)/.exec(action.type);

  if (!matches) return state;

  const [, actionName, actionStatus] = matches;

  const isFailureType = actionStatus === 'Failure';
  const isRequestType = actionStatus !== 'Failure';

  if (isFailureType && action.payload) {
    return {
      ...state,
      [actionName]: action.payload,
    };
  }

  if (isRequestType) {
    // eslint-disable-next-line
    const { [actionName]: value, ...otherState } = state;

    return otherState;
  }

  return state;
};

export { initialState };

export default reducer;
