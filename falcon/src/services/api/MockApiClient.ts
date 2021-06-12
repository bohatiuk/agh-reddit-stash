import { LabelsResult, RedditClient, RedditPost } from './types';
import { range, shuffle } from 'lodash';
import moment from 'moment';
import { randomColor } from '../../utils/css';

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

  public async getPosts(): Promise<readonly RedditPost[]> {
    return shuffle(range(7).map(i => {
      const x: RedditPost = {
        id: i,
        redditId: 'xxx' + i,
        author: 'some_user3' + i + '32',
        body: i > 3 ? 'Some content of the post' : undefined,
        title: 'Some incredibly interesting ' + i + ' title',
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
    return {
      sentiment: shuffle(['neutral', 'positive', 'negative'])[0],
      category: shuffle(['category1'])[0]
    };
  }
}
