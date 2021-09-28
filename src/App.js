import './App.css';
import './style/index.scss';
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import index from './pages/index/index';

function App() {
  return (
      <div className="App">
        <HashRouter>
            <Switch>
                <Route path='/' component={index}/>
            </Switch>
        </HashRouter>
      </div>
  );
}

export default App;
