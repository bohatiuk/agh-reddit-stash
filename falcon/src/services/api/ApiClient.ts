import { LocalStorageService } from '../LocalStorageService';
import { logger } from '../logger';
import { ApiTranslator } from './ApiTranslator';
import { GetPostsParams, LabelsResult, RedditClient, RedditPost } from './types';
export class ApiClient implements RedditClient {
  private static instance: ApiClient;
  private translator = new ApiTranslator();
  private maybeSaved = LocalStorageService.getValue('server');
  private baseUrl = this.maybeSaved ? `http://${this.maybeSaved.url}:${this.maybeSaved.port}` : 'http://localhost:8080';

  private constructor() { }

  public static getInstance(): ApiClient {
    if (!this.instance) {
      this.instance = new ApiClient();
    }

    return this.instance;
  }

  public setBaseUrl(url: string, port: string): void {
    this.baseUrl = `http://${url}:${port}`;
    logger.log(`Api Url is now : ${this.baseUrl} from ${url} at ${port}`);
  }

  public async getPosts({ page = 1, subreddit, author }: GetPostsParams): Promise<readonly RedditPost[]> {
    try {
      logger.debug('Gettings posts for page', page);
      const subredditPage = subreddit ? `&subreddit=${subreddit}` : '';
      const authorPage = author ? `&author=${author}` : '';
      const result = await this.get(`${this.baseUrl}/posts?page=${page}${subredditPage}${authorPage}`);

      logger.debug('Got posts for page', result);
      const posts = (result as any[]).filter(p => p).map(p => this.translator.post(p));
      logger.debug('Translated posts ', page, posts);
      return posts;
    } catch (e) {
      logger.error('Couldn\'t load posts', e);

      return [];
    }
  }

  public async getLabels(id: string): Promise<LabelsResult | undefined> {
    try {
      logger.debug('Gettings labels for post id', id);
      const result = await this.get(`${this.baseUrl}/labels?id=${id}`);

      logger.debug('Got labels', result);
      const labels = this.translator.labels(result);
      logger.debug('Translated posts ', labels);
      return labels;
    } catch (e) {
      logger.error('Couldn\'t load posts', e);

      return undefined;
    }
  }

  private async get(url: string): Promise<unknown> {
    const response = await fetch(url, { mode: 'cors' });
    return await response.json();
  }
}
