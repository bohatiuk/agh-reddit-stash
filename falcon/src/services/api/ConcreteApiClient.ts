import { logger } from '../logger';
import { ApiClient } from './ApiClient';
import { MockApiClient } from './MockApiClient';
import { GetPostsParams, LabelsResult, RedditClient, RedditPost } from './types';

export class ConcreteApiClient implements RedditClient {
  private instance: RedditClient = ApiClient.getInstance();

  public setBaseUrl(url: string, port: string): void {
    if (url === 'mock') {
      logger.log(`Api client is now mocking`);
      this.instance = MockApiClient.getInstance();
    } else {
      this.instance = ApiClient.getInstance();
      ApiClient.getInstance().setBaseUrl(url, port);

      logger.log(`Api Url is now pointing to ${url} at ${port}`);
    }
  }

  public async getPosts(params: GetPostsParams): Promise<readonly RedditPost[]> {
    return this.instance.getPosts(params);
  }

  public async getLabels(id: string): Promise<LabelsResult | undefined> {
    return this.instance.getLabels(id);
  }
}
