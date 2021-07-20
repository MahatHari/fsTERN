import React, { useReducer, useState, useCallback, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import ListCreator, { ListItem } from './ListCreator';

function App() {
  const initialState = {
    enteredName: '',
    message: '',
  };
  const reducer = (state: any, action: any) => {
    console.log('enteredNameReducer');
    switch (action.type) {
      case 'enteredName':
        if (state.enteredName === action.payload) {
          return state;
        }
        return { ...state, enteredName: action.payload };
      case 'message':
        return { ...state, message: `Hello, ${action.payload}` };
      default:
        throw new Error('Invalid action type' + action.type);
    }
  };
  const [{ message, enteredName }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const [startCount, setStartCount] = useState(0);
  const [count, setCount] = useState(0);
  const setCountCallback = useCallback(() => {
    const inc =
      count + 1 > startCount ? count + 1 : Number(count + 1) + startCount;
    setCount(inc);
  }, [count, startCount]);

  const onWelcomeBtnClick = () => {
    setCountCallback();
  };

  const onChangeStartCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartCount(Number(e.target.value));
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'enteredName', payload: e.target.value });
    dispatch({ type: 'message', payload: e.target.value });
  };
  const [listItems, setListItems] = useState<Array<ListItem>>();
  useEffect(() => {
    const li = [];
    for (let i = 0; i < count; i++) {
      li.push({ id: i });
    }
    setListItems(li);
  }, [count]);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <input value={enteredName} onChange={onChangeName} />
        <Greeting
          message={message}
          enteredName={enteredName}
          grettingDispatcher={dispatch}
        />
        <div style={{ marginTop: '10px' }}>
          <label htmlFor=''>Enter a number and we'll increment it</label>
          <br />
          <input
            type='text'
            value={startCount}
            onChange={onChangeStartCount}
            style={{ width: '0.75rem' }}
          />
          <br />
          <label htmlFor=''>{count}</label>
          <br />
          <button onClick={onWelcomeBtnClick}>Increment</button>
        </div>
        <div>
          <ListCreator listItems={listItems} />
        </div>
      </header>
    </div>
  );
}

export default App;
