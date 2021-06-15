import moment from 'moment';
import { randomColor } from '../../utils/css';
import { LabelsResult, RedditPost } from './types';

export class ApiTranslator {
  public post(r: any): RedditPost {
    return {
      id: r[0],
      redditId: r[1],
      title: r[2],
      author: r[3],
      subreddit: r[4],
      body: r[5] === 'none' ? undefined : r[5],
      numComments: r[6],
      score: r[7],
      created: moment(r[8]),
      color: randomColor()
    };
  }

  public labels(r: any, id: string): LabelsResult {
    return {
      sentiment: r[id]['sentiment_label'],
      category: r[id]['category_label']
    };
  }
}
