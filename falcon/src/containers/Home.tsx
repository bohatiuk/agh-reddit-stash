import { Grow, Icon } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CallToActionBtn, CallToActionOutlinedBtn } from '../common/Buttons';
import Twitter from '../components/icons/Twitter';
import { config } from '../config';
import { styles, TTP } from '../styles/styleguide';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Overlay = styled.div`
  margin: 90px 0 0 20%;
`;

const BannerContainer = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  background-color: ${({ theme}: TTP) => theme.colorBG3};
`;

const Actions = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 90px;
`;

const TextTitle = styled.div`
  margin-top: 92px;
  font: ${styles.fontH5};
  color: ${({ theme }: TTP) => theme.colorP1};
`;

const TestDescribtion = styled.div`
  margin-top: 12px;
  font: ${styles.fontN6};
`;

const GetStartedActions = styled.div`
  margin-top: 64px;
  display: flex;

  & * {
    margin-right: ${styles.m5};
  }
`;

const ContentContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: ${styles.M2};
  text-align: left;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 240px;
`;

const CardTitle = styled.div`
  font: ${styles.fontN7};
  margin-bottom: ${styles.m4};
`;

const CardDescribtion = styled.div`
  font: ${styles.fontN5};
`;

function Home() {
  return (
    <Container>
      <BannerContainer>
        <Overlay>
          <Twitter />
        </Overlay>
        <Actions>
          <TextTitle>
            TWITTER STASH
          </TextTitle>
          <TestDescribtion>
            An application doing sth
          </TestDescribtion>
          <GetStartedActions>
            <Link to='/dashboard'>
              <CallToActionBtn>Get started</CallToActionBtn>
            </Link>
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
          </GetStartedActions>
        </Actions>
      </BannerContainer>
      <ContentContainer>
        <CardsContainer>
          <Grow in appear timeout={500}>
            <Card>
              <CardTitle>Something</CardTitle>
              <CardDescribtion>Lorem ipsum dolor sit am. Lorem ipsum dolor sit am.</CardDescribtion>
            </Card>
          </Grow>
          <Grow in appear timeout={1200}>
          <Card>
            <CardTitle>Something</CardTitle>
            <CardDescribtion> you open it directly in the browser, you will see an empty page.
              sit am. Lorem ipsum dolor sit am.</CardDescribtion>
          </Card>
          </Grow>
          <Grow in appear timeout={1500}>
          <Card>
            <CardTitle>Something</CardTitle>
            <CardDescribtion>Lorem ipsum  you open it directly in the browser, you will
              see an empty page. dolor sit am.</CardDescribtion>
          </Card>
          </Grow>
        </CardsContainer>
      </ContentContainer>
    </Container>
  );
}

export default Home;
