import { lazy } from 'react';

const Reply = lazy((): Promise<{ default: React.ComponentType }> => import(/* webpackChunkName: 'Reply' */ './Reply'));

export default Reply;
