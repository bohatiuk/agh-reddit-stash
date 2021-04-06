from timeloop import Timeloop
from datetime import timedelta

import postgres
from scraper import fetch_posts

tl = Timeloop()

@tl.job(interval=timedelta(hours=1))
def main():
    postgres.insert(fetch_posts())

tl.start(block=True)