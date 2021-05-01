from canary.postgres import _conn
from canary.scraper import fetch_categorized_posts

posts = fetch_categorized_posts()

conn = _conn("../canary/static/postgres.txt")
cursor = conn.cursor()

for post in posts:
    id, title, subreddit, body, score, num_comments, unix_epoch = post
    stmt = f'insert into sp1.classified (id, title, body, category) ' \
           f'values (default, %s, %s, %s)'
    cursor.execute(stmt, (title, body, subreddit))

conn.commit()
cursor.close()
conn.close()

