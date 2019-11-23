import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import State from '../models/State';
import reducer from './reducer';

const rootStore = (initialState: Partial<State>, history: History): Store<State> => {
  const middleware: Middleware[] = [routerMiddleware(history)].filter(Boolean);

  const store: Store<State> = createStore(
    reducer(history),
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );

  // store.subscribe(() => console.log(store.getState()));

  return store;
};

export default rootStore;
