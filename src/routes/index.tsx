import React from 'react';

import AnonymousStack from './AnonymousStack';
import AuthenticatedStack from './AuthenticatedStack';

import useAppSelector from '@hooks/useAppSelector';

function Navigation() {
  const isAuthenticated = useAppSelector(({ auth }) => !!auth.refreshToken);

  if (isAuthenticated) {
    return <AuthenticatedStack />;
  }

  return <AnonymousStack />;
}

export default Navigation;
