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
    try:
        conn = _conn()
        cursor = conn.cursor()

        for post in batch:
            id, title, author, subreddit, body, score, num_comments, unix_epoch = post
        stmt = f'insert into sp1.subreddits (id, reddit_id, title, author, subreddit, body, score, num_comments, ' \
               f'created) ' \
               f'values (default, %s, %s, %s, %s, %s, %s, %s, to_timestamp(%s))'
        cursor.execute(stmt, (id, title, author, subreddit, body, score, num_comments, unix_epoch))

        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        raise RuntimeWarning(error)
    finally:
        cursor.close()


def select():
    conn = _conn()
    cursor = conn.cursor()
    result = []

    cursor.execute('select * from sp1.subreddits')

    row = cursor.fetchone()
    result.append(row)

    while row is not None:
        row = cursor.fetchone()
        result.append(row)

    result = result[:-1]  # last in none

    cursor.close()

    return result


def select_posts(page, author=None, subreddit=None, pagination=100):
    conn = _conn()
    cursor = conn.cursor()

    result = []

    page = int(page)
    assert page >= 1
    offset = (page - 1) * pagination

    stmt = 'select * from sp1.subreddits '
    if subreddit is not None:
        stmt += 'where subreddit=%s '
    if author is not None:
        if subreddit is not None:
            stmt += 'and author=%s '
        else:
            stmt += 'where author=%s '


    stmt += ' offset %s limit %s'
    stmt += ';'

    if subreddit is not None and author is not None:
        cursor.execute(stmt, (subreddit, author, offset, pagination))
    elif subreddit is not None:
        cursor.execute(stmt, (subreddit, offset, pagination))
    elif author is not None:
        cursor.execute(stmt, (author, offset, pagination))
    else:
        cursor.execute(stmt, (offset, pagination))

    row = cursor.fetchone()
    result.append(row)

    while row is not None:
        row = cursor.fetchone()
        result.append(row)

    result = result[:-1] # last in none

    cursor.close()

    return result

def select_labels(id):
    pass