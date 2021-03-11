import React, { useState } from 'react';
import { Drawer, Icon } from '@material-ui/core';
import { NavigationEntry } from '../components/NavigationEntry';
import styled from 'styled-components';
import { styles, toggleTheme } from '../styles/styleguide';
import { Link } from 'react-router-dom';
import { config } from '../config';
import { HoverIcon } from './HoverIcon';
import { Dot } from '../common/Dot';

const MenuContainer = styled.div`
  position: fixed;
  margin: ${styles.m3};
  cursor: pointer;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  padding: ${styles.m4} 0;
  padding-left: ${styles.m4};
  background-color: ${styles.colorBG1};
  color: ${styles.colorText2};
`;

const LinksContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SeperatorDot = styled.div`
  margin: ${styles.m4} auto;
`;

export const NavigationList = () => {
  const {
    isOpen,
    setIsOpen,
  } = NavigationListState();

  const renderDrawer = () => {
    return (
      <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
        <Container>
          <LinksContainer>
            <Link to='/'>
              <NavigationEntry text='Home' icon='home' />
            </Link>
            <Link to='/about'>
              <NavigationEntry text='About' icon='select_all' />
            </Link>
            <SeperatorDot>
              <Dot />
            </SeperatorDot>
            <a href={config.documentationURL} target='_blank' rel='noreferrer'>
              <NavigationEntry text='Documentation' icon='code' />
            </a>
          </LinksContainer>
          <div>
            <HoverIcon size='large' icon='invert_colors'/>
          </div>
        </Container>
      </Drawer>
    );
  };

  const renderMenuIcon = () => {
    const icon = isOpen ? 'menu_open' : 'menu';
    return (
      <MenuContainer onClick={() => setIsOpen(!isOpen)}>
        <HoverIcon onClick={toggleTheme} size='large' icon={icon} />
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
