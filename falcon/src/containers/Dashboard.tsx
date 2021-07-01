import { CircularProgress, TextField } from '@material-ui/core';
import { Moment } from 'moment';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  LoadTweetsAction,
  SetLowerDateBound,
  SetUpperDateBound,
} from '../actions';
import { CallToActionOutlinedBtn } from '../common/Buttons';
import {
  DateField,
  withPlaceholder as DateFieldHOC,
} from '../components/dates/DashboardDateField';
import DashboardDatePicker from '../components/dates/DashboardDatePicker';
import HoverIcon from '../components/icons/HoverIcon';
import PostList from '../components/reddit/PostList';
import PostPreview from '../components/reddit/PostPreview';
import { GlobalState } from '../reducers';
import { RedditPost, GetPostsParams } from '../services/api/types';
import { styles } from '../styles/styleguide';

const ColumnContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
const FiltersContainer = styled.div`
  margin: ${styles.m2} 90px;
  display: flex;
  align-items: flex-end;

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
  flex: 2;
`;
const PreviewColumn = styled.div`
  flex: 2;
`;

const FilterElement = styled.div`
  margin: 0 15px;
`;
const SearchBtn = styled(CallToActionOutlinedBtn)`
  width: 180px;
  height: 36px;
`;
const PageNav = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  color: ${(t) => t.theme.colorP1};

  & span {
    font-size: 2rem;
  }
`;
const Preloader = styled.div`
  margin-top: 120px;
`;
function Dashboard({
  setLowerBound,
  setUpperBound,
  lowerBound,
  upperBound,
  load,
  posts,
}: ReduxProps) {
  const [currentPost, setCurrentPost] = useState<RedditPost>();
  const [page, setPage] = useState(1);
  const [inputUsername, setInputUsername] = useState('');
  const [inputSubreddit, setInputSubreddit] = useState('');
  useEffect(() => {
    load({ page });
  }, [page, load]);

  const handleTweetPost = (post: RedditPost) => {
    setCurrentPost(post);
  };

  const handleSearch = () => {
    load({
      page,
      author: inputUsername || undefined,
      subreddit: inputSubreddit || undefined,
      start: lowerBound as Moment || undefined,
      end: upperBound as Moment || undefined

    });
  };
  const handleClear = () => {
    setInputSubreddit('');
    setInputUsername('');
    // tslint:disable-next-line:no-null-keyword
    setLowerBound(null);
    // tslint:disable-next-line:no-null-keyword
    setUpperBound(null);
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
        <FilterElement>
          <TextField
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            id="reddit_username"
            label="Reddit username"
          />
        </FilterElement>
        <FilterElement>
          <TextField
            value={inputSubreddit}
            onChange={(e) => setInputSubreddit(e.target.value)}
            id="subreddit_name"
            label="Subreddit name"
          />
        </FilterElement>
        <SearchBtn onClick={handleSearch}>Search</SearchBtn>
        <SearchBtn onClick={handleClear}>Clear</SearchBtn>
      </FiltersContainer>
      <ColumnContainer>
        {posts === null ? (
          <Preloader>
            <CircularProgress color="secondary" />
          </Preloader>
        ) : (
          <>
            <ListColumn>
              <PostList onPostPicked={handleTweetPost} />
              <PageNav>
                <HoverIcon
                  icon="chevron_left"
                  onClick={page > 1 ? () => setPage(page - 1) : undefined}
                ></HoverIcon>
                {page}
                <HoverIcon
                  icon="chevron_right"
                  onClick={() => setPage(page + 1)}
                ></HoverIcon>
              </PageNav>
            </ListColumn>
            {currentPost && (
              <PreviewColumn>
                <PostPreview post={currentPost} />
              </PreviewColumn>
            )}
          </>
        )}
      </ColumnContainer>
    </Container>
  );
}

const mapDispatchToProps = {
  setLowerBound: SetLowerDateBound.create,
  setUpperBound: SetUpperDateBound.create,
  load: (p: GetPostsParams) => LoadTweetsAction.create(p),
};

const mapStateToProps = (state: GlobalState) => {
  return {
    lowerBound: state.tweets.lowerDateBound,
    upperBound: state.tweets.upperDateBound,
    posts: state.tweets.posts
  };
};

type ReduxProps = typeof mapDispatchToProps &
  ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard as any);
