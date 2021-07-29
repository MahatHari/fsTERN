import React, { useContext } from 'react';
import { TestContext } from './ContestTester';

const UserAgeComp = () => {
  const { userage } = useContext(TestContext);
  return <div>{userage}</div>;
};

export default UserAgeComp;
