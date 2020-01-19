import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { Reducer } from 'redux';

const reducer = (history: History): Reducer => {
  const reducerMap = {
    // eslint-disable-next-line
    router: connectRouter(history) as any,
  };

  return combineReducers(reducerMap);
};

export default reducer;
