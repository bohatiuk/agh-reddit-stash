import React from 'react';
import styled from 'styled-components';
import { styles } from '../styles/styleguide';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Background = styled.div`
  background-image: url(https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=667&q=80);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;

  // filter: blur(8px);
  // -webkit-filter: blur(8px);
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Header = styled.p`
  font: ${styles.fontH1};
`;

function Home() {
  return (
    <Container>
      <Background />
      <Overlay>
        <Header>
          TWITTER STASH
        </Header>
      </Overlay>
    </Container>
  );
}

export default Home;
