import moment from 'moment';
import { RedditPost } from './types';

export class ApiTranslator {
  public post(r: any): RedditPost {
    return {
      id: r[0],
      redditId: r[1],
      title: r[2],
      author: r[3],
      subreddit: r[4],
      body: r[5] === 'none' ? 'No content' : r[5],
      numComments: r[6],
      score: r[7],
      created: moment(r[8])
    };
  }
}
