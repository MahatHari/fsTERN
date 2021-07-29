import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import AnotherScreen from './AnotherScreen';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Router>
          <Switch>
            <Route exact={true} path='/' component={Home}></Route>
            <Route path='/another' component={AnotherScreen}></Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
