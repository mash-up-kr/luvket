import React from 'react';

const Home = React.lazy((): Promise<{ default: React.ComponentType }> => import('./Home'));

export default Home;
