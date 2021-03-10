import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { NavigationList } from './containers/NavigationList';
import { Dashboard } from './containers/Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <NavigationList />

    <Router>
      <Switch>
        <Route path='/' exact>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
