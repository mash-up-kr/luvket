import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { Reducer } from 'redux';

import { reducer as requesting } from './requesting';

const reducer = (history: History): Reducer => {
  const reducerMap = {
    requesting,
    // eslint-disable-next-line
    router: connectRouter(history) as any,
  };

  return combineReducers(reducerMap);
};

export default reducer;
