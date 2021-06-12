import React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../../reducers';
import Post from './Post';
import { RedditPost } from '../../services/api/types';

function PostList({ posts, onPostPicked }: Props) {
  return (
    <div>
      {posts.map((post, i) => (
        <div key={post.id} onClick={() => onPostPicked(post)}>
          <Post post={post} index={i} />
        </div>
      ))}
    </div>
  );
}

function mapStateToProps(state: GlobalState) {
  const filteredLower = state.tweets.lowerDateBound
    ? state.tweets.posts.filter(post => state.tweets.lowerDateBound?.isSameOrBefore(post.created.startOf('day')))
    : state.tweets.posts;

  const filtered = state.tweets.upperDateBound
    ? filteredLower.filter(post => state.tweets.upperDateBound?.isSameOrAfter(post.created.startOf('day')))
    : filteredLower;

  return {
    posts: filtered
  };
}
type Props = ReturnType<typeof mapStateToProps> & {
  onPostPicked(post: RedditPost): void;
};

export default connect(mapStateToProps)(PostList);
