// tslint:disable:no-null-keyword

import { Grow, Icon } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalState } from '../../reducers';
import { apiClient, LabelsResult } from '../../services/api/types';
import { styles } from '../../styles/styleguide';

const Container = styled.div`
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
  padding: ${styles.m5} 0 ${styles.M1} ${styles.m5};
  // border-bottom: 1px dotted ${t => t.theme.colorGray0};
`;
  const TitleSection = styled.div`
  width: 100%;
  text-align: center;
  padding: ${styles.m5} 0 ${styles.M1} ${styles.m5};
  border-bottom: 1px solid ${t => t.theme.colorGray0};
  font: ${styles.fontH3};
`;
const ImageSectionText = styled.p`
  display: flex;
  flex-direction: column;
  font: ${styles.fontN5};
  text-align: left;
  margin-left: ${styles.m5};
`;

const Content = styled.p`
  display: flex;
  flex-direction: column;
  font: ${styles.fontN3};
  justify-content: flex-start;
  align-items: flex-start;
  padding: ${styles.m5};
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
  font: ${styles.fontN3};

  & span {
    margin-right: 25px;
    font-size: 2rem;
  }
`;
const ContentBody = styled.div`
  width: 100%;
  margin: 25px 0;
  padding: 25px;
  font: ${styles.fontN5};
  border-top: 1px solid ${t => t.theme.colorGray0};
  border-bottom: 1px solid ${t => t.theme.colorGray0};
`;
const GoBackContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: color ${styles.transitionParams};
  width: max-content;

  & span {
    font-size: 2rem;
  }

  &:hover {
    color: ${t => t.theme.colorP1};
  }
`;
const AnalysisSpan = styled.p`
  color: ${t => t.theme.colorP1};
  font: ${styles.fontN3};
  margin-left: 10px;
`;

function PostAnalysis({ posts }: Props) {
  const { id } = useParams() as { id: string };
  const post = posts.find(p => p.redditId === id);
  const [labels, setLabels] = useState<LabelsResult | undefined | null>();

  useEffect(() => {
    apiClient.getLabels(id).then(result => {
      setLabels(result || null);
    });
  }, [id]);

  if (!post) {
    return <>No post</>;
  }

  const renderAnalysis = () => {
    if (labels === undefined) {
      return <div>Loading...</div>;
    }
    if (labels === null) {
      return <div>Sorry, we couldn't find predictions for that post</div>;
    }

    return (
      <>
        <InfoContainer>
          <Icon>lightbulb</Icon>
          Post has been assigned a sentiment analysis score of
          <AnalysisSpan>
            {labels.sentiment}
          </AnalysisSpan>
        </InfoContainer>
        <InfoContainer>
          <Icon>lightbulb</Icon>
          Post has been assigned a category analysis of
          <AnalysisSpan>
            {labels.category}
          </AnalysisSpan>
        </InfoContainer>
      </>
    );
  }

  return (
    <Grow appear in timeout={500}>
      <Container>
        <Link to='/dashboard'>
          <GoBackContainer>
            <Icon>chevron_left</Icon>
            Go back
          </GoBackContainer>
        </Link>
        <TitleSection>
          {post.title}
        </TitleSection>
        <ImageSection>
          <IconContainer>
            <Icon style={{ color: post.color }}>face</Icon>
          </IconContainer>
          <ImageSectionText>
            <p>
              u/{post.author}
            </p>
          </ImageSectionText>
          <ImageSectionText>
            <p>
              r/{post.subreddit}
            </p>
          </ImageSectionText>
        </ImageSection>
        <Content>
          <InfoContainer>
            <Icon>schedule send</Icon>
            Posted on {post.created.format('DD/MM/YYYY')} at {post.created.format('HH:mm:ss')}
          </InfoContainer>
          <InfoContainer>
            <Icon>forum</Icon>
            {post.numComments} users participated in discussion under this post
          </InfoContainer>
          <InfoContainer>
            <Icon>favorite border</Icon>
            Post has received a total score of {post.score}
          </InfoContainer>
          <ContentBody>
            {post.body || 'This post has no content'}
          </ContentBody>
          {renderAnalysis()}
        </Content>
      </Container>
    </Grow>
  );
}

function mapStateToProps(state: GlobalState) {
  return {
    posts: state.tweets.posts
  };
}
type Props = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(PostAnalysis);
