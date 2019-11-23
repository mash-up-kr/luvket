import React from 'react';

const NotFound = React.lazy((): Promise<{ default: React.ComponentType }> => import('./NotFound'));

export default NotFound;
