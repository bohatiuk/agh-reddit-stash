import { logger } from '../logger';
import { ApiTranslator } from './ApiTranslator';
import { RedditClient, RedditPost } from './types';
export class ApiClient implements RedditClient {
  private static instance: ApiClient;
  private translator = new ApiTranslator();
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
      logger.debug('Gettings posts for page', page);
      const result = await this.get(`${this.baseUrl}/posts?page=${page}`);

      logger.debug('Got posts for page', result);
      const posts = (result as any[]).filter(p => p).map(p => this.translator.post(p));
      logger.debug('Translated posts ', page, posts);
      return posts;
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
