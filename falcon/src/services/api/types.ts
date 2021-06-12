import { Moment } from 'moment';
import { ApiClient } from './ApiClient';

export interface RedditClient {
  getPosts(page?: number): Promise<readonly RedditPost[]>;
}

export const apiClient = ApiClient.getInstance();
export interface RedditPost {
  id: number;
  redditId: string;
  title: string;
  author: string;
  subreddit: string;
  body: string;
  numComments: number;
  score: number;
  created: Moment;
}
