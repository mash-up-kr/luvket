import { Global } from '@emotion/core';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'emotion-theming';
import { History } from 'history';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { RouteEnum } from '../constants';
import { Spinner } from './components';
import Home from './Home';
import NotFound from './NotFound';
import { global, theme } from './styles';

interface Props {
  readonly history: History;
}

const App: React.FC<Props> = ({ history }: React.PropsWithChildren<Props>) => (
  <ConnectedRouter history={history}>
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={RouteEnum.Home} component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </ThemeProvider>
  </ConnectedRouter>
);

export default App;
