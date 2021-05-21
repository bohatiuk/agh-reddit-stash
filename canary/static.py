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


def get_subreddits(filename="static/top750subreddits.txt"):
    result = []
    with open(filename, "r") as subreddits:
        for subreddit in subreddits:
            result.append(subreddit.strip())

    return result