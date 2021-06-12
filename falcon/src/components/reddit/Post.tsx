import { Grow, Icon } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { RedditPost } from '../../services/api/types';
import { styles } from '../../styles/styleguide';

interface Props {
  post: RedditPost;
  index: number;
}

const Container = styled.div`
  max-width: 920px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${t => t.theme.colorGray0};
  padding: 20px;
  cursor: pointer;

  transition: all ${styles.transitionParams};
  * {
    transition: all ${styles.transitionParams};
  }

  &:hover {
    color: ${t => t.theme.colorP1};
  }

`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Image = styled.div`
  position: relative;
  width: 220px;
  min-width: 220px;
  height: 125px;
  min-height: 125px;
  border-radius: ${styles.defaultRadius};

  &:before {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: '';
    filter: blur(2px) saturate(100%) contrast(45%) brightness(130%);
    background-color: rgba(255,255,255,0.3);
  }
`;
const Content = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MetaText = styled.p`
  margin-left: ${styles.m3};
  font: ${styles.fontN3};
  text-align: left;
`;
const ContentText = styled.p`
  margin-left: ${styles.m3};
  font: ${styles.fontN2};
  text-align: left;
`;

const ReadMoreBtn = styled.div`
  color: ${t => t.theme.colorGray0};
`;

function Post({ post, index }: Props) {
  return (
    <Grow appear in timeout={300 + index * 200}>
      <Container>
        <Flex>
          <Image />
          <Content>
            <MetaText>
              {post.author.firstName} {post.author.lastName} - {new Date(post.timestamp).toLocaleString()}
            </MetaText>
            <ContentText>
              {post.content.substring(0, 150)}
            </ContentText>
          </Content>
        </Flex>
        <ReadMoreBtn>
          <Icon style={{ fontSize: '56px' }}>
            keyboard_arrow_right
          </Icon>
        </ReadMoreBtn>
      </Container>
    </Grow>
  );
}

export default Post;
