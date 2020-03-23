import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainFirst from './Components/FirstPage/MainFirst';
import MainSecond from './Components/SecondPage/MainSecond';
import {BrowserRouter ,Switch,Route} from 'react-router-dom'
import MainThird from './Components/ThirdPage/MainThird';
import MainFourth from './Components/FourthPage/MainFourth';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
          <Route path="/" exact component={MainFirst}/>
          <Route path="/secondPage" exact component={MainSecond}/>
          <Route path='/thirdPage' exact component={MainThird}/>
          <Route path='/fourthPage' exact component={MainFourth}/>
        </Switch>
      </BrowserRouter >
    </div>
  );
}

export default App;
