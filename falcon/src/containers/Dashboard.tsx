import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { SetLowerDateBound, SetUpperDateBound } from '../actions';
import { DateField, withPlaceholder as DateFieldHOC } from '../components/dates/DashboardDateField';
import DashboardDatePicker from '../components/dates/DashboardDatePicker';
import TweetList from '../components/tweets/TweetList';
import TweetPreview from '../components/tweets/TweetPreview';
import { GlobalState } from '../reducers';
import { ApiTweet } from '../services/api/types';
import { styles } from '../styles/styleguide';

const ColumnContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;

  & > * {
    margin-right: 0 ${styles.m5};
  }
`;
const FiltersContainer = styled.div`
  margin: ${styles.m2} 90px;
  display: flex;

  & > * {
    margin-right: ${styles.m4};
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${styles.m5} 0;
`;
const ListColumn = styled.div`
  max-width: 50%;
`;
const PreviewColumn = styled.div`
  max-width: 45%;
`;

function Dashboard({ setLowerBound, setUpperBound, lowerBound, upperBound }: ReduxProps) {
  const [currentTweet, setCurrentTweet] = useState<ApiTweet>();

  const handleTweetPicked = (tweet: ApiTweet) => {
    setCurrentTweet(tweet);
  };

  return (
    <Container>
      <FiltersContainer>
        <DashboardDatePicker
          textComponent={DateFieldHOC('From', DateField)}
          onChange={setLowerBound}
          value={lowerBound}
        />
        <DashboardDatePicker
          textComponent={DateFieldHOC('To', DateField)}
          onChange={setUpperBound}
          value={upperBound}
        />
      </FiltersContainer>
      <ColumnContainer>
        <ListColumn>
          <TweetList onTweetPicked={handleTweetPicked} />
        </ListColumn>
        {currentTweet && (
          <PreviewColumn>
            <TweetPreview tweet={currentTweet} />
          </PreviewColumn>
        )}
      </ColumnContainer>
    </Container>
  );
}

const mapDispatchToProps = {
  setLowerBound: SetLowerDateBound.create,
  setUpperBound: SetUpperDateBound.create
};

const mapStateToProps = (state: GlobalState) => {
  return {
    lowerBound: state.tweets.lowerDateBound,
    upperBound: state.tweets.upperDateBound
  };
};

type ReduxProps = typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
