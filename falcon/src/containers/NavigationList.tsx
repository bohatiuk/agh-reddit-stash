import React, { useState } from 'react';
import { Drawer, Icon } from '@material-ui/core';
import { NavigationEntry } from '../components/NavigationEntry';
import styled from 'styled-components';
import { styles } from '../styles/styleguide';

const MenuContainer = styled.div`
  position: fixed;
  margin: ${styles.m3};
  cursor: pointer;
  transition: color ${styles.transitionParams};

  &:hover {
    color: ${styles.colorG3};
  }
`;

export const NavigationList = () => {
  const {
    isOpen,
    setIsOpen,
  } = NavigationListState();

  const renderDrawer = () => {
    return (
      <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
        <div style={{width: '320px'}}>
          <NavigationEntry />
        </div>
      </Drawer>
    );
  };

  const renderMenuIcon = () => {
    const icon = isOpen ? 'menu_open' : 'menu';
    return (
      <MenuContainer onClick={() => setIsOpen(!isOpen)}>
        <Icon>{icon}</Icon>
      </MenuContainer>
    );
  };

  return (
    <>
      {renderDrawer()}
      {renderMenuIcon()}
    </>
  );
};

interface State {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const NavigationListState = (): State => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    setIsOpen
  };
};
