'use client'
import React from 'react';
import { useUser } from '@clerk/nextjs';

type Props = {};

const Data = (props: Props) => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <div>
      <h1>Data</h1>
      {isSignedIn && user ? (
        <p>User ID: {user.username}</p>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default Data;
