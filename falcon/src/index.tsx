import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { NavigationList } from './containers/NavigationList';
import { App } from './App';

ReactDOM.render(
  <Router>
    <NavigationList />
    <Switch>
      <Route path='/' exact>
        <App />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);
