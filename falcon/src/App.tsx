import React from 'react';
import './App.css';
import { Dashboard } from './containers/Dashboard';
import styled, { createGlobalStyle } from 'styled-components';
import { styles } from './styles/styleguide';

const Global = createGlobalStyle`
  body {
    text-align: center:
    font-family: Roboto, Arial, Helvetica, sans-serif;

    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: ${styles.colorText1};
    background-color: ${styles.colorBG1};
  }

`;

export function App() {
  return (
    <>
      <Global />
      <Dashboard />
    </>
  );
}
