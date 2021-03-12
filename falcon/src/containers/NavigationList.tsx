import React, { useState } from 'react';
import { Drawer } from '@material-ui/core';
import NavigationEntry from '../components/NavigationEntry';
import styled from 'styled-components';
import { styles, TTP } from '../styles/styleguide';
import { Link } from 'react-router-dom';
import { config } from '../config';
import HoverIcon from './HoverIcon';
import { Diamond, Dot } from '../common/Shape';
import { connect } from 'react-redux';
import { toggleTheme as toggleThemeAction } from '../actions';

const MenuContainer = styled.div`
  position: fixed;
  margin: ${styles.m4};
  cursor: pointer;
`;

const NavigationMenuContainer = styled.div`
  margin: ${styles.m3};
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  padding: ${styles.m4} 0;
  padding-left: ${styles.m4};
  background-color: ${({ theme }: TTP) => theme.colorBG2};
  color:  ${({ theme }: TTP) => theme.colorText1};
`;

const LinksContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Seperator = styled.div`
  margin: ${styles.m4} auto;
`;

function NavigationList({ toggleTheme }: Props) {
  const {
    isOpen,
    setIsOpen,
  } = NavigationListState();

  const renderDrawer = () => {
    return (
      <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
        <Container>
          {/* <NavigationMenuContainer> */}
            <HoverIcon onClick={() => setIsOpen(!isOpen)} size='large' icon='menu_open'/>
          {/* </NavigationMenuContainer> */}
          <Seperator>
            <Diamond />
          </Seperator>
          <LinksContainer>
            <Link to='/'>
              <NavigationEntry text='Home' icon='home' />
            </Link>
            <Link to='/about'>
              <NavigationEntry text='About' icon='select_all' />
            </Link>
            <Seperator>
              <Diamond />
            </Seperator>
            <a href={config.documentationURL} target='_blank' rel='noreferrer'>
              <NavigationEntry text='Documentation' icon='code' />
            </a>
          </LinksContainer>
          <HoverIcon onClick={toggleTheme} size='large' icon='invert_colors'/>
        </Container>
      </Drawer>
    );
  };

  const renderMenuIcon = () => {
    return (
      <MenuContainer>
        <HoverIcon onClick={() => setIsOpen(!isOpen)} size='large' icon='menu' />
      </MenuContainer>
    );
  };

  return (
    <>
      {renderDrawer()}
      {renderMenuIcon()}
    </>
  );
}

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

const mapDispatchToProps = {
  toggleTheme: toggleThemeAction
};

type Props = typeof mapDispatchToProps;

export default connect(undefined, mapDispatchToProps)(NavigationList);
