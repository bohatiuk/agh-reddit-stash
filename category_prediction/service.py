from flask import Flask
from flask import request, jsonify
from category_prediction import CategoryClassifier


app = Flask(__name__)
classifier = CategoryClassifier()

@app.route('/posts', methods=['POST', 'GET'])
def handle():
    posts = request.get_json()
    response = {}
    for id, post in posts.items():
        title = post["post_tile"]
        body = post["post_body"]
        subreddit = post["subreddit_name"]
        category = classifier.classify_post(title, body, subreddit)
        response[id] = category
    return jsonify(response)


if __name__ == '__main__':
    app.run(port=8082, debug=True, host='0.0.0.0')

