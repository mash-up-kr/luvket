import { lazy } from 'react';

const Invitation = lazy(
  (): Promise<{ default: React.ComponentType }> =>
    import(/* webpackChunkName: 'Invitation', webpackPrefetch: true */ './Invitation'),
);

export default Invitation;
