import React from 'react';
import './App.css';
import { Dashboard } from './containers/Dashboard';
import styled from 'styled-components';

const Global = styled.div`
  text-align: center:
  font-family: Roboto;
`;

export function App() {
  return (
    <Global>
      <Dashboard />
    </Global>
  );
}
