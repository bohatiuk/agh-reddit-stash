import praw

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


def fetch_categorized_posts():
    reddit = get_reddit()
    subreddits = ["sports", "health", "religion", "politics", "technology", "science", "culture", "travel"]

    posts = []
    for subreddit_name in subreddits:
        try:
            subreddit = reddit.subreddit(subreddit_name)
            for post in subreddit.top(limit=3000):
                body = post.selftext
                if not body:
                    body = "none"
                posts.append(
                    [post.title, body, subreddit_name])
        except Forbidden:
            print(f"Exception for subreddit {subreddit_name}")
            continue
    return posts
