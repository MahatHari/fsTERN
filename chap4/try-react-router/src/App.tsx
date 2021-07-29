import React from 'react';
import logo from './logo.svg';
import './App.css';
import ScreenB from './components/ScreenB';
import ScreenA from './components/ScreenA';
import ScreenC from './components/ScreenC';
import { Switch, Route } from 'react-router-dom';

function App() {
  const renderScreenC = (props: any) => {
    console.log('screen C Props', props);
    return <ScreenC {...props} message='This is screen C' />;
  };
  return (
    <Switch>
      <Route exact={true} path='/' component={ScreenA}></Route>
      <Route path='/b' component={ScreenB} />
      <Route path='/c/:userid' render={renderScreenC} />
    </Switch>
  );
}

export default App;
