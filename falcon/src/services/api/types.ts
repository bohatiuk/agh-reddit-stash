export interface ApiTweet {
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
