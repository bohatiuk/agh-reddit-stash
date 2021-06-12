import { ApiClient } from './ApiClient';

export interface RedditClient {
  getPosts(page?: number): Promise<readonly RedditPost[]>;
}

export const apiClient = ApiClient.getInstance();
export interface RedditPost {
  id: string;
  author: {
    userName: string;
    firstName: string;
    lastName: string;
  };
  content: string;
  timestamp: number;
  url: string;
}
