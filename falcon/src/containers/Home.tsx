import { Icon } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { CallToActionBtn, CallToActionOutlinedBtn } from '../common/Buttons';
import { CenterDiv } from '../common/CenterDiv';
import Twitter from '../components/icons/Twitter';
import { config } from '../config';
import { styles, TTP } from '../styles/styleguide';
import { defaultShadow } from '../utils/css';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  background-color: ${({ theme }: TTP) => theme.color0};
  opacity: 0.8;

`;

const Overlay = styled.div`
  position: absolute;
  left: 20vw;
  top: 90px;
  z-index: 1;
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;

const ContentContainer = styled.div`
  position: relative;
  // margin: 10vh auto 0;
  height: 400px;
  width: 100%;
  overflow: hidden;
  padding-left: 45vw;
  background-color: ${({ theme}: TTP) => theme.color0};
  // background: transparent;
  // background-color: ${({ theme }: TTP) => theme.colorGray0};


  // -webkit-box-shadow: -10px -10px 200px 0px rgba(${({ theme }: TTP) => theme.color8RGB},0.2);
  // -moz-box-shadow: -10px -10px 200px 0px rgba(${({ theme }: TTP) => theme.color8RGB},0.2);
  // box-shadow: -10px -10px 200px 0px rgba(${({ theme }: TTP) => theme.color8RGB},0.2);
`;

const Cards = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Card = styled(CenterDiv)`
  width: 450px;
  height: 225px;
  position: absolute;
  background-color: ${({ theme }: TTP) => theme.color0};
  border: 1px solid rgba(${({ theme }: TTP) => theme.color8RGB}, 0.2);
  ${props => defaultShadow(props)}
`;

const NameCard = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  font: ${styles.fontH5};
  color: ${({ theme }: TTP) => theme.color5};
`;

const DescCard = styled.div`
  position: absolute;
  top: 125px;
  left: 0;
  font: ${styles.fontN6};
`;

const GetStartedCard = styled.div`
  position: absolute;
  top: 230px;
  left: 0;
  display: flex;
  // cursor: pointer;
  // transition: transform ${styles.transitionParams1};
  // background: ${({ theme }: TTP) => theme.color5};
  // color: ${({ theme }: TTP) => theme.color0};

  // &:hover {
  //   transform: scale(1.02);
  // }
  & * {
    margin-right: ${styles.m5};
  }
`;

const Title = styled.p`
  font: ${styles.fontH5};
`;

function Home() {
  return (
    <Container>
      {/* <Background /> */}
      <ContentContainer>
        <Overlay>
          <Twitter />
        </Overlay>
        <Cards>
          <NameCard>
            TWITTER STASH
          </NameCard>
          <DescCard>
            An application doing sth
          </DescCard>
          <GetStartedCard>
            <CallToActionBtn>Get started</CallToActionBtn>
            <a href={config.documentationURL} target='_blank' rel='noreferrer'>
              <CallToActionOutlinedBtn>
                <span>
                  Read docs
                </span>
                <Icon>
                  keyboard_arrow_right
                </Icon>
              </CallToActionOutlinedBtn>
            </a>
          </GetStartedCard>
        </Cards>
      </ContentContainer>
    </Container>
  );
}

export default Home;
