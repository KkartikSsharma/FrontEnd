import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainFirst from './Components/FirstPage/MainFirst';
import MainSecond from './Components/SecondPage/MainSecond';
import {BrowserRouter ,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route path="/" exact component={MainFirst}/>
          <Route path="/secondPage" exact component={MainSecond}/>
        </Switch>
      </BrowserRouter >
    </div>
  );
}

export default App;
