import React, { useState } from 'react';
import { Drawer } from '@material-ui/core';
import NavigationEntry from '../components/NavigationEntry';
import styled from 'styled-components';
import { styles, TTP } from '../styles/styleguide';
import { Link } from 'react-router-dom';
import { config } from '../config';
import HoverIcon from './HoverIcon';
import { Dot } from '../common/Dot';
import { connect } from 'react-redux';
import { toggleTheme as toggleThemeAction } from '../actions';

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
  background-color: ${({ theme }: TTP) => theme.colorBG2};
  color:  ${({ theme }: TTP) => theme.colorText1};
`;

const LinksContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SeperatorDot = styled.div`
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
            <HoverIcon onClick={toggleTheme} size='large' icon='invert_colors'/>
          </div>
        </Container>
      </Drawer>
    );
  };

  const renderMenuIcon = () => {
    const icon = isOpen ? 'menu_open' : 'menu';
    return (
      <MenuContainer>
        <HoverIcon onClick={() => setIsOpen(!isOpen)} size='large' icon={icon} />
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
