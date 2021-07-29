import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from './store/AppState';

const UserDisplay = () => {
  const user = useSelector((state: AppState) => state.user);
  if (user) {
    console.log('user', user);
    return (
      <div>
        <label>userName: </label>
        &nbsp; {user.username}
        <div>
          <label htmlFor=''>Email:</label>
          &nbsp; {user.email}
        </div>
        <div>
          <label htmlFor=''>City:</label>
          &nbsp; {user.city}
        </div>
      </div>
    );
  }
  return <div>No data</div>;
};

export default UserDisplay;
