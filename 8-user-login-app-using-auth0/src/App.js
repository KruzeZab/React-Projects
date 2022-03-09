import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './App.css';

import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

const App = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <>
        <LogoutButton />
        <Profile />
      </>
    );
  }

  return (
    <>
      <LoginButton />
    </>
  );
};

export default App;
