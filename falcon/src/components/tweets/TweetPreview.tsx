import { Grow } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { ApiTweet } from '../../services/api/types';
import { styles } from '../../styles/styleguide';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  padding: ${styles.m5};
`;

const Image = styled.div`
  width: 440px;
  min-width: 440px;
  height: 250px;
  min-height: 250px;
  background: gray;
  border-radius: ${styles.defaultRadius};
`;

const ImageSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${styles.m5} 0 ${styles.M1} ${styles.m5};
  border-bottom: 1px solid ${t => t.theme.colorGray0};
`;

const ImageSectionText = styled.p`
  display: flex;
  flex-direction: column;
  font: ${styles.fontN4};
  text-align: left;
  margin-left: ${styles.m5};
`;

const ContentText = styled.p`
  font: ${styles.fontN3};
  text-align: left;
  padding: ${styles.m5};
`;

const ContinueSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ContinueAction = styled.a`
  font: ${styles.fontN4};
  text-decoration: underline;
  margin: ${styles.m3};
  cursor: pointer;
  transition: color ${styles.transitionParams};

  &:hover {
    color: ${t => t.theme.colorP1};
  }
`;

function TweetPreview({ tweet }: Props) {
  return (
    <Grow appear in timeout={500}>
      <Container>
        <ImageSection>
          <Image />
          <ImageSectionText>
            <p>
              Published by: {tweet.author.firstName} {tweet.author.lastName}
            </p>
            <p>
              Published on: {new Date(tweet.timestamp).toLocaleString()}
            </p>
          </ImageSectionText>
        </ImageSection>
        <ContentText>
          {tweet.content}
        </ContentText>
        <ContinueSection>
          <ContinueAction>
            Read analysis
          </ContinueAction>
          <ContinueAction href={tweet.url} target='_blank'>
            See the original
          </ContinueAction>
        </ContinueSection>
      </Container>
    </Grow>
  );
}

type Props = { tweet: ApiTweet };

export default connect()(TweetPreview);
