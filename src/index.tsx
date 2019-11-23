import { createBrowserHistory, History } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import State from './models/State';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import App from './views';

const initialState: Partial<State> = {};
const history: History = createBrowserHistory({ basename: '' });
const store: Store<State> = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,

  document.getElementById('root'),
);

serviceWorker.unregister();
