import React, { useState } from 'react';
import styled from 'styled-components';
import TweetList from '../components/tweets/TweetList';
import TweetPreview from '../components/tweets/TweetPreview';
import { ApiTweet } from '../services/api/types';
import { styles } from '../styles/styleguide';

const Container = styled.div`
  width: 95%;
  margin: ${styles.M3} auto;
  display: flex;

  & > * {
    margin: 0 ${styles.m5};
  }
`;
const ListColumn = styled.div`
  max-width: 50%;
`;
const PreviewColumn = styled.div`
  max-width: 45%;
`;
function Dashboard() {
  const [currentTweet, setCurrentTweet] = useState<ApiTweet>();

  const handleTweetPicked = (tweet: ApiTweet) => {
    setCurrentTweet(tweet);
  };

  return (
    <Container>
      <ListColumn>
        <TweetList onTweetPicked={handleTweetPicked} />
      </ListColumn>
      {currentTweet && (
        <PreviewColumn>
          <TweetPreview tweet={currentTweet} />
        </PreviewColumn>
      )}
    </Container>
  );
}

export default Dashboard;
