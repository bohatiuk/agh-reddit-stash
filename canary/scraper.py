import praw
from prawcore.exceptions import Forbidden


def get_reddit(secret_file="./static/secret.txt"):
    result = {}
    with open(secret_file, "r") as secret:
        for line in secret:
            line = line.strip()
            key, value = line.split("=")
            result[key] = value

    return praw.Reddit(user_agent=result["user_agent"],
                       client_id=result["client_id"],
                       client_secret=result["client_secret"])


def get_subreddits(filename="static/top750subreddits.txt"):
    result = []
    with open(filename, "r") as subreddits:
        for subreddit in subreddits:
            result.append(subreddit.strip())

    return result



def fetch_posts():
    reddit = get_reddit()
    subreddits = get_subreddits()

    posts = []
    for subreddit_name in subreddits:
        try:
            subreddit = reddit.subreddit(subreddit_name)
            for post in subreddit.top("hour", limit=100):
                body = post.selftext
                if not body:
                    body = "none"
                posts.append(
                    [post.id, post.title, subreddit_name, body, post.score, post.num_comments,
                     int(post.created)])
        except Forbidden:
            print(f"Exception for subreddit {subreddit_name}")
            continue
    return posts