import psycopg2

from servicemap import service_map

def _conn():
    svc_map = service_map()

    conn = psycopg2.connect(
        host=svc_map["db"]["host"],
        database=svc_map["db"]["db_name"],
        user=svc_map["db"]["user"],
        password=svc_map["db"]["password"])

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
