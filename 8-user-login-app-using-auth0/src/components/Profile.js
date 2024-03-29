import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import JsonPretty from 'react-json-pretty';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} width="120px" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <JsonPretty data={user} />
      </div>
    )
  );
};

export default Profile;
