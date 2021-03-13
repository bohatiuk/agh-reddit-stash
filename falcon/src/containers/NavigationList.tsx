import React, { useState } from 'react';
import { Drawer } from '@material-ui/core';
import NavigationEntry from '../components/NavigationEntry';
import styled from 'styled-components';
import { styles, TTP } from '../styles/styleguide';
import { Link } from 'react-router-dom';
import { config } from '../config';
import HoverIcon from '../components/icons/HoverIcon';
import { Diamond, Dot } from '../common/Shape';
import { connect } from 'react-redux';
import { toggleTheme as toggleThemeAction } from '../actions';

const MenuContainer = styled.div`
  position: fixed;
  margin: ${styles.m4};
  cursor: pointer;
  z-index: 10;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  padding: ${styles.m4} 0;
  padding-left: ${styles.m4};
  background-color: ${({ theme }: TTP) => `rgba(${theme.colorGray0RGB}, 1)`};
  color:  ${({ theme }: TTP) => theme.color8};
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
    toggleOpen,
  } = NavigationListState();

  const renderDrawer = () => {
    return (
      <Drawer
        anchor='left'
        open={isOpen}
        onClose={toggleOpen}
        classes={{paper: 'drawer-bg'}}
      >
        <Container>
          {/* <NavigationMenuContainer> */}
            <HoverIcon onClick={toggleOpen} size='large' icon='menu_open'/>
          {/* </NavigationMenuContainer> */}
          <Seperator>
            <Diamond />
          </Seperator>
          <LinksContainer>
            <Link to='/'>
              <NavigationEntry text='Home' icon='home' onClick={toggleOpen} />
            </Link>
            <Link to='/dashboard'>
              <NavigationEntry text='Dashbard' icon='select_all' onClick={toggleOpen} />
            </Link>
            <Seperator>
              <Diamond />
            </Seperator>
            <Link to='/about'>
              <NavigationEntry text='About' icon='fingerprint' onClick={toggleOpen} />
            </Link>
            <a href={config.documentationURL} target='_blank' rel='noreferrer'>
              <NavigationEntry text='Documentation' icon='code' onClick={toggleOpen} />
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
        <HoverIcon onClick={toggleOpen} size='large' icon='menu' />
      </MenuContainer>
    );
  };

  return (
    <>
      {renderDrawer()}
      {!isOpen && renderMenuIcon()}
    </>
  );
}

interface State {
  isOpen: boolean;
  toggleOpen: () => void;
}

const NavigationListState = (): State => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return {
    isOpen,
    toggleOpen,
  };
};

const mapDispatchToProps = {
  toggleTheme: toggleThemeAction
};

type Props = typeof mapDispatchToProps;

export default connect(undefined, mapDispatchToProps)(NavigationList);
