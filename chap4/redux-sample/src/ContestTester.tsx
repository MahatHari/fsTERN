import React, { createContext, useState } from 'react';
import UserNameComp from './UserNameComp';
import UserAgeComp from './UserAgeComp';
import { string } from 'yargs';

export const TestContext = createContext<{ username: string; userage: number }>(
  { username: '', userage: 0 }
);

const ContestTester = () => {
  const [userage, setUserage] = useState(20);
  const [localState, setLocalState] = useState(0);

  const onClickAge = () => {
    setUserage(userage + 1);
  };

  const onClickLocalState = () => {
    setLocalState(localState + 1);
  };

  return (
    <>
      <button onClick={onClickAge}>Update Age</button>
      <TestContext.Provider value={{ username: 'dave', userage }}>
        <UserAgeComp />
        <br />
        <UserNameComp />
      </TestContext.Provider>
      <br />
      <button onClick={onClickLocalState}>Update localState</button>
      &nbsp; <label>{localState}</label>
    </>
  );
};

export default ContestTester;
