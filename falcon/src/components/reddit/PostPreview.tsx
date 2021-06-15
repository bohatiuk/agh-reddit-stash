import { Grow, Icon } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RedditPost } from '../../services/api/types';
import { styles } from '../../styles/styleguide';

const Container = styled.div`
  position: sticky;
  right: 25px;
  top: 25px;
  width: 560px;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding: ${styles.m5};
`;

const ImageSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${styles.m2} 0 ${styles.m2} ${styles.m5};
  // border-bottom: 1px dotted ${t => t.theme.colorGray0};
`;
  const TitleSection = styled.div`
  width: 100%;
  text-align: center;
  padding: ${styles.m2} 0 ${styles.m2} ${styles.m4};
  border-bottom: 1px solid ${t => t.theme.colorGray0};
  font: ${styles.fontN6};
`;
const ImageSectionText = styled.p`
  display: flex;
  flex-direction: column;
  font: ${styles.fontN4};
  text-align: left;
  margin-left: ${styles.m5};
`;

const Content = styled.p`
  display: flex;
  flex-direction: column;
  font: ${styles.fontN3};
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${styles.m2};
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
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    font-size: 7rem;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: ${t => t.theme.colorGray1};

  & span {
    margin-right: 25px;
    font-size: 2rem;
  }
`;
const ContentBody = styled.div`
  margin-top: 25px;
  text-align: left;
  font: ${styles.fontN4};
`;
function PostPreview({ post }: Props) {
  return (
    <Grow appear in timeout={500}>
      <Container>
        <ImageSection>
          <IconContainer>
              <Icon style={{ color: post.color }}>face</Icon>
            </IconContainer>
          <ImageSectionText>
            <p>
              u/{post.author}
            </p>
          </ImageSectionText>
        </ImageSection>
        <TitleSection>
          {post.title}
        </TitleSection>
        <Content>
          <InfoContainer>
            <Icon>schedule send</Icon>
            {post.created.format('DD/MM/YYYY - HH:mm:ss')}
          </InfoContainer>
          <InfoContainer>
            <Icon>forum</Icon>
            {post.numComments}
          </InfoContainer>
          <InfoContainer>
            <Icon>favorite border</Icon>
            {post.score}
          </InfoContainer>
          <ContentBody>
            {post.body ? post.body.substring(0, 150) + '...' : 'No content'}
          </ContentBody>
        </Content>
        <ContinueSection>
          <Link to={`/post/${post.redditId}`}>
            <ContinueAction>
              Read analysis
            </ContinueAction>
          </Link>
          {/* <ContinueAction href={post.url} target='_blank'>
            See the original
          </ContinueAction> */}
        </ContinueSection>
      </Container>
    </Grow>
  );
}

type Props = { post: RedditPost };

export default connect()(PostPreview);
