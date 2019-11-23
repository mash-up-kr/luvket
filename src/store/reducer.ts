import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Reducer, ReducersMapObject } from 'redux';

import State from '../models/State';

const reducer = (history: History): Reducer<State> => {
  const reducerMap: ReducersMapObject<State> = {
    router: connectRouter(history) as any,
  };

  return combineReducers(reducerMap);
};

export default reducer;
