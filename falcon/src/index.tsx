import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavigationList from './containers/NavigationList';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { GlobalState, rootReducer } from './reducers';
import thunk from 'redux-thunk';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Dashboard from './containers/Dashboard';
import { connect } from 'react-redux';
import { TTP } from './styles/styleguide';
import { About } from './containers/About';
import Home from './containers/Home';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Global = createGlobalStyle`
  body {
    text-align: center;
    font-family: Roboto, Arial, Helvetica, sans-serif;

    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: ${({ theme }: TTP) => theme.color8};
    background-color: ${({ theme }: TTP) => theme.color0};
  }

  .drawer-bg {
    background-color: rgba(${({ theme }: TTP) => theme.color0RGB}, 0.0) !important;
  }
`;

function MainComponent({ theme }: Props) {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Global />
        <NavigationList />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/dashboard' exact>
            <Dashboard />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

function mapStateToProps(state: GlobalState) {
  return {
    theme: state.style.theme
  };
}
type Props = ReturnType<typeof mapStateToProps>;

const Main = connect(mapStateToProps)(MainComponent);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
