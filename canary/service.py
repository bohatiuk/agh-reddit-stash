import time

from flask import Flask, jsonify, request
from timeloop import Timeloop
from datetime import timedelta

import postgres
from scraper import *

import requests

from servicemap import service_map

from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def hello_world():
    return 'Canary'

@app.route('/subreddits', methods=['GET'])
@cross_origin()
def get_subreddits():
    payload = {"subreddits": fetch_subreddits()}
    return jsonify(payload)

@app.route('/posts', methods=['GET'])
@cross_origin()
def get_posts():
    subreddit = request.args.get("subreddit")
    author = request.args.get("author")
    page = request.args.get("page")
    start = request.args.get("start")
    end = request.args.get("end")

    result = postgres.select_posts(page=page, author=author, start=start, end=end, subreddit=subreddit)

    response = jsonify(result)
    return response

@app.route('/labels', methods=['GET'])
@cross_origin()
def get_labels():
    id = request.args.get("id")

    result = postgres.select_labels(id)

    response = jsonify(result)
    return response

@app.route('/db_posts', methods=['GET'])
@cross_origin()
def db_posts():
    result = postgres.select_db_posts()

    return jsonify(result)

@app.route('/db_labels', methods=['GET'])
@cross_origin()
def db_labels():
    result = postgres.select_db_labels()

    return jsonify(result)


tl = Timeloop()

@tl.job(interval=timedelta(minutes=2))
def periodic_fetch():

    posts = fetch_posts()

    postgres.insert_posts(posts)

    notify(posts)

def notify(posts):
    payload = {}

    svc_map = service_map()
    sentiment_svc = svc_map["sentiment_analysis"]
    category_svc = svc_map["category_prediction"]

    for post in posts:
        post_id, post_title, post_author, subreddit_name, post_body = post[:5]
        payload[post_id] = {"post_title": post_title, "post_author": post_author, "post_body": post_body,
                            "subreddit_name": subreddit_name}

    sentiment_resp = requests.post("http://" + sentiment_svc["host"] + ":" + sentiment_svc["port"] +
                                  sentiment_svc["endpoints"]["posts"], json=payload)


    category_resp = requests.post("http://" + category_svc["host"] + ":" + category_svc["port"] +
                                 category_svc["endpoints"]["posts"], json=payload)



    postgres.insert_labels(category_labels=category_resp.json(), sentiment_labels=sentiment_resp.json())


if __name__ == '__main__':
    # wait for db service to be up for 10 seconds
    time.sleep(10)

    tl.start()

    app.run(port=8080, debug=True, host='0.0.0.0')

    tl.stop()






