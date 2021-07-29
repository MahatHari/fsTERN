import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configurreStore from './store/configureStore';
import ContestTester from './ContestTester';

/* (
  <React.StrictMode>
    <Provider store={configurreStore()}>
      <App />
    </Provider>
  </React.StrictMode>
), */
ReactDOM.render(<ContestTester />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
