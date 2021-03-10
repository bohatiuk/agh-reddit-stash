import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles/styleguide';

const NavEntryDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 42px;
  border-radius: ${styles.defaultRadius};
  transition: color ${styles.transitionParams};
  font: ${styles.fontN5};
  cursor: pointer;

  &:hover {
    color: ${styles.colorG3};
  }
`;

export const NavigationEntry = () => {
  return (
    <NavEntryDiv>
      Welcome
    </NavEntryDiv>
  );
};
