import { Moment } from 'moment';
import { MockApiClient } from './MockApiClient';

export interface GetPostsParams {
  page?: number;
  subreddit?: string;
  author?: string;
}
export interface RedditClient {
  getPosts(params: GetPostsParams): Promise<readonly RedditPost[]>;
  getLabels(id: string): Promise<LabelsResult | undefined>;
}

export const apiClient: RedditClient = MockApiClient.getInstance();
// export const apiClient: RedditClient = ApiClient.getInstance();
export interface RedditPost {
  id: number;
  redditId: string;
  title: string;
  author: string;
  subreddit: string;
  body: string | undefined;
  numComments: number;
  score: number;
  created: Moment;
  color: string;
}

export interface LabelsResult {
  sentiment: string;
  category: string;
}
