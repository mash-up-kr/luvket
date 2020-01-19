import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory, History } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import State from '@/models/State';
import * as serviceWorker from '@/serviceWorker';
import { middlewares, reducer } from '@/store';

const history: History = createBrowserHistory({ basename: '' });
const store: Store<State> = configureStore({
  reducer: reducer(history),
  middleware: middlewares.data,
});

middlewares.run();

const render = async (): Promise<void> => {
  const module = await import('./views');

  const App = module.default;

  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById('root'),
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./store', async () => {
    const module = await import('./store');

    store.replaceReducer(module.reducer(history));
  });

  module.hot.accept('./views', render);
}

serviceWorker.unregister();
