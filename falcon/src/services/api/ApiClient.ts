import { logger } from '../logger';
import { RedditClient, RedditPost } from './types';
export class ApiClient implements RedditClient {
  private static instance: ApiClient;
  private baseUrl = 'http://localhost:8080';

  private constructor() { }

  public static getInstance(): ApiClient {
    if (!this.instance) {
      this.instance = new ApiClient();
    }

    return this.instance;
  }

  public setBaseUrl(url: string, port: string): void {
    this.baseUrl = `http://${url}:${port}`;
  }

  public async getPosts(page = 1): Promise<readonly RedditPost[]> {
    try {
      logger.debug('Getting posts for page', page);
      const result = await this.get(`${this.baseUrl}/posts?page=${page}`);

      return result as readonly RedditPost[];
    } catch (e) {
      logger.error('Couldn\'t load posts', e);

      return [];
    }
  }

  private async get(url: string): Promise<unknown> {
    const response = await fetch(url, { mode: 'cors' });
    return await response.json();
  }
}
