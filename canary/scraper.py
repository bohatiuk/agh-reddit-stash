from static import *
from prawcore.exceptions import Forbidden

reddit = get_reddit()
subreddits = get_subreddits()


def fetch_posts():
    posts = []

    for subreddit_name in subreddits:
        try:
            subreddit = reddit.subreddit(subreddit_name)
            for post in subreddit.top("hour", limit=100):
                body = post.selftext
                if not body:
                    body = "none"
                author = post.author
                if author is None:
                    author = '[deleted]'
                else:
                    author = author.name
                posts.append(
                    [post.id, post.title, author, subreddit_name, body, post.score, post.num_comments,
                     int(post.created)])
        except Forbidden:
            print(f"Exception for subreddit {subreddit_name}")
            continue

    return posts

def fetch_subreddits():
    return subreddits