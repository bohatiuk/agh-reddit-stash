import psycopg2

def _conn(postgres_file="./static/postgres.txt"):
    result = {}
    with open(postgres_file, "r") as secret:
        for line in secret:
            line = line.strip()
            key, value = line.split("=")
            result[key] = value

    conn = psycopg2.connect(
        host=result["host"],
        database=result["database"],
        user=result["user"],
        password=result["password"])

    return conn

def insert(batch):
    conn = _conn()
    cursor = conn.cursor()


    for post in batch:
        id, title, subreddit, body, score, num_comments, unix_epoch = post
        stmt = f'insert into sp1.subreddits (id, reddit_id, title, subreddit, body, score, num_comments, created) ' \
               f'values (default, %s, %s, %s, %s, %s, %s, to_timestamp(%s))'
        cursor.execute(stmt, (id, title, subreddit, body, score, num_comments, unix_epoch))

    conn.commit()
    cursor.close()
    conn.close()
