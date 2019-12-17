import { lazy } from 'react';

const Login = lazy(
  (): Promise<{ default: React.ComponentType }> =>
    import(/* webpackChunkName: 'Login', webpackPrefetch: true */ './Login'),
);

export default Login;
