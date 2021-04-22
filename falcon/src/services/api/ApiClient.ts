import { ApiTweet } from './types';
import { range, shuffle } from 'lodash';

export class ApiClient {
  private static instance: ApiClient;

  private constructor() { }

  public static getInstance(): ApiClient {
    if (!this.instance) {
      this.instance = new ApiClient();
    }

    return this.instance;
  }

  public async getTweets(): Promise<ApiTweet[]> {
    return shuffle(range(7).map(i => {
      return {
        id: 'raeanonid' + i,
        author: {
          userName: 'elonmusk',
          firstName: 'Elon',
          lastName: 'Musk'
        },
        content: 'Please consider moving to Starbase or greater Brownsville/South Padre area in Texas & encourage friends to do so! '
          + 'SpaceX’s hiring needs for engineers, technicians, builders & essential support personnel of all kinds are growing rapidly.',
        timestamp: Date.now() - 60000000 * i,
        url: 'https://twitter.com/elonmusk/status/1376901399867441156'
      };
    }));
  }
}
