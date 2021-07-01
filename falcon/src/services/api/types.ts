import { Moment } from 'moment';
import { ConcreteApiClient } from './ConcreteApiClient';

export interface GetPostsParams {
  page?: number;
  subreddit?: string;
  author?: string;
  start?: Moment;
  end?: Moment;
}
export interface RedditClient {
  getPosts(params: GetPostsParams): Promise<readonly RedditPost[]>;
  getLabels(id: string): Promise<LabelsResult | undefined>;
  setBaseUrl(url: string, port: string): void;
}

export const apiClient: RedditClient = new ConcreteApiClient();
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
