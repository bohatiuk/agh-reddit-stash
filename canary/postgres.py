from datetime import datetime, timedelta

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


def insert_posts(batch):
    try:
        conn = _conn()
        cursor = conn.cursor()

        for post in batch:
            id, title, author, subreddit, body, score, num_comments, unix_epoch = post

            # when reddit id is already in db
            cursor.execute('select reddit_id from sp1.subreddits where reddit_id=%s;', (id,))
            row = cursor.fetchone()
            if row is not None:
                continue
            stmt = 'insert into sp1.subreddits (id, reddit_id, title, author, subreddit, body, score, num_comments, ' \
                   'created) ' \
                   'values (default, %s, %s, %s, %s, %s, %s, %s, to_timestamp(%s));'
            cursor.execute(stmt, (id, title, author, subreddit, body, score, num_comments, unix_epoch))

        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        raise RuntimeWarning(error)
    finally:
        cursor.close()

def insert_labels(category_labels, sentiment_labels):
    try:
        conn = _conn()
        cursor = conn.cursor()

        for post in sentiment_labels.keys():
            # when reddit id is already in db
            cursor.execute('select reddit_id from sp1.labels where reddit_id=%s;', (post,))
            row = cursor.fetchone()
            if row is not None:
                continue

            category_label = category_labels[post]
            sentiment_label = sentiment_labels[post]
            stmt = f'insert into sp1.labels (id, reddit_id, sentiment_label, category_label) ' \
                   f'values (default, %s, %s, %s);'
            cursor.execute(stmt, (post, sentiment_label, category_label))

        conn.commit()
    except (Exception, psycopg2.DatabaseError) as error:
        raise RuntimeWarning(error)
    finally:
        cursor.close()

def select_db_labels():
    conn = _conn()
    cursor = conn.cursor()
    result = []

    cursor.execute('select * from sp1.labels;')

    row = cursor.fetchone()
    result.append(row)

    while row is not None:
        row = cursor.fetchone()
        result.append(row)

    result = result[:-1]  # last in none

    cursor.close()

    return result

def select_db_posts():
    conn = _conn()
    cursor = conn.cursor()
    result = []

    cursor.execute('select * from sp1.subreddits;')

    row = cursor.fetchone()
    result.append(row)

    while row is not None:
        row = cursor.fetchone()
        result.append(row)

    result = result[:-1]  # last in none

    cursor.close()

    return result


def select_posts(page, author=None, subreddit=None, start=None, end=None, pagination=100):
    conn = _conn()
    cursor = conn.cursor()

    result = []

    page = int(page)
    assert page >= 1
    offset = (page - 1) * pagination

    if start is None:
        start = datetime.now() - timedelta(days=365)
    if end is None:
        end = datetime.now()

    stmt = 'select * from sp1.subreddits '
    if subreddit is not None:
        stmt += 'where subreddit=%s '
    if author is not None:
        if subreddit is not None:
            stmt += 'and author=%s '
        else:
            stmt += 'where author=%s '

    if subreddit is None and subreddit is None and author is None:
        stmt += 'where created >= %s and created <= %s '
    else:
        stmt += ' and created >= %s and created <= %s '

    stmt += ' offset %s limit %s'
    stmt += ';'

    if subreddit is not None and author is not None:
        cursor.execute(stmt, (subreddit, author, start, end, offset, pagination))
    elif subreddit is not None:
        cursor.execute(stmt, (subreddit, start, end, offset, pagination))
    elif author is not None:
        cursor.execute(stmt, (author, start, end, offset, pagination))
    else:
        cursor.execute(stmt, (start, end, offset, pagination))

    row = cursor.fetchone()
    result.append(row)

    while row is not None:
        row = cursor.fetchone()
        result.append(row)

    result = result[:-1] # last in none

    cursor.close()

    return result

def select_labels(reddit_id):
    conn = _conn()
    cursor = conn.cursor()

    result = {}

    stmt = 'select sentiment_label, category_label from sp1.labels where reddit_id=%s;'
    cursor.execute(stmt, (reddit_id,))

    row = cursor.fetchone()
    result[reddit_id] = {"sentiment_label": row[0], "category_label": row[1]}

    cursor.close()

    return result