import React from 'react';

const Profile = React.lazy(
  (): Promise<{ default: React.ComponentType }> => import(/* webpackChunkNmae: 'Profile' */ './Profile'),
);

export default Profile;
