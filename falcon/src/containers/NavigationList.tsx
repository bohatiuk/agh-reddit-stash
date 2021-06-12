import React, { useState } from 'react';
import { Drawer } from '@material-ui/core';
import NavigationEntry from '../components/NavigationEntry';
import styled from 'styled-components';
import { styles } from '../styles/styleguide';
import { Link } from 'react-router-dom';
import { config } from '../config';
import HoverIcon from '../components/icons/HoverIcon';
import { Diamond } from '../common/Shape';
import { connect } from 'react-redux';
import { ToggleThemeAction } from '../actions';

const MenuContainer = styled.div`
  position: sticky;
  z-index: 50;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(t) => t.theme.colorBG1};
`;

const MenuIcon = styled.div`
  padding: 0 ${styles.m4};
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 320px;
  padding: ${styles.m4} 0;
  padding-left: ${styles.m4};
  background-color: ${(t) => `rgba(${t.theme.colorBG0RGB}, 1)`};
  color: ${(t) => t.theme.colorText};
`;

const LinksContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${styles.m1} 0;
`;

const Seperator = styled.div`
  margin: ${styles.m4} 0;
  align-self: center;
`;

const BottomIcons = styled.div`
  display: flex;

  & > * {
    margin-right: 16px;
  }
`;

function NavigationList({ toggleTheme }: Props) {
  const { isOpen, toggleOpen } = NavigationListState();

  const renderDrawer = () => {
    return (
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleOpen}
        classes={{ paper: 'drawer-bg' }}
      >
        <Container>
          <HoverIcon onClick={toggleOpen} size="large" icon="menu_open" />
          <LinksContainer>
            <Seperator>
              <Diamond />
            </Seperator>
            <Link to="/">
              <NavigationEntry text="Home" icon="home" onClick={toggleOpen} />
            </Link>
            <Link to="/dashboard">
              <NavigationEntry
                text="Dashboard"
                icon="select_all"
                onClick={toggleOpen}
              />
            </Link>
            <Seperator>
              <Diamond />
            </Seperator>
            <Link to="/about">
              <NavigationEntry
                text="About"
                icon="fingerprint"
                onClick={toggleOpen}
              />
            </Link>
            <a href={config.documentationURL} target="_blank" rel="noreferrer">
              <NavigationEntry
                text="Documentation"
                icon="code"
                onClick={toggleOpen}
              />
            </a>
          </LinksContainer>
          <BottomIcons>
            <HoverIcon
              onClick={toggleTheme}
              size="large"
              icon="invert_colors"
            />
            <Link to="/settings">
              <HoverIcon size="large" icon="settings" />
            </Link>
          </BottomIcons>
        </Container>
      </Drawer>
    );
  };

  const renderNavBar = () => {
    return (
      <MenuContainer>
        {!isOpen && (
          <MenuIcon>
            <HoverIcon onClick={toggleOpen} size="large" icon="menu" />
          </MenuIcon>
        )}
      </MenuContainer>
    );
  };

  return (
    <>
      {renderDrawer()}
      {renderNavBar()}
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
  toggleTheme: ToggleThemeAction.create,
};

type Props = typeof mapDispatchToProps;

export default connect(undefined, mapDispatchToProps)(NavigationList);
