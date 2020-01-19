import { Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import saga from './saga';

interface Middlewares {
  data: Middleware[];
  run(): void;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middlewares = {
  data: [sagaMiddleware],
  run: (): void => {
    sagaMiddleware.run(saga);
  },
};

export default middlewares;
