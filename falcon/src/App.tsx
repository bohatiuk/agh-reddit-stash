import React from 'react';
import './App.css';
import Dashboard from './containers/Dashboard';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { TTP } from './styles/styleguide';
import { GlobalState } from './reducers';
import { connect } from 'react-redux';

const Global = createGlobalStyle`
  body {
    text-align: center:
    font-family: Roboto, Arial, Helvetica, sans-serif;

    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: ${({ theme }: TTP) => theme.colorText1};
    background-color: ${({ theme }: TTP) => theme.colorBG1};
  }

`;

function App({ theme,xx }: Props) {
  console.log('xd', xx, theme,)
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Dashboard />
    </ThemeProvider>
  );
}

function mapStateToProps(state: GlobalState) {
  return {
    theme: state.style.theme,
    xx: state.style.themeType
  };
}
type Props = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(App);
