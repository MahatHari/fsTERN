import React, { useContext, useRef } from 'react';
import { TestContext } from './ContestTester';

const UserNameComp = React.memo(() => {
  const renders = useRef(0);
  console.log('renders userName comp', renders.current++);

  const { username } = useContext(TestContext);
  console.log('username UserNameComp', username);
  return <div>{username}</div>;
});

export default UserNameComp;
