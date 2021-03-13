import React from 'react';
import styled from 'styled-components';
import Twitter from '../components/icons/Twitter';
import { styles, TTP } from '../styles/styleguide';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  left: 20vw;
  top: 20vh;
  z-index: 1;
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;

const ContentContainer = styled.div`
  margin: 35vh auto 0;
  height: 70vh;
  background-color: ${({ theme }: TTP) => theme.colorGray0};
`;

function Home() {
  return (
    <Container>
      <Overlay>
        <Twitter />
      </Overlay>
      <ContentContainer>
        xx
      </ContentContainer>
    </Container>
  );
}

export default Home;
