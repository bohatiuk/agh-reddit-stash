import React, { useEffect } from 'react';
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
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Dashboard from './containers/Dashboard';
import { connect } from 'react-redux';
import { About } from './containers/About';
import Home from './containers/Home';
import { LoadTweetsAction } from './actions';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Global = createGlobalStyle`
  body {
    text-align: center;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-weight: 200;

    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background-color: ${t => t.theme.colorBG0};
    color: ${t => t.theme.colorText};
  }

  .drawer-bg {
    background-color: rgba(${t => t.theme.colorBG1RGB}, 0.0) !important;
  }
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${t => t.theme.colorBG0};
  background-size: 20px 20px;
`;

function MainComponent({ theme, loadTweets }: Props) {
  useEffect(() => {
    loadTweets();
  }, [loadTweets]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Background />
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

const mapDispatchToProps: Dispatch = {
  loadTweets: LoadTweetsAction.create
};
type Dispatch = {
  loadTweets(): void;
};

function mapStateToProps(state: GlobalState) {
  return {
    theme: state.style.theme
  };
}
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
