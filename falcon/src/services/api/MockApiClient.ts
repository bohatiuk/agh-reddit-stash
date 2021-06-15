import { GetPostsParams, LabelsResult, RedditClient, RedditPost } from './types';
import { range, shuffle } from 'lodash';
import moment from 'moment';
import { randomColor } from '../../utils/css';
import { logger } from '../logger';
import { sentence, paragraph } from 'txtgen';

export class MockApiClient implements RedditClient {
  private static instance: MockApiClient;
  private baseUrl = 'localhost:8000';

  private constructor() { }

  public static getInstance(): MockApiClient {
    if (!this.instance) {
      this.instance = new MockApiClient();
    }

    return this.instance;
  }

  public setBaseUrl(url: string, port: string): void {
    this.baseUrl = `${url}:${port}`;
  }

  public async getPosts(params: GetPostsParams): Promise<readonly RedditPost[]> {
    logger.debug('Getting mock posts', params);
    const body = params.author ? params.author : params.subreddit;
    console.log(sentence())
    return shuffle(range(7).map(i => {
      const x: RedditPost = {
        id: i,
        redditId: 'xxx' + i,
        author: sentence().slice(0, 12).replace(/\s/gi, '_').toLowerCase(),
        body: i > 3 ? paragraph() : undefined,
        title: (body || '') + sentence(),
        subreddit: 'design',
        numComments: 6 * i,
        score: 11 * i,
        created: moment(Date.now() - 100000000 * i),
        color: randomColor()
      };

      return x;
    }));
  }

  public async getLabels(id: string): Promise<LabelsResult> {
    logger.debug('Getting mock labels', id);
    return {
      sentiment: shuffle(['neutral', 'positive', 'negative'])[0],
      category: shuffle(['category1'])[0]
    };
  }
}
