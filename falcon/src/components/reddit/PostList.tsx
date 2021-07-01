import React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../../reducers';
import { RedditPost } from '../../services/api/types';
import Post from './Post';

function PostList({ posts, onPostPicked }: Props) {
  return (
    <div>
      {posts?.map((post, i) => (
        <div key={post.id} onClick={() => onPostPicked(post)}>
          <Post post={post} index={i} />
        </div>
      ))}
    </div>
  );
}

function mapStateToProps(state: GlobalState) {
  return {
    posts: state.tweets.posts,
  };
}
type Props = ReturnType<typeof mapStateToProps> & {
  onPostPicked(post: RedditPost): void;
};

export default connect(mapStateToProps)(PostList);
